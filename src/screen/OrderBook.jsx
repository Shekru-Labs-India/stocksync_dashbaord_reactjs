// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Header from "../component/Header";
// import Footer from "../component/Footer";
// import SubHeader from "../component/SubHeader";
// import { Link, useNavigate } from "react-router-dom";
// import $ from "jquery";
// import "datatables.net";
// // import "datatables.net-dt/css/jquery.dataTables.css";

// const OrderBook = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch data from an API
//     axios
//       .post("http://192.46.212.210/api/teacher/teacher_order_book")
//       .then((response) => {
//         setData(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });

//     // Initialize DataTable
//     const table = $("#myDataTable").DataTable();
//     return () => {
//       // Clean up
//       table.destroy();
//     };
//   }, []);

//   const handleBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div>
//       <Header />
//       <SubHeader />
//       <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
//         <div className="layout-container">
//           <div className="container-fulid p-5">
//             <div className="container-fulid flex-grow-1 container-p-y">
//               <div className="card p-4">
//                 <h5 className="card-header text-start">Order Book</h5>
//                 <div
//                   className="card-datatable table-responsive text-start"
//                   id="DataTables_Table_0_wrapper"
//                 >
//                   <table
//                     id="myDataTable"
//                     className="dt-responsive table table-bordered"
//                   >
//                     <thead>
//                       <tr>
//                         <th>Symbols</th>
//                         <th>Transaction Type</th>
//                         <th>Exchange</th>
//                         <th>Instrument Type</th>
//                         <th>Strike Price</th>
//                         <th>Option Type</th>
//                         <th>Order Status</th>
//                         <th>Actions</th>
//                       </tr>
//                     </thead>
//                     {loading ? (
//                       <div>Loading...</div>
//                     ) : error ? (
//                       <></>
//                     ) : (
//                       <tbody>
//                         {data.map((order, index) => (
//                           <tr key={index}>
//                             <td className="text-center">{order.symbol}</td>
//                             <td className="text-center">
//                               {order.transactionType}
//                             </td>
//                             <td className="text-center">{order.exchange}</td>
//                             <td className="text-center">
//                               {order.instrumentType}
//                             </td>
//                             <td className="text-center">{order.strikePrice}</td>
//                             <td className="text-center">{order.optionType}</td>
//                             <td className="text-center">{order.orderStatus}</td>
//                             <td className="text-center">
//                               <Link to="/my_report_view">
//                                 <button className="btn btn-primary active">
//                                   <i className="ri-timeline-view"></i>
//                                 </button>
//                               </Link>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     )}
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderBook;/


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Header from "../component/Header";
// import Footer from "../component/Footer";
// import SubHeader from "../component/SubHeader";
// import { Link, useNavigate } from "react-router-dom";
// import $ from "jquery";
// import "datatables.net";

// const OrderBook = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch data from an API
//     const userId = localStorage.getItem('user_id');
    
//     if (!userId) {
//       setError(new Error("User ID not found in localStorage"));
//       setLoading(false);
//       return;
//     }

//     axios
//       .post("http://192.46.212.210/api/teacher/teacher_order_book", {
//         user_id: userId
//       })
//       .then((response) => {
//         console.log('API response:', response.data); // Log the API response
//         setData(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//         console.error('Error response:', error.response);
//       });

//     // Initialize DataTable
//     const table = $("#myDataTable").DataTable();
//     return () => {
//       // Clean up
//       table.destroy();
//     };
//   }, []);

//   const handleBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div>
//       <Header />
//       <SubHeader />
//       <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
//         <div className="layout-container">
//           <div className="container-fulid p-5">
//             <div className="container-fulid flex-grow-1 container-p-y">
//               <div className="card p-4">
//                 <h5 className="card-header text-start">Order Book</h5>
//                 <div
//                   className="card-datatable table-responsive text-start"
//                   id="DataTables_Table_0_wrapper"
//                 >
//                   <table
//                     id="myDataTable"
//                     className="dt-responsive table table-bordered"
//                   >
//                     <thead>
//                       <tr>
//                         <th>Symbols</th>
//                         <th>Transaction Type</th>
//                         <th>Exchange</th>
//                         <th>Instrument Type</th>
//                         <th>Strike Price</th>
//                         <th>Option Type</th>
//                         <th>Order Status</th>
//                         <th>Actions</th>
//                       </tr>
//                     </thead>
//                     {loading ? (
//                       <div>Loading...</div>
//                     ) : error ? (
//                       <div>Error: {error.message}</div>
//                     ) : (
//                       <tbody>
//                         {Array.isArray(data) && data.length > 0 ? (
//                           data.map((order, index) => (
//                             <tr key={index}>
//                               <td className="text-center">{order.symbol}</td>
//                               <td className="text-center">
//                                 {order.transactionType}
//                               </td>
//                               <td className="text-center">{order.exchange}</td>
//                               <td className="text-center">
//                                 {order.instrumentType}
//                               </td>
//                               <td className="text-center">{order.strikePrice}</td>
//                               <td className="text-center">{order.optionType}</td>
//                               <td className="text-center">{order.orderStatus}</td>
//                               <td className="text-center">
//                                 <Link to="/my_report_view">
//                                   <button className="btn btn-primary active">
//                                     <i className="ri-timeline-view"></i>
//                                   </button>
//                                 </Link>
//                               </td>
//                             </tr>
//                         ))
//                       ) : (
//                         <tr>
                          
//                         </tr>
//                       )}
//                     </tbody>
//                   )}
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderBook;


import React, { useEffect, useState } from "react";
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
    // Fetch data from an API
    const userId = localStorage.getItem('user_id');
    
    if (!userId) {
      setError(new Error("User ID not found in localStorage"));
      setLoading(false);
      return;
    }

    $.ajax({
      url: "http://192.46.212.210/api/teacher/teacher_order_book",
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
                <h5 className="card-header text-center">Order Book</h5>
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

export default OrderBook;

