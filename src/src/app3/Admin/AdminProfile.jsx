import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import Footer from "../component/Footer";
import AdminSubHeader from "./AdminSubHeader";
import { Link, useNavigate } from "react-router-dom";
import config from "../config";
import { Toast } from 'primereact/toast';


import img from "../../app2/assets/img/avatars/1.png";
import background from "../../app2/assets/img/backgrounds/sharemarket.jpg";


const AdminProfile = () => {
  const [userData, setUserData] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [backClicked, setBackClicked] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isTradingPowerEditable, setIsTradingPowerEditable] = useState(false);
  const toast = useRef(null);
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

    if (name === "lot_size_limit") {
      if (/^\d*$/.test(value)) { // Only allow digits
        if (parseInt(value, 10) > 5000) {
          setError('Maximum limit is 5000');
          setUserData({
            ...userData,
            [name]: 5000
          });
        } else {
          setError('');
          setUserData({
            ...userData,
            [name]: value
          });
        }
      } else {
        setError('Only digits are allowed');
      }
    } else {
      setUserData({
        ...userData,
        [name]: value
      });

      // If the "Trading Power" field is edited, set it as editable
      if (name === "tradingPower") {
        setIsTradingPowerEditable(true);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put(
        `${config.apiDomain}/api/common/save_profile_details`,
        {
          user_id: localStorage.getItem('userId'),
          email: userData.email,
          mobile: userData.mobile,
          name: userData.name,
          lot_size_limit: userData.lot_size_limit
        }
      );

      if (response.data.st === 1) {
        toast.current.show({ severity: 'success', summary: 'Success', detail: response.data.msg, life: 3000 });
      } else {
        toast.current.show({ severity: 'error', summary: 'Error', detail: response.data.msg, life: 3000 });
      }
    } catch (error) {
      toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error updating user profile', life: 3000 });
    } finally {
      setLoading(false);
    }
  };
  const handleBrokerInformation = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put(`${config.apiDomain}/api/common/save_broker_details `, {
        user_id:  localStorage.getItem('userId'),
        broker_client_id: userData.broker_client_id,
        broker_password: userData.broker_password,
        broker_qr_totp_token: userData.broker_qr_totp_token,
        broker_api_key: userData.broker_api_key
      });
  
      if (response.data.st === 1) {
        toast.current.show({ severity: 'success', summary: 'Success', detail: response.data.msg, life: 3000 });
      } else {
        toast.current.show({ severity: 'error', summary: 'Error', detail: response.data.msg, life: 3000 });
      }
    } catch (error) {
      toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error updating user profile', life: 3000 });
    } finally {
      setLoading(false);
    }
  };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <AdminHeader />
      <Toast ref={toast} position="top-right" />
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
      <i className="ri-home-7-line ri-lg"></i>
      </Link>
    </li>
   
    <li className="breadcrumb-item active text-secondary" aria-current="page">
   Profile
    </li>
  </ol>
</nav>

               
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
                                        <i className="ri-user-settings-line  ri-24px"></i>
                                        <span className="fw-medium"> {capitalizeFirstLetter (userData.role)}</span>
                                      </li>
                                      <li className="list-inline-item">
                                        <i className="ri-mobile-download-line  ri-24px"></i>
                                        <span className="fw-medium"> {userData.mobile}</span>
                                      </li>
                                      <li className="list-inline-item">
                                        <i className="ri-wallet-line  ri-24px"></i>
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
                              <span
                                className={`badge bg-success  ${userData.broker_conn_status ? "bg-success" : ""}`}
                                style={{ fontSize: '14px' }}
                              >
                                {userData.broker_conn_status && (
                                  <>
                                    <i className="ri-shield-check-line me-1"></i>
                                    Connected
                                  </>
                                )}
                              </span>
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
                            <div className="card mb-6 ">
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
            className={`text-success ml-auto ${
              userData.broker_conn_status ? 'text-success' : 'text-danger'
            }`}
            onClick={() => handleConnectionStatus(!userData.broker_conn_status)}
          >
            {  userData.broker_conn_status? (
              <><i className="ri-shield-check-line"></i> Connected</>
            ) : (
              <><i className="ri-close-large-line"></i>  Disconnected</>
            )}
          </div>
        </div>
      </span>
    </li>
                                  <li className="d-flex justify-content-between align-items-center mb-4">
                                    <strong>Commission:</strong>
                                    <span className="ml-auto">{userData.commission}%</span>
                                  </li>
                                  <li className="d-flex justify-content-between align-items-center mb-4">
  <strong>Broker Acc. Balance:</strong>
  <span className="ml-auto">{(userData.amount || 0).toFixed(2)} Rs.</span>
</li>
                                </ul>
                                <hr  />
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
                                    <strong>Lot Size Limit:</strong>
                                    <span className="ml-auto ">
                                      {userData.lot_size_limit} Lot
                                    </span>
                                  </li>
                                </ul>
                            
                              </div>
                           
                            </div>
                          </div>
                          <div className="col-md-9">
                            <div className="card ">
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
                                      <span className="text-danger">*</span> E-mail{' '}
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
                                        <span className="text-danger">*</span> Mobile Number{' '}
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
            id="lot_size_limit"
            name="lot_size_limit"
            value={userData.lot_size_limit || ''}
            placeholder="Lot Size Limit"
            required
            onChange={handleChange}
            onClick={() => setIsTradingPowerEditable(true)}
          />
          <label htmlFor="lot_size_limit">
            <span className="text-danger">* </span>Lot Size Limit{' '}
          </label>
          {error && <p className="text-danger">{error}</p>}
        </div>
      </div>
    </div>
    
                                <div className="mt-6 text-end">
                                {loading &&   <i className="ri-loader-line ri-lg me-1" ></i>
                                }
                                <button
                                 onClick={handleSubmit}
                                  className="btn btn-success rounded-pill  text-end me-3"
                                >
                                  <i className="ri-checkbox-circle-line ri-lg me-1"></i>Save data
                                </button>


         
                                <div className="mt-6 text-end">
                               
                               
                               
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
                                      disabled={userData.broker_conn_status}

                                      // disabled
                                    />
                                    <label htmlFor="broker_client_id"> <span className="text-danger">*</span> Broker Client ID</label>
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
                                      disabled={userData.broker_conn_status}

                                     
                                    />
                                    <label htmlFor="brokerPassword"> <span className="text-danger">*</span> Broker Password</label>
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
                                      disabled={userData.broker_conn_status}

                                    />
                                    <label htmlFor="broker_qr_totp_token"> <span className="text-danger">*</span> Broker QR TOTP Token</label>
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
                                      disabled={userData.broker_conn_status}

                                 

                                    />
                                    <label htmlFor="broker_api_key"> <span className="text-danger">*</span> Broker API Key</label>
                                  </div>
                                  </div>
                                </div>
                              
                              </div>
                              {!userData.broker_conn_status && (
                              <div className="mt-6 text-end">
                                  {loading &&   <i className="ri-loader-line ri-lg me-1" ></i>
                                }
                                <button
                      onClick={ handleBrokerInformation}
                                   className="btn btn-success rounded-pill  text-end me-3"
                                >
                                  <i className="ri-checkbox-circle-line ri-lg me-1"></i> Save Data
                                </button>
                             
                               
                              </div>
                              )}
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