import React from "react"

// Components
import Head from "../Head/Head";

const Layout = (props) => {
  return (
    <>
      <Head pageMeta={props.pageMeta} />
      <main>
        {props.children}
      </main>
    </>
  )
}

export default Layout
