import React, { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net";
import { Link, useNavigate } from "react-router-dom";

import Header from "../component/Header";
import Footer from "../component/Footer";
import SubHeader from "../component/SubHeader";

const ManageStudent = () => {
  const navigate = useNavigate();
  const [selectedFileName, setSelectedFileName] = useState("No file chosen");
  // Initial state with student data
  const [students, setStudents] = useState([
    { name: "Raj", mobile: "4607089809", brokerStatus: "Not Connected", activeStatus: "Active" },
    { name: "Riya", mobile: "987890675", brokerStatus: "Not Connected", activeStatus: "Active" }
  ]);

  useEffect(() => {
    $("#myDataTable").DataTable();
  }, [students]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleDelete = (index) => {
    const newStudents = [...students];
    newStudents.splice(index, 1);
    setStudents(newStudents);
  };

  const handleChooseFile = () => {
    // Trigger the input element to open file selection dialog
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
      // Handle the file here if needed
    } else {
      setSelectedFileName("No file chosen");
    }
  };


  return (
    <div> <Header />
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
                <li className="breadcrumb-item active" aria-current="page">Manage Student</li>
              </ol>
            </nav>
            <div className="card">
              <div className="d-flex justify-content-between align-items-center card-header">
                <button onClick={handleBack} className="btn btn-transparent">
                  Back
                </button>
                <h5 className="text-center mb-0 flex-grow-1">Manage Student</h5>
                <Link to="/create_student">
                    
                            <button className="btn btn-primary active text-align me-2">
                              <i className="ri-add-line ri-lg me-2"></i>Add Student
                            </button>
                            </Link>
                            <div>
                  <button onClick={handleChooseFile}  className="btn btn-secondary text-align me-2">
                 <button> Choose file</button>    <label id="fileInputLabel " className="ms-4">{selectedFileName}</label>
                  </button>
                  <input
                    id="fileInput"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                
                </div>
                <Link to="/my_report_view">
                  <button className="btn btn-secondary text-align me-2">
                    Upload CSV
                  </button>
                </Link>
              </div>
             
              
              <div className="card-datatable table-responsive p-5">
                <div className="row text-center"></div>
                <table
                  id="myDataTable"
                  className="display text-center"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th className="text-center">Name</th>
                      <th className="text-center">Mobile</th>
                      <th className="text-center">BROKER STATUS</th>
                      <th className="text-center">ACTIVE STATUS</th>
                      <th className="text-center">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student, index) => (
                      <tr key={index}>
                        <td className="text-center">{student.name}</td>
                        <td className="text-center">{student.mobile}</td>
                        <td className="text-center"><button className="btn btn-outline-danger">{student.brokerStatus}</button></td>
                        <td className="text-center"><button className="btn btn-outline-success">{student.activeStatus}</button></td>
                        <td className="text-center">
                          <Link to="/student_details">
                            <button className="btn btn-primary active text-align me-2">
                              <i className="ri-timeline-view"></i>
                            </button>
                          </Link>
                          <Link to="/update_student">
                            <button className="btn btn-info active text-align me-2">
                              <i className="ri-edit-line"></i>
                            </button>
                          </Link>
                          <button 
                            className="btn btn-danger active text-align"
                            onClick={() => handleDelete(index)}
                          >
                            <i className="ri-close-line"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

export default ManageStudent;
