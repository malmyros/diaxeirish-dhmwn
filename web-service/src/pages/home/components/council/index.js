import React from 'react';
import PropTypes from 'prop-types';

import {Link} from "react-router-dom";
import './council.css'
import locationCity from './location_city.svg';

const Council = (props) => {
    let to = "/dhmos/" + props.id;

    return (
        <Link to={to} className="council">
            <div className="card mb-3 pl-3 pr-3 box-shadow">
                <div className="media text-muted pt-3">
                    <img src={locationCity} className="mr-2" height="36px" width="36px" alt="Δήμος"/>
                    <div className="media-body mb-0 small lh-125">
                        <strong className="d-block text-gray-dark">Δήμος {props.name}</strong>
                        <div className="d-flex justify-content-between align-items-center">
                            <p>{props.issueCount} Ζητήματα</p>
                            <p>{props.volunteerCount} Εθελοντές</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

Council.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    name: PropTypes.string,
    issueCount: PropTypes.number,
    volunteerCount: PropTypes.number
};

Council.defaultProps = {
    id: 0,
    name: "Δήμος",
    issueCount: 0,
    volunteerCount: 0
};

export default Council;