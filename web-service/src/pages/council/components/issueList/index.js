import React from 'react';
import Issue from "../issue";

const IssueList = (props) => {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <Issue name="Αλμυρός Μιχάλης"
                       shortDescription="Τοποθέτηση κάδων ανακύκλωσης στην 9η στάση"
                       upVotes={100}
                       downVotes={20}/>
            </li>
            <li className="list-group-item">
                <Issue name="Κατόπης Μανώλης"
                       shortDescription="Πρόβλημα με αγωγό νερού στο 5ο Δημοτικό σχολείο"
                       upVotes={66}
                       downVotes={34}/>
            </li>
            <li className="list-group-item">
                <Issue name="Γιώργος Γιώργος"
                       shortDescription="Δυσοσμία απο απορήματα στο κέντρο"
                       upVotes={44}
                       downVotes={18}/>
            </li>
        </ul>
    )
};

export default IssueList;