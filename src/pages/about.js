import React from 'react';
import Img from "gatsby-image";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";
import Rotate from "react-reveal/Rotate";

// Components
import Layout from "../components/Layout/Layout";
import Landing from "../components/Landing/Landing";
import Section from "../components/Section/Section";
import FooterOutro from "../components/FooterOutro/FooterOutro";

import SectionHeading from "../components/Section/SectionHeading";

// Styles
import styles from "./styles/about.module.scss"

const about = ({ data }) => {
  return (
    <Layout
      pageMeta={{
        title: "About Us | TTS",
        description: "TTS aims to upskill and integrate South African youth into the world of work, by leveraging the B-BBEE Act. ",
        canonical: "/about"
      }}

    >
      <Landing image={data.landingImage.childImageSharp.fluid}>
        <h1><span>About</span> TTS</h1>
        <p>As with all <span>education</span>, the key to a successful learnership lies not in the educational event or process itself, but rather in the opportunity offered to the learners to apply their learning.</p>
        <p><span>TTS aims to upskill and integrate South African youth</span> into the world of work, by leveraging the Skills Development and Corporate Social Investment components of the B-BBEE Act. </p>
      </Landing>

      <Section heading={<h1>Our <span>Story</span></h1>}>
        <Fade up>
          <div className={styles.story}>
            <p>As with all education, the key to a successful learnership lies not in the educational event or process itself, but rather in the opportunity offered to the learners to apply their learning. Within the South African context, this application may take two forms: the placement of learners into employment or the ability of the learners to apply their knowledge within a start-up environment. These two e’s, i.e. employment and entrepreneurship, are the key to unlocking economic growth and sustainability. Unfortunately, many training initiatives stop at the successful completion of the training. By employing a holistic and ecosystemic approach to all its training initiatives, TTS ensures that the application of learning remains our priority at all times. We cannot wait any longer. Ticking boxes will not create prosperity. The time to act – and, more importantly, to succeed – is now.</p>

            <p>We are proud to introduce Together Through Skills (TTS), a recruitment, training and placement company, focusing on youth employment, entrepreneurship development, rural communities and people living with disabilities. TTS aims to upskill and integrate South African youth into the world of work, by leveraging the Skills Development and Corporate Social Investment components of the B-BBEE Act.  TTS will achieve this objective in two primary ways: full-service management of learnerships, leading to employment, as well as facilitating entrepreneurial opportunities for youth who are unable to be absorbed into the rapidly shrinking job market.   </p>
          </div>
        </Fade>
      </Section>

      <Section>
        <div className={styles.middle}>
          <div className={styles.difference}>
            <SectionHeading heading={<h1>The TTS <span>Difference</span></h1>} />
            <Fade up>

              <p>While TTS’s programmes will target individuals with high potential, our efforts will always be aimed at making a difference at a community level by ensuring that individuals are able to use their skills to impact the communities in which they live. In this way, TTS aims to find holistic solutions to South Africa’s skills shortage.</p>

              <p>Underpinning all TTS solutions is a commitment not only to the employability of the youth, but also to their personal development. Whether we are creating a worker or an entrepreneur, personal mastery and a growth mindset are seen as the key to success.</p>
            </Fade>
          </div>
          <div className={styles.images}>
            <Roll left>
              <div className={styles.imageColumn}>
                <div className={styles.smallCircle}></div>
                <Img
                  fluid={data.middleImage2.childImageSharp.fluid}
                  style={{
                    width: "90%",
                  }}
                  imgStyle={{ objectFit: "contain" }} />
              </div>
            </Roll>
            <Rotate>
              <div className={styles.textColumn}>
                <Img
                  fluid={data.middleImage.childImageSharp.fluid}
                  style={{
                    width: "80%",
                  }}
                  imgStyle={{ objectFit: "contain" }} />
              </div>
            </Rotate>
            <Roll right>
              <div className={styles.imageColumn}>
                <Img
                  fluid={data.middleImage1.childImageSharp.fluid}
                  style={{
                    width: "90%",
                  }}
                  imgStyle={{ objectFit: "contain" }} />
                <div className={styles.smallCircle}></div>
              </div>
            </Roll>
          </div>
          <div className={styles.difference}>
            <SectionHeading heading={<h1>Finding a <span>“Why”</span></h1>} />
            <Fade up>
              <p>While TTS’s programmes will target individuals with high potential, our efforts will always be aimed at making a difference at a community level by ensuring that individuals are able to use their skills to impact the communities in which they live. In this way, TTS aims to find holistic solutions to South Africa’s skills shortage.</p>
              <p>Underpinning all TTS solutions is a commitment not only to the employability of the youth, but also to their personal development. Whether we are creating a worker or an entrepreneur, personal mastery and a growth mindset are seen as the key to success.</p>
            </Fade>
          </div>
          <div className={styles.middleCircle}></div>
        </div>
      </Section>

      <Section heading={<h1><span>Strategic</span> Partnerships</h1>}>
        <div className={styles.partnerships}>
          <Fade up>
            <p>TTS recognises that the solutions to South Africa’s skills shortage lies in the creation of strategic partnerships in which each partner leverages their strengths and resources to create a holistic ecosystem of support. To this end, TTS is proud to partner with the following companies to ensure seamless selection, delivery and impact.</p>
          </Fade>
          <div className={styles.partner}>
            <Roll left>
              <div className={styles.image}>
                <Img
                  fluid={data.africaneurImage.childImageSharp.fluid}
                  style={{
                    height: "90%",
                    width: "90%",
                  }}
                  imgStyle={{ objectFit: "contain" }} />
              </div>
            </Roll>
            <Fade right>
              <div className={styles.content}>
                <h4><span></span> Africaneur IQ</h4>
                <p>AIQ, whose Enterprise &amp; Supplier Development (ESD) model has been in operation since 2014, has had great success in leveraging the ESD components of the Broad-Based Black Economic Empowerment Act. TTS’s partnership with AIQ will ensure that the TTS promise is backed up by a company with a proven-track record in delivering value to both beneficiaries and clients. Moreover, AIQ’s beneficiaries, all of whom run successful entrepreneurial enterprises, will provide TTS learners with opportunities, not only for work experience during their learnerships, but also for permanent employment upon successful completion of their learnerships. </p>
              </div>
            </Fade>
          </div>
          <div className={styles.partner}>
            <Fade left>
              <div className={styles.content}>
                <h4><span></span> Asante2gether</h4>
                <p>Asante2gether is a registered non-profit trust allowing both corporate and other non-profit companies to channel CSI funds towards learnerships, work-based programmes and entrepreneurial training opportunities. Acting as Asante2gether’s service provider, TTS will ensure that all funds are directed towards providing value, impact and sustainability. Ultimately, all CSI funding will result either in employment or in the creation of start-ups which will, in turn, generate additional employment opportunities. It is a win-win solution for all invested parties. </p>
              </div>
            </Fade>
            <Roll right>
              <div className={styles.image}>
                <Img
                  fluid={data.asanteImage.childImageSharp.fluid}
                  style={{
                    height: "90%",
                    width: "90%",
                  }}
                  imgStyle={{ objectFit: "contain" }} />
              </div>
            </Roll>
          </div>
        </div>
      </Section>

      <FooterOutro
        quote={{
          text: <h5>He who has a <span>‘why’</span> to live can bear almost any <span>‘how’</span>.</h5>,
          author: "Friedrich Nietzsche",
        }}
      />

    </Layout>
  )
}

export default about


export const data = graphql`
  query {
    landingImage: file(relativePath: { eq: "landing/about.png" }) {
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
    africaneurImage: file(relativePath: { eq: "pages/about/africaneur.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 80)  {
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
    asanteImage: file(relativePath: { eq: "pages/about/asante.png" }) {
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
    middleImage: file(relativePath: { eq: "pages/about/middle.png" }) {
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
    middleImage1: file(relativePath: { eq: "pages/about/middle1.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 80)  {
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
    middleImage2: file(relativePath: { eq: "pages/about/middle2.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 80)  {
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