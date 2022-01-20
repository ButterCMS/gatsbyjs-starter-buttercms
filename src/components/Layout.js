import React, { useEffect, useRef, useState } from "react"
import "../../assets/scss/main.scss"
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby"

const Layout = ({ children }) => {
  useEffect(async () => {
    const onScroll = (event) => {
      const sections = document.querySelectorAll('.page-scroll');
      console.log(sections)
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

  // useEffect(async () => {
  //   function onScroll(event) {
  //     var sections = document.querySelectorAll('.page-scroll');
  //     var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

  //     for (var i = 0; i < sections.length; i++) {
  //       var currLink = sections[i];
  //       var val = currLink.getAttribute('href').replace("/", "");
  //       var refElement = document.querySelector(val);
  //       console.log(refElement)
  //       var scrollTopMinus = scrollPos + 73;
  //       if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
  //         document.querySelector('.page-scroll').classList.remove('active');
  //         currLink.classList.add('active');
  //       } else {
  //         currLink.classList.remove('active');
  //       }
  //     }
  //   };

  //   return window.document.addEventListener('scroll', onScroll, { passive: true });
  //   // return () => window.document.addEventListener('scroll', onScroll);
  // }, []);

  return (
    <>
      <Helmet>
        {/* <script type="text/javascript" src={withPrefix("js/bootstrap.min.js")} /> */}
        {/* <script type="text/javascript" src={withPrefix("js/polyfill.js")} /> */}
        <script type="text/javascript" src={withPrefix("js/main.js")} />
        {/* <script type="text/javascript" src={withPrefix("js/tiny-slider.js")} defer /> */}
        <script type="text/javascript" src={withPrefix("js/client-slider.js")} />
        <script type="text/javascript" src={withPrefix("js/section-menu.js")} />
      </Helmet>

      {children}
    </>
  )
}

export default Layout;
