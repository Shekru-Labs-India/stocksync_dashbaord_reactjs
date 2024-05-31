

import React, { useEffect } from "react";
import $ from "jquery";
import "datatables.net";

import Header from "../component/Header";
import Footer from "../component/Footer";
import SubHeader from "../component/SubHeader";

import { Link, useNavigate } from "react-router-dom";

const StudentReport = () => {

    const navigate = useNavigate();
  useEffect(() => {
    $("#studentReportTable").DataTable();
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
      <div className="layout-container">
        <Header />
        <SubHeader />
        <div className="Container">
          <div className="container-xxl flex-grow-1 container-p-y">
          <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-style1">
                 
                  <li className="breadcrumb-item">
                    <Link to="/user_profile"> Profile</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">Student Report</li>
                </ol>
              </nav>
            <div className="card">
            <div className="d-flex justify-content-between align-items-center card-header">
                <button onClick={handleBack} className="btn btn-transparent">
                  {/* <i className="ri-arrow-left-line"></i>  */}
                  Back
                </button>
                <h5 className="text-center mb-0 flex-grow-1">Student Report</h5>
              </div>
              <div className="card-datatable table-responsive p-5">
                <table
                  id="studentReportTable"
                  className="dt-responsive table table-bordered text-center"
                >
                  <thead >
                    <tr >
                      <th className="text-center">Month</th>
                      <th className="text-center">Total Trades</th>
                      <th className="text-center">Profitable Trades</th>
                      <th className="text-center">Losing Trades</th>
                      <th className="text-center">Student Count</th>
                      <th className="text-center">Commission</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr  >
                      <td className="text-center">January</td>
                      <td className="text-center">100</td>
                      <td className="text-center">60</td>
                      <td className="text-center">40</td>
                      <td className="text-center">10</td>
                      <td className="text-center">500 Rs.</td>
                      <td className="text-center">
                        <Link to="/student_report_list">
                          <button className="btn btn-primary active text-center">
                            <i className="ri-timeline-view"></i>
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">February</td>
                      <td className="text-center">120</td>
                      <td className="text-center">70</td>
                      <td className="text-center">50</td>
                      <td className="text-center">12</td>
                      <td className="text-center">600 Rs.</td>
                      <td className="text-center">
                        <Link to="/student_report_list">
                          <button className="btn btn-primary active text-center">
                            <i className="ri-timeline-view"></i>
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">March</td>
                      <td className="text-center">150</td>
                      <td className="text-center">90</td>
                      <td className="text-center">60</td>
                      <td className="text-center">15</td>
                      <td className="text-center">750 Rs.</td>
                      <td className="text-center">
                        <Link to="/student_report_list">
                          <button className="btn btn-primary active text-center">
                            <i className="ri-timeline-view"></i>
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">April</td>
                      <td className="text-center">130</td>
                      <td className="text-center">80</td>
                      <td className="text-center">50</td>
                      <td className="text-center">13</td>
                      <td className="text-center">650 Rs.</td>
                      <td className="text-center">
                        <Link to="/student_report_list">
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
  );
};

export default StudentReport;


