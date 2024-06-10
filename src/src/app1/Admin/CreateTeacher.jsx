import React from "react";
import AdminHeader from "./AdminHeader";
import Footer from "../component/Footer";
import AdminSubHeader from "./AdminSubHeader";
import { Link, useNavigate } from "react-router-dom";

const CreateTeacher = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <AdminHeader />
      <AdminSubHeader />

      <div className="container-xxl flex-grow-1 container-p-y">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-style1">
            <li className="breadcrumb-item">
              <Link to="/"> Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/admin/manage_teacher"> Manage Teacher</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Create Teacher
            </li>
          </ol>
        </nav>
        <div className="card p-5">
          <div className="row align-items-center">
            <div className="col text-start mb-5">
              <button onClick={handleBack} className="btn btn-transparent">
                Back
              </button>
            </div>
            <div className="col  text-start mb-5">
              <h5 className="mb-0">Create Teacher</h5>
            </div>
          </div>
          <div className="row">
            <h5 className="text-start">
              {" "}
              <i className="ri-user-line ri-ms me-2"></i>
              Personal Information
            </h5>
            <div className="col-12">
              <form
                id="formAccountSettings"
                method="GET"
                onsubmit="return false"
              >
                <div className="row mt-1">
                  <div className="col-3">
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
                        <span className="text-danger">*</span> Name{" "}
                      </label>
                    </div>
                  </div>
                  <div className="col-3">
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
                        <span className="text-danger">*</span>E-mail{" "}
                      </label>
                    </div>
                  </div>
                  <div className="col-3">
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
                  <div className="col-3  ">
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
                  <div className="col-3 mt-5">
                    <div className="form-floating form-floating-outline">
                      <input
                        className="form-control"
                        type="text"
                        id="adharNumber"
                        name="adharNumber"
                        value=""
                        placeholder="Adhar Number"
                      />
                      <label htmlFor="adharNumber">Adhar Number</label>
                    </div>
                  </div>
                  <div className="col-3 mt-5">
                    <div className="form-floating form-floating-outline">
                      <input
                        className="form-control"
                        type="text"
                        id="pancardNumber"
                        name="pancardNumber"
                        value=""
                        placeholder="Pancard Number"
                      />
                      <label htmlFor="pancardNumber">Pancard Number</label>
                    </div>
                  </div>
                  <div className="col-3 mt-5">
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
                        {" "}
                        <span className="text-danger">*</span>
                        Commission
                      </label>
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div className="row mb-3">
                  <h5 className="text-start">
                    {" "}
                    <i className="ri-group-line ri-ms me-2"></i>
                    Broker Information
                  </h5>

                  <div className="col-3">
                    <div className="form-floating form-floating-outline">
                      <input
                        type="text"
                        className="form-control"
                        id="brokerClientId"
                        name="brokerClientId"
                        placeholder="Broker Client ID"
                      />
                      <label htmlFor="brokerClientId"> Client ID</label>
                    </div>
                  </div>

                  <div className="col-3">
                    <div className="form-floating form-floating-outline">
                      <input
                        type="text"
                        className="form-control"
                        id="brokerPassword"
                        name="brokerPassword"
                        placeholder="Broker Password"
                      />
                      <label htmlFor="brokerPassword"> Password</label>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="form-floating form-floating-outline">
                      <input
                        type="text"
                        className="form-control"
                        id="brokerQrTotpToken"
                        name="brokerQrTotpToken"
                        placeholder="Broker QR TOTP Token"
                      />
                      <label htmlFor="brokerQrTotpToken">QR TOTP Token</label>
                    </div>
                  </div>
                  <div className="col-3  ">
                    <div className="form-floating form-floating-outline">
                      <input
                        type="text"
                        className="form-control"
                        id="brokerApiKey"
                        name="brokerApiKey"
                        placeholder="Broker API Key"
                      />
                      <label htmlFor="brokerApiKey"> API Key</label>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-end">
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
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CreateTeacher;
