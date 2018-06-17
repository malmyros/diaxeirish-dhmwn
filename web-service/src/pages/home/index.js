import React, {Component} from 'react';
import Layout from "../../components/layout";
import {Link} from "react-router-dom";
import Counties from "./components/counties";

function randomNumber() {
    return Math.floor((Math.random() * 10) + 1);
}

const counties = [
    {
        id: 0,
        name: "Αττικής",
        councils: [
            {
                id: 0,
                name: "Αχαρνών",
                issueCount: randomNumber(),
                volunteerCount: randomNumber()
            },
            {
                id: 1,
                name: "Βάρης - Βούλας - Βουλιαγμένης",
                issueCount: randomNumber(),
                volunteerCount: randomNumber()
            },
            {
                id: 2,
                name: "Διονύσου",
                issueCount: randomNumber(),
                volunteerCount: randomNumber()
            },
            {
                id: 3,
                name: "Κρωπίας",
                issueCount: randomNumber(),
                volunteerCount: randomNumber()
            },
            {
                id: 4,
                name: "Λαυρεωτικής",
                issueCount: randomNumber(),
                volunteerCount: randomNumber()
            },
            {
                id: 5,
                name: "Μαραθώνος",
                issueCount: randomNumber(),
                volunteerCount: randomNumber()
            },
            {
                id: 6,
                name: "Μαρκοπούλου Μεσογαίας",
                issueCount: randomNumber(),
                volunteerCount: randomNumber()
            },
            {
                id: 7,
                name: "Παιανίας",
                issueCount: randomNumber(),
                volunteerCount: randomNumber()
            },
            {
                id: 8,
                name: "Παλλήνης",
                issueCount: randomNumber(),
                volunteerCount: randomNumber()
            },
            {
                id: 9,
                name: "Ραφήνας - Πικερμίου",
                issueCount: randomNumber(),
                volunteerCount: randomNumber()
            },
            {
                id: 10,
                name: "Σαρωνικού",
                issueCount: randomNumber(),
                volunteerCount: randomNumber()
            },
            {
                id: 11,
                name: "Σπάτων - Αρτέμιδος",
                issueCount: randomNumber(),
                volunteerCount: randomNumber()
            },
            {
                id: 12,
                name: "Ωρωπού",
                issueCount: randomNumber(),
                volunteerCount: randomNumber()
            }
        ]
    }
];


class Home extends Component {
    render() {
        return (
            <Layout title="Διαχείριση Δήμων | Ό ποιό έυκολος τρόπος για να γίνεται ενεργός πολίτης" description="Διαχειριστείτε τα ζητήματα του δήμου σας εύκολα και γρήγορα">
                <div className="position-relative overflow-hidden p-3 p-md-5 text-center bg-light border-bottom">
                    <div className="col-md-6 p-lg-5 mx-auto my-5">
                        <h1 className="display-5 font-weight-normal">Διαχείριση Δήμων</h1>
                        <p className="lead font-weight-normal">
                            Αναζητήστε ή καταχωρήστε ζήτηματα και εθελοντικές εργασίες
                            σχετικά με τον δήμο σας.
                        </p>
                        <Link to={"/pws-na-ginw-energos-politis"} className="btn btn-outline-primary">
                            Πώς μπορώ να γίνω ενεργός πολίτης
                        </Link>
                    </div>
                    <div className="product-device box-shadow d-none d-md-block"/>
                    <div className="product-device product-device-2 box-shadow d-none d-md-block"/>
                </div>
                <div className="album py-2">
                    <div className="container">
                        <Counties counties={counties}/>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Home;