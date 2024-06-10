import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SubHeader from "../component/SubHeader";
import { Link, useNavigate } from "react-router-dom";
const UpdateStudent = () => {
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
         
          <div className="Container">
            <div className="container-xxl flex-grow-1 container-p-y">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-style1">
                 
                  <li className="breadcrumb-item">
                    <Link to="/"> Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/manage_student">Manage Student</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">Update Student</li>
                </ol>
              </nav>
              <div className="row">
                <div className="col-md-12">
                  <div className="card mb-6">
                  <div className="d-flex justify-content-between align-items-center card-header">
                  <button onClick={handleBack} className="btn btn-transparent">
                  Back
                </button>
                <h5 className="text-center mb-0 flex-grow-1">Update Student</h5>
                </div>
                    <div className="card-body pt-0">
                      <form id="formAccountSettings" method="GET" onSubmit={() => false}>
                        <div className="row mt-1 g-3">
                          <div className="col-md-3">
                            <div className="form-floating form-floating-outline">
                              <input
                                className="form-control"
                                type="text"
                                id="firstName"
                                name="firstName"
                                
                               placeholder="Name"
                              />
                              <label htmlFor="firstName"> <span className="text-danger">*</span> Name</label>
                            </div>
                          </div>
                          <div className="col-md-3">
                          <div className="input-group input-group-merge">
                              <div className="form-floating form-floating-outline">
                                <input
                                  type="text"
                                  id="mobileNumber"
                                  name="mobileNumber"
                                  className="form-control"
                                  placeholder="202 555 0111"
                                />
                                <label htmlFor="mobileNumber"> <span className="text-danger">*</span>Mobile Number</label>
                              </div>
                     
                            </div>
                          
                           
                          </div>
                          <div className="col-md-3">
                            <div className="form-floating form-floating-outline">
                              <input
                                className="form-control"
                                type="text"
                                id="email"
                                name="email"
                                value=""
                                placeholder="john.doe@example.com"
                              />
                              <label htmlFor="email"> <span className="text-danger">*</span>E-mail</label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-floating form-floating-outline">
                              <input
                                type="text"
                                className="form-control"
                                id="tradingPower"
                                name="tradingPower"
                                value=""
                                placeholder="Trading Power"
                              />
                              <label htmlFor="tradingPower"> <span className="text-danger">*</span>Trading Power</label>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-3 g-3">
                          <div className="col-md-3">
                            <div className="form-floating form-floating-outline">
                              <input
                                type="text"
                                className="form-control"
                                id="adharNumber"
                                name="adharNumber"
                                placeholder="Aadhar Number"
                              />
                              <label htmlFor="adharNumber">Aadhar Number</label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-floating form-floating-outline">
                              <input
                                type="text"
                                className="form-control"
                                id="pancardNumber"
                                name="pancardNumber"
                                placeholder="Pancard Number"
                              />
                              <label htmlFor="pancardNumber">Pancard Number</label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-floating form-floating-outline">
                              <input
                                type="text"
                                className="form-control"
                                id="commission"
                                name="commission"
                                placeholder="Commission"
                              />
                              <label htmlFor="commission"> <span className="text-danger">*</span>Commission</label>
                            </div>
                          </div>
                         
                        </div>
                       
                            <hr></hr>


                            <div className="row mt-3 g-3">
                          <div className="col-md-3">
                            <div className="form-floating form-floating-outline">
                              <input
                                type="text"
                                className="form-control"
                                id="brokerClientId"
                                name="brokerClientId"
                                placeholder="Broker Client ID"
                              />
                              <label htmlFor="brokerClientId">Broker Client ID</label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-floating form-floating-outline">
                              <input
                                type="text"
                                className="form-control"
                                id="brokerPassword"
                                name="brokerPassword"
                                placeholder="Broker Password"
                              />
                              <label htmlFor="brokerPassword">Broker Password</label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-floating form-floating-outline">
                              <input
                                type="text"
                                className="form-control"
                                id="brokerQrTotpToken"
                                name="brokerQrTotpToken"
                                placeholder="Broker QR TOTP Token"
                              />
                              <label htmlFor="brokerQrTotpToken">Broker QR TOTP Token</label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-floating form-floating-outline">
                              <input
                                type="text"
                                className="form-control"
                                id="brokerApiKey"
                                name="brokerApiKey"
                                placeholder="Broker API Key"
                              />
                              <label htmlFor="brokerApiKey">Broker API Key</label>
                            </div>
                          </div>
                        </div>
                       

                            <div class="mt-6 text-end">
                              <button
                                type="submit"
                                class="btn btn-success  text-end me-3"
                              >
                                <i class="ri-verified-badge-line ri-lg me-2 "></i>Update Record
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
  );
};

export default UpdateStudent;
