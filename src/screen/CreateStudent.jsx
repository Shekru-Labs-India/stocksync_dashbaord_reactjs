// import React from "react";
// import Header from "../component/Header";
// import Footer from "../component/Footer";
// import SubHeader from "../component/SubHeader";
// import { Link, useNavigate } from "react-router-dom";
// const CreateStudent = () => {
//     const navigate = useNavigate();
//     const handleBack = () => {
//         navigate(-1);
//       };

//   return (
//     <div>
//       <Header />
//           <SubHeader />
//       <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
//         <div className="layout-container">
          
//           <div className="Container">
//             <div className="container-xxl flex-grow-1 container-p-y">
//             <nav aria-label="breadcrumb">
//                 <ol className="breadcrumb breadcrumb-style1">
                 
//                   <li className="breadcrumb-item">
//                     <Link to="/"> Home</Link>
//                   </li>
//                   <li className="breadcrumb-item">
//                     <Link to="/manage_student">Manage Student</Link>
//                   </li>
//                   <li className="breadcrumb-item active" aria-current="page">Create Student</li>
//                 </ol>
//               </nav>
//               <div className="row">
//                 <div className="col-md-12">
//                   <div className="card mb-6">
//                   <div className="d-flex justify-content-between align-items-center card-header">
//                   <button onClick={handleBack} className="btn btn-transparent">
//                   Back
//                 </button>
//                 <h5 className="text-center mb-0 flex-grow-1">Create Student</h5>
//                 </div>
//                     <div className="card-body pt-0">
//                       <form id="formAccountSettings" method="GET" onSubmit={() => false}>
//                         <div className="row mt-1 g-3">
//                           <div className="col-md-3">
//                             <div className="form-floating form-floating-outline">
//                               <input
//                                 className="form-control"
//                                 type="text"
//                                 id="firstName"
//                                 name="firstName"
//                                 value=""
//                                placeholder="Name"
//                               />
//                               <label htmlFor="firstName"> <span className="text-danger">*</span> Name</label>
//                             </div>
//                           </div>
//                           <div className="col-md-3">
//                           <div className="input-group input-group-merge">
//                               <div className="form-floating form-floating-outline">
//                                 <input
//                                   type="text"
//                                   id="mobileNumber"
//                                   name="mobileNumber"
//                                   className="form-control"
//                                   placeholder="202 555 0111"
//                                 />
//                                 <label htmlFor="mobileNumber"> <span className="text-danger">*</span>Mobile Number</label>
//                               </div>
                     
//                             </div>
                          
                           
//                           </div>
//                           <div className="col-md-3">
//                             <div className="form-floating form-floating-outline">
//                               <input
//                                 className="form-control"
//                                 type="text"
//                                 id="email"
//                                 name="email"
//                                 value=""
//                                 placeholder="john.doe@example.com"
//                               />
//                               <label htmlFor="email"> <span className="text-danger">*</span>E-mail</label>
//                             </div>
//                           </div>
//                           <div className="col-md-3">
//                             <div className="form-floating form-floating-outline">
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 id="tradingPower"
//                                 name="tradingPower"
//                                 value=""
//                                 placeholder="Trading Power"
//                               />
//                               <label htmlFor="tradingPower"> <span className="text-danger">*</span>Trading Power</label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="row mt-3 g-3">
//                           <div className="col-md-3">
//                             <div className="form-floating form-floating-outline">
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 id="adharNumber"
//                                 name="adharNumber"
//                                 placeholder="Aadhar Number"
//                               />
//                               <label htmlFor="adharNumber">Aadhar Number</label>
//                             </div>
//                           </div>
//                           <div className="col-md-3">
//                             <div className="form-floating form-floating-outline">
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 id="pancardNumber"
//                                 name="pancardNumber"
//                                 placeholder="Pancard Number"
//                               />
//                               <label htmlFor="pancardNumber">Pancard Number</label>
//                             </div>
//                           </div>
//                           <div className="col-md-3">
//                             <div className="form-floating form-floating-outline">
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 id="commission"
//                                 name="commission"
//                                 placeholder="Commission"
//                               />
//                               <label htmlFor="commission"> <span className="text-danger">*</span>Commission</label>
//                             </div>
//                           </div>
                         
//                         </div>
                       
//                             <hr></hr>


