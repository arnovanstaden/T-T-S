import React, { useState, useEffect } from 'react';
import Img from "gatsby-image";
import { useMediaQuery } from "react-responsive";
import Fade from "react-reveal/Fade"
import Roll from "react-reveal/Roll"

// Components
import LandingAnimation from "../LandingAnimation/LandingAnimation";

// Styles, Images
import styles from "./landing.module.scss";

const Landing = (props) => {
    const [loaded, setLoaded] = useState(false);
    console.log(loaded)

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

    useEffect(() => {
        setLoaded(true)
    })

    return (
        <div className={styles.landing}>
            <Roll left>
                <div className={styles.image}>
                    <Img loading="eager" onLoad={props.hideLoader ? () => props.hideLoader() : null} fluid={props.image} className={styles.imageWrapper} style={imageWrapperStyles} imgStyle={imageStyles} />
                    <div className={styles.imageCircle}></div>
                </div>
            </Roll>
            <div className={styles.content}>
                <Fade right>
                    {props.children}
                </Fade>
                {loaded ? <LandingAnimation /> : null}
            </div>
        </div>
    )
}

export default Landing
