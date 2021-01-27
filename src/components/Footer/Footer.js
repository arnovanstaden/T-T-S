import React from 'react';
import { Link } from "gatsby";
import classNames from "classnames";

// Styles, Images
import styles from "./footer.module.scss";
import FooterLogo from "../../assets/images/logos/full-logo-white.svg";

const Footer = (props) => {

    const footerClasses = classNames(
        styles.footer,
        props.background ? styles.background : null
    )

    return (
        <footer className={footerClasses}>
            <div className="container">
                <div className={styles.footerGrid}>
                    <img className={styles.logo} src={FooterLogo} alt="" />
                    <div className={styles.line}></div>
                    <ul className={styles.nav}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/solutions">Solutions</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className={styles.copyright}>
                        <p>© 2020 - TTS (PTY) LTD.</p>
                        <p>Design &amp; Development by <a href="https://webdacity.dev">Webdacity</a>.</p>
                    </div>
                </div>
            </div>
            <div className={styles.footerCircle}></div>
        </footer >
    )
}

export default Footer
