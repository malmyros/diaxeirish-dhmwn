import React from 'react';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

const Login = () => (
    <div className="container">
        <Helmet>
            <title>Διαχείριση Δήμων | Σύνδεση</title>
        </Helmet>
        <div className="row justify-content-center">
            <div className="col-md-12 text-center mt-4">
                <Link to={"/"}><h2>Διαχείριση Δήμων</h2></Link>
            </div>
            <div className="col-md-6">
                <div className="card mt-4 mb-4">
                    <header className="card-header text-center">
                        <h4 className="card-title mt-2">Σύνδεση</h4>
                    </header>
                    <article className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Ηλεκτρονική Διεύθυνση</label>
                                <input id="email" type="email" className="form-control" placeholder=""/>
                            </div>
                            <div className="form-group">
                                <Link to={"/forgot-password"} className="float-right" href="#">Ξέχασα τον κωδικό μου</Link>
                                <label htmlFor="password">Κωδικός</label>
                                <input id="password" type="password" className="form-control" placeholder=""/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">Σύνδεση</button>
                            </div>
                        </form>
                    </article>
                    <div className="border-top card-body text-center">Δέν έχετε έναν λογαριασμό? <Link to={"/register"}>Εγγραφή</Link> </div>
                </div>
            </div>
        </div>
    </div>
);

export default Login;