import React, { useEffect } from "react"

const Spinner = () => {




  useEffect(async () => {
    function fadeout() {
      document.querySelector('.preloader').style.opacity = '0';
      document.querySelector('.preloader').style.display = 'none';
    }

    window.onload = function () { window.setTimeout(fadeout, 500); }
    return () => window.onload = function () { window.setTimeout(fadeout, 500); }
  }, []);



  return (
    <div className="preloader">
      <div className="loader">
        <div className="spinner">
          <div className="spinner-container">
            <div className="spinner-rotator">
              <div className="spinner-left">
                <div className="spinner-circle"></div>
              </div>
              <div className="spinner-right">
                <div className="spinner-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spinner;
