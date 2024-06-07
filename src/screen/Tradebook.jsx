// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Header from "../component/Header";
// import Footer from "../component/Footer";
// import SubHeader from "../component/SubHeader";
// const TradeBook = () => {
// //   const [data, setData] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     // Fetch data from the API
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get("https://api.example.com/orders");
// //         setData(response.data);
// //       } catch (error) {
// //         setError(error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []);

//   return (
//     <div>   <Header />
//     <SubHeader />
//     <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
//       <div className="layout-container">
     
//         <div className="Container">
//           <div className="container-xxl flex-grow-1 container-p-y">
//             <div className="card">
//               <h5 className="card-header text-start">Trade Book Datatable</h5>
//               <div className="card-datatable table-responsive">
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
//                       <th>Symbols</th>
//                       <th>Transaction Type</th>
//                       <th>Exchange</th>
//                       <th>Instrument Type</th>
//                       <th>Strike Price</th>
//                       <th>Option Type</th>
//                       <th>Order Status</th>
//                       <th>Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr class="odd">
//                       <td valign="top" colspan="9" class="dataTables_empty">
//                         No data available in table
//                       </td>
//                     </tr>
//                   </tbody>
//                   <div className="d-flex text-center w-100"></div>
//                   <tfoot>
//                     <tr>
//                       <th>Symbols</th>
//                       <th>Transaction Type</th>
//                       <th>Exchange</th>
//                       <th>Instrument Type</th>
//                       <th>Strike Price</th>
//                       <th>Option Type</th>
//                       <th>Order Status</th>
//                       <th>Actions</th>
//                     </tr>
//                   </tfoot>
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
//     </div>
//   );
// };

// export default TradeBook;



import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SubHeader from "../component/SubHeader";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";
import "datatables.net";

const TradeBook = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from an API
    const userId = localStorage.getItem('user_id');
    
    if (!userId) {
      setError(new Error("User ID not found in localStorage"));
      setLoading(false);
      return;
    }

    $.ajax({
      url: "http://192.46.212.210/api/teacher/teacher_trade_book",
      type: "POST",
      data: { user_id: userId },
      success: (response) => {
        console.log('API response:', response); // Log the API response
        setData(response);
        setLoading(false);
      },
      error: (xhr, status, error) => {
        console.error('Error response:', xhr.responseText);
        setError(new Error(xhr.responseText));
        setLoading(false);
      }
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
          {/* <div className="container-fulid p-5">
            <div className="container-fulid flex-grow-1 container-p-y">
              <div className="card p-4"> */}
               <div className="Container">
          <div className="container-xxl flex-grow-1 container-p-y">
            <div className="card">
                <h5 className="card-header text-center">Trade Book</h5>
                <div
                  className="card-datatable table-responsive text-center p-5"
                  id="DataTables_Table_0_wrapper"
                >
                  <table
                    id="myDataTable"
                    className="dt-responsive table table-bordered"
                  >
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
                    {loading ? (
                      <div>Loading...</div>
                    ) : error ? (
                      <div>Error: {error.message}</div>
                    ) : (
                      <tbody>
                        {Array.isArray(data) && data.length > 0 ? (
                          data.map((order, index) => (
                            <tr key={index}>
                              <td className="text-center">{order.symbol}</td>
                              <td className="text-center">{order.transactionType}</td>
                              <td className="text-center">{order.exchange}</td>
                              <td className="text-center">{order.instrumentType}</td>
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
                          ))
                        ) : (
                          <tr>
                        
                          </tr>
                        )}
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