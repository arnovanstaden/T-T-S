import React from 'react';

// Styles, Images
import styles from "./selling-points.module.scss";
import Logo from "../../assets/images/logos/logo.svg"


const SellingPoints = () => {
    return (
        <div className={styles.sellingPoints}>
            <div className={styles.grid}>
                <div className={styles.block}>
                    <h6>Learnerships/SETAS</h6>
                    <ul>
                        <li>Core programmes adapted to the clients’ context</li>
                        <li>Integration of multiple core programmes through the various SETAS</li>
                        <li>Online learning programmes</li>
                    </ul>
                </div>
                <div className={`${styles.block} ${styles.unique}`}>
                    <h6>Unique Selling Points</h6>
                    <ul>
                        <li>Bespoke content</li>
                        <li>Experienced facilitators</li>
                        <li>Seamless onboarding and registration</li>
                        <li>Maximum B-BBEE points</li>
                        <li>Impeccable delivery &amp; execution Placement / Entrepreneurship</li>
                    </ul>
                </div>
                <div className={`${styles.block} ${styles.unique}`}>
                    <h6>Unique Selling Points</h6>
                    <ul>
                        <li>Customised design</li>
                        <li>Fresh content and engagement</li>
                        <li>Client ownership of IP</li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <h6>Customised Training Programmes</h6>
                    <ul>
                        <li>Customised Training Programmes</li>
                        <li>Developed from scratch to solve specific problems</li>
                        <li>Blended learning solutions</li>
                        <li>Work with clients to provide unique packaging &amp; messaging</li>
                    </ul>
                </div>
            </div>
            <div className={styles.logo}>
                <img src={Logo} alt="TTS Logo" />
            </div>
            <div className={styles.grid}>
                <div className={styles.block}>
                    <h6>Work Readiness Programmes</h6>
                    <ul>
                        <li>Menu-based or customised</li>
                        <li>Delivered at different levels</li>
                        <li>Interactive</li>
                    </ul>
                </div>
                <div className={`${styles.block} ${styles.unique}`}>
                    <h6>Unique Selling Points</h6>
                    <ul>
                        <li>Interactive Content</li>
                        <li>Experienced facilitation</li>
                        <li>Offer the right ‘fit’ for our clients</li>
                        <li>Mentorship and guidance for growth</li>
                    </ul>
                </div>
                <div className={`${styles.block} ${styles.unique}`}>
                    <h6>Unique Selling Points</h6>
                    <ul>
                        <li>Employment within communities</li>
                        <li>Creating opportunities beyond the learnerships</li>
                        <li>Positive impact on the entrepreneur and community</li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <h6>Entrepreneurial Training Solutions</h6>
                    <ul>
                        <li>Foundational training and coaching of the entrepreneur</li>
                        <li>Content aimed at stimulating township and rural economies</li>
                        <li>Work opportunities in multiple companies to enhance understanding of business and a growth mindset</li>
                    </ul>
                </div>
            </div>
            <img src={Logo} className={styles.backgroundImage} alt="TTS Logo" />
        </div>
    )
}

export default SellingPoints
