import React from 'react';
import classNames from "classnames";

// Components
import SectionHeading from "./SectionHeading"

// Styles, Images
import styles from "./section.module.scss";

const Section = (props) => {

    const sectionClasses = classNames(
        styles.section,
        props.circular ? styles.circular : ""
    )

    return (
        <section className={sectionClasses}>
            <div className="container">
                {props.heading ? <SectionHeading heading={props.heading} /> : null}
                {props.children}
            </div>
        </section>
    )
}

export default Section
