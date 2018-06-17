import React from 'react';
import PropTypes from 'prop-types';

const PhoneLink = (props) => (
    <a href={"tel:" + props.phoneNumber}>{props.phoneNumber}</a>
);

PhoneLink.propTypes = {
    phoneNumber: PropTypes.string
};

PhoneLink.defaultProps = {
    phoneNumber: ""
};

export default PhoneLink;