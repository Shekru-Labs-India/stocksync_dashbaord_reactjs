import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SubHeader from "../component/SubHeader";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";
import "datatables.net";
import config from "../../app3/config";
// import "datatables.net-dt/css/jquery.dataTables.css";

const TradeBook = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from an API
    axios
      .get(`${config.apiDomain}/api/teacher/teacher_order_book`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });

    // Initialize DataTable
    const table = $("#myDataTable").DataTable();
    return () => {
      // Clean up
      table.destroy();
    };
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Header />
      <SubHeader />
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div className="layout-container">
          <div className="container-fulid p-5">
            <div className="container-fulid flex-grow-1 container-p-y">
              <div className="card p-4">
                <h5 className="card-header text-start">Trade Book</h5>
                <div
                  className="card-datatable table-responsive text-start"
                  id="DataTables_Table_0_wrapper"
                >
                  <table
                    id="myDataTable"
                    className="dt-responsive table table-bordered"
                  >
                    <thead>
                      <tr>
                        <th>Transaction Type</th>
                        <th>Exchange</th>
                        <th>Instrument Type</th>
                        <th>Strike Price</th>
                        <th>Option Type</th>
                        <th>Order Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    {loading ? (
                      <div>Loading...</div>
                    ) : error ? (
                      <></>
                    ) : (
                      <tbody>
                        {data.map((order, index) => (
                          <tr key={index}>
                            <td className="text-center">
                              {order.TransactionType}
                            </td>
                            <td className="text-center">
                              {order.transactionType}
                            </td>
                            <td className="text-center">{order.exchange}</td>
                            <td className="text-center">
                              {order.instrumentType}
                            </td>
                            <td className="text-center">{order.strikePrice}</td>
                            <td className="text-center">{order.optionType}</td>
                            <td className="text-center">{order.orderStatus}</td>
                            <td className="text-center">
                              <Link to="/my_report_view">
                                <button className="btn btn-primary active">
                                  <i className="ri-timeline-view"></i>
                                </button>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    )}
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

export default TradeBook;
