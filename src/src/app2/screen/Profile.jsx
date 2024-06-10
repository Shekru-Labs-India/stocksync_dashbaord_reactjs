

// import React, { useState, useEffect } from 'react';
//   import axios from 'axios';
// import Header from "../component/Header";
// import Footer from "../component/Footer";
// import SubHeader from "../component/SubHeader";
// import { Link, useNavigate } from "react-router-dom";

// const Profile = () => {
//   const navigate = useNavigate();


//   const handleBack = () => {
//     navigate(-1);
//   };
  

  
   
//   return (
//     <div>
//          <Header />
//           <SubHeader />
//       <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
//         <div className="layout-container">
       
//           <div className="layout-page">
//             <div className="content-wrapper">
//               <div className="container-xxl flex-grow-1 container-p-y">
//                 <nav aria-label="breadcrumb">
//                   <ol className="breadcrumb breadcrumb-style1">
//                     <li className="breadcrumb-item">
//                       <Link to="/"> Home</Link>
//                     </li>
//                     <li className="breadcrumb-item active" aria-current="page">
//                       Profile
//                     </li>
//                   </ol>
//                 </nav>
//                 <div className="card">
//                   <div className="card-body pt-0">
//                     <div className="row align-items-center">
//                       <div className="col text-start">
//                         <button onClick={handleBack} className="btn btn-transparent mt-3">
//                           Back
//                         </button>
//                       </div>
//                       <div className="col text-start">
//                         <h5 className="mb-0">Profile</h5>
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col-md-3">
//                         <div className="card mb-6 mt-5">
//                           <div className="card-body pt-0">
//                             <ul className="list-unstyled my-3 py-1">
//                               <li className="d-flex flex-column align-items-start mb-4">
                            
//                                 <span className="fw-medium fs-5">Pratiksha Shitole</span>
//                                 <span>Teacher</span>
//                               </li>
//                               <li className="d-flex flex-column align-items-start mb-4">
//                                 <span className="fw-medium text-success">Broker Connected</span>
//                                 <span>Wallet Balance:114.63 Rs.</span>
//                               </li>
//                               <li className="d-flex flex-column align-items-start mb-4">
//                                 <span>Commission: 10%</span>
                      //         </li>
                      //       </ul>
                      //     </div>
                      //   </div>
                      //   <div className="mb-5">
                      //     <div className="ms-auto text-start">
                      //       <Link to="/time_line">
                      //         <button className="btn btn-primary active mb-3">
                      //           <i className="ri-timeline-view me-3"></i> Timeline
                      //         </button>
                      //       </Link>
                      //     </div>
                      //     <div className="ms-auto text-start">
                      //       <Link to="/my_report">
                      //         <button className="btn btn-primary active mb-3">
                      //           <i className="ri-file-chart-line me-3"></i> My Report
                      //         </button>
                      //       </Link>
                      //     </div>
                      //     <div className="ms-auto text-start">
                      //       <Link to="/student_report">
                      //         <button className="btn btn-primary active">
                      //           <i className="ri-group-line me-3"></i> Student Report
                      //         </button>
                      //       </Link>
                      //     </div>
                      //   </div>
                      // </div>
