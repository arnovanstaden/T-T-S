import React from "react"

import Layout from "../components/Layout/Layout";

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

    </Layout>
  )
}

export default NotFoundPage
