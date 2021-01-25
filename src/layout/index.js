import React from 'react';

// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// Styles, Fonts & Icons
import "typeface-nunito";
import "typeface-open-sans";
import "../global.scss";
import "../assets/fonts/icons/icons.css";

const Layout = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout
