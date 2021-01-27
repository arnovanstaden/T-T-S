import React from 'react';

// Components
import Layout from "../components/Layout/Layout";
import Section from "../components/Section/Section";

// Styles
import styles from "./styles/contact.module.scss"


const contact = () => {
    return (
        <Layout
            pageMeta={{
                title: "Contact Us | TTS",
                description: "Get in touch with us regarding your prospective projects.",
                canonical: "/contact"
            }}
        >

            <section className={styles.section}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.content}>
                            <h1>Get in <span>Touch</span></h1>
                            <p>Get in touch with us using one of the <span>contact options</span> below, or <span>fill in our contact form</span> and we'll get back to you faster than you can say TTS.</p>
                            <div className={styles.details}>
                                <ul>
                                    <li>
                                        <a href="tel:+27823792110">
                                            <i className="icon-phone"></i>
                                        +27 82 379 2110
                                    </a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@t-t-s.co.za">
                                            <i className="icon-send"></i>
                                        info@t-t-s.co.za
                                    </a>
                                    </li>
                                    <li>
                                        <a href="tel:+27823792110">
                                            <i className="icon-location"></i>
                                        Johannesburg, South Africa
                                    </a>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.social}>
                                <ul>
                                    <li>
                                        <a href="">
                                            <i className="icon-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="icon-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="icon-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.form}>
                            <form data-netlify="true" name="contact" method="post">
                                <input type="hidden" name="contact" value="contact" />
                                <div className={styles.formGroup}>
                                    <label htmlFor="Name">Your Name</label>
                                    <input type="text" name="Name" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="Email">Your Email</label>
                                    <input type="email" name="Email" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="Message">Your Message</label>
                                    <textarea name="Message"></textarea>
                                </div>
                                <button type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={styles.contactCircle}></div>
            </section>


        </Layout>
    )
}

export default contact
