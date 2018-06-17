import React from 'react';
import PropTypes from 'prop-types';

const EmailLink = (props) => (
    <a href={"mailto:" + props.email}>{props.email}</a>
);

EmailLink.propTypes = {
    email: PropTypes.string
};

EmailLink.defaultProps = {
    email: ""
};

export default EmailLink;