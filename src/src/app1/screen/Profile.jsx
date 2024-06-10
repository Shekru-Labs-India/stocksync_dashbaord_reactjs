import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SubHeader from "../component/SubHeader";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Header />
      <SubHeader />
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div className="layout-container">
          <div className="layout-page">
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-style1">
                    <li className="breadcrumb-item">
                      <Link to="/"> Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Profile
                    </li>
                  </ol>
                </nav>
                <div className="card">
                  <div className="card-body pt-0">
                    <div className="row align-items-center">
                      <div className="col text-start">
                        <button
                          onClick={handleBack}
                          className="btn btn-transparent mt-3"
                        >
                          Back
                        </button>
                      </div>
                      <div className="col text-start">
                        <h5 className="mb-0">Profile</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="card mb-6 mt-5">
                          <div className="card-body pt-0">
                            <ul className="list-unstyled my-3 py-1">
                              <li className="d-flex flex-column align-items-start mb-4">
                                <span className="fw-medium fs-5">
                                  Pratiksha Shitole
                                </span>
                                <span>Teacher</span>
                              </li>
                              <li className="d-flex flex-column align-items-start mb-4">
                                <span className="fw-medium text-success">
                                  Broker Connected
                                </span>
                                <span>Wallet Balance:114.63 Rs.</span>
                              </li>
                              <li className="d-flex flex-column align-items-start mb-4">
                                <span>Commission: 10%</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mb-5">
                          <div className="ms-auto text-start">
                            <Link to="/time_line">
                              <button className="btn btn-primary active mb-3">
                                <i className="ri-timeline-view me-3"></i>{" "}
                                Timeline
                              </button>
                            </Link>
                          </div>
                          <div className="ms-auto text-start">
                            <Link to="/my_report">
                              <button className="btn btn-primary active mb-3">
                                <i className="ri-file-chart-line me-3"></i> My
                                Report
                              </button>
                            </Link>
                          </div>
                          <div className="ms-auto text-start">
                            <Link to="/student_report">
                              <button className="btn btn-primary active">
                                <i className="ri-group-line me-3"></i> Student
                                Report
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-9">
                        <div className="card-body pt-0">
                          <form
                            id="formAccountSettings"
                            method="GET"
                            onsubmit="return false"
                          >
                            <div className="row mt-1">
                              <h5 className="text-start">
                                {" "}
                                <i className="ri-user-line ri-ms me-2"></i>
                                Personal Information
                              </h5>
                              <div className="col-md-4">
                                <div className="form-floating form-floating-outline">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value=""
                                    placeholder="Name"
                                    required
                                  />
                                  <label htmlFor="firstName">
                                    {" "}
                                    <span className="text-danger">
                                      *
                                    </span> Name{" "}
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-floating form-floating-outline">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="email"
                                    name="email"
                                    value=""
                                    placeholder="E-mail"
                                    required
                                  />
                                  <label htmlFor="email">
                                    {" "}
                                    <span className="text-danger">
                                      *
                                    </span>E-mail{" "}
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="input-group input-group-merge">
                                  <div className="form-floating form-floating-outline">
                                    <input
                                      type="text"
                                      id="mobileNumber"
                                      name="mobileNumber"
                                      className="form-control"
                                      placeholder="Mobile Number"
                                      required
                                    />
                                    <label htmlFor="mobileNumber">
                                      <span className="text-danger">*</span>
                                      Mobile Number{" "}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 mt-5">
                                <div className="form-floating form-floating-outline">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="adharNumber"
                                    name="adharNumber"
                                    value=""
                                    placeholder="Adhar Number"
                                  />
                                  <label htmlFor="adharNumber">
                                    Adhar Number
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-4 mt-5">
                                <div className="form-floating form-floating-outline">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="pancardNumber"
                                    name="pancardNumber"
                                    value=""
                                    placeholder="Pancard Number"
                                  />
                                  <label htmlFor="pancardNumber">
                                    Pancard Number
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-4 mt-5">
                                <div className="form-floating form-floating-outline">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="tradingPower"
                                    name="tradingPower"
                                    value=""
                                    placeholder="Trading Power"
                                    required
                                  />
                                  <label htmlFor="tradingPower">
                                    <span className="text-danger">*</span>
                                    Trading Power{" "}
                                  </label>
                                </div>
                              </div>
                              <div className="mt-6 text-end">
                                <button
                                  type="submit"
                                  className="btn btn-primary active text-end me-3"
                                >
                                  <i className="ri-save-line me-3 ri-lg"></i>
                                  Save changes
                                </button>
                              </div>
                            </div>
                            <hr></hr>
                            <div className="row mb-3">
                              <h5 className="text-start">
                                {" "}
                                <i className="ri-group-line ri-ms me-2"></i>
                                Broker Information
                              </h5>

                              <div className="col-md-4">
                                <div className="form-floating form-floating-outline">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="brokerClientId"
                                    name="brokerClientId"
                                    placeholder="Broker Client ID"
                                  />
                                  <label htmlFor="brokerClientId">
                                    Broker Client ID
                                  </label>
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div className="form-floating form-floating-outline">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="brokerPassword"
                                    name="brokerPassword"
                                    placeholder="Broker Password"
                                  />
                                  <label htmlFor="brokerPassword">
                                    Broker Password
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-floating form-floating-outline">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="brokerQrTotpToken"
                                    name="brokerQrTotpToken"
                                    placeholder="Broker QR TOTP Token"
                                  />
                                  <label htmlFor="brokerQrTotpToken">
                                    Broker QR TOTP Token
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-4 mt-5">
                                <div className="form-floating form-floating-outline">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="brokerApiKey"
                                    name="brokerApiKey"
                                    placeholder="Broker API Key"
                                  />
                                  <label htmlFor="brokerApiKey">
                                    Broker API Key
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="mt-6 text-end">
                              <button
                                type="submit"
                                className="btn btn-primary active text-end me-3"
                              >
                                <i className="ri-save-line me-3 ri-lg"></i>Save
                                Information
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Profile;
