import React, { useEffect } from "react";
import $ from "jquery";
import "datatables.net";

import Header from "../component/Header";
import Footer from "../component/Footer";
import SubHeader from "../component/SubHeader";
import { Link, useNavigate } from "react-router-dom";



const MyReportView = () => {

    const navigate = useNavigate();

  useEffect(() => {
    $("#myReportTable").DataTable();
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
                    <Link to="/user_profile"> Profile</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/my_report"> My Report</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">My Report Details</li>

                </ol>
              </nav>
            <div className="card">
            <div className="d-flex justify-content-between align-items-center card-header">
                <button onClick={handleBack} className="btn btn-transparent">
                  {/* <i className="ri-arrow-left-line"></i> */}
                   Back
                </button>
                <h5 className="text-center mb-0 flex-grow-1">My Report Details</h5>
              </div>
             
              <div className="card-datatable table-responsive p-5">
              <div className="row text-center">
                  <div className="col-md-3">
                    <h4>10</h4>
                    <p>Total Trades Count</p>
                  </div>
                  <div className="col-md-3">
                    <h4>2</h4>
                    <p>Total Profitable Trades</p>
                  </div>
                  <div className="col-md-3">
                    <h4>4</h4>
                    <p>Total Lossing Trades</p>
                  </div>
                  <div className="col-md-3">
                    <h4>0.01 Rs.</h4>
                    <p>Total Commission</p>
                  </div>
                </div>
                <table
                  id="myReportTable"
                  className="display text-center"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                    <th className="text-center">Buy Price</th>
                      <th className="text-center">Buy Lot Size</th>
                      <th className="text-center">Buy Quantity</th>
                      <th className="text-center">Buy Time</th>
                      <th className="text-center">Buy Order ID</th>
                      <th className="text-center">Sell Price</th>
                      <th className="text-center">Sell Lot Size</th>
                      <th className="text-center">Sell Quantity</th>
                      <th className="text-center">Sell Time</th>
                      <th className="text-center">Sell Order ID</th>
                      <th className="text-center">PANDL</th>
                      <th className="text-center">PANDL Total</th>
                      <th className="text-center">PANDL Percent</th>
                      <th className="text-center">Commission(10%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                
                      <td className="text-center">0.3</td>
                      <td className="text-center">4</td>
                      <td className="text-center">40</td>
                      <td className="text-center">May 23,2024, 9:54 a.m.</td>
                      <td className="text-center">24097687788</td>
                      <td className="text-center">0.05</td>
                      <td className="text-center">2</td>
                      <td className="text-center">67</td>
                      <td className="text-center">May 23,2024, 9:54 a.m.</td>
                      <td className="text-center">24097687788</td>
                      <td className="text-center">0.9</td>
                      <td className="text-center">0.3</td>
                      <td className="text-center">0.3</td>
                      <td className="text-center">20 Rs.</td>
                    </tr>
                    <tr>
                    <td className="text-center">0.3</td>
                      <td className="text-center">5</td>
                      <td className="text-center">40</td>
                      <td className="text-center">May 23,2024, 9:54 a.m.</td>
                      <td className="text-center">24097687788</td>
                      <td className="text-center">0.05</td>
                      <td className="text-center">2</td>
                      <td className="text-center">67</td>
                      <td className="text-center">May 23,2024, 9:54 a.m.</td>
                      <td className="text-center">24097687788</td>
                      <td className="text-center">0.9</td>
                      <td className="text-center">0.3</td>
                      <td className="text-center">0.3</td>
                      <td className="text-center">20 Rs.</td>
                    </tr>
                    <tr>
                    <td className="text-center">0.3</td>
                      <td className="text-center">2</td>
                      <td className="text-center">40</td>
                      <td className="text-center">May 23,2024, 9:54 a.m.</td>
                      <td className="text-center">24097687788</td>
                      <td className="text-center">0.05</td>
                      <td className="text-center">2</td>
                      <td className="text-center">67</td>
                      <td className="text-center">May 23,2024, 9:54 a.m.</td>
                      <td className="text-center">24097687788</td>
                      <td className="text-center">0.9</td>
                      <td className="text-center">0.3</td>
                      <td className="text-center">0.3</td>
                      <td className="text-center">20 Rs.</td>
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

export default MyReportView;
