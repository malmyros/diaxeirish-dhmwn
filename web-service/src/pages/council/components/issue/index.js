import React from 'react';
import PropTypes from 'prop-types';
import './issue.css'

const Issue = (props) => {
    const {name, shortDescription, upVotes, downVotes} = props;
    return (
        <div className="issue">
            <div className="media text-muted">
                <div className="media-body mb-0 small lh-125">
                    <strong className="d-block text-gray-dark">{name}</strong>
                    <div className="description d-flex justify-content-between align-items-center">
                        <p>{shortDescription}</p>
                        <div>
                            <span className="mr-2 text-success">+ {upVotes}</span>
                            <span className="text-danger">- {downVotes}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

Issue.propTypes = {
    name: PropTypes.string,
    shortDescription: PropTypes.string,
    upVotes: PropTypes.number,
    downVotes: PropTypes.number
};

Issue.defaultProps = {
    name: "Όνομα",
    shortDescription: "Περιγραφή",
    upVotes: 0,
    downVotes: 0
};

export default Issue;