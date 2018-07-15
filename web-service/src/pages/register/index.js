import React from 'react';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

const Register = () => (
    <div className="container">
        <Helmet>
            <title>Διαχείριση Δήμων</title>
        </Helmet>
        <div className="row justify-content-center">
            <div className="col-md-12 text-center mt-4">
                <Link to={"/"}><h2>Διαχείριση Δήμων</h2></Link>
            </div>
            <div className="col-md-6">
                <div className="card mt-4 mb-4">
                    <header className="card-header text-center">
                        <h4 className="card-title mt-2">Εγγραφή</h4>
                    </header>
                    <article className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="firstName">Όνομα</label>
                                <input id="firstName" type="text" className="form-control" placeholder=""/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Επώνυμο</label>
                                <input id="lastName" type="text" className="form-control" placeholder=""/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" className="form-control" placeholder=""/>
                                <small className="form-text text-muted">
                                    Δέν θα μοιραστούμε ποτέ το email σας με κανέναν.
                                </small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Δημιουργία κωδικού</label>
                                <input id="password" className="form-control" type="password"/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">Εγγραφή</button>
                            </div>
                            <div className="text-center">
                                <small className="text-muted">
                                    Κάνοντας κλικ στο κουμπί "Εγγραφή", επιβεβαιώνετε ότι αποδέχεστε τούς <br/> Όρους χρήσης
                                    και την Πολιτική Απορρήτου μας.
                                </small>
                            </div>
                        </form>
                    </article>
                    <div className="border-top card-body text-center">Έχετε ήδη έναν λογαριασμό? <Link to={"/login"}>Σύνδεση</Link> </div>
                </div>
            </div>
        </div>
    </div>
);

export default Register;