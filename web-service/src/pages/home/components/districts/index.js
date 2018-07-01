import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Councils from "../councils";

const Districts = (props) => {
    let districts = (_.isNil(props.districts))
        ? []
        : props.districts.map(district => {
            return (
                <div key={"district_id_" + district.id}>
                    <div className="row">
                        <div className="col-md-12">
                            <h5 className="mt-3 mb-3">Περιφέρεια {district.name}</h5>
                        </div>
                    </div>
                    <Councils councils={district.councils}/>
                </div>
            )
        });

    return districts;
};

Districts.propTypes = {
    districts: PropTypes.array
};

Districts.defaultProps = {
    counties: []
};

export default Districts;