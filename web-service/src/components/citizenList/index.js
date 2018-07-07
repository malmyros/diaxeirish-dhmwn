import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Citizen from "../citizen";

const citizens = [
    {
        id: 0,
        firstName: "Μάρκου",
        lastName: "Δημήτριος"
    },
    {
        id: 1,
        firstName: "Τούντας",
        lastName: "Αντώνιος"
    },
    {
        id: 2,
        firstName: "Τσάκαλη",
        lastName: "Ελένη"
    },
    {
        id: 3,
        firstName: "Μπέκας",
        lastName: "Γεώργιος"
    },
    {
        id: 4,
        firstName: "Ζήση",
        lastName: "Μαρία"
    },
    {
        id: 5,
        firstName: "Ραφτοπούλου",
        lastName: "Άννα"
    },
];

const CitizenList = (props) => {
    return (_.isNil(citizens))
        ? []
        : citizens.map(citizen => {
            return <Citizen key={"public-citizen-id-" + citizen.id}
                            {...citizen}/>
        });
};

CitizenList.propTypes = {
    publicAuthorityPersons: PropTypes.array
};

CitizenList.defaultProps = {
    publicAuthorityPersons: []
};

export default CitizenList;