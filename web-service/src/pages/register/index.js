import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import SignupForm from "./components/form";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRegistered: null,
        };
        this.onRegistration = this.onRegistration.bind(this);
    }

    onRegistration(isRegistered) {
        this.setState({isRegistered: isRegistered});
    }

    render() {
        const {isRegistered} = this.state;

        let registrationBlock = isRegistered
            ? (<div className="card mt-4 mb-4">
                <header className="card-header text-center">
                    <h4 className="card-title mt-2">Επιτυχία</h4>
                </header>
                <article className="card-body text-center">
                    Η εγγραφή σας ολοκληρώθηκε με επιτυχία. Στην συνέχεια Θα παραλάβετε ένα
                    email με έναν σύνδεσμο για επιβεβαιώσετε τον λογαριασμό σας.
                </article>
                <div className="border-top card-body text-center">
                    <Link to={"/"} className="btn btn-primary btn-block">Επιστροφή στην αρχική</Link>
                </div>
            </div>)
            : (<div className="card mt-4 mb-4">
                <header className="card-header text-center">
                    <h4 className="card-title mt-2">Εγγραφή</h4>
                </header>
                <article className="card-body">
                    <SignupForm onRegistration={this.onRegistration}/>
                </article>
                <div className="border-top card-body text-center">Έχετε ήδη έναν λογαριασμό? <Link
                    to={"/login"}>Σύνδεση</Link></div>
            </div>);

        return (
            <div className="container">
                <Helmet>
                    <title>Διαχείριση Δήμων | Εγγραφή</title>
                </Helmet>
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center mt-4">
                        <Link to={"/"}><h2>Διαχείριση Δήμων</h2></Link>
                    </div>
                    <div className="col-md-6">
                        {registrationBlock}
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;