import React, {Component} from 'react';
import Layout from "../../components/layout";
import Announcement from "../../components/announcement";
import PublicAuthorityPersonList from "../../components/PublicAuthorityPersonList";
import {Link} from "react-router-dom";

class Council extends Component {
    render() {
        const baseUrl = this.props.location['pathname'];
        const arxikhSelidaURL = baseUrl;
        const dhmotikiArxiURL = baseUrl + "/dhmotik-arxi";

        return (
            <Layout title="Δήμος Αχαρνών" className="bg-light">
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card box-shadow p-3 d-flex align-items-center">
                                <div className="m-3 bg-light border" style={{
                                    height: "120px",
                                    width: "120px",
                                }}/>
                                <div className="col-md-6 mx-auto text-center">
                                    <strong className="text-gray-dark">Δήμος Σπάτων - Αρτέμιδος</strong>
                                    <p className="text-muted">Καλωσορίσατε στο διαδικτυακό τόπο του Δήμου Σπάτων –
                                        Αρτέμιδας, που ως ενιαίος πλέον χώρος, καλείται να δημιουργήσει μεγαλύτερα
                                        περιθώρια για ανάπτυξη και κοινωνική πρόοδο.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-4 pb-4">
                    <div className="row">
                        <div className="col-md-3">
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <Link to={arxikhSelidaURL}>
                                        <small className="text-muted">Δήμος Σπάτων - Αρτέμιδος</small>
                                    </Link>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <Link to={dhmotikiArxiURL}>
                                        <small className="text-muted">Δημοτική αρχή</small>
                                    </Link>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <small className="text-muted">Δημότες</small>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <small className="text-muted">Εθελοντισμός</small>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <small className="text-muted">Ζητήματα</small>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <small className="text-muted">Οικονομικά Στοιχεία</small>
                                </li>
                            </ul>

                            <Announcement name={"Επόμενη συνέλευση"}
                                          description={"Πέμπτη 7 Ιούνιου 2018 18:30 π.μ"}
                                          to={"/"}/>

                            <Announcement name={"Επόμενη εκδήλωση"}
                                          description={"Δευτέρα 6 Ιούνιου 2018 18:30 π.μ"}
                                          to={"/"}/>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                <PublicAuthorityPersonList/>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
};

export default Council;