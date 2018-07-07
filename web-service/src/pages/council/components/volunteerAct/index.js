import React from 'react';
import PropTypes from 'prop-types';
import './volunteerAct.css'

const VolunteerAct = (props) => {
    const {name, shortDescription, volunteerCount} = props;
    return (
        <div className="volunteer-act">
            <div className="media text-muted">
                <div className="media-body mb-0 small lh-125">
                    <strong className="d-block text-gray-dark">{name}</strong>
                    <div className="description d-flex justify-content-between align-items-center">
                        <p>{shortDescription}</p>
                        <div>
                            <span className="badge badge-primary mr-2 p-1">{volunteerCount}</span>
                            <span>εθελοντές</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

VolunteerAct.propTypes = {
    name: PropTypes.string,
    shortDescription: PropTypes.string,
    volunteerCount: PropTypes.number
};

VolunteerAct.defaultProps = {
    name: "Όνομα",
    shortDescription: "Περιγραφή",
    volunteerCount: 0
};

export default VolunteerAct;