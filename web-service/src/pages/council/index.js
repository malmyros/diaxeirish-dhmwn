import React, {Component} from 'react';
import Layout from "../../components/layout";
import Announcement from "../../components/announcement";
import PublicAuthorityPersonList from "../../components/PublicAuthorityPersonList";
import {Route} from "react-router-dom";
import SidebarLink from "../../components/sidebarLink";
import api from '../../api';
import CouncilProfile from './components/councilProfile'
import Issues from "./components/issues";
import VolunteerActs from "./components/volunteerActs";
import CitizenList from "../../components/citizenList";
import FinancialDataTable from "./components/financialDataTable";
import {CartesianGrid, Legend, Line, LineChart, XAxis, YAxis} from "recharts";

class Council extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {}
        };
    }

    componentDidMount() {
        const {match: {params}} = this.props;

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
        let {name, description} = this.state.data;
        name = "Δήμος " + name;

        const baseUrl = this.props.match.url;
        let urls = [
            {name: name, to: baseUrl},
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

        const data = [
            {name: 'Ιανουάριος', uv: 4000, pv: 2400, kd: 1990, amt: 2400},
            {name: 'Φεβρουάριος', uv: 3000, pv: 1398, kd: 2490, amt: 2210},
            {name: 'Μάρτιος', uv: 2000, pv: 9800, kd: 1600, amt: 2290},
            {name: 'Απρίλιος', uv: 2780, pv: 3908, kd: 500, amt: 2000},
            {name: 'Μάιος', uv: 1890, pv: 4800, kd: 3189, amt: 2181},
            {name: 'Ιούνιος', uv: 2390, pv: 3800, kd: 5890, amt: 2500},
            {name: 'Ιούλιος', uv: 3490, pv: 4300, kd: 4917, amt: 2100},
        ];

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
                                    <strong className="text-gray-dark">{name}</strong>
                                )}/>
                                <Route path={"/dhmos/:id/dhmotikh-arxh"} render={() => (
                                    <PublicAuthorityPersonList/>
                                )}/>
                                <Route path={"/dhmos/:id/dhmotes"} render={() => (
                                    <CitizenList/>
                                )}/>
                                <Route path={"/dhmos/:id/ethelontismos"} render={() => (
                                    <VolunteerActs/>
                                )}/>
                                <Route path={"/dhmos/:id/zhthmata"} render={() => (
                                    <Issues/>
                                )}/>
                                <Route path={"/dhmos/:id/oikonomika-stoixeia"} render={() => (
                                    <div className="col-md-12">
                                        <div className="card p-3">
                                            <h4 className="mb-4">Απολογισμός</h4>
                                            <div
                                                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-2">
                                                <button
                                                    className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                                    Ιούλιος 2018
                                                </button>
                                                <div className="btn-toolbar mb-2 mb-md-0">
                                                    <div className="btn-group mr-2">
                                                        <button
                                                            className="btn btn-sm btn-outline-secondary">Κοινοποιήστε
                                                        </button>
                                                        <button className="btn btn-sm btn-outline-secondary">Εξαγωγή
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <LineChart className="mt-3 mb-3" width={780} height={300} data={data}>
                                                <Legend verticalAlign="top" height={48}/>
                                                <XAxis dataKey="name"/>
                                                <YAxis/>
                                                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                                                <Line name="Προϋπολογισθέντα" type="monotone" dataKey="pv"
                                                      stroke="#8884d8"/>
                                                <Line name="Βεβαιωθέντα" type="monotone" dataKey="uv"
                                                      stroke="#82ca9d"/>
                                                <Line name="Εισπραχθέντα" type="monotone" dataKey="kd"
                                                      stroke="#17a2b8"/>
                                            </LineChart>
                                            <FinancialDataTable/>
                                        </div>
                                    </div>
                                )}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Council;