import React from "react"
import { Link } from "gatsby"

const Header = ({ menuItems }) => {
  return (
    <header className="header">
      <div className="navbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="https://buttercms.com">
                  <img src="https://cdn.buttercms.com/PBral0NQGmmFzV0uG7Q6" alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                  <div className="ms-auto">
                    <ul id="nav" className="navbar-nav ms-auto">
                      {menuItems.map(item =>
                        <li key={item.label} className="nav-item">
                          <Link className="nav-link page-scroll" to={`/${item.url}`}>{item.label}</Link>
                        </li>
                      )}
                    </ul>
                  </div>
                </div> {/* <!-- navbar collapse --> */}
              </nav> {/* <!-- navbar --> */}
            </div>
          </div> {/* <!-- row --> */}
        </div> {/* <!-- container --> */}
      </div> {/* <!-- navbar area --> */}
    </header>
  )
}

export default Header;
