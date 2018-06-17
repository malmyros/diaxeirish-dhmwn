import React from 'react';
import PropTypes from 'prop-types';
import EmailLink from "../emailLink";
import PhoneLink from "../phoneLink";

const PublicAuthorityPerson = (props) => {
    const {firstName, lastName, position, email, phoneNumber} = props;

    return (
        <div className="col-md-4">
            <div className="card d-flex align-items-center mb-3 p-3 box-shadow text-muted">
                <div className="m-3 bg-light border" style={{
                    height: "120px",
                    width: "120px",
                }}/>
                <strong className="text-gray-dark">{firstName} {lastName}</strong>
                <div>{position}</div>
                <EmailLink email={email}/>
                <PhoneLink phoneNumber={phoneNumber}/>
                <div className="mt-2 mb-2">Συνελεύσεις 4/14</div>
                <div className="col-md-12">
                    <div className="progress" style={{height: "0.5rem"}}>
                        <div className="progress-bar"
                             role="progressbar"
                             style={{width: "25%"
                             }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

PublicAuthorityPerson.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    position: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string
};

PublicAuthorityPerson.defaultProps = {};

export default PublicAuthorityPerson;