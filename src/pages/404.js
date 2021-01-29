import React from "react";
import { Link } from "gatsby";

// Components
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/Section/SectionHeading";

// Styles
import styles from "./styles/404.module.scss";

const NotFoundPage = () => {
  return (
    <Layout
      pageMeta={{
        title: "404 | Page Not Found",
        description: "The page you are looking for does not exists.",
        canonical: "/",
        pageName: "404",
        robots: "noindex, nofollow"
      }}>

      <section className={styles.section} >
        <SectionHeading heading={<h1>Page Not <span>Found</span></h1>} />
        <p>The page you are looking for does not exist.</p>
        <button className="button">
          <Link to="/">Go Back Home</Link>
        </button>
      </section>
    </Layout>
  )
}

export default NotFoundPage
