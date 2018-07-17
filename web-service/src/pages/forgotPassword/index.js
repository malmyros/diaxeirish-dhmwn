import React from 'react';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

const ForgotPassword = () => (
    <div className="container">
        <Helmet>
            <title>Διαχείριση Δήμων | Ανάκτηση κωδικού πρόσβασης</title>
        </Helmet>
        <div className="row justify-content-center">
            <div className="col-md-12 text-center mt-4">
                <Link to={"/"}><h2>Διαχείριση Δήμων</h2></Link>
            </div>
            <div className="col-md-6">
                <div className="card mt-4 mb-4">
                    <header className="card-header text-center">
                        <h4 className="card-title mt-2">Ανάκτηση κωδικού πρόσβασης</h4>
                    </header>
                    <article className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" className="form-control" placeholder=""/>
                                <small id="emailHelp" className="form-text text-muted">
                                    Συμπληρώστε το email σας, και εμείς θα σας στείλουμε
                                    ένα email με οδηγίες για να ανακτήσετε τον κωδικό σας.
                                </small>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">Αποστολή</button>
                            </div>
                        </form>
                    </article>
                </div>
            </div>
        </div>
    </div>
);

export default ForgotPassword;