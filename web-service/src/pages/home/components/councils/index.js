import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash'
import Council from "../council";

const Councils = (props) => {
    let councils = _.isNil(props.councils)
        ? []
        : props.councils.map(council => {
            return (
                <div key={"council_id_" + council.id} className="col-md-4">
                    <Council {...council}/>
                </div>
            );
        });

    return (
        <div className="row">
            {councils}
        </div>
    );
};

Councils.propTypes = {
    councils: PropTypes.array
};

Councils.defaultProps = {
    councils: []
};

export default Councils;

