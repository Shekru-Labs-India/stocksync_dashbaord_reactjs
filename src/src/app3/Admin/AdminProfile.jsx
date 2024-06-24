import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import Footer from "../component/Footer";
import AdminSubHeader from "./AdminSubHeader";
import { Link, useNavigate } from "react-router-dom";
import config from "../config";



import img from "../../app2/assets/img/avatars/1.png";
import background from "../../app2/assets/img/backgrounds/sharemarket.jpg";


const AdminProfile = () => {
  const [userData, setUserData] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [backClicked, setBackClicked] = useState(false);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userId = localStorage.getItem("userId");
       

        if (!userId) {
          console.error("User ID not found in localStorage");
          return;
        }

        const response = await fetch(
          `${config.apiDomain}/api/common/get_profile_details `,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ user_id: userId }),
          }
        );
        const data = await response.json();
        if (response.ok && data.st === 1) {
          setUserData(data.user);
        } else {
          console.error("Failed to fetch user profile:", data.message);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []); // Ensure the dependency array is empty

  const handleConnectionStatus = (status) => {
    console.log("Connection status:", status);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${config.apiDomain}/api/common/save_profile_details `,
        {
          user_id: localStorage.getItem('userId'),
          email: userData.email,
          mobile: userData.mobile,
          name: userData.name,
        }
      );

      if (response.data.st === 1) {
        console.log('Profile updated successfully:', response.data.msg);
        setSuccessMessage('Profile updated successfully!');
      } else {
        console.error('Failed to update user profile:', response.data.msg);
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  const handleBrokerInformation = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${config.apiDomain}/api/common/save_broker_details `, {
        user_id:  localStorage.getItem('userId'),
        broker_client_id: userData.broker_client_id,
        broker_password: userData.broker_password,
        broker_qr_totp_token: userData.broker_qr_totp_token,
        broker_api_key: userData.broker_api_key
      });
  
      console.log('Response:', response);
  
      if (response.data.st === 1) {
        console.log('Broker updated successfully:', response.data.msg);
        setSuccessMessage('Broker updated successfully!');
      } else {
        console.error('Failed to update Broker profile:', response.data.msg);
        // Handle error, show error message, etc.
      }
    } catch (error) {
      console.error('Error updating Broker profile:', error);
      if (error.response) {
        console.error('Response Data:', error.response.data);
      }
    }
  };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <AdminHeader />
      <AdminSubHeader />
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div className="layout-container">
          <div className="layout-page">
            <div className="content-wrapper">
              <div className="container flex-grow-1 container-p-y">
              <nav aria-label="breadcrumb">
  <ol className="breadcrumb breadcrumb-style1 text-secondary">
    <li className="breadcrumb-item">
      <Link to="/admin/dashboard" className="text-secondary">
      <i className="ri-home-5-line ri-lg"></i>
      </Link>
    </li>
   
    <li className="breadcrumb-item active text-secondary" aria-current="page">
   Profile
    </li>
  </ol>
