import React from 'react';
import { Link } from "gatsby";
import classNames from "classnames";
import Slide from "react-reveal/Slide";

// Styles
import styles from "./footer-outro.module.scss";

const FooterOutro = (props) => {

    const footerQuoteClass = classNames(
        styles.footerQuote,
        props.quote ? styles.quote : styles.default
    )

    const MovingCircles = () => {
        return (
            <div className={styles.movingCircles}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }

    const FooterQuote = () => {
        return (
            <div className={footerQuoteClass}>
                <div className="container">
                    <div className={styles.content}>
                        <h1>“</h1>
                        {props.quote.text}
                        <p>- {props.quote.author}</p>
                    </div>
                </div>
                <MovingCircles />
                <div className={styles.outroCircle}></div>
            </div>
        )
    }

    const FooterAction = () => {
        return (
            <div className={footerQuoteClass}>
                <div className="container">
                    <div className={styles.content}>
                        <h1>{props.default.heading}</h1>
                        <p>{props.default.text}</p>
                        <button className="button">
                            <Link to={props.default.to}>{props.default.buttonText}</Link>
                        </button>
                    </div>
                </div>
                <MovingCircles />
                <div className={styles.outroCircle}></div>
            </div>
        )
    }

    return (
        <Slide up>
            {props.quote ? <FooterQuote /> : <FooterAction />}
        </Slide>
    )
}

export default FooterOutro
