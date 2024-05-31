


// import React from "react";
// import Header from "../component/Header";
// import Footer from "../component/Footer";
// import SubHeader from "../component/SubHeader";
// import { Link } from "react-router-dom";


// const StudReportView = () => {
//   return (
//     <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
//       <div className="layout-container">
//         <Header />
//         <SubHeader />
//         <div className="Container">
//           <div className="container-xxl flex-grow-1 container-p-y">
//             <div className="card">
//               <h5 className="card-header text-start">My Report Details</h5>
//               <div className="card-datatable table-responsive">
                // <div className="row">
                //   <div className="col-md-3">
                //     <h4>Total Trades Count</h4>
                //     <p>10</p>
                //   </div>
                //   <div className="col-md-3">
                //     <h4> Total Profitable Trades</h4>
                //     <p>2</p>
                //   </div>
                //   <div className="col-md-3">
                //     <h4> Total Lossing Trades</h4>
                //     <p>4</p>
                //   </div>
                //   <div className="col-md-3">
                //     <h4> Total Commission</h4>
                //     <p>0.01 Rs.</p>
                //   </div>
                // </div>

//                 <div className="d-flex justify-content-between mb-3 p-3 align-items-center">
//                   <div className="d-flex align-items-center">
//                     <label className="me-2">Show</label>
//                     <select className="form-select w-auto">
//                       <option value="10">10</option>
//                       <option value="20">20</option>
//                       <option value="30">30</option>
//                     </select>
//                     <label className="ms-2">entries</label>
//                   </div>
//                   <div className="d-flex align-items-center">
//                     <label className="me-2">Search:</label>
//                     <input
//                       type="text"
//                       placeholder="Search..."
//                       className="form-control w-auto"
//                     />
//                   </div>
//                 </div>
//                 <table className="dt-responsive table table-bordered">
//                   <thead>
//                     <tr>
//                       <th>Buy Price</th>
//                       <th>Buy Lot Size</th>
//                       <th>Buy Quantity</th>
//                       <th>Buy Time</th>
//                       <th>Buy Order ID</th>
//                       <th>Sell Price</th>
//                       <th>Sell Lot Size</th>
//                       <th>Sell Quantity</th>
//                       <th>Sell Time</th>
//                       <th>Sell Order ID</th>
//                       <th>PANDL</th>
//                       <th>PANDL Total</th>
//                       <th>PANDL Percent</th>
//                       <th>Commission(%)</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>0.3</td>
//                       <td>2</td>
//                       <td>40</td>
//                       <td>May 23,2024, 9:54 a.m.</td>
//                       <td>24097687788</td>
//                       <td>0.05</td>
//                       <td>2</td>
//                       <td>67</td>
//                       <td>May 23,2024, 9:54 a.m.</td>
//                       <td>24097687788</td>
//                       <td> 0.9</td>
//                       <td> 0.3</td>
//                       <td> 0.3</td>
//                       <td> 20 Rs.</td>
                      
                    
//                     </tr>
//                     <tr>
//                     <td>0.3</td>
//                       <td>2</td>
//                       <td>40</td>
//                       <td>May 23,2024, 9:54 a.m.</td>
//                       <td>24097687788</td>
//                       <td>0.05</td>
//                       <td>2</td>
//                       <td>67</td>
//                       <td>May 23,2024, 9:54 a.m.</td>
//                       <td>24097687788</td>
//                       <td> 0.9</td>
//                       <td> 0.3</td>
//                       <td> 0.3</td>
//                       <td> 20 Rs.</td>
//                     </tr>
                   
//                   </tbody>
//                 </table>
//               </div>
//               <div className="d-flex justify-content-between align-items-center mt-3 p-3">
//                 <div>Showing 0 to 0 of 0 entries</div>
//                 <div>
//                   <button className="btn btn-secondary me-2">Previous</button>
//                   <button className="btn btn-secondary">Next</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default StudReportView;


import React, { useEffect } from "react";
import $ from "jquery";
import "datatables.net";

import Header from "../component/Header";
import Footer from "../component/Footer";
import SubHeader from "../component/SubHeader";
import { Link, useNavigate } from "react-router-dom";


const StudReportView = () => {
  const navigate = useNavigate();
  useEffect(() => {
    $("#myReportTable").DataTable();
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
                    <Link to="/user_profile">Profile</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/student_report">Student Report</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/student_report_list">Student Report List</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">Student Report Details</li>
                </ol>
              </nav>
            <div className="card">
            <div className="d-flex justify-content-between align-items-center card-header">
                <button onClick={handleBack} className="btn btn-transparent">
                  {/* <i className="ri-arrow-left-line"></i> */}
                   Back
                </button>
                <h5 className="text-center mb-0 flex-grow-1">Student Report Details</h5>
              </div>
              <div className="card-datatable table-responsive p-5">
              <div className="row text-center">
                  <div className="col-md-3">
                    <h4>10</h4>
                    <p>Total Trades Count</p>
                  </div>
                  <div className="col-md-3">
                    <h4>2 </h4>
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
  );
};

export default StudReportView;
