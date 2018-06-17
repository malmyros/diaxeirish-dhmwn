import React, {Component} from 'react';
import Layout from "../../components/layout";
import Announcement from "../../components/announcement";
import PublicAuthorityPersonList from "../../components/PublicAuthorityPersonList";
import {Route} from "react-router-dom";
import SidebarLink from "../../components/sidebarLink";

class Council extends Component {
    render() {
        const baseUrl = this.props.match.url;
        let urls = [
            {name: "Δήμος Σπάτων - Αρτέμιδος", to: baseUrl},
            {name: "Δημοτική αρχή", to: baseUrl + "/dhmotikh-arxh"},
            {name: "Δημότες", to: baseUrl + "/dhmotes"},
            {name: "Εθελοντισμός", to: baseUrl + "/ethelontismos"},
            {name: "Ζητήματα", to: baseUrl + "/zhthmata"},
            {name: "Οικονομικά στοιχεία", to: baseUrl + "/oikonomika-stoixeia"}
        ];

        urls = urls.map(url => {
            return (
                <SidebarLink key={url.to} {...url}/>
            )
        });

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
                                {urls}
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
                                <Route exact path={"/dhmos/:id"} render={() => (
                                    <p>Δήμος Σπατών - Αρτέμιδος</p>
                                )}/>
                                <Route path={"/dhmos/:id/dhmotikh-arxh"} render={() => (
                                    <PublicAuthorityPersonList/>
                                )}/>
                                <Route path={"/dhmos/:id/dhmotes"} render={() => (
                                    <p>Δημότες</p>
                                )}/>
                                <Route path={"/dhmos/:id/ethelontismos"} render={() => (
                                    <p>Εθελοντισμός</p>
                                )}/>
                                <Route path={"/dhmos/:id/zhthmata"} render={() => (
                                    <p>Ζητήματα</p>
                                )}/>
                                <Route path={"/dhmos/:id/oikonomika-stoixeia"} render={() => (
                                    <p>Οικονομικά στοιχεία</p>
                                )}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
};

export default Council;