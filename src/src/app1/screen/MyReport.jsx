import React, { useEffect } from "react";
import $ from "jquery";
import "datatables.net";
import { Link, useNavigate } from "react-router-dom";

import Header from "../component/Header";
import Footer from "../component/Footer";
import SubHeader from "../component/SubHeader";

const MyReport = () => {
  const navigate = useNavigate();

  useEffect(() => {
    $("#myDataTable").DataTable();
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      {" "}
      <Header />
      <SubHeader />
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div className="layout-container">
          <div className="Container">
            <div className="container-xxl flex-grow-1 container-p-y">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-style1">
                  <li className="breadcrumb-item">
                    <Link to="/user_profile"> Profile</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    My Report
                  </li>
                </ol>
              </nav>
              <div className="card">
                <div className="d-flex justify-content-between align-items-center card-header">
                  <button onClick={handleBack} className="btn btn-transparent">
                    {/* <i className="ri-arrow-left-line"></i>  */}
                    Back
                  </button>
                  <h5 className="text-center mb-0 flex-grow-1">My Report</h5>
                </div>

                <div className="card-datatable table-responsive p-5">
                  <div className="row text-center">
                    <div className="col-md-3">
                      <h4>10</h4>
                      <p>Total Trades</p>
                    </div>
                    <div className="col-md-3">
                      <h4>2</h4>
                      <p>Profitable Trades</p>
                    </div>
                    <div className="col-md-3">
                      <h4>4</h4>
                      <p>Lossing Trades</p>
                    </div>
                    <div className="col-md-3">
                      <h4>0.01 Rs.</h4>
                      <p>Commission</p>
                    </div>
                  </div>
                  <table
                    id="myDataTable"
                    className="display text-center"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th className="text-center">Month</th>
                        <th className="text-center">Total Trades</th>
                        <th className="text-center">Profitable Trades</th>
                        <th className="text-center">Losing Trades</th>
                        <th className="text-center">Commission</th>
                        <th className="text-center">ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">January</td>
                        <td className="text-center">100</td>
                        <td className="text-center">60</td>
                        <td className="text-center">40</td>
                        <td className="text-center">0.01 Rs.</td>
                        <td className="text-center">
                          <Link to="/my_report_view">
                            <button className="btn btn-primary active text-align">
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
                        <td className="text-center">0.01 Rs.</td>
                        <td className="text-center">
                          <Link to="/my_report_view">
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
                        <td className="text-center">0.01 Rs.</td>
                        <td className="text-center">
                          <Link to="/my_report_view">
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

export default MyReport;
