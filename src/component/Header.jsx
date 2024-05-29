import React from "react";
import SubHeader from "./SubHeader";
import Profile from "../screen/Profile";

import Footer from "./Footer";
// const Header = ({ switchScreen }) => {
//   const goToProfile = () => {
//     switchScreen('profile');
//   };

const Header = ({ switchScreen }) => {
  const goToProfile = () => {
    switchScreen('profile');
  };
  return (
    
      // <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
      //   <div className="layout-container"> 
        
          <nav
            className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme"
            id="layout-navbar"
          >
            <div className="container-xxl">
              <div className="navbar-brand app-brand demo d-none d-xl-flex py-0 me-6">
                <a href="index.html" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo">
                    <span style={{ color: 'var(--bs-primary)' }}>
                      <svg
                        width="30"
                        height="24"
                        viewBox="0 0 250 196"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.3002 1.25469L56.655 28.6432C59.0349 30.1128 60.4839 32.711 60.4839 35.5089V160.63C60.4839 163.468 58.9941 166.097 56.5603 167.553L12.2055 194.107C8.3836 196.395 3.43136 195.15 1.14435 191.327C0.395485 190.075 0 188.643 0 187.184V8.12039C0 3.66447 3.61061 0.0522461 8.06452 0.0522461C9.56056 0.0522461 11.0271 0.468577 12.3002 1.25469Z"
                          fill="currentColor"
                        />
                        <path
                          opacity="0.077704"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 65.2656L60.4839 99.9629V133.979L0 65.2656Z"
                          fill="black"
                        />
                        <path
                          opacity="0.077704"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 65.2656L60.4839 99.0795V119.859L0 65.2656Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M237.71 1.22393L193.355 28.5207C190.97 29.9889 189.516 32.5905 189.516 35.3927V160.631C189.516 163.469 191.006 166.098 193.44 167.555L237.794 194.108C241.616 196.396 246.569 195.151 248.856 191.328C249.605 190.076 250 188.644 250 187.185V8.09597C250 3.64006 246.389 0.027832 241.935 0.027832C240.444 0.027832 238.981 0.441882 237.71 1.22393Z"
                          fill="currentColor"
                        />
                        <path
                          opacity="0.077704"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M250 65.2656L189.516 99.8897V135.006L250 65.2656Z"
                          fill="black"
                        />
                        <path
                          opacity="0.077704"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M250 65.2656L189.516 99.0497V120.886L250 65.2656Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.2787 1.18923L125 70.3075V136.87L0 65.2465V8.06814C0 3.61223 3.61061 0 8.06452 0C9.552 0 11.0105 0.411583 12.2787 1.18923Z"
                          fill="currentColor"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.2787 1.18923L125 70.3075V136.87L0 65.2465V8.06814C0 3.61223 3.61061 0 8.06452 0C9.552 0 11.0105 0.411583 12.2787 1.18923Z"
                          fill="white"
                          fill-opacity="0.15"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M237.721 1.18923L125 70.3075V136.87L250 65.2465V8.06814C250 3.61223 246.389 0 241.935 0C240.448 0 238.99 0.411583 237.721 1.18923Z"
                          fill="currentColor"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M237.721 1.18923L125 70.3075V136.87L250 65.2465V8.06814C250 3.61223 246.389 0 241.935 0C240.448 0 238.99 0.411583 237.721 1.18923Z"
                          fill="white"
                          fill-opacity="0.3"
                        />
                      </svg>
                    </span>
                  </span>
                  <span className="app-brand-text demo menu-text fw-semibold ms-1">
                    Materio
                  </span>
                </a>
               

                <a
                  href="javascript:void(0);"
                  className="layout-menu-toggle menu-link text-large ms-auto d-xl-none"
                >
                  <i className="ri-close-fill align-middle"></i>
                </a>
              </div>

              <div className="layout-menu-toggle navbar-nav align-items-xl-center me-4 me-xl-0  d-xl-none  ">
                <a
                  className="nav-item nav-link px-0 me-xl-6"
                  href="javascript:void(0)"
                >
                  <i className="ri-menu-fill ri-24px"></i>
                </a>
              </div>

              <div
                className="navbar-nav-right d-flex align-items-center"
                id="navbar-collapse"
              >
                <ul className="navbar-nav flex-row align-items-center ms-auto">
                  <li className="nav-item navbar-search-wrapper me-1 me-xl-0">
                    <a
                      className="nav-link search-toggler"
                      href="javascript:void(0);"
                    >
                      <i className="ri-search-line ri-22px scaleX-n1-rtl me-2"></i>
                    </a>
                  </li>

                  <li className="nav-item dropdown-language dropdown">
                    <a
                      className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ri-translate-2 ri-22px"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end py-2">
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0);"
                          data-language="en"
                          data-text-direction="ltr"
                        >
                          <span className="align-middle">English</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0);"
                          data-language="fr"
                          data-text-direction="ltr"
                        >
                          <span className="align-middle">French</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0);"
                          data-language="ar"
                          data-text-direction="rtl"
                        >
                          <span className="align-middle">Arabic</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0);"
                          data-language="de"
                          data-text-direction="ltr"
                        >
                          <span className="align-middle">German</span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown-style-switcher dropdown">
                    <a
                      className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ri-22px"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-styles">
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0);"
                          data-theme="light"
                        >
                          <span className="align-middle">
                            <i className="ri-sun-line ri-22px me-3"></i>Light
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0);"
                          data-theme="dark"
                        >
                          <span className="align-middle">
                            <i className="ri-moon-clear-line ri-22px me-3"></i>
                            Dark
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0);"
                          data-theme="system"
                        >
                          <span className="align-middle">
                            <i className="ri-computer-line ri-22px me-3"></i>
                            System
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown">
                    <a
                      className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      <i className="ri-star-smile-line ri-22px"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end py-0">
                      <div className="dropdown-menu-header border-bottom py-50">
                        <div className="dropdown-header d-flex align-items-center py-2">
                          <h6 className="mb-0 me-auto">Shortcuts</h6>
                          <a
                            href="javascript:void(0)"
                            className="btn btn-text-secondary rounded-pill btn-icon dropdown-shortcuts-add"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Add shortcuts"
                          >
                            <i className="ri-layout-grid-line ri-24px text-heading"></i>
                          </a>
                        </div>
                      </div>
                      <div className="dropdown-shortcuts-list scrollable-container">
                        <div className="row row-bordered overflow-visible g-0">
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                              <i className="ri-calendar-line ri-26px text-heading"></i>
                            </span>
                            <a
                              href="app-calendar.html"
                              className="stretched-link"
                            >
                              Calendar
                            </a>
                            <small>Appointments</small>
                          </div>
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                              <i className="ri-file-text-line ri-26px text-heading"></i>
                            </span>
                            <a
                              href="app-invoice-list.html"
                              className="stretched-link"
                            >
                              Invoice App
                            </a>
                            <small>Manage Accounts</small>
                          </div>
                        </div>
                        <div className="row row-bordered overflow-visible g-0">
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                              <i className="ri-user-line ri-26px text-heading"></i>
                            </span>
                            <a
                              href="app-user-list.html"
                              className="stretched-link"
                            >
                              User App
                            </a>
                            <small>Manage Users</small>
                          </div>
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                              <i className="ri-computer-line ri-26px text-heading"></i>
                            </span>
                            <a
                              href="app-access-roles.html"
                              className="stretched-link"
                            >
                              Role Management
                            </a>
                            <small>Permission</small>
                          </div>
                        </div>
                        <div className="row row-bordered overflow-visible g-0">
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                              <i className="ri-pie-chart-2-line ri-26px text-heading"></i>
                            </span>
                            <a href="index.html" className="stretched-link">
                              Dashboard
                            </a>
                            <small>Analytics</small>
                          </div>
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                              <i className="ri-settings-4-line ri-26px text-heading"></i>
                            </span>
                            <a
                              href="pages-account-settings-account.html"
                              className="stretched-link"
                            >
                              Setting
                            </a>
                            <small>Account Settings</small>
                          </div>
                        </div>
                        <div className="row row-bordered overflow-visible g-0">
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                              <i className="ri-question-line ri-26px text-heading"></i>
                            </span>
                            <a href="pages-faq.html" className="stretched-link">
                              FAQs
                            </a>
                            <small className="text-muted mb-0">
                              FAQs & Articles
                            </small>
                          </div>
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                              <i className="ri-tv-2-line ri-26px text-heading"></i>
                            </span>
                            <a
                              href="modal-examples.html"
                              className="stretched-link"
                            >
                              Modals
                            </a>
                            <small>Useful Popups</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-4 me-xl-1">
                    <a
                      className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      <i className="ri-notification-2-line ri-22px"></i>
                      <span className="position-absolute top-0 start-50 translate-middle-y badge badge-dot bg-danger mt-2 border"></span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end py-0">
                      <li className="dropdown-menu-header border-bottom">
                        <div className="dropdown-header d-flex align-items-center py-3">
                          <h6 className="mb-0 me-auto">Notification</h6>
                          <div className="d-flex align-items-center">
                            <span className="badge rounded-pill bg-label-primary me-2">
                              8 New
                            </span>
                            <a
                              href="javascript:void(0)"
                              className="btn btn-text-secondary rounded-pill btn-icon dropdown-notifications-all"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Mark all as read"
                            >
                              <i className="ri-mail-open-line ri-20px text-body"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown-notifications-list scrollable-container">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item list-group-item-action dropdown-notifications-item">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <img
                                    src="../../assets/img/avatars/1.png"
                                    alt
                                    className="w-px-40 h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="small mb-1">
                                  Congratulation Lettie 🎉
                                </h6>
                                <small className="mb-1 d-block text-body">
                                  Won the monthly best seller gold badge
                                </small>
                                <small className="text-muted">1h ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot"></span>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ri-close-line"></span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item list-group-item-action dropdown-notifications-item">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <span className="avatar-initial rounded-circle bg-label-danger">
                                    CF
                                  </span>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1 small">Charles Franklin</h6>
                                <small className="mb-1 d-block text-body">
                                  Accepted your connection
                                </small>
                                <small className="text-muted">12hr ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot"></span>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ri-close-line"></span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <img
                                    src="../../assets/img/avatars/2.png"
                                    alt
                                    className="w-px-40 h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1 small">New Message ✉️</h6>
                                <small className="mb-1 d-block text-body">
                                  You have new message from Natalie
                                </small>
                                <small className="text-muted">1h ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot"></span>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ri-close-line"></span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item list-group-item-action dropdown-notifications-item">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <span className="avatar-initial rounded-circle bg-label-success">
                                    <i className="ri-shopping-cart-2-line"></i>
                                  </span>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1 small">
                                  Whoo! You have new order 🛒{" "}
                                </h6>
                                <small className="mb-1 d-block text-body">
                                  ACME Inc. made new order $1,154
                                </small>
                                <small className="text-muted">1 day ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot"></span>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ri-close-line"></span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <img
                                    src="../../assets/img/avatars/9.png"
                                    alt
                                    className="w-px-40 h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1 small">
                                  Application has been approved 🚀{" "}
                                </h6>
                                <small className="mb-1 d-block text-body">
                                  Your ABC project application has been
                                  approved.
                                </small>
                                <small className="text-muted">2 days ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot"></span>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ri-close-line"></span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <span className="avatar-initial rounded-circle bg-label-success">
                                    <i className="ri-pie-chart-2-line"></i>
                                  </span>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1 small">
                                  Monthly report is generated
                                </h6>
                                <small className="mb-1 d-block text-body">
                                  July monthly financial report is generated{" "}
                                </small>
                                <small className="text-muted">3 days ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot"></span>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ri-close-line"></span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <img
                                    src="../../assets/img/avatars/5.png"
                                    alt
                                    className="w-px-40 h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1 small">
                                  Send connection request
                                </h6>
                                <small className="mb-1 d-block text-body">
                                  Peter sent you connection request
                                </small>
                                <small className="text-muted">4 days ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot"></span>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ri-close-line"></span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item list-group-item-action dropdown-notifications-item">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <img
                                    src="../../assets/img/avatars/6.png"
                                    alt
                                    className="w-px-40 h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1 small">
                                  New message from Jane
                                </h6>
                                <small className="mb-1 d-block text-body">
                                  Your have new message from Jane
                                </small>
                                <small className="text-muted">5 days ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot"></span>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ri-close-line"></span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <span className="avatar-initial rounded-circle bg-label-warning">
                                    <i className="ri-error-warning-line"></i>
                                  </span>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1 small">
                                  CPU is running high
                                </h6>
                                <small className="mb-1 d-block text-body">
                                  CPU Utilization Percent is currently at
                                  88.63%,
                                </small>
                                <small className="text-muted">5 days ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot"></span>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ri-close-line"></span>
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="border-top">
                        <div className="d-grid p-4">
                          <a
                            className="btn btn-primary btn-sm d-flex"
                            href="javascript:void(0);"
                          >
                            <small className="align-middle">
                              View all notifications
                            </small>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item navbar-dropdown dropdown-user dropdown">
                    <a
                      className="nav-link dropdown-toggle hide-arrow p-0"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                    >
                      <div className="avatar avatar-online">
                        <img
                          src="../../assets/img/avatars/1.png"
                          alt
                          className="w-px-40 h-auto rounded-circle"
                        />
                      </div>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end mt-3 py-2">
                      <li>
                        <a
                          className="dropdown-item"
                          href="pages-account-settings-account.html"
                        >
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 me-2">
                              <div className="avatar avatar-online">
                                <img
                                  src="../../assets/img/avatars/1.png"
                                  alt
                                  className="w-px-40 h-auto rounded-circle"
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="mb-0 small">John Doe</h6>
                              <small className="text-muted">Admin</small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div className="dropdown-divider"></div>
                      </li>
                      <li>
                        <button onClick={goToProfile}
                          className="dropdown-item"
                         
                        >
                          <i className="ri-user-3-line ri-22px me-2"></i>
                          <span className="align-middle">My Profile</span>
                        </button>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="pages-account-settings-account.html"
                        >
                          <i className="ri-settings-4-line ri-22px me-2"></i>
                          <span className="align-middle">Settings</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="pages-account-settings-billing.html"
                        >
                          <span className="d-flex align-items-center align-middle">
                            <i className="flex-shrink-0 ri-file-text-line ri-22px me-2"></i>
                            <span className="flex-grow-1 align-middle">
                              Billing
                            </span>
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
                          <button
                            className="btn btn-danger d-flex"
                          onClick={goToProfile}
                            target="_blank"
                          >
                            <small className="align-middle">Logout</small>
                            <i className="ri-logout-box-r-line ms-2 ri-16px"></i>
                          </button>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="navbar-search-wrapper search-input-wrapper container-xxl d-none">
                <input
                  type="text"
                  className="form-control search-input  border-0"
                  placeholder="Search..."
                  aria-label="Search..."
                />
                <i className="ri-close-fill search-toggler cursor-pointer"></i>
              </div>
            </div>
          </nav>
      //     <SubHeader></SubHeader>
      //    <Profile></Profile> 
      //   <Footer></Footer> 
      //   </div>
      // </div>
    
  );
};

export default Header;
