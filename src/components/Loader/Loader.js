import React from 'react';

import styles from "./loader.module.scss"

const Loader = ({ text }) => {
    return (
        <div className={styles.loader}>
            <div className={styles.spinner}>
                <div className={styles.dot1}></div>
                <div className={styles.dot2}></div>
            </div>
        </div>
    )
}

export default Loader
