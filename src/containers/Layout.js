import React, { useEffect, useState } from "react"
import "../../assets/scss/main.scss"
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import ScrollToTop from "../containers/ScrollToTop"

const Layout = ({ children, menuItems }) => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('.page-scroll');
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      for (let i = 0; i < sections.length; i++) {
        const currLink = sections[i];
        const currLinkHref = currLink.getAttribute('href');
        const val = currLinkHref.replace("/", "");

        const refElement = document.querySelector(val);
        const scrollTopMinus = scrollPos + 73;

        if (refElement && refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
          setActiveLink(currLinkHref)
        }
      }
    };

    window.document.addEventListener('scroll', onScroll, { passive: true });
    return () => window.document.addEventListener('scroll', onScroll);
  }, []);


  return (
    <>
      <Helmet>
        <script type="text/javascript" src={withPrefix("js/main.js")} />
      </Helmet>

      <Header menuItems={menuItems} activeLink={activeLink} />

      {children}

      <ScrollToTop />

      <Footer menuItems={menuItems} activeLink={activeLink} />
    </>
  )
}

export default Layout;
