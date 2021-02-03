import React, { useState } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { useMediaQuery } from "react-responsive";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";

// Components
import Layout from "../components/Layout/Layout";
import Landing from "../components/Landing/Landing";
import Section from "../components/Section/Section";
import SectionHeading from "../components/Section/SectionHeading";
import FooterOutro from "../components/FooterOutro/FooterOutro";

import Loader from "../components/Loader/Loader";

// Styles
import styles from "./styles/index.module.scss"


const IndexPage = ({ data, text }) => {
  const [showLoader, setShowLoader] = useState(true)

  const hideLoader = () => {
    setShowLoader(false)
  }

  // Image Styles
  const wrapperStyles = {
    height: "100%",
    width: "100%",
  }

  const imageStyles = {
    objectFit: "contain"
  }

  // Responsive Images
  const isSmallerScreen = useMediaQuery({ query: '(max-width: 768px)' });
  let solutionsImage;
  if (isSmallerScreen) {
    solutionsImage = data.solutionsImageMobile.childImageSharp.fluid
  } else {
    solutionsImage = data.solutionsImage.childImageSharp.fluid
  }



  return (
    <Layout
      pageMeta={{
        title: "Together Through Skills",
        description: "Together Through Skills (TTS) is a recruitment, training and placement company, focusing on youth employment, entrepreneurship development, rural communities and people living with disabilities.",
        canonical: "/"
      }}

    >
      {showLoader ? <Loader /> : null}
      <Landing image={data.landingImage.childImageSharp.fluid} hideLoader={hideLoader}>
        <div className={styles.landing}>
          <h1>Together <span>Through</span> Skills</h1>
          <Fade right cascade delay={1000}>
            <ul>
              <li><span></span> Employment &amp; </li>
              <li><span></span> Entrepreneurship</li>
            </ul>
          </Fade>

          <Fade right delay={2000}>
            <p> are the keys to unlocking economic <span>growth</span> and <span>sustainability</span>.</p>
          </Fade>

          <div className={styles.landingLinks}>
            <Flip top delay={3000}>
              <button className="button button--full">
                <Link to="/solutions"> Our Solutions </Link>
              </button>
              <button className="button button--full">
                <Link to="/contact"> Partner With Us </Link>
              </button>
            </Flip>
          </div>
        </div>
      </Landing>

      <Section>
        <div className={`${styles.grid} ${styles.aboutGrid}`}>
          <Fade left cascade>
            <div className={styles.content}>
              <SectionHeading heading={<h1><span>What</span> We Do</h1>} smaller={true} />
              <p>Together Through Skills aims to <span>upskill</span> and <span>integrate</span> South African youth into the world of work.</p>
              <Bounce left delay={1500}>
                <button className="button">
                  <Link to="/about"> About Us</Link>
                </button>
              </Bounce>
            </div>
          </Fade>
          <Roll right>
            <div className={styles.image}>
              <Img fluid={data.aboutImage.childImageSharp.fluid} style={wrapperStyles} imgStyle={imageStyles} />
            </div>
          </Roll>
        </div>
      </Section>

      <Section circular={true}>
        <div className={`${styles.grid} ${styles.solutionGrid}`}>
          <Roll left>
            <div className={styles.image}>
              <Img fluid={solutionsImage} style={wrapperStyles} imgStyle={imageStyles} />
            </div>
          </Roll>
          <Fade right>
            <div className={styles.content}>
              <SectionHeading heading={<h1>How <span>We Do It</span></h1>} smaller={true} />
              <p>By leveraging the <span>Skills Development</span> and <span>Corporate Social Investment </span> components of the <span>B-BBEE Act</span>, TTS will achieve this objective in two primary ways:</p>
              <Fade right cascade delay={1000}>
                <ul>
                  <li>
                    <span></span>
                    <p>full-service management of learnerships, leading to <span>employment</span>; as well as</p>
                  </li>
                  <li>
                    <span></span>
                    <p>facilitating <span>entrepreneurial opportunities</span> for youth who are unable to be absorbed into the rapidly shrinking job market.</p>
                  </li>
                </ul>
              </Fade>
              <Bounce right delay={3000}>
                <button className="button">
                  <Link to="/solutions"> Our Solutions </Link>
                </button>
              </Bounce>
            </div>
          </Fade>
        </div>
        <div className={styles.solutionsCircle}></div>
      </Section>

      {/* <Section heading={<h1>Our <span>Projects</span></h1>} >
        <div className={`${styles.grid} ${styles.projectsGrid}`}>
          <Fade left>
            <div className={styles.content}>
              <p>These two e’s, i.e. <span>employment and entrepreneurship</span>, are the key to unlocking economic growth and sustainability.
          </p>
            </div>
          </Fade>
          <Roll up>
            <div className={styles.image}>
              <Img fluid={data.projectsImage.childImageSharp.fluid} style={wrapperStyles} imgStyle={imageStyles} />
            </div>
          </Roll>
          <Fade right>
            <div className={styles.content}>
              <p>Underpinning all TTS solutions is a commitment not only to the <span>employability</span> of the youth, but also to their <span>personal development</span>.
          </p>
            </div>
          </Fade>
        </div>
        <div className={styles.projectsLink}>
          <button className="button">
            <Link to="/projects"> Learn More </Link>
          </button>
        </div>
      </Section> */}

      <FooterOutro
        default={{
          heading: "Are You Ready?",
          text: "The time to act – and, more importantly, to succeed – is now.",
          buttonText: "Take Action",
          to: "/contact"
        }}
      />
    </Layout>
  )
}

export default IndexPage

export const data = graphql`
  query {
    landingImage: file(relativePath: { eq: "landing/home.png" }) {
      childImageSharp {
        fluid(maxWidth: 700)  {
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
    aboutImage: file(relativePath: { eq: "pages/home/about.png" }) {
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
    solutionsImage: file(relativePath: { eq: "pages/home/solutions.png" }) {
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
    solutionsImageMobile: file(relativePath: { eq: "pages/home/solutions-mobile.png" }) {
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
    projectsImage: file(relativePath: { eq: "pages/home/projects.png" }) {
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
