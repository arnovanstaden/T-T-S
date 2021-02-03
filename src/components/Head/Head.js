import React from "react";
import { Helmet } from "react-helmet";

// Interface

const Head = ({ pageMeta }) => {
    let currentYear = new Date().getFullYear();

    return (
        <Helmet htmlAttributes={{ "lang": "en" }}>

            <title>{pageMeta.title}</title>
            <meta name="description" content={pageMeta.description} />
            <link rel="canonical" href={pageMeta.canonical && `https://www.t-t-s.co.za/${pageMeta.canonical.toLowerCase()}`} />
            <meta name="robots" content={pageMeta.robots ? pageMeta.robots : "index, follow"} />

            <meta name="author" content="Webdacity" />
            <meta name="copyright" content={`Webdacity © ${currentYear}`} />
            <meta name="theme-color" content="#ffffff" />

            {/* Open Graph */}
            <meta property="og:site_name" content="Together Through Skills" />
            <meta property="og:title" content={pageMeta.title} />
            <meta property="og:description" content={pageMeta.description} />
            <meta property="og:type" content="Website" />
            <meta property="og:url" content={pageMeta.canonical && `https://www.t-t-s.co.za/${pageMeta.canonical.toLowerCase()}`} />
            <meta property="og:image" content="https://www.t-t-s.co.za//social.png" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="500" />
            <meta property="og:image:height" content="500" />
            <meta property="og:image:alt" content="Together Through Skills Logo" />

            <meta name="google-site-verification" content="hK-A2Zj7lCMxpItHK-ITFxsO90Xbgt0pbiBfiMb6u3w" />

        </Helmet >
    )
}

export default Head;