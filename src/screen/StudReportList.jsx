// import React, { useEffect } from "react";

// import $ from "jquery";
// import "datatables.net";

// import Header from "../component/Header";
// import Footer from "../component/Footer";
// import SubHeader from "../component/SubHeader";
// import { Link, useNavigate } from "react-router-dom";


// const StudReportList = () => {

//   const navigate = useNavigate();
//   useEffect(() => {
//     $("#studReportListTable").DataTable();
//   }, []);

//   const handleBack = () => {
//     navigate(-1);
//   };
//   return (
//     <div>   <Header />
//     <SubHeader />
//     <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
//       <div className="layout-container">
     
//         <div className="Container">
//           <div className="container-xxl flex-grow-1 container-p-y">
//           <nav aria-label="breadcrumb">
//                 <ol className="breadcrumb breadcrumb-style1">
                 
//                   <li className="breadcrumb-item">
//                     <Link to="/user_profile">Profile</Link>
//                   </li>
//                   <li className="breadcrumb-item">
//                     <Link to="/student_report">Student Report</Link>
//                   </li>
//                   <li className="breadcrumb-item active" aria-current="page">Student Report List</li>
//                 </ol>
//               </nav>
//             <div className="card">
//             <div className="d-flex justify-content-between align-items-center card-header">
//                 <button onClick={handleBack} className="btn btn-transparent">
//                   {/* <i className="ri-arrow-left-line"></i>  */}
//                   Back
//                 </button>
//                 <h5 className="text-center mb-0 flex-grow-1">Student Report List</h5>
//               </div>
//               <div className="card-datatable table-responsive p-5">
//                 <div className="d-flex justify-content-between mb-3 p-3 align-items-center">
                 
                 
//                 </div>
//                 <table
//                   id="studReportListTable"
//                   className="dt-responsive table table-bordered text-center"
//                 >
//                   <thead className="text-center" >
//                     <tr>
//                       <th className="text-center">Name</th>
//                       <th className="text-center">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td className="text-center">Riya</td>
//                       <td className="text-center">
//                         <Link to="/student_report_view">
//                           <button className="btn btn-primary active text-center">
//                             <i className="ri-timeline-view"></i>
//                           </button>
//                         </Link>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
            
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </div>
//     </div>
//   );
// };

// export default StudReportList;

import React, { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net";

import Header from "../component/Header";
import Footer from "../component/Footer";
import SubHeader from "../component/SubHeader";
import { Link, useNavigate, useLocation } from "react-router-dom";

const StudReportList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [studentList, setStudentList] = useState([]);
  const userId = localStorage.getItem('user_id');
  console.log(userId)
  useEffect(() => {
    fetchStudentList();
  }, [location.search]);

  useEffect(() => {
    if (studentList.length > 0) {
      initializeDataTable();
    }
  }, [studentList]);

  const fetchStudentList = async () => {
    try {
      const searchParams = new URLSearchParams(location.search);
      const month = searchParams.get("month");

      const response = await fetch(
        "http://192.46.212.210/api/teacher/student_list",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ teacher_id: 42, sell_month: month }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setStudentList(data.user_list || []);
    } catch (error) {
      console.error("Error fetching student list:", error);
    }
  };

  const initializeDataTable = () => {
    $(document).ready(function () {
      $("#studReportListTable").DataTable();
    });
  };

  const handleViewDetails = (user_id, month) => {
    navigate(`/student_report_view?user_id=${user_id}&month=${month}`);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <SubHeader />
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div className="layout-container">
          <div className="Container">
            <div className="container-xxl flex-grow-1 container-p-y">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-style1">
                  <li className="breadcrumb-item">
                    <Link to="/user_profile">Profile</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/student_report">Student Report</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Student Report List
                  </li>
                </ol>
              </nav>
              <div className="card">
                <div className="d-flex justify-content-between align-items-center card-header">
                  <button onClick={handleBack} className="btn btn-transparent">
                    Back
                  </button>
                  <h5 className="text-center mb-0 flex-grow-1">
                    Student Report List
                  </h5>
                </div>
                <div className="card-datatable table-responsive p-5">
                  {studentList.length > 0 ? (
                    <table
                      id="studReportListTable"
                      className="dt-responsive table table-bordered text-center"
                    >
                      <thead>
                        <tr>
                          <th className="text-center">Name</th>
                          <th className="text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {studentList.map((student, index) => (
                          <tr key={index}>
                            <td className="text-center">{student.name}</td>
                            <td className="text-center">
                              <button
                                className="btn btn-primary active text-center"
                                onClick={() => handleViewDetails(student.user_id, new URLSearchParams(location.search).get("month"))}
                              >
                                <i className="ri-timeline-view"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p className="text-center">Loading...</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default StudReportList;

