import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Components
import Header from "./Header";
import Footer from "./Footer";
import Head from "./Head";

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      <Layout>
        {children}
      </Layout>
      <Footer />


    </>
  )
}

export default Layout
