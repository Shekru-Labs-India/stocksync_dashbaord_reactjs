import React from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import SubHeaderS from "./SubHeaderS";
import StudentHeader from "./StudentHeader";
import img from "../../app2/assets/img/avatars/1.png";

const Profile = () => {
  return (
    <>
      <StudentHeader />
      <SubHeaderS />
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div className="layout-container">
          <div className="layout-page">
            <div className="content-wrapper">
              <div className="container flex-grow-1 container-p-y">
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

                <div className="card position-relative overflow-hidden">
                  <div
                    className="position-absolute end-50 start-0 w-100"
                    style={{
                      height: "50%",
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                    }} // Change the color as needed
                  ></div>
                  <div
                    className="card-body d-flex flex-column justify-content-end"
                    style={{ zIndex: 1, height: "100%" }}
                  >
                    <div className="row">
                      <div className="col-lg-2 d-flex me-5 ">
                        <img src={img} alt="profile" className="w-auto m-3" />
                      </div>
                      <div className="col-lg-9 d-flex flex-column mt-auto ms-4">
                        <h4 className="m-3">Viraj Hole</h4>
                        <div className="d-flex flex-wrap">
                          <span className="m-3">
                            <i className="ri-user-settings-line me-1"></i>Role
                          </span>
                          <span className="m-3">
                            <i className="ri-mobile-download-line me-1"></i>{" "}
                            Mobile Number
                          </span>
                          <span className="m-3 text-success">
                            <i className="ri-shield-check-line me-1"></i>{" "}
                            Connected
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />
                <div className="card">
                  <div className="row">
                    <div className="card-body d-flex">
                      <div className="container">
                        <div className="col-12">
                          <button className="btn btn-primary">
                            {" "}
                            <i class="ri-account-circle-line me-1"></i>Profile
                          </button>
                          <button className="btn  ">
                            <i class="ri-group-line me-1"></i>Teams
                          </button>
                          <button className="btn  ">
                            <i class="ri-folder-settings-line me-1"></i>
                            Projects
                          </button>
                        </div>
                        <div className="row ">
                          <div className="col-md-3">
                            <div className="card mb-6 mt-5">
                              <div className="card-body pt-0">
                                <ul className="list-unstyled my-3 py-1">
                                  <li className="d-flex flex-column align-items-start mb-4">
                                    <span className="fw-medium fs-5">
                                      About
                                    </span>
                                  </li>
                                  <li className="d-flex justify-content-between align-items-center mb-4">
                                    <span>Name:</span>
                                    <strong className="ml-auto">
                                      Viraj Hole
                                    </strong>
                                  </li>
                                  <li className="d-flex justify-content-between align-items-center mb-4">
                                    <span>Role:</span>
                                    <strong className="ml-auto">Student</strong>
                                  </li>
                                  <li className="d-flex justify-content-between align-items-center mb-4">
                                    <span>Broker Connection:</span>
                                    <strong className="text-success ml-auto">
                                      Connected
                                    </strong>
                                  </li>
                                  <li className="d-flex justify-content-between align-items-center mb-4">
                                    <span>Commission:</span>
                                    <strong className="ml-auto">10%</strong>
                                  </li>
                                </ul>
                                <hr className="text-black" />
                                <ul className="list-unstyled my-3 py-1">
                                  <li className="d-flex flex-column align-items-start mb-4">
                                    <span className="fw-medium fs-5">
                                      Contacts
                                    </span>
                                  </li>
                                  <li className="d-flex justify-content-between align-items-center mb-4">
                                    <span>Email:</span>
                                    <strong className="ml-auto">
                                      virajhole@gmail.com
                                    </strong>
                                  </li>
                                  <li className="d-flex justify-content-between align-items-center mb-4">
                                    <span>Mobile:</span>
                                    <strong className="ml-auto">
                                      7774829155
                                    </strong>
                                  </li>
                                  <li className="d-flex justify-content-between align-items-center mb-4">
                                    <span>Aadhar Number:</span>
                                    <strong className="ml-auto">
                                      366587400900
                                    </strong>
                                  </li>
                                  <li className="d-flex justify-content-between align-items-center mb-4">
                                    <span>Pancard Number:</span>
                                    <strong className="ml-auto">
                                      BAPrh3654F
                                    </strong>
                                  </li>
                                </ul>
                                <hr />
                                <ul className="list-unstyled my-3 py-1">
                                  <li className="d-flex justify-content-between align-items-center mb-4">
                                    <span>Trading Power:</span>
                                    <strong className="ml-auto fw-medium fs-5">
                                      100
                                    </strong>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-9">
                            <div className="card mt-5">
                              <div className="card-body pt-0">
                                <form
                                  id="formAccountSettings"
                                  method="POST"
                                  //   onSubmit={handleFormSubmit}
                                >
                                  <div className="row mt-1">
                                    <h4 className="text-start">
                                      {" "}
                                      <i className="ri-user-line ri-ms mt-2"></i>
                                      Edit
                                    </h4>
                                    <span className="fw-medium fs-5 text-start mb-5">
                                      {" "}
                                      <i className="ri-user-line ri-ms  "></i>
                                      Personal Information
                                    </span>
                                    <div className="col-md-4">
                                      <div className="form-floating form-floating-outline">
                                        <input
                                          className="form-control"
                                          type="text"
                                          id="name"
                                          name="name"
                                          //   value={profile.name}
                                          //   onChange={handleInputChange}
                                          placeholder="Name"
                                          required
                                        />
                                        <label htmlFor="name">
                                          {" "}
                                          <span className="text-danger">
                                            *
                                          </span>{" "}
                                          Name{" "}
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
                                          //   value={profile.email}
                                          //   onChange={handleInputChange}
                                          placeholder="E-mail"
                                          required
                                        />
                                        <label htmlFor="email">
                                          {" "}
                                          <span className="text-danger">*</span>
                                          E-mail{" "}
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="input-group input-group-merge">
                                        <div className="form-floating form-floating-outline">
                                          <input
                                            type="text"
                                            id="mobile"
                                            name="mobile"
                                            className="form-control"
                                            // value={profile.mobile}
                                            // onChange={handleInputChange}
                                            placeholder="Mobile Number"
                                            required
                                          />
                                          <label htmlFor="mobile">
                                            <span className="text-danger">
                                              *
                                            </span>
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
                                          id="aadhar_number"
                                          name="aadhar_number"
                                          //   value={profile.aadhar_number}
                                          //   onChange={handleInputChange}
                                          placeholder="Adhar Number"
                                        />
                                        <label htmlFor="aadhar_number">
                                          Aadhar Number
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-4 mt-5">
                                      <div className="form-floating form-floating-outline">
                                        <input
                                          className="form-control"
                                          type="text"
                                          id="pancard_number"
                                          name="pancard_number"
                                          //   value={profile.pancard_number}
                                          //   onChange={handleInputChange}
                                          placeholder="Pancard Number"
                                        />
                                        <label htmlFor="pancard_number">
                                          Pancard Number
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-4 mt-5">
                                      <div className="form-floating form-floating-outline">
                                        <input
                                          type="text"
                                          id="trading_power"
                                          name="trading_power"
                                          className="form-control"
                                          //   value={profile.trading_power}
                                          //   onChange={handleInputChange}
                                          placeholder="Trading Power"
                                          required
                                        />
                                        <label htmlFor="trading_power">
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
                                          id="broker_client_id"
                                          name="broker_client_id"
                                          //   value={profile.broker_client_id}
                                          //   onChange={handleInputChange}
                                          placeholder=" Client ID"
                                          required
                                        />
                                        <label htmlFor="broker_client_id">
                                          <span className="text-danger">*</span>{" "}
                                          Client ID{" "}
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-4">
                                      <div className="form-floating form-floating-outline">
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="broker_password"
                                          name="broker_password"
                                          //   value={profile.broker_password}
                                          //   onChange={handleInputChange}
                                          placeholder="Password"
                                          required
                                        />
                                        <label htmlFor="broker_password">
                                          <span className="text-danger">*</span>{" "}
                                          Password{" "}
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="form-floating form-floating-outline">
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="broker_qr_totp_token"
                                          name="broker_qr_totp_token"
                                          //   value={profile.broker_qr_totp_token}
                                          //   onChange={handleInputChange}
                                          placeholder="QR TOTP Token"
                                          required
                                        />
                                        <label htmlFor="broker_qr_totp_token">
                                          <span className="text-danger">*</span>{" "}
                                          QR TOTP Token{" "}
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-4 mt-5">
                                      <div className="form-floating form-floating-outline">
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="broker_api_key"
                                          name="broker_api_key"
                                          //   value={profile.broker_api_key}
                                          //   onChange={handleInputChange}
                                          placeholder="API Key"
                                          required
                                        />
                                        <label htmlFor="broker_api_key">
                                          <span className="text-danger">*</span>{" "}
                                          API Key{" "}
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mt-6 text-end">
                                    <button
                                      type="submit"
                                      className="btn btn-primary active text-end me-3"
                                    >
                                      <i className="ri-save-line me-3 ri-lg"></i>
                                      Save Information
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="card mb-6 mt-5">
                              <div className="card-body pt-0">
                                <ul className="list-unstyled my-3 py-1">
                                  <li className="d-flex flex-column align-items-start mb-4">
                                    <span className="fw-medium fs-5">
                                      Overview
                                    </span>
                                  </li>
                                  <li className="d-flex flex-column align-items-start mb-4">
                                    <span>Last Login:</span>
                                  </li>
                                  <li className="d-flex flex-column align-items-start mb-4">
                                    <span>Account Created On: </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
