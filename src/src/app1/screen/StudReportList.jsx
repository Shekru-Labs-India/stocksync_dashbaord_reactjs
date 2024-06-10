import React, { useEffect } from "react";

import $ from "jquery";
import "datatables.net";

import Header from "../component/Header";
import Footer from "../component/Footer";
import SubHeader from "../component/SubHeader";
import { Link, useNavigate } from "react-router-dom";


const StudReportList = () => {

  const navigate = useNavigate();
  useEffect(() => {
    $("#studReportListTable").DataTable();
  }, []);

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>   <Header />
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
                  <li className="breadcrumb-item active" aria-current="page">Student Report List</li>
                </ol>
              </nav>
            <div className="card">
            <div className="d-flex justify-content-between align-items-center card-header">
                <button onClick={handleBack} className="btn btn-transparent">
                  {/* <i className="ri-arrow-left-line"></i>  */}
                  Back
                </button>
                <h5 className="text-center mb-0 flex-grow-1">Student Report List</h5>
              </div>
              <div className="card-datatable table-responsive p-5">
                <div className="d-flex justify-content-between mb-3 p-3 align-items-center">
                 
                 
                </div>
                <table
                  id="studReportListTable"
                  className="dt-responsive table table-bordered text-center"
                >
                  <thead className="text-center" >
                    <tr>
                      <th className="text-center">Name</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">Riya</td>
                      <td className="text-center">
                        <Link to="/student_report_view">
                          <button className="btn btn-primary active text-center">
                            <i className="ri-timeline-view"></i>
                          </button>
                        </Link>
                      </td>
                    </tr>
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

export default StudReportList;
