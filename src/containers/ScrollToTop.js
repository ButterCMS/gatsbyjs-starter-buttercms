import React, { useState, useEffect } from "react"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = (event) => {
      // show or hide the back-top-top button
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    };

    window.document.addEventListener('scroll', onScroll, { passive: true });
    return () => window.document.addEventListener('scroll', onScroll);
  }, []);


  return (
    <a href="#" className="scroll-top btn-hover" style={{display: isVisible ? "flex" : "none"}}>
      <i className="lni lni-chevron-up"></i>
    </a>
  )
}

export default ScrollToTop;


