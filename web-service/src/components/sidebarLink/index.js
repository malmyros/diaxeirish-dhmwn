import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const SidebarLink = (props) => (
    <li className="list-group-item d-flex justify-content-between lh-condensed">
        <Link to={props.to}>
            <small className="text-muted">{props.name}</small>
        </Link>
    </li>
);

SidebarLink.propTypes = {
    name: PropTypes.string,
    to: PropTypes.string
};

SidebarLink.propTypes = {
    name: "",
    to: "/"
};

export default SidebarLink;