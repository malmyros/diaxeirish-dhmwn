import React from 'react';
import PropTypes from 'prop-types';
import Menu from "../menu";
import {Helmet} from "react-helmet";
import Footer from "../footer";

const Layout = (props) => (
    <div className="layout">
        <Helmet>
            <title>{props.title}</title>
            <meta name="description" content={props.description}/>
            <meta name="keywords" content={props.keywords}/>
        </Helmet>
        <header>
            <Menu/>
        </header>
        <main role="main">
            {props.children}
        </main>
        <Footer/>
    </div>
);

Layout.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string
};

Layout.defaultProps = {
    title: "",
    description: "",
    keywords: ""
};

export default Layout;