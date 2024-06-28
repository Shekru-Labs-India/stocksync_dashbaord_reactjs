
// import React, { useEffect, useState } from "react";
// import { useParams, useLocation,Link,useNavigate } from "react-router-dom";
// import axios from "axios";
// import config from "../config";
// import AdminHeader from "./AdminHeader";
// import Footer from "../component/Footer";
// import AdminSubHeader from "./AdminSubHeader";

// const UpdateTeacher = () => {
//   const [backClicked, setBackClicked] = useState(false);
//   const { id } = useParams();
//   const location = useLocation();
//   const teacherData = location.state;
//   const navigate = useNavigate();
//   const [teacher, setTeacher] = useState(teacherData);
//   const [name, setName] = useState(teacher.name || "");
//   const [mobile, setMobile] = useState(teacher.mobile || "");
 
//   const [email, setEmail] = useState(teacher.email || "");
//   const [commission, setCommission] = useState(teacher.commission || "");
//   const [tradingPower, setTradingPower] = useState(teacher.trading_power || "");
  
//   const [brokerClientId, setBrokerClientId] = useState(teacher.broker_client_id || "");
//   const [brokerPassword, setBrokerPassword] = useState(teacher.broker_password || "");
//   const [brokerQrTotpToken, setBrokerQrTotpToken] = useState(teacher.broker_qr_totp_token || "");
//   const [brokerApiKey, setBrokerApiKey] = useState(teacher.broker_api_key || "");
//   useEffect(() => {
//     if (!teacher) {
//       fetchTeacher();
//     }
//   }, [teacher]);

//   const fetchTeacher = async () => {
//     try {
//       const response = await axios.get(
//         `${config.apiDomain}/api/admin/get_teacher/${id}`
//       );
//       if (response.data && response.data.st === 1) {
//         setTeacher(response.data.data);
//         setName(response.data.data.name);
//         setEmail(response.data.data.email);
//         setTradingPower(response.data.data.trading_power);
//         setCommission(response.data.data.commission);
//         setBrokerClientId(response.data.data.broker_client_id);
//         setBrokerPassword(response.data.data.broker_password);
//         setBrokerQrTotpToken(response.data.data.broker_qr_totp_token);
//         setBrokerApiKey(response.data.data.broker_api_key);
       
//       } else {
//         console.error("Failed to fetch teacher data");
//       }
//     } catch (error) {
//       console.error("Error fetching teacher data", error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(
//         `${config.apiDomain}/api/teacher/manage_students/update`,
//         {
//           student_id:id,
//           name,
//           mobile,
//        email,
//        commission,
//       tradingPower,
//       brokerApiKey,
//       brokerClientId,
//       brokerQrTotpToken
     
//         }
//       );
//       if (response.data && response.data.st === 1) {
//         alert("Teacher updated successfully");
//         navigate("/admin/manage_teacher");
//       } else {
//         alert("Failed to update teacher");
//       }
//     } catch (error) {
//       console.error("Error updating teacher", error);
//       alert("Network error");
//     }
//   };

//   const handleBack = () => {
//     if (!backClicked) {
//       setBackClicked(true);
//       navigate(-1);
//     }
//   };
//   return (
//     <>
//       <AdminHeader />
//       <AdminSubHeader />
//       <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
//         <div className="layout-container">
//           <div className="Container">
//             <div className="container-xxl flex-grow-1 container-p-y">
              // <nav aria-label="breadcrumb">
              //   <ol className="breadcrumb breadcrumb-style1">
              //     <li className="breadcrumb-item">
              //     <Link to="/admin/dashboard" className="text-secondary">
              //   <i className="ri-home-5-line ri-lg"></i>
              // </Link>
              //     </li>
              //     <li className="breadcrumb-item">
              //       <Link to="/admin/manage_teacher">Manage Teacher</Link>
              //     </li>
              //     <li className="breadcrumb-item active" aria-current="page">Update Teacher</li>
              //   </ol>
              // </nav>
//               <div className="row">
//                 <div className="col-md-12">
//                   <div className="card mb-6">
//                     <div className="d-flex justify-content-between align-items-center card-header">
//                     <button
//                 onClick={handleBack}
//                 className="btn rounded-pill btn-outline-secondary btn-xs"
//               >
//                 <i className="ri-arrow-left-circle-fill me-1 ri-md"></i> Back
//               </button>
//                       <h5 className="text-center mb-0 flex-grow-1">Update Teacher</h5>
//                     </div>
//                     <div className="card-body pt-0">
                    
         

