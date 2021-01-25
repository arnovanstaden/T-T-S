import React from 'react';
import ClassNames from "classnames";
import Img from "gatsby-image";


// Styles, Images
import styles from "./landing.module.scss";

const Landing = (props) => {

    const imageWrapperStyles = {
        height: "90%",
        width: "90%",
        left: "-15%"
    }
    const imageStyles = {
        objectFit: "contain"
    }

    return (
        <div className={styles.landing}>
            <div className={styles.image}>
                <Img fluid={props.image} style={imageWrapperStyles} imgStyle={imageStyles} />
                <div className={styles.imageCircle}></div>
            </div>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}

export default Landing
