import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Announcement = (props) => (
    <div className="card mb-3 pl-3 pr-3 box-shadow text-muted pt-3">
        <div className="media-body pb-3 mb-0 small lh-125">
            <strong className="text-gray-dark">{props.name}</strong>
            <div className="d-block">{props.description}</div>
            <div className="d-flex flex-row justify-content-end">
                <Link to={props.to}>Περισσότερα</Link>
            </div>
        </div>
    </div>
);

Announcement.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    to: PropTypes.string
};

Announcement.defaultProps = {
    name: "",
    description: "",
    to: "/"
};

export default Announcement;