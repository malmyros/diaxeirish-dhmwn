import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import api from '../../../../api';

class SignupForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            formErrors: {firstName: '', lastName: '', email: '', password: ''},
            formAccurateDescriptions: {
                firstName: 'Το όνομα χρήστη είναι έγκυρο',
                lastName: 'Το επώνυμο χρήστη είναι έγκυρο',
                email: 'Το email χρήστη είναι έγκυρο',
                password: 'Ο κωδικός χρήστη είναι έγκυρος'
            },
            firstNameValid: false,
            lastNameValid: false,
            emailValid: false,
            passwordValid: false
        };

        this.handleInput = this.handleInput.bind(this);
        this.errorClass = this.errorClass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => {
                this.validateField(name, value)
            });
    }

    validateField(fieldName, value) {
        let {formErrors, firstNameValid, lastNameValid, emailValid, passwordValid} = this.state;

        switch (fieldName) {
            case 'firstName':
                firstNameValid = value.length >= 3;
                formErrors.firstName = firstNameValid
                    ? ''
                    : 'Το όνομα χρήστη πρέπει να έχει τουλάχιστον τρείς χαρακτήρες';
                break;
            case 'lastName':
                lastNameValid = value.length >= 3;
                formErrors.lastName = lastNameValid
                    ? ''
                    : 'Το επίθετο χρήστη πρέπει να έχει τουλάχιστον τρείς χαρακτήρες';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                formErrors.email = emailValid
                    ? ''
                    : 'Το email δεν ειναι έγκυρο';
                break;
            case 'password':
                passwordValid = value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/i);
                formErrors.password = passwordValid
                    ? ''
                    : 'Ο κωδικός πρέπει να έχει τουλάχιστον 8 χαρακτήρες και να έχει ενα γράμμα με κεφαλαία, έναν αριθμό και έναν ειδικό χαρακτήρα';
                break;
            default:
                break;
        }

        this.setState({
            formErrors: formErrors,
            firstNameValid: firstNameValid,
            lastNameValid: lastNameValid,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm)
    }

    validateForm() {
        let {firstNameValid, lastNameValid, emailValid, passwordValid} = this.state;
        this.setState({
            isFormValid: firstNameValid
            && lastNameValid
            && emailValid
            && passwordValid
        })
    }

    errorClass(error) {
        const {isFormValid} = this.state;
        let isErrorLengthValid = error.length === 0;

        return isErrorLengthValid
            ? isErrorLengthValid && isFormValid
                ? 'is-valid'
                : ''
            : 'is-invalid';
    }

    handleSubmit(e) {
        e.preventDefault();

        const {firstName, lastName, email, password} = this.state;
        api.post("/users", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }).then((response) => {

            if (response.ok) {
                this.props.onRegistration(true);
            }
        });
    }

    render() {
        let {formErrors, formAccurateDescriptions} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col">
                        <label htmlFor="firstName">Όνομα</label>
                        <input id="firstName"
                               name="firstName"
                               type="text"
                               value={this.state.firstName}
                               onChange={this.handleInput}
                               className={`form-control ${this.errorClass(formErrors.firstName)}`}
                               placeholder=""
                               autoComplete="given-name"/>
                        <div className="invalid-feedback">
                            {formErrors.firstName}
                        </div>
                        <div className="valid-feedback">
                            {formAccurateDescriptions.firstName}
                        </div>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="lastName">Επώνυμο</label>
                        <input id="lastName"
                               name="lastName"
                               type="text"
                               value={this.state.lastName}
                               onChange={this.handleInput}
                               className={`form-control ${this.errorClass(formErrors.lastName)}`}
                               placeholder=""
                               autoComplete="family-name"/>
                        <div className="invalid-feedback">
                            {formErrors.lastName}
                        </div>
                        <div className="valid-feedback">
                            {formAccurateDescriptions.lastName}
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email"
                           name="email"
                           type="email"
                           value={this.state.email}
                           onChange={this.handleInput}
                           className={`form-control ${this.errorClass(formErrors.email)}`}
                           placeholder=""
                           autoComplete="email"/>
                    <div className="invalid-feedback">
                        {formErrors.email}
                    </div>
                    <div className="valid-feedback">
                        {formAccurateDescriptions.email}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Δημιουργία Κωδικού</label>
                    <input id="password"
                           name="password"
                           type="password"
                           value={this.state.password}
                           onChange={this.handleInput}
                           className={`form-control ${this.errorClass(formErrors.password)}`}
                           placeholder=""
                           autoComplete="password"/>
                    <div className="invalid-feedback">
                        {formErrors.password}
                    </div>
                    <div className="valid-feedback">
                        {formAccurateDescriptions.password}
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit"
                            className="btn btn-primary btn-block"
                            disabled={!this.state.isFormValid}>
                        Εγγραφή
                    </button>
                </div>
                <div className="text-center">
                    <small className="text-muted">
                        Κάνοντας κλικ στο κουμπί "Εγγραφή", επιβεβαιώνετε ότι αποδέχεστε τούς <br/>
                        <Link to={"/oroi-xrhshs"}>όρους χρήσης</Link>
                        και την <Link to={"/politikh-aporhtou"}>πολιτική απορρήτου</Link> μας.
                    </small>
                </div>
            </form>
        );
    }
}

SignupForm.propTypes = {
    onRegistration: PropTypes.func.isRequired
};

export default SignupForm;