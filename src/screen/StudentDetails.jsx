// import React from "react";
// import Header from "../component/Header";
// import Footer from "../component/Footer";
// import SubHeader from "../component/SubHeader";
// import { Link, useNavigate } from "react-router-dom";

// const StudentDetails = () => {
//   const navigate = useNavigate();
//   const handleBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div>
//           <Header />
//           <SubHeader />
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
//                     <Link to="/manage_student">Manage Student</Link>
//                   </li>
//                   <li className="breadcrumb-item active" aria-current="page">
//                     Student Details
//                   </li>
//                 </ol>
//               </nav>
//               <div className="row">
//                 <div className="col-md-12">
//                   <div className="card mb-6">
//                     <div className="d-flex justify-content-between align-items-center card-header">
//                       <button onClick={handleBack} className="btn btn-transparent">
//                         Back
//                       </button>
//                       <h5 className="text-center mb-0 flex-grow-1">Student Details</h5>
//                     </div>
//                     <div className="card-body text-start">
//                       <div className="row mb-3 ">
//                         <div className="col-md-3 ">
//                           <p className="fw-bold mb-0 ">John Doe</p>
//                           <label className="form-label">Name</label>
//                         </div>
//                         <div className="col-md-3">
//                           <p className="fw-bold mb-0">2025550111</p>
//                           <label className="form-label">Mobile</label>
//                         </div>
//                         <div className="col-md-3">
//                           <p className="fw-bold mb-0">john.doe@example.com</p>
//                           <label className="form-label">Email</label>
//                         </div>
//                         <div className="col-md-3">
//                           <p className="fw-bold mb-0">1234 5678 9012</p>
//                           <label className="form-label">Aadhaar Number</label>
//                         </div>
//                       </div>
//                       <div className="row mb-3">
//                         <div className="col-md-3">
//                           <p className="fw-bold mb-0">ABCDE1234F</p>
//                           <label className="form-label">PAN Card Number</label>
//                         </div>
//                         <div className="col-md-3">
//                           <p className="fw-bold mb-0 text-danger">Not Connected</p>
//                           <label className="form-label">Broker Status</label>
//                         </div>
//                         <div className="col-md-3">
//                           <p className="fw-bold mb-0 ">1000</p>
//                           <label className="form-label">Balance</label>
//                         </div>
//                         {/* Additional fields can be added here if needed */}
//                       </div>
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

// export default StudentDetails;



import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SubHeader from "../component/SubHeader";

const StudentDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [studentDetails, setStudentDetails] = useState(null);

  useEffect(() => {
    if (location.state && location.state.student) {
      setStudentDetails(location.state.student);
    } else {
      // Fetch student details from API using user_id from the location state
      fetchStudentDetails();
    }
  }, [location.state]);

  const fetchStudentDetails = async () => {
    try {
      const response = await fetch(`http://192.46.212.210/api/teacher/manage_students/view`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id: location.state.user_id })
      });
      const data = await response.json();
      if (response.ok && data.st === 1) {
        setStudentDetails(data.data);
      } else {
        console.error(data.message || 'Failed to fetch student details');
      }
    } catch (error) {
      console.error('Network error', error);
    }
  };

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
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/manage_student">Manage Student</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Student Details
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
                      <h5 className="text-center mb-0 flex-grow-1">Student Details</h5>
                    </div>
                    <div className="card-body text-start">
                      {studentDetails ? (
                        <>
                          <div className="row mb-3">
                            <div className="col-md-3">
                              <p className="fw-bold mb-0">{studentDetails.name}</p>
                              <label className="form-label">Name</label>
                            </div>
                            <div className="col-md-3">
                              <p className="fw-bold mb-0">{studentDetails.mobile}</p>
                              <label className="form-label">Mobile</label>
                            </div>
                            <div className="col-md-3">
                              <p className="fw-bold mb-0">{studentDetails.email}</p>
                              <label className="form-label">Email</label>
                            </div>
                            <div className="col-md-3">
                              <p className="fw-bold mb-0">{studentDetails.adharNumber}</p>
                              <label className="form-label">Aadhaar Number</label>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-md-3">
                              <p className="fw-bold mb-0">{studentDetails.pancardNumber}</p>
                              <label className="form-label">PAN Card Number</label>
                            </div>
                            <div className="col-md-3">
                              <p className={`fw-bold mb-0 ${studentDetails.broker_status ? 'text-success' : 'text-danger'}`}>
                                {studentDetails.broker_status ? 'Connected' : 'Not Connected'}
                              </p>
                              <label className="form-label">Broker Status</label>
                            </div>
                            <div className="col-md-3">
                              <p className="fw-bold mb-0">{studentDetails.balance}</p>
                              <label className="form-label">Balance</label>
                            </div>
                            {/* Additional fields can be added here if needed */}
                          </div>
                        </>
                      ) : (
                        <p>Loading student details...</p>
                      )}
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

export default StudentDetails;
