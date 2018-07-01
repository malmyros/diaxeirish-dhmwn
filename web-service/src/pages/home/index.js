import React, {Component} from 'react';
import Layout from "../../components/layout";
import {Link} from "react-router-dom";
import Counties from "./components/districts";
import api from '../../api';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            districts: []
        };
    }

    componentDidMount() {
        api.get("/districts")
            .then((response) => {
                this.setState({
                    districts: response.data
                });
            });
    }

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
                        <Counties districts={this.state.districts}/>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Home;