//                             <div className="row mt-3 g-3">
//                           <div className="col-md-3">
//                             <div className="form-floating form-floating-outline">
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 id="brokerClientId"
//                                 name="brokerClientId"
//                                 placeholder="Broker Client ID"
//                               />
//                               <label htmlFor="brokerClientId">Broker Client ID</label>
//                             </div>
//                           </div>
//                           <div className="col-md-3">
//                             <div className="form-floating form-floating-outline">
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 id="brokerPassword"
//                                 name="brokerPassword"
//                                 placeholder="Broker Password"
//                               />
//                               <label htmlFor="brokerPassword">Broker Password</label>
//                             </div>
//                           </div>
//                           <div className="col-md-3">
//                             <div className="form-floating form-floating-outline">
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 id="brokerQrTotpToken"
//                                 name="brokerQrTotpToken"
//                                 placeholder="Broker QR TOTP Token"
//                               />
//                               <label htmlFor="brokerQrTotpToken">Broker QR TOTP Token</label>
//                             </div>
//                           </div>
//                           <div className="col-md-3">
//                             <div className="form-floating form-floating-outline">
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 id="brokerApiKey"
//                                 name="brokerApiKey"
//                                 placeholder="Broker API Key"
//                               />
//                               <label htmlFor="brokerApiKey">Broker API Key</label>
//                             </div>
//                           </div>
//                         </div>
                       

//                             <div class="mt-6 text-end">
//                               <button
//                                 type="submit"
//                                 class="btn btn-success  text-end me-3"
//                               >
//                                 <i class="ri-save-line me-3 ri-lg"></i>Create Record
//                               </button>
//                             </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CreateStudent;


import React, { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SubHeader from "../component/SubHeader";
import { Link, useNavigate } from "react-router-dom";

const CreateStudent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    teacher_id: localStorage.getItem("user_id"),
    name: "",
    mobile: "",
    email: "",
    tradingPower: "",
    adharNumber: "",
    pancardNumber: "",
    commission: "",
    brokerClientId: "",
    brokerPassword: "",
    brokerQrTotpToken: "",
    brokerApiKey: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://192.46.212.210/api/teacher/manage_students/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();
      if (response.ok && data.st === 1) {
        // Navigate back to manage student page or handle success
        navigate("/manage_student");
      } else {
        console.error(data.message || "Failed to create student");
      }
    } catch (error) {
      console.error("Network error", error);
    }
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
                  <li className="breadcrumb-item active" aria-current="page">
                    Create Student
                  </li>
                </ol>
              </nav>
              <div className="row">
                <div className="col-md-12">
                  <div className="card mb-6">
                    <div className="d-flex justify-content-between align-items-center card-header">
                      <button onClick={handleBack} className="btn btn-transparent">
                        Back
                      </button>
                      <h5 className="text-center mb-0 flex-grow-1">Create Student</h5>
                    </div>
                    <div className="card-body pt-0">
                      <form id="formAccountSettings" onSubmit={handleSubmit}>
                        <div className="row mt-1 g-3">
                          <div className="col-md-3">
                            <div className="form-floating form-floating-outline">
                              <input
                                className="form-control"
                                type="text"
                                id="firstName"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                                required
                              />
                              <label htmlFor="firstName">
                                <span className="text-danger">*</span> Name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-floating form-floating-outline">
                              <input
                                type="text"
                                id="mobileNumber"
                                name="mobile"
                                className="form-control"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                placeholder="202 555 0111"
                                required
                              />
                              <label htmlFor="mobileNumber">
                                <span className="text-danger">*</span> Mobile Number
                              </label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-floating form-floating-outline">
                              <input
                                className="form-control"
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="john.doe@example.com"
                                required
                              />
                              <label htmlFor="email">
                                <span className="text-danger">*</span> E-mail
                              </label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-floating form-floating-outline">
                              <input
                                type="text"
                                className="form-control"
                                id="tradingPower"
                                name="tradingPower"
                                value={formData.tradingPower}
                                onChange={handleInputChange}
                                placeholder="Trading Power"
                                required
                              />
                              <label htmlFor="tradingPower">
                                <span className="text-danger">*</span> Trading Power
                              </label>
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
                                value={formData.adharNumber}
                                onChange={handleInputChange}
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
                                value={formData.pancardNumber}
                                onChange={handleInputChange}
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
                                value={formData.commission}
                                onChange={handleInputChange}
                                placeholder="Commission"
                                required
                              />
                              <label htmlFor="commission">
                                <span className="text-danger">*</span> Commission
                              </label>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row mt-3 g-3">
                          <div className="col-md-3">
                            <div className="form-floating form-floating-outline">
                              <input
                                type="text"
                                className="form-control"
                                id="brokerClientId"
                                name="brokerClientId"
                                value={formData.brokerClientId}
                                onChange={handleInputChange}
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
                                value={formData.brokerPassword}
                                onChange={handleInputChange}
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
                                value={formData.brokerQrTotpToken}
                                onChange={handleInputChange}
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
                                value={formData.brokerApiKey}
                                onChange={handleInputChange}
                                placeholder="Broker API Key"
                              />
                              <label htmlFor="brokerApiKey">Broker API Key</label>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 text-end">
                          <button
                            type="submit"
                            className="btn btn-success text-end me-3"
                          >
                            <i className="ri-save-line me-3 ri-lg"></i>
                            Create Record
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

export default CreateStudent;
