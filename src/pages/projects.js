import React from 'react';
import Img from "gatsby-image";


// Components
import Layout from "../components/Layout/Layout";
import Landing from "../components/Landing/Landing";
import Section from "../components/Section/Section";
import FooterOutro from "../components/FooterOutro/FooterOutro";


import styles from "./styles/projects.module.scss";


const projects = ({ data }) => {
    return (
        <Layout
            pageMeta={{
                title: "Projects | TTS",
                description: "Together Through Skills (TTS) is a recruitment, training and placement company, focusing on youth employment, entrepreneurship development, rural communities and people living with disabilities.",
                canonical: "/projects"
            }}

        >
            <Landing image={data.landingImage.childImageSharp.fluid}>
                <h1> <span>Projects</span> </h1>
                <p> Together Through Skills (TTS) is a <span>recruitment, training and placement company</span>, focusing on youth employment, entrepreneurship development, rural communities and people living with disabilities</p>
            </Landing>

            <Section heading={<h1>Our <span>Projects</span></h1>}>
                <div className={styles.grid}>
                    <div className={styles.project}>
                        <div className={styles.image}>
                            <Img
                                fluid={data.pavatiImage.childImageSharp.fluid}
                                style={{
                                    height: "90%",
                                    width: "90%",
                                }}
                                imgStyle={{ objectFit: "contain" }} />
                        </div>
                        <div className={styles.content}>
                            <h4><span></span> Pavati PSA</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis molestiae suscipit quia perspiciatis ducimus reiciendis labore recusandae, harum consequuntur saepe delectus praesentium impedit eligendi, inventore, officiis sequi consectetur? Dignissimos, minus! Quibusdam veniam magni animi voluptas unde officia atque harum fugiat, blanditiis tempora dolore. Pariatur maxime vitae quaerat, numquam rem cupiditate. Exercitationem expedita, cumque fugit cum rerum perferendis nam et deleniti, animi ex magnam minus incidunt eos. Asperiores, iusto ullam ad velit cupiditate labore odit suscipit earum reprehenderit, soluta amet sequi facere nobis pariatur quis mollitia dicta expedita et, officiis sapiente. Nisi distinctio et, autem quibusdam nihil voluptatem incidunt corrupti eaque! </p>
                        </div>
                    </div>
                </div>
            </Section>

            <FooterOutro
                default={{
                    heading: "Have a Project in Mind?",
                    text: "Make a difference and collaborate with us on your next project!",
                    buttonText: "Start your Project",
                    to: "/contact"
                }}
            />
        </Layout>
    )
}

export default projects;

export const data = graphql`
  query {
    landingImage: file(relativePath: { eq: "landing/projects.png" }) {
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
    pavatiImage: file(relativePath: { eq: "pages/projects/pavati.png" }) {
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
}
`