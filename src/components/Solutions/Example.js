import React from 'react';
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { useMediaQuery } from "react-responsive";

// Styles, Images
import styles from "./example.module.scss";


const Example = () => {
    const data = useStaticQuery(graphql`
        query {
        exampleImage: file(relativePath: { eq: "pages/solutions/example.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1000, quality: 100)  {
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
        exampleImageMobile: file(relativePath: { eq: "pages/solutions/example-mobile.png" }) {
            childImageSharp {
                fluid(maxWidth: 768, quality: 100)  {
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
    );

    const ExampleImage = () => {
        const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
        const isMobile = useMediaQuery({ query: '(max-width: 576px)' })
        let image;

        if (isTablet) {
            return (
                <Img
                    fluid={data.exampleImageMobile.childImageSharp.fluid
                    }
                    style={{
                        height: isMobile ? "100%" : "75%",
                        width: isMobile ? "100%" : "75%",
                    }}
                    imgStyle={{ objectFit: "contain" }} />
            )
        } else {
            return (
                <Img
                    fluid={data.exampleImage.childImageSharp.fluid
                    }
                    style={{
                        height: "90%",
                        width: "90%",
                    }}
                    imgStyle={{ objectFit: "contain" }} />
            )

        }


    }

    return (
        <div className={styles.example}>
            <ExampleImage />
        </div>
    )
}

export default Example
