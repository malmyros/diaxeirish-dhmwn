import React from 'react';
import PropTypes from 'prop-types';

const CouncilProfile = (props) => {
    const {name, description} = props;

    return (
        <div className="card box-shadow p-3 d-flex align-items-center">
            <div className="m-3 bg-light border" style={{
                height: "120px",
                width: "120px",
            }}/>
            <div className="col-md-6 mx-auto text-center">
                <strong className="text-gray-dark">Δήμος {name}</strong>
                <p className="text-muted">{description}</p>
            </div>
        </div>
    )
};

CouncilProfile.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string
};

CouncilProfile.defaultProps = {
    name: "",
    description: "Εδώ μπορείτε να βρείτε χρήσιμες πληροφορίες σχετικά με τον δήμο.",
};

export default CouncilProfile;