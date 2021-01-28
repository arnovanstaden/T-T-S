import React from 'react';
import ClassNames from "classnames";
import Img from "gatsby-image";
import { useMediaQuery } from "react-responsive";
import Fade from "react-reveal/Fade"
import Roll from "react-reveal/Roll"


// Styles, Images
import styles from "./landing.module.scss";

const Landing = (props) => {

    const isSmallerScreen = useMediaQuery({
        query: '(max-width: 768px)'
    })

    let imageWrapperStyles;
    let imageStyles;
    if (isSmallerScreen) {
        imageWrapperStyles = {
            height: "100%",
            width: "100%"
        }
        imageStyles = {
            objectFit: "contain"
        }
    } else {
        imageWrapperStyles = {
            height: "90%",
            width: "90%",
            left: "-15%"
        }
        imageStyles = {
            objectFit: "contain"
        }
    }

    return (
        <div className={styles.landing}>
            <Roll left>
                <div className={styles.image}>
                    <Img fluid={props.image} className={styles.imageWrapper} style={imageWrapperStyles} imgStyle={imageStyles} />
                    <div className={styles.imageCircle}></div>
                </div>
            </Roll>
            <div className={styles.content}>
                <Fade right>
                    {props.children}
                </Fade>
            </div>
        </div>
    )
}

export default Landing
