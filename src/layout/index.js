import React from 'react';

// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Transition from '../components/Transition/Transition'


// Styles, Fonts & Icons
import "typeface-nunito";
import "typeface-open-sans";
import "../global.scss";
import "../assets/fonts/icons/icons.css";

const Layout = ({ children, location }) => {
    return (
        <>
            <Header />
            <Transition location={location}>
                {children}
            </Transition>
            <Footer />
        </>
    )
}

export default Layout
