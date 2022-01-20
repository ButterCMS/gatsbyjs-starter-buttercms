import React, { useEffect } from "react"
import "../../assets/scss/main.scss"
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import ScrollToTop from "../components/ScrollToTop"

const Layout = ({ children, menuItems }) => {
  useEffect(() => {
    const onScroll = (event) => {
      const sections = document.querySelectorAll('.page-scroll');
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      for (let i = 0; i < sections.length; i++) {
        const currLink = sections[i];
        const val = currLink.getAttribute('href').replace("/", "");

        const refElement = document.querySelector(val);
        const scrollTopMinus = scrollPos + 73;
        if (refElement) {
          if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
            document.querySelector('.page-scroll').classList.remove('active');
            currLink.classList.add('active');
          } else {
            currLink.classList.remove('active');
          }
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

      <Header menuItems={menuItems} />

      {children}

      <ScrollToTop />

      <Footer menuItems={menuItems} />
    </>
  )
}

export default Layout;
