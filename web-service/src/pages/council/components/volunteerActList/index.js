import React from 'react';
import VolunteerAct from "../volunteerAct";

const VolunteerActList = (props) => {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <VolunteerAct name="Αλμυρός Μιχάλης"
                              shortDescription="Ζητούνται άτομα για τον καθαρισμό της παραλίας"
                              volunteerCount={344}/>
            </li>
            <li className="list-group-item">
                <VolunteerAct name="Κατόπης Μανώλης"
                              shortDescription="Δενδροφύτευση στον Άγιο Γίαννη"
                              volunteerCount={168}/>
            </li>
            <li className="list-group-item">
                <VolunteerAct name="Γιώργος Γιώργος"
                              shortDescription="Καθαρισμός ποδηλατόδρομου από κατολήσθηση"
                              volunteerCount={47}/>
            </li>
        </ul>
    )
};

export default VolunteerActList;