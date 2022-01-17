import * as React from "react"
import "../../assets/scss/main.scss"
import {Helmet} from "react-helmet";
import { withPrefix } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <script type="text/javascript" src={withPrefix("js/bootstrap.min.js")} />
        <script type="text/javascript" src={withPrefix("js/polyfill.js")} />
        <script type="text/javascript" src={withPrefix("js/main.js")} />
      </Helmet>

      {children}
    </>
  )
}

  export default Layout;