//           <form onSubmit={handleSubmit}>
//           <div className="row mt-1 g-3">
//                           <div className="col-md-3">
//                             <div className="form-floating form-floating-outline">
//                               <input
//                                 className="form-control"
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 placeholder="Name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 required
//                               />
//                               <label htmlFor="name"><span className="text-danger">*</span> Name</label>
//                             </div>
//                           </div>
//                           <div className="col-md-3">
//                             <div className="input-group input-group-merge">
//                               <div className="form-floating form-floating-outline">
//                                 <input
//                                   type="text"
//                                   id="mobileNumber"
//                                   name="mobileNumber"
//                                   className="form-control"
//                                   placeholder="202 555 0111"
//                                   value={mobile}
//                                   onChange={(e) => setMobile(e.target.value)}
//                                   required
//                                 />
//                                 <label htmlFor="mobileNumber"><span className="text-danger">*</span> Mobile Number</label>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-md-3">
//                             <div className="form-floating form-floating-outline">
//                               <input
//                                 className="form-control"
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 placeholder="john.doe@example.com"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                               />
//                               <label htmlFor="email"><span className="text-danger">*</span> E-mail</label>
//                             </div>
//                           </div>
//                           <div className="col-md-3">
//                             <div className="form-floating form-floating-outline">
//                               <input
//                                 type="number"
//                                 className="form-control"
//                                 id="tradingPower"
//                                 name="tradingPower"
//                                 placeholder="Trading Power"
//                                 value={tradingPower}
//                                 onChange={(e) => setTradingPower(e.target.value)}
//                                 required
//                               />
//                               <label htmlFor="tradingPower"><span className="text-danger">*</span> Trading Power</label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="row mt-3 g-3">
                        
                         
//                           <div className="col-md-3">
//                             <div className="form-floating form-floating-outline">
//                               <input
//                                 type="number"
//                                 className="form-control"
//                                 id="commission"
//                                 name="commission"
//                                 placeholder="Commission"
//                                 value={commission}
//                                 onChange={(e) => setCommission(e.target.value)}
//                                 required
//                               />
//                               <label htmlFor="commission"><span className="text-danger">*</span> Commission</label>
//                             </div>
//                           </div>
//                         </div>
//                         <hr />
//                         <div className="row mt-3 g-3">
//                           <div className="col-md-3">
//                             <div className="form-floating form-floating-outline">
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 id="brokerClientId"
//                                 name="brokerClientId"
//                                 placeholder="Broker Client ID"
//                                 value={brokerClientId}
//                                 onChange={(e) => setBrokerClientId(e.target.value)}
//                               />
//                               <label htmlFor="brokerClientId">Broker Client ID</label>
//                             </div>
//                           </div>
//                           <div className="col-md-3">
//                             <div className="form-floating form-floating-outline">
//                               <input
//                                 type="password"
//                                 className="form-control"
//                                 id="brokerPassword"
//                                 name="brokerPassword"
//                                 placeholder="Broker Password"
//                                 value={brokerPassword}
//                                 onChange={(e) => setBrokerPassword(e.target.value)}
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
//                                 placeholder="Broker QR Totp Token"
//                                 value={brokerQrTotpToken}
//                                 onChange={(e) => setBrokerQrTotpToken(e.target.value)}
//                               />
//                               <label htmlFor="brokerQrTotpToken">Broker QR Totp Token</label>
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
//                                 value={brokerApiKey}
//                                 required
//                                 onChange={(e) => setBrokerApiKey(e.target.value)}
//                               />
//                               <label htmlFor="brokerApiKey">Broker API Key</label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="mt-3 text-end">
//                           <button type="submit" className="btn btn-primary">Update</button>
//                         </div>
//                       </form>
//                       </div>
//                       </div>
//                       </div>
//         </div>
//       </div>
//       </div>
//       </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default UpdateTeacher;



import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Footer from "../component/Footer";
import AdminSubHeader from "./AdminSubHeader";
import axios from "axios";
import config from "../../app3/config";

