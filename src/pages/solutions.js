import React from 'react';

// Components
import Layout from "../components/Layout/Layout";
import Landing from "../components/Landing/Landing";
import Section from "../components/Section/Section";
import FooterOutro from "../components/Footer/FooterOutro";

// Styles
import styles from "./styles/solutions.module.scss"

const solutions = ({ data }) => {
  return (
    <Layout
      pageMeta={{
        title: "Our Solutions | TTS",
        description: "We offer solutions such as learnerships, bursaries, internships, apprenticeships and entrepreneurial opportunities.",
        canonical: "/solutions"
      }}

    >
      <Landing image={data.landingImage.childImageSharp.fluid}>
        <h1>Our <span>Solutions</span></h1>
        <p> Whether the <span>solution</span> lies in learnerships, bursaries, internships, apprenticeships, or entrepreneurial opportunities, we will work with our clients to ensure that a customised solution is offered to meet their <span>transformation agenda</span>.</p>
      </Landing>

      <Section heading={<h1>A Single Point-of-Contact <span>Solution</span></h1>}>
        <div className={styles.table}>
          <div className={styles.column}>
            <h3>Meaning</h3>
            <p>Solutions that meet your B-BBEE compliance requirements in a way that is meaningful to the beneficiaries.</p>
          </div>
          <div className={styles.column}>
            <h3>Solutions</h3>
            <p>A single point-of-contact solution for all your transformation requirements.</p>
          </div>
          <div className={styles.column}>
            <h3>Impact</h3>
            <p>Transformation initiatives that result in measurable impact i.e. employment and entrepreneurship.</p>
          </div>
        </div>

      </Section>

      <Section heading={<h1>Our <span>Solutions</span></h1>}>
        <div className={styles.solutions}>
          <div className="intro">
            <p>Whether the solution lies in learnerships, bursaries, internships, apprenticeships, or entrepreneurial opportunities, we will work with our clients to ensure that a customised solution is offered to meet their transformation agenda.</p>
          </div>

          <div className={styles.listBlock}>
            <h6> Our proprietary end-to-end process and project management services will result in the creation of either:</h6>
            <ul className={styles.list}>
              <li>
                <i className="icon-check_circle_outline"></i>
                an entry to mid-level skilled workforce; or
              </li>
              <li>
                <i className="icon-check_circle_outline"></i>
                start-ups run by individuals who understand the essentials of entrepreneurship in the fourth industrial economy.
              </li>
            </ul>
          </div>

          <div className={styles.listBlock}>
            <h6> Depending on the programme on offer, learning will take place using:</h6>
            <ul className={styles.list}>
              <li>
                <i className="icon-check_circle_outline"></i>
                Traditional learnerships
              </li>
              <li>
                <i className="icon-check_circle_outline"></i>
                Contact learning
              </li>
              <li>
                <i className="icon-check_circle_outline"></i>
                Blended learnerships
              </li>
              <li>
                <i className="icon-check_circle_outline"></i>
                Online learning
              </li>
            </ul>
          </div>

          <div className={styles.blueBorder}>
            <p>All courses can be customised, and bespoke courses are also available.
          A learning management system is in place for all tracking, monitoring and reporting purposes.</p>
          </div>

          <div className={styles.listGrid}>
            <div className={styles.listBlock}>
              <h6> After consultation with the client, a proposal will be developed which will cover:</h6>
              <ul className={styles.list}>
                <li>
                  <i className="icon-check_circle_outline"></i>
                  Rationale for the proposed offering (Choosing the right programme is essential)
                </li>
                <li>
                  <i className="icon-check_circle_outline"></i>
                  Selection Process for the chosen programme
                </li>
                <li>
                  <i className="icon-check_circle_outline"></i>
                  Rollout Plan (including timelines &amp; deliverables)
                </li>
                <li>
                  <i className="icon-check_circle_outline"></i>
                  Roles and responsibilities (TTS, Client, Learners)
                </li>
                <li>
                  <i className="icon-check_circle_outline"></i>
                  Budget
                </li>
              </ul>
            </div>

            <div className={styles.listBlock}>
              <h6> TTS will fully and comprehensively take care of:</h6>
              <ul className={styles.list}>
                <li>
                  <i className="icon-check_circle_outline"></i>
                  Seta liaison and completion of necessary documentation

                </li>
                <li>
                  <i className="icon-check_circle_outline"></i>
                  Customisation of the learning programme
                </li>
                <li>
                  <i className="icon-check_circle_outline"></i>
                  Assessment &amp; moderation
                </li>
                <li>
                  <i className="icon-check_circle_outline"></i>
                  Certification
                </li>
                <li>
                  <i className="icon-check_circle_outline"></i>
                  Facilitation
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.blueBlock}>
            <h3>And you, the client, get your B-BBEE points! </h3>
          </div>

        </div>
      </Section>

      <Section heading={<h1>A Holistic &amp; Ecosystemic <span>Approach</span></h1>}>

      </Section>

      <FooterOutro
        quote={{
          text: <h5><span>Education</span> is not the filling of a pot, but the lighting of a fire</h5>,
          author: "W.B. Yeats",
        }}
      />

    </Layout>
  )
}

export default solutions


export const data = graphql`
  query {
    landingImage: file(relativePath: { eq: "landing/solutions.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 80)  {
          aspectRatio
          base64
          sizes
          src
          srcSet
          srcWebp
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`