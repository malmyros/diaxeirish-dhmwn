import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import PublicAuthorityPerson from "../publicAuthorityPerson";

const publicAuthorityPersons = [
    {
        id: 0,
        firstName: "Μάρκου",
        lastName: "Δημήτριος",
        position: "Δήμαρχος",
        email: "dimitris.markou@yahoo.com",
        phoneNumber: "697 9007 607"
    },
    {
        id: 1,
        firstName: "Τούντας",
        lastName: "Αντώνιος",
        position: "Δημοτική Θέση",
        email: "antonistountas@gmail.com",
        phoneNumber: "697 7640 650"
    },
    {
        id: 2,
        firstName: "Τσάκαλη",
        lastName: "Ελένη",
        position: "Δημοτική Θέση",
        email: "tsakali.eleni@yahoo.com",
        phoneNumber: "697 9007 607"
    },
    {
        id: 3,
        firstName: "Μπέκας",
        lastName: "Γεώργιος",
        position: "Δημοτική Θέση",
        email: "mpekas.georgios@yahoo.com",
        phoneNumber: "697 9007 607"
    },
    {
        id: 4,
        firstName: "Ζήση",
        lastName: "Μαρία",
        position: "Δημοτική Θέση",
        email: "zhsh.maria@yahoo.com",
        phoneNumber: "697 9007 607"
    },
    {
        id: 5,
        firstName: "Ραφτοπούλου",
        lastName: "Άννα",
        position: "Δημοτική Θέση",
        email: "raftopoulou.anna@yahoo.com",
        phoneNumber: "697 9007 607"
    },
];

const PublicAuthorityPersonList = (props) => {
    return (_.isNil(publicAuthorityPersons))
        ? []
        : publicAuthorityPersons.map(publicAuthorityPerson => {
            return <PublicAuthorityPerson key={"public-authority-person-id-" + publicAuthorityPerson.id}
                                          {...publicAuthorityPerson}/>
        });
};

PublicAuthorityPersonList.propTypes = {
    publicAuthorityPersons: PropTypes.array
};

PublicAuthorityPersonList.defaultProps = {
    publicAuthorityPersons: []
};

export default PublicAuthorityPersonList;