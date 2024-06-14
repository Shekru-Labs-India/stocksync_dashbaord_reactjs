// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import Header from "../component/Header";
// import Footer from "../component/Footer";
// import SubHeader from "../component/SubHeader";

// const UpdateTeacher = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const teacher = location.state ? location.state.teacher : null;

//   const [formData, setFormData] = useState({
//     name: teacher ? teacher.name : "",
//     mobileNumber: teacher ? teacher.mobile : "",
//     email: teacher ? teacher.email : "",
//     tradingPower: teacher ? teacher.tradingPower : "",
//     adharNumber: teacher ? teacher.adharNumber : "",
//     pancardNumber: teacher ? teacher.pancardNumber : "",
//     commission: teacher ? teacher.commission : "",
//     brokerClientId: teacher ? teacher.brokerClientId : "",
//     brokerPassword: teacher ? teacher.brokerPassword : "",
//     brokerQrTotpToken: teacher ? teacher.brokerQrTotpToken : "",
//     brokerApiKey: teacher ? teacher.brokerApiKey : "",
//   });

//   useEffect(() => {
//     if (!teacher) {
//       // Redirect to manage_teacher page if teacher data is not available
//       navigate("/manage_teacher");
//     } else {
//       // Set user_id from teacher data
//       setFormData({
//         ...formData,
//         user_id: teacher.user_id, // Assuming user_id is available in teacher data
//       });
//     }
//   }, [teacher, navigate]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // const handleBack = () => {
//   //   navigate("/manage_teacher");
//   // };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         "http://192.46.212.210/api/teacher/manage_teachers/update",
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (response.ok && data.st === 1) {
//         alert("Teacher updated successfully");
//         navigate("/manage_teacher");
//       } else {
//         alert(data.msg || "Failed to update teacher");
//       }
//     } catch (error) {
//       console.error("Network error", error);
//       alert("Network error");
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <SubHeader />
//       <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
//         <div className="layout-container">
//           <div className="Container">
//             <div className="container-xxl flex-grow-1 container-p-y">
//               <nav aria-label="breadcrumb">
//                 <ol className="breadcrumb breadcrumb-style1">
//                   <li className="breadcrumb-item">
//                     <Link to="/">Home</Link>
//                   </li>
//                   <li className="breadcrumb-item">
//                     <Link to="/manage_teacher">Manage Teacher</Link>
//                   </li>
//                   <li className="breadcrumb-item active" aria-current="page">
//                     Update Teacher
//                   </li>
//                 </ol>
//               </nav>
//               <div className="card mb-4">
//                 <div className="d-flex justify-content-between align-items-center card-header">
//                   <button onClick={handleBack} className="btn btn-transparent">
//                     Back
//                   </button>
//                   <h5 className="text-center mb-0 flex-grow-1">Update Teacher</h5>
//                 </div>
//                 <div className="card-body">
//                   <form onSubmit={handleFormSubmit}>
//                     {/* Form fields */}
//                     <div className="mb-3">
//                       <label className="form-label">Name</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         required
//                         autoComplete="name"
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">Mobile Number</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="mobileNumber"
//                         value={formData.mobileNumber}
//                         onChange={handleInputChange}
//                         required
//                         autoComplete="tel"
//                       />
//                     </div>
//                     {/* Other form fields */}
//                     <div className="mb-3">
//                       <label className="form-label">Email</label>
//                       <input
//                         type="email"
//                         className="form-control"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         autoComplete="email"
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">Trading Power</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="tradingPower"
//                         value={formData.tradingPower}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">Aadhar Number</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="adharNumber"
//                         value={formData.adharNumber}
//                         onChange={handleInputChange}
//                         autoComplete="off"
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">Pancard Number</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="pancardNumber"
//                         value={formData.pancardNumber}
//                         onChange={handleInputChange}
//                         autoComplete="off"
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">Commission</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="commission"
//                         value={formData.commission}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">Broker Client ID</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="brokerClientId"
//                         value={formData.brokerClientId}
//                         onChange={handleInputChange}
//                         autoComplete="off"
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">Broker Password</label>
//                       <input
//                         type="password"
//                         className="form-control"
//                         name="brokerPassword"
//                         value={formData.brokerPassword}
//                         onChange={handleInputChange}
//                         autoComplete="current-password"
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">Broker QR TOTP Token</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="brokerQrTotpToken"
//                         value={formData.brokerQrTotpToken}
//                         onChange={handleInputChange}
//                         autoComplete="off"
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">Broker API Key</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="brokerApiKey"
//                         value={formData.brokerApiKey}
//                         onChange={handleInputChange}
//                         autoComplete="off"
//                       />
//                     </div>
//                     <button type="submit" className="btn btn-primary">
//                       Update Teacher
//                     </button>
//                   </form>
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

// export default UpdateTeacher;


import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SubHeader from "../component/SubHeader";
import config from "../config";
const UpdateTeacher = () => {
  const navigate = useNavigate();
 
  const location = useLocation();
  const user_id = location.state ? location.state.user_id : null;
  

  
  
  const [formData, setFormData] = useState({
    name: teacherData.name,
    mobileNumber: teacherData.mobile,
    email: teacherData.email,
    tradingPower: teacherData.tradingPower,
    adharNumber: teacherData.adharNumber,
    pancardNumber: teacherData.pancardNumber,
    commission: teacherData.commission,
    brokerClientId: teacherData.brokerClientId,
    brokerPassword: teacherData.brokerPassword,
    brokerQrTotpToken: teacherData.brokerQrTotpToken,
    brokerApiKey: teacherData.brokerApiKey,
    teacher_id: user_id,
  });

  useEffect(() => {
    if (!student) {
      // Redirect to manage_student page if student data is not available
      navigate("/admin/manage_teacher");
    } else {
      // Set user_id from student data
      setFormData({
        ...formData,
        user_id: student.user_id, // Assuming user_id is available in student data
      });
    }
  }, [student, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleBack = () => {
    navigate("/admin/manage_teacher");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.put(
        `${config.apiDomain}/api/admin/manage_teachers/update`,
        formData
      );
  
      if (response.data && response.data.st === 1) {
        alert("Teacher updated successfully");
        navigate("/admin/manage_teacher");
      } else {
        alert(response.data.msg || "Failed to update teacher");
      }
    } catch (error) {
      console.error("Network error", error);
      alert("Network error");
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
  <ol className="breadcrumb breadcrumb-style1 text-secondary">
    <li className="breadcrumb-item">
      <Link to="/admin/dashboard" className="text-secondary">
        <i className="ri-home-line ri-lg"></i>
      </Link>
    </li>
    <li className="breadcrumb-item">
      <Link to="/admin/manage_teacher" className="text-secondary">
      Manage Teacher
      </Link>
    </li>
    <li className="breadcrumb-item active text-secondary" aria-current="page">
   Update Teacher
    </li>
  </ol>
</nav>
              <div className="row">
                <div className="col-md-12">
                  <div className="card mb-6">
                    <div className="d-flex justify-content-between align-items-center card-header">
                    <Button
              onClick={handleBack}
              className="btn btn-transparent p-button-text small-button"
              style={{ color: "A9A9A9", borderColor: "A9A9A9", borderStyle: "solid",width:'72px', }}            >
              <i className="ri-arrow-left-circle-line me-1 ri-md"></i> Back
            </Button>
                      <h5 className="text-center mb-0 flex-grow-1">Update Student</h5>
                    </div>
                    <div className="card-body pt-0">
                      <form id="formAccountSettings" onSubmit={handleFormSubmit}>
                        <div className="row mt-1 g-3">
                          <div className="col-md-3">
                            <div className="form-floating form-floating-outline">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                autoComplete="name"
                              />
                              <label htmlFor="firstName">
                                {" "}
                                <span className="text-danger">*</span> Name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="input-group input-group-merge">
                              <div className="form-floating form-floating-outline">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="mobileNumber"
                                  value={formData.mobileNumber}
                                  onChange={handleInputChange}
                                  required
                                  autoComplete="tel"
                                  placeholder="202 555 0111"
                                />
                                <label htmlFor="mobileNumber">
                                  {" "}
                                  <span className="text-danger">*</span>Mobile Number
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-floating form-floating-outline">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                autoComplete="email"
                                placeholder="john.doe@example.com"
                              />
                              <label htmlFor="email">
                                {" "}
                                <span className="text-danger">*</span>E-mail
                              </label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-floating form-floating-outline">
                              <input
                                type="text"
                                className="form-control"
                                name="tradingPower"
                                value={formData.tradingPower}
                                onChange={handleInputChange}
                                placeholder="Trading Power"
                              />
                              <label htmlFor="tradingPower">
                                {" "}
                                <span className="text-danger">*</span>Trading Power
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
                                name="adharNumber"
                                value={formData.adharNumber}
                                onChange={handleInputChange}
                                autoComplete="off"
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
                                name="pancardNumber"
                                value={formData.pancardNumber}
                                onChange={handleInputChange}
                                autoComplete="off"
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
                                name="commission"
                                value={formData.commission}
                                onChange={handleInputChange}
                                placeholder="Commission"
                              />
                              <label htmlFor="commission">
                                {" "}
                                <span className="text-danger">*</span>Commission
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
                                name="brokerClientId"
                                value={formData.brokerClientId}
                                onChange={handleInputChange}
                                autoComplete="off"
                                placeholder="Broker Client ID"
                              />
                              <label htmlFor="brokerClientId">Broker Client ID</label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-floating form-floating-outline">
                              <input
                                type="password"
                                className="form-control"
                                name="brokerPassword"
                                value={formData.brokerPassword}
                                onChange={handleInputChange}
                                autoComplete="current-password"
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
                                name="brokerQrTotpToken"
                                value={formData.brokerQrTotpToken}
                                onChange={handleInputChange}
                                autoComplete="off"
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
                                name="brokerApiKey"
                                value={formData.brokerApiKey}
                                onChange={handleInputChange}
                                autoComplete="off"
                                placeholder="Broker API Key"
                              />
                              <label htmlFor="brokerApiKey">Broker API Key</label>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 text-end">
                          <button type="submit" className="btn btn-success text-end me-3">
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

export default UpdateTeacher;