//                       <div className="col-md-9">
//                         <div className="card-body pt-0">
//                           <form id="formAccountSettings" method="GET" onsubmit="return false">
//                             <div className="row mt-1">
//                             <h5 className="text-start"> <i className="ri-user-line ri-ms me-2"></i>Personal Information</h5>
//                               <div className="col-md-4">
//                                 <div className="form-floating form-floating-outline">
//                                   <input
//                                     className="form-control"
//                                     type="text"
//                                     id="firstName"
//                                     name="firstName"
//                                     value=""
//                                     placeholder="Name"
//                                     required
//                                   />
//                                   <label htmlFor="firstName">
//                                     {" "}
//                                     <span className="text-danger">*</span> Name{" "}
//                                   </label>
//                                 </div>
//                               </div>
//                               <div className="col-md-4">
//                                 <div className="form-floating form-floating-outline">
//                                   <input
//                                     className="form-control"
//                                     type="text"
//                                     id="email"
//                                     name="email"
//                                     value=""
//                                     placeholder="E-mail"
//                                     required
//                                   />
//                                   <label htmlFor="email">
//                                     {" "}
//                                     <span className="text-danger">*</span>E-mail{" "}
//                                   </label>
//                                 </div>
//                               </div>
//                               <div className="col-md-4">
//                                 <div className="input-group input-group-merge">
//                                   <div className="form-floating form-floating-outline">
//                                     <input
//                                       type="text"
//                                       id="mobileNumber"
//                                       name="mobileNumber"
//                                       className="form-control"
//                                       placeholder="Mobile Number"
//                                       required
//                                     />
//                                     <label htmlFor="mobileNumber">
//                                       <span className="text-danger">*</span>Mobile Number{" "}
//                                     </label>
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="col-md-4 mt-5">
//                                 <div className="form-floating form-floating-outline">
//                                   <input
//                                     className="form-control"
//                                     type="text"
//                                     id="adharNumber"
//                                     name="adharNumber"
//                                     value=""
//                                     placeholder="Adhar Number"
//                                   />
//                                   <label htmlFor="adharNumber">Adhar Number</label>
//                                 </div>
//                               </div>
//                               <div className="col-md-4 mt-5">
//                                 <div className="form-floating form-floating-outline">
//                                   <input
//                                     className="form-control"
//                                     type="text"
//                                     id="pancardNumber"
//                                     name="pancardNumber"
//                                     value=""
//                                     placeholder="Pancard Number"
//                                   />
//                                   <label htmlFor="pancardNumber">Pancard Number</label>
//                                 </div>
//                               </div>
//                               <div className="col-md-4 mt-5">
//                                 <div className="form-floating form-floating-outline">
//                                   <input
//                                     className="form-control"
//                                     type="text"
//                                     id="tradingPower"
//                                     name="tradingPower"
//                                     value=""
//                                     placeholder="Trading Power"
//                                     required
//                                   />
//                                   <label htmlFor="tradingPower">
//                                     <span className="text-danger">*</span>Trading Power{" "}
//                                   </label>
//                                 </div>
//                               </div>
//                               <div className="mt-6 text-end">
//                                 <button
//                                   type="submit"
//                                   className="btn btn-primary active text-end me-3"
//                                 >
//                                   <i className="ri-save-line me-3 ri-lg"></i>Save changes
//                                 </button>
//                               </div>
//                             </div>
//                             <hr></hr>
//                             <div className="row mb-3">
//                             <h5 className="text-start"> <i className="ri-group-line ri-ms me-2"></i>Broker Information</h5>

//                               <div className="col-md-4">
//                                 <div className="form-floating form-floating-outline">
//                                   <input
//                                     type="text"
//                                     className="form-control"
//                                     id="brokerClientId"
//                                     name="brokerClientId"
//                                     placeholder="Broker Client ID"
//                                   />
//                                   <label htmlFor="brokerClientId">Broker Client ID</label>
//                                 </div>
//                               </div>

