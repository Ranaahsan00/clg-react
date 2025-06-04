import React from "react";
import Logo from "../images/logo-full.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header id="header" className="header header-1">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-xl">
              <div className="container-fluid">
                <a className="navbar-brand header-logo" href="index.html">
                  <div>
                    <img
                      id="header-logo"
                      className="header-logo"
                      src={Logo}
                      alt="logo"
                    />
                  </div>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#headerNavbarDropdown"
                  aria-controls="headerNavbarDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-menu-icon">
                    <i id="menuIcon" className="fa-solid fa-bars"></i>
                  </span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="headerNavbarDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "nav-link active" : "nav-link"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/know-your-rights"
                        className={({ isActive }) =>
                          isActive ? "nav-link active" : "nav-link"
                        }
                      >
                        Know Your Rights
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/client-success-stories"
                        className={({ isActive }) =>
                          isActive ? "nav-link active" : "nav-link"
                        }
                      >
                        Client Success Stories
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/careers"
                        className={({ isActive }) =>
                          isActive ? "nav-link active" : "nav-link"
                        }
                      >
                        Careers
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                          isActive ? "nav-link active" : "nav-link"
                        }
                      >
                        Contact Us
                      </NavLink>
                    </li>
                    <li className="nav-item d-block d-xl-none">
                      <a href="#" className="btn btnPrimary">
                        Get a Free Consultation
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="header-buttons d-none d-xl-block">
                  <a href="#" className="btn btnPrimary">
                    Get a Free Consultation
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
