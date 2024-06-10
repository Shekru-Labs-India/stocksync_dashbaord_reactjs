import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import Footer from "../component/Footer";
import AdminSubHeader from "./AdminSubHeader";
import { Link, useNavigate } from "react-router-dom";

const AdminProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    mobile: "",
    aadhar_number: "",
    pancard_number: "",
    trading_power: "",
    broker_client_id: "",
    broker_password: "",
    broker_qr_totp_token: "",
    broker_api_key: "",
    broker_conn_status: false,
    commission: "",
  });

  const [userId, setUserId] = useState(null);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    // const storedUserId = localStorage.getItem("user_id");
    const storedUserId = "44";
    if (storedUserId) {
      setUserId(storedUserId);
    }

    const fetchProfileDetails = async () => {
      if (!storedUserId) return;

      try {
        const response = await axios.post(
          "http://192.46.212.210/api/common/get_profile_details",
          {
            user_id: storedUserId,
          }
        );

        if (response.data.st === 1) {
          const user = response.data.user;
          setProfile({
            name: user.name || "",
            email: user.email || "",
            mobile: user.mobile || "",
            aadhar_number: user.aadhar_number || "",
            pancard_number: user.pancard_number || "",
            trading_power: user.trading_power || "",
            broker_client_id: user.broker_client_id || "",
            broker_password: user.broker_password || "",
            broker_qr_totp_token: user.broker_qr_totp_token || "",
            broker_api_key: user.broker_api_key || "",
            broker_conn_status: user.broker_conn_status || false,
            commission: user.commission || "",
          });
        }
      } catch (error) {
        console.error("Error fetching profile details:", error);
      }
    };

    fetchProfileDetails();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://192.46.212.210/api/common/save_profile_details",
        {
          user_id: userId,
          email: profile.email,
          mobile: profile.mobile,
          name: profile.name,
          aadhar_number: profile.aadhar_number,
          pancard_number: profile.pancard_number,
          trading_power: profile.trading_power,
          broker_client_id: profile.broker_client_id,
          broker_password: profile.broker_password,
          broker_qr_totp_token: profile.broker_qr_totp_token,
          broker_api_key: profile.broker_api_key,
        }
      );

      if (response.data.st === 1) {
        alert("Personal information updated successfully.");
      } else {
        alert("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile details:", error);
      alert("An error occurred while updating the profile.");
    }
  };

  return (
    <div>
      <AdminHeader />
      <AdminSubHeader />
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
                        <h5 className="mb-0">Admin Profile</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="card mb-6 mt-5">
                          <div className="card-body pt-0">
                            <ul className="list-unstyled my-3 py-1">
                              <li className="d-flex flex-column align-items-start mb-4">
                                <span className="fw-medium fs-5">
                                  {profile.name}
                                </span>
                                <span>Student</span>
                              </li>
                              <li className="d-flex flex-column align-items-start mb-4">
                                <span
                                  className={`fw-medium ${
                                    profile.broker_conn_status
                                      ? "text-success"
                                      : "text-danger"
                                  }`}
                                >
                                  Broker is{" "}
                                  {profile.broker_conn_status
                                    ? "Connected"
                                    : "Not Connected"}
                                </span>
                              </li>
                              <li className="d-flex flex-column align-items-start mb-4">
                                <span>Commission: {profile.commission}%</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mb-5">
                          <div className="col-12 ms-auto text-start">
                            <Link to="/admin/teacher_list">
                              <button className="btn btn-info active mb-3">
                                <i class="ri-group-line me-3"></i> Teacher List
                              </button>
                            </Link>
                          </div>
                          <div className="col-12 ms-auto text-start">
                            <Link to="/admin/my_report">
                              <button className="btn btn-primary active mb-3">
                                <i className="ri-file-chart-line me-3"></i> My
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
                            method="POST"
                            onSubmit={handleFormSubmit}
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
                                    id="name"
                                    name="name"
                                    value={profile.name}
                                    onChange={handleInputChange}
                                    placeholder="Name"
                                    required
                                  />
                                  <label htmlFor="name">
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
                                    value={profile.email}
                                    onChange={handleInputChange}
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
                                      id="mobile"
                                      name="mobile"
                                      className="form-control"
                                      value={profile.mobile}
                                      onChange={handleInputChange}
                                      placeholder="Mobile Number"
                                      required
                                    />
                                    <label htmlFor="mobile">
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
                                    id="aadhar_number"
                                    name="aadhar_number"
                                    value={profile.aadhar_number}
                                    onChange={handleInputChange}
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
                                    value={profile.pancard_number}
                                    onChange={handleInputChange}
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
                                    value={profile.trading_power}
                                    onChange={handleInputChange}
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
                                    value={profile.broker_client_id}
                                    onChange={handleInputChange}
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
                                    value={profile.broker_password}
                                    onChange={handleInputChange}
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
                                    value={profile.broker_qr_totp_token}
                                    onChange={handleInputChange}
                                    placeholder="QR TOTP Token"
                                    required
                                  />
                                  <label htmlFor="broker_qr_totp_token">
                                    <span className="text-danger">*</span> QR
                                    TOTP Token{" "}
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
                                    value={profile.broker_api_key}
                                    onChange={handleInputChange}
                                    placeholder="API Key"
                                    required
                                  />
                                  <label htmlFor="broker_api_key">
                                    <span className="text-danger">*</span> API
                                    Key{" "}
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

export default AdminProfile;
