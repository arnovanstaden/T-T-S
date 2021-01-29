import React from 'react';
import Fade from "react-reveal/Fade"

import styles from "./landing-animation.module.scss"

const LandingAnimation = () => {
    return (
        <Fade>
            <div className={styles.animation}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Fade>

    )
}

export default LandingAnimation
