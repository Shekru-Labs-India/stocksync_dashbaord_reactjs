import React from "react";
import { Link } from "react-router-dom";
import mirrorLogo from '../assets/mirrortrade.jpg'
const StudentHeader = () => {
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.clear();
    // Optionally, redirect to login page or perform other actions after logout
  };

  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("userName");
  const userRole = localStorage.getItem("userRole");

  const toTitleCase = (str) => {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  return (
    <div>
      <nav className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme" id="layout-navbar">
        <div className="container-xxl">
          <div className="navbar-brand app-brand demo d-none d-xl-flex py-0 me-6">
            <a href="/" className="app-brand-link gap-2">
           < div className="flex-shrink-0 me-1">
                          <div className="avatar ">
                            <img src={mirrorLogo} alt="" className="w-px-40 h-auto rounded-circle" />
                          </div>
                        </div>
              <span className="app-brand-text demo menu-text fw-semibold ms-1">
               Trade Mirror
              </span>
            </a>

            <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-xl-none">
              <i className="ri-close-fill align-middle"></i>
            </a>
          </div>

          <div className="layout-menu-toggle navbar-nav align-items-xl-center me-4 me-xl-0 d-xl-none">
            <a className="nav-item nav-link px-0 me-xl-6" href="javascript:void(0)">
              <i className="ri-menu-fill ri-24px"></i>
            </a>
          </div>

          <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
            <div className="flex-grow-1 text-end me-3">
              <h6 className="mb-0 small">{toTitleCase(userName)}</h6>
              <small className="text-muted">{toTitleCase(userRole)}</small>
            </div>
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              <li className="nav-item navbar-dropdown dropdown-user dropdown">
                <a className="nav-link dropdown-toggle hide-arrow p-0" href="javascript:void(0);" data-bs-toggle="dropdown">
                  <div className="avatar ">
                    <img src={mirrorLogo} alt="" className="w-px-40 h-auto rounded-circle" />
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end mt-3 py-2">
                  <li>
                    <a className="dropdown-item" href="pages-account-settings-account.html">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-2">
                          <div className="avatar ">
                            <img src={mirrorLogo} alt="" className="w-px-40 h-auto rounded-circle" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 small">{toTitleCase(userName)}</h6>
                          <small className="text-muted">{toTitleCase(userRole)}</small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider"></div>
                  </li>
                  <li>
                    <Link to="/app2/student_profile" className="dropdown-item">
                      <i className="ri-user-3-line ri-22px me-2"></i>
                      <span className="align-middle">My Profile</span>
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="pages-account-settings-account.html">
                      <i className="ri-settings-4-line ri-22px me-2"></i>
                      <span className="align-middle">Settings</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="pages-account-settings-billing.html">
                      <span className="d-flex align-items-center align-middle">
                        <i className="flex-shrink-0 ri-file-text-line ri-22px me-2"></i>
                        <span className="flex-grow-1 align-middle">Billing</span>
                        <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger h-px-20 d-flex align-items-center justify-content-center">
                          4
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider"></div>
                  </li>
                  <li>
                    <a className="dropdown-item" href="pages-pricing.html">
                      <i className="ri-money-dollar-circle-line ri-22px me-2"></i>
                      <span className="align-middle">Pricing</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="pages-faq.html">
                      <i className="ri-question-line ri-22px me-2"></i>
                      <span className="align-middle">FAQ</span>
                    </a>
                  </li>
                  <li>
                    <div className="d-grid px-4 pt-2 pb-1">
                      <Link to="/" onClick={handleLogout} className="dropdown-item">
                        <i className="btn btn-danger d-flex">
                          <small className="align-middle">Logout</small>
                        </i>
                      </Link>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="navbar-search-wrapper search-input-wrapper container-xxl d-none">
            <input
              type="text"
              className="form-control search-input border-0"
              placeholder="Search..."
              aria-label="Search..."
            />
            <i className="ri-close-fill search-toggler cursor-pointer"></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default StudentHeader;