</nav>

                <div className="container-xxl flex-grow-1 container-p-y">
                  <div className="row">
                    <div className="col-12">
                      <div className="card mb-6">
                        <div className="user-profile-header-banner">
                          <img
                            src={background}
                            alt="Banner image"
                            className="rounded-top"
                            style={{ maxWidth: "100%", height: "164px" }}
                          />
                        </div>
                        <div className="user-profile-header d-flex flex-column flex-lg-row text-sm-start text-center mb-4">
                          <div className="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
                            <img
                              src={img}
                              alt="user image"
                              className="d-block h-auto ms-0 ms-sm-5 rounded user-profile-img"
                            />
                          </div>
                          <div className="flex-grow-1 mt-3 mt-lg-5">
                            <div className="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-5 flex-md-row flex-column gap-4">
                              <div className="user-profile-info">
                                {userData ? (
                                  <>
                                     <h4 className="mb-2 mt-lg-6"> {capitalizeFirstLetter(userData.name)}</h4>
                                    <ul className="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-4">
                                      <li className="list-inline-item">
                                        <i className="ri-user-settings-line me-2 ri-24px"></i>
                                        <span className="fw-medium"> {capitalizeFirstLetter (userData.role)}</span>
                                      </li>
                                      <li className="list-inline-item">
                                        <i className="ri-mobile-download-line me-2 ri-24px"></i>
                                        <span className="fw-medium"> {userData.mobile}</span>
                                      </li>
                                      <li className="list-inline-item">
                                        <i className="ri-wallet-line me-2 ri-24px"></i>
                                        <span className="fw-medium"> Commission: {userData.commission}%</span>
                                      </li>
                                    </ul>
                                  </>
                                ) : (
                                  <p>Loading...</p>
                                )}
                              </div>
                              <div className="ms-auto">
                             
                             {userData && (
                              <button
                                className={`btn ${userData.broker_conn_status ? "btn-success" : ""}`}
                              >
                                {userData.broker_conn_status && (
                                  <>
                                    <i className="ri-shield-check-line me-1"></i>
                                    Connected
                                  </>
                                )}
                              </button>
                            )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            <div className="row">
              <div className="col-md-12">
                <div className="nav-align-top">
                  <ul className="nav nav-pills flex-column flex-sm-row mb-6 gap-2 gap-lg-0">
                    <li className="nav-item ">
                      <Link to="/admin/profile"className="nav-link active btn btn-primary" >
                        <i className="ri-user-3-line me-1_5"></i>Profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/report" className="nav-link" >
                        <i className="ri-team-line me-1_5"></i>Reports
                      </Link>
                    </li>
                    
                   
                  </ul>
                </div>
              </div>
            </div>
            {userData && (
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
                                    <strong>Name:</strong>
                                    <span className="ml-auto">
                                    {capitalizeFirstLetter(userData.name)}
                                    </span>
                                  </li>
                                  <li className="d-flex justify-content-between align-items-center mb-4">
                                    <strong>Role:</strong>
                                    <span className="ml-auto">  {capitalizeFirstLetter(userData.role)}</span>
                         
                                  
                                  </li>
                                  <li className="d-flex justify-content-between align-items-center mb-4">
                                    <strong>Broker Connection:</strong>
                                    <span className="text-success ml-auto">
                                    <div className="ms-auto">
                    
                        <div
                          className={`text-success ml-auto${
                            userData.broker_conn_status ? "btn-success" : "btn-danger"
                          }`}
                          onClick={() =>
                            handleConnectionStatus(!userData.broker_conn_status)
                          }
                        >
                         {" "}
                          {userData.broker_conn_status ? "Connected" : "Not Connected"}
                        </div>
                      
                    </div>
                                    </span>
                                  </li>
                                  <li className="d-flex justify-content-between align-items-center mb-4">
                                    <strong>Commission:</strong>
                                    <span className="ml-auto">{userData.commission}%</span>
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
                                    <strong>Email:</strong>
                                    <span className="ml-auto">
                                     {userData.email}
                                    </span>
                                  </li>
                                  <li className="d-flex justify-content-between align-items-center mb-4">
                                    <strong>Mobile:</strong>
                                    <span className="ml-auto">
                                      {userData.mobile}
                                    </span>
                                  </li>
                                 
                                </ul>
                                <hr />
                                <ul className="list-unstyled my-3 py-1">
                                  <li className="d-flex justify-content-between align-items-center mb-4">
                                    <strong>Trading Power:</strong>
                                    <span className="ml-auto fw-medium fs-5">
                                      {userData.trading_power}
                                    </span>
                                  </li>
                                </ul>
                            
                              </div>
                           
                            </div>
                          </div>
                          <div className="col-md-9">
                            <div className="card mt-1">
                              <div className="card-body pt-0">
                                <form
                                  id="formAccountSettings"
                                  method="POST"
                                  //   onSubmit={handleFormSubmit}
                                >
                                  <div className="row mt-3">
                                    
                                    <span className="fw-medium fs-5 text-start mb-5">
                                      {" "}
                                      <i className="ri-user-line ri-ms me-1 "></i>
                                       Personal Information
                                    </span>
                                    <div className="col-md-4">
                                <div className="input-group input-group-merge">
                                    <div className="form-floating form-floating-outline">
                                    <input
                                      className="form-control"
                                      type="text"
                                      id="name"
                                      name="name"
                                      value={userData.name}
                                      placeholder="Name"
                                      required
                                      onChange={handleChange}
                                   
                                     
                                    />
                                    <label htmlFor="name">
                                      {' '}
                                      <span className="text-danger">*</span> Name{' '}
                                    </label>
                                  </div>
                                </div>
                                </div>
                                <div className="col-md-4">
                                <div className="input-group input-group-merge">
                                    <div className="form-floating form-floating-outline">
                                    <input
                                      className="form-control"
                                      type="text"
                                      id="email"
                                      name="email"
                                      value={userData.email}
                                      placeholder="E-mail"
                                      required
                                      onChange={handleChange}
                                   
                                    />
                                    <label htmlFor="email">
                                      {' '}
                                      <span className="text-danger">*</span>E-mail{' '}
                                    </label>
                                  </div>
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
                                        value={userData.mobile}
                                        placeholder="Mobile Number"
                                        required
                                        onChange={handleChange}
                                      />
                                      <label htmlFor="mobile">
                                        <span className="text-danger">*</span>Mobile Number{' '}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                   
                                <div className="col-md-4 mt-5">
                                <div className="input-group input-group-merge">
                                    <div className="form-floating form-floating-outline">
                                    <input
                                      className="form-control"
                                      type="text"
                                      id="tradingPower"
                                      name="tradingPower"
                                      value={userData.trading_power}
                                      placeholder="Trading Power"
                                      required
                                      onChange={handleChange}
                                      // disabled
                                    />
                                    <label htmlFor="tradingPower">
                                      <span className="text-danger">*</span>Trading Power{' '}
                                    </label>
                                  </div>
                                  </div>
                                </div>
                              
                                <div className="mt-6 text-end">
                                <button
                                 onClick={handleSubmit}
                                  className="btn btn-primary active  text-end me-3"
                                >
                                  <i className="ri-save-line me-3 ri-lg"></i>Save Changes
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
                                <div className="input-group input-group-merge">
                                    <div className="form-floating form-floating-outline">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="broker_client_id"
                                      name="broker_client_id"
                                      placeholder="Broker Client ID"
                                      value={userData.broker_client_id }
                                      onChange={handleChange}
                                      // disabled
                                    />
                                    <label htmlFor="broker_client_id">Broker Client ID</label>
                                  </div>
                                  </div>
                                </div>

                                <div className="col-md-4">
                                <div className="input-group input-group-merge">
                                    <div className="form-floating form-floating-outline">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="brokerPassword"
                                      name="brokerPassword"
                                      placeholder="Broker Password"
                                      value={userData.broker_password || ''}
                                      onChange={handleChange}
                                     
                                    />
                                    <label htmlFor="brokerPassword">Broker Password</label>
                                  </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                <div className="input-group input-group-merge">
                                    <div className="form-floating form-floating-outline">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="broker_qr_totp_token"
                                      name="broker_qr_totp_token"
                                      value={userData.broker_qr_totp_token}
                                      placeholder="Broker QR TOTP Token"
                                      onChange={handleChange}
                                    />
                                    <label htmlFor="broker_qr_totp_token">Broker QR TOTP Token</label>
                                  </div>
                                  </div>
                                </div>
                                    <div className="col-md-4 mt-5">
                                  
                                <div className="input-group input-group-merge">
                                    <div className="form-floating form-floating-outline">
                                    <input
                                      type="text"
                                      className="form-control"
                                     
                                      name="broker_api_key"
                                      placeholder="Broker API Key"
                                      value={userData.broker_api_key}
                                      onChange={handleChange}
                                      autoComplete="broker_api_key"

                                 

                                    />
                                    <label htmlFor="broker_api_key">Broker API Key</label>
                                  </div>
                                  </div>
                                </div>
                              
                              </div>
                              <div className="mt-6 text-end">
                                <button
                      onClick={ handleBrokerInformation}
                                   className="btn btn-primary active  text-end me-3"
                                >
                                  <i className="ri-save-line me-3 ri-lg"></i> Save Changes
                                </button>
                               
                               
                              </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          {/* <div className="col-md-3">
                            <div className="card mb-6 ">
                              <div className="card-body pt-0">
                                <ul className="list-unstyled my-3 py-1">
                                  <li className="d-flex flex-column align-items-start mb-4">
                                    <span className="fw-medium fs-5">
                                      Overview
                                    </span>
                                  </li>
                                  <li className="d-flex flex-column align-items-start mb-4">
                                    <span>Last Login:{userData.last_login}</span>
                                  </li>
                                  <li className="d-flex flex-column align-items-start mb-4">
                                    <span>Account Created On:{userData.account_Created_on}</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div> */}
                        </div>
            )}
                      </div>
                   
                  
                
            
          
         
          <Footer></Footer>
        </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default AdminProfile;