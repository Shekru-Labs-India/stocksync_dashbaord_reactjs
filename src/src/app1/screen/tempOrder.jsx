import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SubHeader from "../component/SubHeader";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";
import "datatables.net";

const OrderBook = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    $("#myDataTable").DataTable();
  }, []);

  return (
    <div>
      {" "}
      <Header />
      <SubHeader />
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div className="layout-container">
          <div className="Container">
            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="card">
                <h5 className="card-header text-start">Order Book Datatable</h5>
                <div className="card-datatable table-responsive">
                  <div className="d-flex justify-content-between mb-3 p-3 align-items-center">
                    <div className="d-flex align-items-center">
                      <label className="me-2">Show</label>
                      <select className="form-select w-auto">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                      </select>
                      <label className="ms-2">entries</label>
                    </div>
                    <div className="d-flex align-items-center">
                      <label className="me-2">Search:</label>
                      <input
                        type="text"
                        placeholder="Search..."
                        className="form-control w-auto"
                      />
                    </div>
                  </div>
                  <table className="dt-responsive table table-bordered">
                    <thead>
                      <tr>
                        <th>Symbols</th>
                        <th>Transaction Type</th>
                        <th>Exchange</th>
                        <th>Instrument Type</th>
                        <th>Strike Price</th>
                        <th>Option Type</th>
                        <th>Order Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="odd">
                        <td valign="top" colspan="9" class="dataTables_empty">
                          No data available in table
                        </td>
                      </tr>
                    </tbody>
                    <div className="d-flex text-center w-100"></div>
                    <tfoot>
                      <tr>
                        <th>Symbols</th>
                        <th>Transaction Type</th>
                        <th>Exchange</th>
                        <th>Instrument Type</th>
                        <th>Strike Price</th>
                        <th>Option Type</th>
                        <th>Order Status</th>
                        <th>Actions</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3 p-3">
                  <div>Showing 0 to 0 of 0 entries</div>
                  <div>
                    <button className="btn btn-secondary me-2">Previous</button>
                    <button className="btn btn-secondary">Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default OrderBook;