const UpdateTeacher = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const studentData = location.state || {};
  const { id } = useParams();
  const [teacherData, setTeacherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [backClicked, setBackClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.post(
          `${config.apiDomain}/api/admin/manage_teachers/view`,
          {
            teacher_id: id,
          }
        );

        if (response.data && response.data.st === 1) {
          setTeacherData(response.data.data);
        } else {
          setError(new Error(response.data.msg || "Failed to fetch data"));
        }
      } catch (error) {
        setError(new Error(error.message || "Failed to fetch data"));
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);
  const handleBack = () => {
    if (!backClicked) {
      setBackClicked(true);
      navigate(-1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      teacher_id: id,
      name: teacherData.name,
      mobile: teacherData.mobile,
      email: teacherData.email,
      commission: teacherData.commission,
      lot_size_limit: teacherData.lot_size_limit,
      broker_client_id: teacherData.broker_client_id,
      broker_password: teacherData.broker_password,
      broker_qr_totp_token: teacherData.broker_qr_totp_token,
      broker_api_key: teacherData.broker_api_key
    };

    try {
      const response = await axios.put(`${config.apiDomain}/api/admin/manage_teachers/update`, payload, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.data.st === 1) {
        alert("Student updated successfully");
        navigate("/admin/manage_teacher");
      } else {
        alert(response.data.msg || "Failed to update student");
      }
    } catch (error) {
      console.error("Network error", error);
      alert("Network error");
    }
  };

  return (
    <div>
     <AdminHeader />
     <AdminSubHeader />
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div className="layout-container">
          <div className="Container">
            <div className="container-xxl flex-grow-1 container-p-y">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-style1">
                  <li className="breadcrumb-item">
                  <Link to="/admin/dashboard" className="text-secondary">
                <i className="ri-home-5-line ri-lg"></i>
              </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/admin/manage_teacher">Manage Teacher</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">Update Teacher</li>
                </ol>
              </nav>
              {loading && <div>Loading...</div>}
              {error && <div>{error.message}</div>}
              {teacherData && (
                <div className="row">
                  <div className="col-md-12">
                    <div className="card mb-6">
                      <div className="d-flex justify-content-between align-items-center card-header">
                        <button
                          onClick={handleBack}
                          className="btn rounded-pill btn-outline-secondary btn-xs"
                        >
                          <i className="ri-arrow-left-circle-fill me-1 ri-md"></i> Back
                        </button>
                        <h5 className="text-center mb-0 flex-grow-1">Update Teacher</h5>
                      </div>
                      <div className="card-body pt-0">
                        <form id="formAccountSettings" onSubmit={handleSubmit}>
                          <div className="row mt-1 g-3">
                            <div className="col-md-3">
                              <div className="form-floating form-floating-outline">
                                <input
                                  className="form-control"
                                  type="text"
                                  id="name"
                                  name="name"
                                  placeholder="Name"
                                  value={teacherData.name}
                                  onChange={(e) =>
                                    setTeacherData({ ...teacherData, name: e.target.value })
                                  }
                                  required
                                />
                                <label htmlFor="name"><span className="text-danger">*</span> Name</label>
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
                                    value={teacherData.mobile}
                                    onChange={(e) =>
                                      setTeacherData({ ...teacherData, mobile: e.target.value })
                                    }
                                    required
                                  />
                                  <label htmlFor="mobileNumber"><span className="text-danger">*</span> Mobile Number</label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-floating form-floating-outline">
                                <input
                                  className="form-control"
                                  type="email"
                                  id="email"
                                  name="email"
                                  placeholder="john.doe@example.com"
                                  value={teacherData.email}
                                  onChange={(e) =>
                                    setTeacherData({ ...teacherData, email: e.target.value })
                                  }
                                  required
                                />
                                <label htmlFor="email"><span className="text-danger">*</span> E-mail</label>
                              </div>
                            </div>
                            <div className="col-md-3">
  <div className="form-floating form-floating-outline">
    <input
      type="number"
      className="form-control"
      id="lot_size_limit"
      name="lot_size_limit"
      placeholder="Lot Size Limit"
      value={teacherData.lot_size_limit}
      onChange={(e) => {
        let value = e.target.value;
        if (value === "" || (value >= 0 && value <= 5000)) {
          setTeacherData({ ...teacherData, lot_size_limit: value });
        }
      }}
      required
    />
    <label htmlFor="lot_size_limit">
      <span className="text-danger">*</span> Lot Size Limit
    </label>
  </div>
</div>
</div>
                          <div className="row mt-3 g-3">
                            <div className="col-md-3">
                              <div className="form-floating form-floating-outline">
                                <input
                                  type="number"
                                  className="form-control"
                                  id="commission"
                                  name="commission"
                                  placeholder="Commission"
                                  value={teacherData.commission}
                                  onChange={(e) =>
                                    setTeacherData({ ...teacherData, commission: e.target.value })
                                  }
                                  required
                                />
                                <label htmlFor="commission"><span className="text-danger">*</span> Commission</label>
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
                                  placeholder="Broker Client ID"
                                  value={teacherData.broker_client_id}
                                  onChange={(e) =>
                                    setTeacherData({ ...teacherData, broker_client_id: e.target.value })
                                  }
                                />
                                <label htmlFor="brokerClientId"><span className="text-danger">*</span> Broker Client ID</label>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-floating form-floating-outline">
                                <input
                                  type="password"
                                  className="form-control"
                                  id="brokerPassword"
                                  name="brokerPassword"
                                  placeholder="Broker Password"
                                  value={teacherData.broker_password}
                                  onChange={(e) =>
                                    setTeacherData({ ...teacherData, broker_password: e.target.value })
                                  }
                                />
                                <label htmlFor="brokerPassword"><span className="text-danger">*</span> Broker Password</label>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-floating form-floating-outline">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="brokerQrTotpToken"
                                  name="brokerQrTotpToken"
                                  placeholder="Broker QR Totp Token"
                                  value={teacherData.broker_qr_totp_token}
                                  onChange={(e) =>
                                    setTeacherData({ ...teacherData, broker_qr_totp_token: e.target.value })
                                  }
                                />
                                <label htmlFor="brokerQrTotpToken"><span className="text-danger">*</span> Broker QR Totp Token</label>
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
                                  value={teacherData.broker_api_key}
                                  onChange={(e) =>
                                    setTeacherData({ ...teacherData, broker_api_key: e.target.value })
                                  }
                                />
                                <label htmlFor="brokerApiKey"><span className="text-danger">*</span> Broker API Key</label>
                              </div>
                            </div>
                          </div>
                          <div className="mt-3 text-end">
                            <button type="submit" className="btn rounded-pill btn-success btn-sm "><i className="ri-checkbox-circle-line ri-lg me-2"></i>Update Record</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateTeacher;
