import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Councils from "../councils";

const Counties = (props) => {
    let counties = (_.isNil(props.counties))
        ? []
        : props.counties.map(county => {
            return (
                <div key={"county_id_" + county.id}>
                    <div className="row">
                        <div className="col-md-12">
                            <h5 className="mt-3 mb-3">Νομός {county.name}</h5>
                        </div>
                    </div>
                    <Councils councils={county.councils}/>
                </div>
            )
        });

    return counties;
};

Counties.propTypes = {
    counties: PropTypes.array
};

Counties.defaultProps = {
    counties: []
};

export default Counties;