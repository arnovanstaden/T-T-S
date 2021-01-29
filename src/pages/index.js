import React, { useState } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { useMediaQuery } from "react-responsive";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";

// Components
import Layout from "../components/Layout/Layout";
import Landing from "../components/Landing/Landing";
import Section from "../components/Section/Section";
import SectionHeading from "../components/Section/SectionHeading";
import FooterOutro from "../components/Footer/FooterOutro";
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
        <h1>Together <span>Through</span> Skills</h1>
        <p> Together Through Skills (TTS) is a <span>recruitment, training and placement company</span>, focusing on </p>
        <ul>
          <li><span></span> youth employment</li>
          <li><span></span> entrepreneurship development</li>
          <li><span></span> rural communities</li>
          <li><span></span> and people living with disabilities</li>
        </ul>
        <button className="button">
          <Link to="/solutions"> Our Solutions </Link>
        </button>
      </Landing>

      <Section>
        <div className={`${styles.grid} ${styles.aboutGrid}`}>
          <Fade left cascade>
            <div className={styles.content}>
              <SectionHeading heading={<h1><span>About</span> TTS</h1>} smaller={true} />
              <p>As with all <span>education</span>, the key to a successful learnership lies not in the educational event or process itself, but rather in the opportunity offered to the learners to apply their learning.</p>

              <p><span>TTS aims to upskill and integrate South African youth</span> into the world of work, by leveraging the Skills Development and Corporate Social Investment components of the B-BBEE Act. </p>
              <button className="button">
                <Link to="/about"> Learn More </Link>
              </button>
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
              <SectionHeading heading={<h1>Our <span>Solutions</span></h1>} smaller={true} />
              <p>Whether the <span>solution</span> lies in</p>
              <ul>
                <li><span></span> learnerships</li>
                <li><span></span> bursaries</li>
                <li><span></span> internships</li>
                <li><span></span> apprenticeships</li>
                <li><span></span> or entrepreneurial opportunities</li>
              </ul>
              <p>we will work with our clients to ensure that a customised solution is offered to meet their <span>transformation agenda</span>.</p>
              <button className="button">
                <Link to="/about"> Learn More </Link>
              </button>
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
