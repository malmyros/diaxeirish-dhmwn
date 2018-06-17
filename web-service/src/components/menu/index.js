import React from 'react';
import {Link} from "react-router-dom";


const Menu = (props) => (
    <nav className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom box-shadow">
        <Link to="/" className="my-0 mr-md-auto font-weight-normal">
            Διαχείριση Δήμων
        </Link>
        <nav className="my-2 my-md-0 mr-md-3">
            <Link to={"/login"} className="p-2 text-dark" href="#">Σύνδεση</Link>
        </nav>
        <Link to={"/register"} className="btn btn-outline-primary">Εγγραφή</Link>
    </nav>
);

export default Menu;