import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    let currentYear = new Date().getFullYear();
    return (
        <footer className="border-top">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="d-block mb-2">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="14.31" y1="8" x2="20.05" y2="17.94"/>
                            <line x1="9.69" y1="8" x2="21.17" y2="8"/>
                            <line x1="7.38" y1="12" x2="13.12" y2="2.06"/>
                            <line x1="9.69" y1="16" x2="3.95" y2="6.06"/>
                            <line x1="14.31" y1="16" x2="2.83" y2="16"/>
                            <line x1="16.62" y1="12" x2="10.88" y2="21.94"/>
                        </svg>
                        <small className="d-block mb-3 text-muted">© 2017-{currentYear}</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Χαρακτηριστικά</h5>
                        <ul className="list-unstyled text-small">
                            <li><Link to="/" className="text-muted" href="#">Καταχώρηση ζητημάτων</Link></li>
                            <li><Link to="/" className="text-muted" href="#">Επικοινωνία με τον δήμο</Link></li>
                            <li><Link to="/" className="text-muted" href="#">Εθελοντισμός</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Πληροφορίες</h5>
                        <ul className="list-unstyled text-small">
                            <li><Link to="/" className="text-muted" href="#">Γίνε ενεργός πολίτης</Link></li>
                            <li><Link to="/" className="text-muted" href="#">Συχνές ερωτήσεις</Link></li>
                            <li><Link to="/" className="text-muted" href="#">Έξοδα συντήρησης</Link></li>
                            <li><Link to="/" className="text-muted" href="#">Δωρεές</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Κοινωνικά Δίκτυα</h5>
                        <ul className="list-unstyled text-small">
                            <li><Link to="/" className="text-muted" href="#">Facebook</Link></li>
                            <li><Link to="/" className="text-muted" href="#">Twitter</Link></li>
                            <li><Link to="/" className="text-muted" href="#">LinkedIn</Link></li>
                            <li><Link to="/" className="text-muted" href="#">Google+</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Για εμάς</h5>
                        <ul className="list-unstyled text-small">
                            <li><Link to="/" className="text-muted" href="#">Η Ομάδα μας</Link></li>
                            <li><Link to="/" className="text-muted" href="#">Επικοινωνία</Link></li>
                            <li><Link to="/" className="text-muted" href="#">Ιδιωτικότητα</Link></li>
                            <li><Link to="/" className="text-muted" href="#">Όροι χρήσης</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;