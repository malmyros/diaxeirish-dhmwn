import React, {Component} from 'react';
import Layout from "../../components/layout";
import Announcement from "../../components/announcement";
import PublicAuthorityPersonList from "../../components/PublicAuthorityPersonList";
import {Route} from "react-router-dom";
import SidebarLink from "../../components/sidebarLink";
import api from '../../api';
import CouncilProfile from "../../components/councilProfile";

class Council extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {}
        };
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        api.get("/councils/" + params.id)
            .then((response) => {
                this.setState({
                    data: response.data
                });
            })
            .catch((error) => {
                console.error("Error", error);
            });
    }

    render() {
        const { name, description } = this.state.data;
        const baseUrl = this.props.match.url;
        let urls = [
            {name: "Δήμος " + name, to: baseUrl},
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
            <Layout title={name} className="bg-light">
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-md-12">
                            <CouncilProfile name={name} description={description}/>
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
                                    <p>Δήμος {name}</p>
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