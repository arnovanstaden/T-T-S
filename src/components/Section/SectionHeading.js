import React from 'react';
import classNames from "classnames";
import Zoom from "react-reveal/Zoom"

// Styles, Images
import styles from "./section.module.scss";
import headingImage from "../../assets/images/icons/heading.svg"

const SectionHeading = (props) => {

    const headingClass = classNames(
        styles.heading,
        { [styles.smaller]: props.smaller }
    )
    return (
        <div className={headingClass}>
            <Zoom>
                {props.heading}
            </Zoom>
            <img className={styles.image} src={headingImage} alt="Section Heading Icon" />
        </div>
    )
}

export default SectionHeading