//                               <div className="col-md-4">
//                                 <div className="form-floating form-floating-outline">
//                                   <input
//                                     type="text"
//                                     className="form-control"
//                                     id="brokerPassword"
//                                     name="brokerPassword"
//                                     placeholder="Broker Password"
//                                   />
//                                   <label htmlFor="brokerPassword">Broker Password</label>
//                                 </div>
//                               </div>
//                               <div className="col-md-4">
//                                 <div className="form-floating form-floating-outline">
//                                   <input
//                                     type="text"
//                                     className="form-control"
//                                     id="brokerQrTotpToken"
//                                     name="brokerQrTotpToken"
//                                     placeholder="Broker QR TOTP Token"
//                                   />
//                                   <label htmlFor="brokerQrTotpToken">Broker QR TOTP Token</label>
//                                 </div>
//                               </div>
//                               <div className="col-md-4 mt-5">
//                                 <div className="form-floating form-floating-outline">
//                                   <input
//                                     type="text"
//                                     className="form-control"
//                                     id="brokerApiKey"
//                                     name="brokerApiKey"
//                                     placeholder="Broker API Key"
//                                   />
//                                   <label htmlFor="brokerApiKey">Broker API Key</label>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="mt-6 text-end">
//                               <button
//                                 type="submit"
//                                 className="btn btn-primary active text-end me-3"
//                               >
//                                 <i className="ri-save-line me-3 ri-lg"></i>Save Information
//                               </button>
//                             </div>
//                           </form>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../component/Header";
import Footer from "../component/Footer";
import SubHeader from "../component/SubHeader";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  
  useEffect(() => {
    // Fetch user profile data when component mounts
    async function fetchUserProfile() {
      try {
        const user_id = localStorage.getItem('user_id');
        const response = await axios.post('http://192.46.212.210/api/common/get_profile_details', { user_id });
        if (response.data.st === 1) {
          setUserData(response.data.user);
        } else {
          console.error('Failed to fetch user profile:', response.data.msg);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    }

    fetchUserProfile();
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://192.46.212.210/api/common/save_profile_details', {
        user_id: localStorage.getItem('user_id'),
        email: userData.email,
        mobile: userData.mobile,
        name: userData.name,
        aadhar_number: userData.aadhar_number,
        pancard_number: userData.pancard_number,
        trading_power: userData.trading_power,
        broker_client_id: userData.broker_client_id,
        broker_password: userData.broker_password,
        broker_qr_totp_token: userData.broker_qr_totp_token,
        broker_api_key: userData.broker_api_key
      });

      if (response.data.st === 1) {
        console.log(' profile updated successfully:', response.data.msg);
      
        setSuccessMessage(' profile updated successfully!');
        // Optionally, update userData state or show a success message
      } else {
        console.error('Failed to update user profile:', response.data.msg);
        // Handle error, show error message, etc.
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

 
  const handleBrokerInformation = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://192.46.212.210/api/common/save_broker_details', {
        user_id: localStorage.getItem('user_id'),
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
                        <button onClick={handleBack} className="btn btn-transparent mt-3">
                          Back
                        </button>
                      </div>
                      <div className="col text-start">
                        <h5 className="mb-0">Profile</h5>
                      </div>
                    </div>
                    {userData && (
                      <div className="row">
                        <div className="col-md-3">
                          <div className="card mb-6 mt-5">
                            <div className="card-body pt-0">
                              <ul className="list-unstyled my-3 py-1">
                                <li className="d-flex flex-column align-items-start mb-4">
                                  <span className="fw-medium fs-5">{userData.name}</span>
                                  <span>{userData.role}</span>
                                </li>
                                <li className="d-flex flex-column align-items-start mb-4">
                                  <span className="fw-medium text-success">
                                    {userData.broker_conn_status ? 'Broker Disconnected' : 'Broker Connected'}
                                  </span>
                                  <span>Wallet Balance: {userData.amount} Rs.</span>
                                </li>
                                <li className="d-flex flex-column align-items-start mb-4">
                                  <span>Commission: {userData.commission}%</span>
                                  </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mb-5">
                          <div className="ms-auto text-start">
                            <Link to="/time_line">
                              <button className="btn btn-primary active mb-3">
                                <i className="ri-timeline-view me-3"></i> Timeline
                              </button>
                            </Link>
                          </div>
                          <div className="ms-auto text-start">
                            <Link to="/my_report">
                              <button className="btn btn-primary active mb-3">
                                <i className="ri-file-chart-line me-3"></i> My Report
                              </button>
                            </Link>
                          </div>
                          <div className="ms-auto text-start">
                            <Link to="/student_report">
                              <button className="btn btn-primary active">
                                <i className="ri-group-line me-3"></i> Student Report
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                        <div className="col-md-9">
                          <div className="card-body pt-0">
                            <form id="formAccountSettings" onSubmit={handleSubmit}>
                              <div className="row mt-1">
                                <h5 className="text-start">
                                  {' '}
                                  <i className="ri-user-line ri-ms me-2"></i>Personal Information
                                </h5>
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
                                      id="adharNumber"
                                      name="adharNumber"
                                      value={userData.aadhar_number}
                                      placeholder="Adhar Number"
                                      onChange={handleChange}
                                      // disabled
                                    />
                                    <label htmlFor="adharNumber">Adhar Number</label>
                                  </div>
                                </div>
                                </div>
                                <div className="col-md-4 mt-5">
                                <div className="input-group input-group-merge">
                                    <div className="form-floating form-floating-outline">
                                    <input
                                      className="form-control"
                                      type="text"
                                      id="pancardNumber"
                                      name="pancardNumber"
                                      value={userData.pancard_number }
                                      placeholder="Pancard Number"
                                      onChange={handleChange}
                                      // disabled
                                    />
                                    <label htmlFor="pancardNumber">Pancard Number</label>
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
                              </div>
                              <div className="mt-6 text-end">
                                <button
                                 onClick={handleSubmit}
                                  className="btn btn-info  text-end me-3"
                                >
                                  <i className="ri-save-line me-3 ri-lg"></i>Save Changes
                                </button>
                                {successMessage && <div className="success-message">{successMessage}</div>}
                              </div>
                              <hr></hr>
                              <div className="row mb-3">
                                <h5 className="text-start">
                                  {' '}
                                  <i className="ri-group-line ri-ms me-2"></i>Broker Information
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
                                      // disabled
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
                                   className="btn btn-info  text-end me-3"
                                >
                                  <i className="ri-save-line me-3 ri-lg"></i> Save Changes
                                </button>
                                {successMessage && <div className="success-message">{successMessage}</div>}
                               
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    )}
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
