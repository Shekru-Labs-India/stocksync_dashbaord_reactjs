// import React, { useState } from "react";
// import Header from "../component/Header";
// import SubHeader from "../component/SubHeader";
// import Footer from "../component/Footer";

// const Basket = () => {
//   const [showModal, setShowModal] = useState(true);
//   const [selectedBasketIndex, setSelectedBasketIndex] = useState(null);
//   const handleClose = () => setShowModal(false);
//   const handleShow = () => setShowModal(true);
//   const [baskets, setBaskets] = useState([]);
//   const [currentBasket, setCurrentBasket] = useState({
//     name: "",
//     rows: [
//       {
//         name: "",
//         instrument: "1", // Default value
//         lotQtyBuffer: "1", // Default value
//         cePe: "1", // Default value for CE
//         transactionType: "1", // Default value for BUY Order
//         exchange: "1", // Default value
//         orderType: "1", // Default value
//         productType: "1", // Default value
//       },
//     ],
//   });
//   const [rows, setRows] = useState([
//     {
//       name: "",
//       instrument: "1", // Default value
//       lotQtyBuffer: "1", // Default value
//       cePe: "1", // Default value for CE
//       transactionType: "1", // Default value for BUY Order
//       exchange: "1", // Default value
//       orderType: "1", // Default value
//       productType: "1", // Default value
//     },
//   ]);

  // const handleAddRow = () => {
  //   if (rows.length < 10) {
  //     setRows([
  //       ...rows,
  //       {
  //         name: "",
  //         instrument: "1",
  //         lotQtyBuffer: "1",
  //         cePe: "1",
  //         transactionType: "1",
  //         exchange: "1",
  //         orderType: "1",
  //         productType: "1",
  //       },
  //     ]);
  //   } else {
  //     alert("You can only add up to 10 rows.");
  //   }
  // };

//   const handleInputChange = (index, event) => {
//     const newRows = [...rows];
//     newRows[index][event.target.name] = event.target.value;
//     setRows(newRows);
//   };

//   const handleDeleteRow = (index) => {
//     const newRows = [...rows];
//     newRows.splice(index, 1);
//     setRows(newRows);
//   };

//   const handleCreateBasket = () => {
//     setBaskets([...baskets, { ...currentBasket, rows }]);
//     setRows([
//       {
//         name: "",
//         instrument: "1",
//         lotQtyBuffer: "1",
//         cePe: "1",
//         transactionType: "1",
//         exchange: "1",
//         orderType: "1",
//         productType: "1",
//       },
//     ]);
//     setCurrentBasket({
//       name: "",
//       rows: [
//         {
//           name: "",
//           instrument: "1",
//           lotQtyBuffer: "1",
//           cePe: "1",
//           transactionType: "1",
//           exchange: "1",
//           orderType: "1",
//           productType: "1",
//         },
//       ],
//     });
//   };

//   const handleDeleteBasket = (index) => {
//     const newBaskets = [...baskets];
//     newBaskets.splice(index, 1);
//     setBaskets(newBaskets);
//   };

//   const handleEditBasket = (index) => {
//     setSelectedBasketIndex(index);
//     setCurrentBasket(baskets[index]);
//     setRows(baskets[index].rows); // Update rows with the selected basket's rows
//     handleShow();
//   };

//   const getFormattedBasketName = (index) => {
//     const currentDate = new Date();
//     const options = { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
//     const formattedDate = currentDate.toLocaleString('default', options).replace(',', '').replace(/ at /, ' ');
//     return `Basket ${formattedDate}`;
//   };

//   return (
//     <div>
//        <Header />
//           <SubHeader />
//       <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
//         <div className="layout-container">

//           <div className="container-xxl flex-grow-1 container-p-y">
//             <div className="row">
//               <div className="col-3">

//                   <div className="card mb-3" >
//                     <div
//                       className="card-datatable table-responsive pt-0"
//                       data-bs-toggle="modal"
//                       data-bs-target="#exLargeModal"
//                       onClick={() => handleEditBasket}
//                     >
//                       <table className="table">
//                         <tbody>
//                           <tr>

//                           <td className="fw-bold1 " colSpan="2">
// basket name              </td>

//                             <td className="text-danger">
//                               <i
//                                 className="ri-close-circle-line"

//                               ></i>
//                             </td>

//                           </tr>
//                           <tr>
//                             <td>Total1/10</td>
//                             <td>
//                               <span
//                                 className={

//                                      "text-success"

//                                 }
//                               >
//                                 Buy:5

//                               </span>
//                               /10
//                             </td>
//                             <td>
//                               <span
//                                 className={

//                                     "text-danger"

//                                 }
//                               >
//                                 Sell:10

//                               </span>
//                               /10
//                             </td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>

//               </div>
//               <div className="col-9">
//                 <div className="card">
//                   <div className="card-header d-flex justify-content-between ">
//                     <h5 className="mb-0 ">Create New Basket</h5>
//                     {/* <button
//                       className="btn btn-primary active "
//                       onClick={handleAddRow}
//                     >
//                       Add
//                     </button> */}
//                   </div>
//                   <div className="mt-3 mx-3 d-flex align-items-center ">
//                     <label htmlFor="basketName" className="form-label me-2">
//                       Basket Name:
//                     </label>
//                   </div>
//                   <div className="mt-3 mx-3 d-flex align-items-center mb-3 d-flex justify-content-between">
//                     <input
//                       type="text"
//                       className=" form-control form-control-sm"
//                       id="basketName"
//                       placeholder="Enter Basket Name"
//                       value={currentBasket.name}
//                       onChange={(event) =>
//                         setCurrentBasket({
//                           ...currentBasket,
//                           name: event.target.value,
//                         })
//                       }
//                     />
//                     <button
//                       className="btn btn-primary active "
//                       onClick={handleAddRow}
//                     >
//                       Add
//                     </button>
//                   </div>

//                   <div className="table-responsive text-nowrap ">
//                     <table className="table">
//                       <thead>
//                         <tr>
//                           {/* <th>Name</th> */}
//                           <th>Instrument</th>
//                           <th>Lot Qty Buffer</th>
//                           <th>CE/PE</th>
//                           <th>Transaction Type</th>
//                           <th>Exchange</th>
//                           <th>Order Type</th>
//                           <th>Product Type</th>
//                           <th>Action</th>
//                         </tr>
//                       </thead>
//                       <tbody className="table-border-bottom-0">
//                         {rows.map((row, index) => (
//                           <tr key={index}>
//                             {/* <td>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="name"
//                                 value={row.name}
//                                 onChange={(event) => handleInputChange(index, event)}
//                               />
//                             </td> */}
//                             <td>
//                               <select
//                                 id="defaultSelect"
//                                 className="form-select"
//                                 name="instrument"
//                                 value={row.instrument}
//                                 onChange={(event) =>
//                                   handleInputChange(index, event)
//                                 }
//                               >
//                                 <option value="1">Instrument 1</option>
//                                 <option value="2">Instrument 2</option>
//                                 <option value="3">Instrument 3</option>
//                               </select>
//                             </td>
//                             <td>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="lotQtyBuffer"
//                                 placeholder="Enter Lot QYT Buffer"
//                                 value={row.lotQtyBuffer}
//                                 onChange={(event) =>
//                                   handleInputChange(index, event)
//                                 }
//                               />
//                             </td>
//                             <td>
//                             <div className="form-check form-check-inline mt-4">
//                                 <input
//                                   className="form-check-input"
//                                   type="radio"
//                                   name={`cePe${index}`}
//                                   value="1"
//                                   checked={row.cePe === "1"}
//                                   onChange={(event) =>
//                                     handleInputChange(index, event)
//                                   }
//                                 />

//                                 <label
//                                   className="form-check-label"
//                                   htmlFor={`cePe${index}`}
//                                   style={{ color: "green" }}
//                                 >
//                                   CE
//                                 </label>
//                               </div>
//                               <div className="form-check form-check-inline">
//                                 <input
//                                   className="form-check-input"
//                                   type="radio"
//                                   name={`cePe${index}`}
//                                   value="1"
//                                   onChange={(event) =>
//                                     handleInputChange(index, event)
//                                   }
//                                 />

//                                 <label
//                                   className="form-check-label"
//                                   htmlFor={`cePe${index}`}
//                                   style={{ color: "orange" }}
//                                 >
//                                   PE
//                                 </label>
//                               </div>
//                             </td>
//                             <td>
//                             <div className="form-check form-check-inline mt-4">
//   <input
//     className="form-check-input"
//     type="radio"
//     name={`transactionType${index}`}
//     value="1"
//     checked={row.transactionType === "1"} // Check if transactionType value is "1"
//     onChange={(event) => handleInputChange(index, event)}
//   />

//   <label className="form-check-label">
//     <span
//       style={{
//         color: "skyblue",
//         fontWeight: "bold",
//       }}
//     >
//       BUY
//     </span>
//   </label>
// </div>
// <div className="form-check form-check-inline">
//   <input
//     className="form-check-input"
//     type="radio"
//     name={`transactionType${index}`}
//     value="2"
//     checked={row.transactionType === "2"} // Check if transactionType value is "2"
//     onChange={(event) => handleInputChange(index, event)}
//   />
//   <label className="form-check-label">
//     <span
//       style={{
//         color: "orange",
//         fontWeight: "bold",
//       }}
//     >
//       SELL
//     </span>
//   </label>
// </div>

//                             </td>
//                             <td>
//                               <select
//                                 id="defaultSelect"
//                                 className="form-select"
//                                 name="exchange"
//                                 value={row.exchange}
//                                 onChange={(event) =>
//                                   handleInputChange(index, event)
//                                 }
//                               >
//                                 <option value="1">NFO</option>
//                                 <option value="2">Exchange 2</option>
//                                 <option value="3">Exchange 3</option>
//                               </select>
//                             </td>
//                             <td>
//                               <select
//                                 id="defaultSelect"
//                                 className="form-select"
//                                 name="orderType"
//                                 value={row.orderType}
//                                 onChange={(event) =>
//                                   handleInputChange(index, event)
//                                 }
//                               >
//                                 <option value="1">MARKET</option>
//                                 <option value="2">Order Type 2</option>
//                                 <option value="3">Order Type 3</option>
//                               </select>
//                             </td>
//                             <td>
//                               <select
//                                 id="defaultSelect"
//                                 className="form-select"
//                                 name="productType"
//                                 value={row.productType}
//                                 onChange={(event) =>
//                                   handleInputChange(index, event)
//                                 }
//                               >
//                                 <option value="1">CARRYFORWARD</option>
//                                 <option value="2">Product Type 2</option>
//                                 <option value="3">Product Type 3</option>
//                               </select>
//                             </td>
//                             <td
//                               className="text-danger"
//                               onClick={() => handleDeleteRow(index)}
//                             >
//                               <i className="ri-close-circle-line ri-2x"></i>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                     <div className="card-footer d-flex justify-content-between ">
//                       <button
//                         className="btn btn-success"
//                         onClick={handleCreateBasket}
//                       >
//                         Create Basket
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div
//           className="modal fade"
//           id="exLargeModal"
//           tabIndex="-1"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog modal-xl" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title x" id="exampleModalLabel4">
//                   Modal title
//                 </h5>

//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div className="mt-3 mx-3 d-flex align-items-center ">
//                 <label htmlFor="basketName" className="form-label me-2">
//                   Basket Name:
//                 </label>
//               </div>
//               <div className="mt-3 mx-3 d-flex align-items-center mb-3 d-flex justify-content-between">
//                 <input
//                   type="text"
//                   className="form-control form-control-sm"
//                   id="basketName"
//                   placeholder="Enter Basket Name"
//                   value={currentBasket.name}
//                   onChange={(event) =>
//                     setCurrentBasket({
//                       ...currentBasket,
//                       name: event.target.value,
//                     })
//                   }
//                 />
//                 <button
//                   className="btn btn-primary active "
//                   onClick={handleAddRow}
//                 >
//                   Add
//                 </button>
//               </div>

//               <div className="modal-body">
//                 <table className="table">
//                   <thead>
//                     <tr>
//                       {/* <th>Name</th> */}
//                       <th>Instrument</th>
//                       <th>Lot Qty Buffer</th>
//                       <th>CE/PE</th>
//                       <th>Transaction Type</th>
//                       <th>Exchange</th>
//                       <th>Order Type</th>
//                       <th>Product Type</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {rows.map((row, index) => (
//                       <tr key={index}>
//                         {/* <td>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="name"
//                             value={row.name}
//                             onChange={(event) => handleInputChange(index, event)}
//                           />
//                         </td> */}
//                         <td>
//                           <select
//                             id="defaultSelect"
//                             className="form-select"
//                             name="instrument"
//                             value={row.instrument}
//                             onChange={(event) =>
//                               handleInputChange(index, event)
//                             }
//                           >
//                             <option value="1">Instrument 1</option>
//                             <option value="2">Instrument 2</option>
//                             <option value="3">Instrument 3</option>
//                           </select>
//                         </td>
//                         <td>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="lotQtyBuffer"
//                             placeholder="Enter Lot QTY Buffer"
//                             value={row.lotQtyBuffer}
//                             onChange={(event) =>
//                               handleInputChange(index, event)
//                             }
//                           />
//                         </td>
//                         <td>
//                           <div className="form-check form-check-inline mt-4">
//                             <input
//                               className="form-check-input"
//                               type="radio"
//                               name={`cePe${index}`}
//                               value="1"
//                               checked={row.cePe === "1"}
//                               onChange={(event) =>
//                                 handleInputChange(index, event)
//                               }
//                             />
//                             <label
//                               className="form-check-label"
//                               htmlFor={`cePe${index}`}
//                               style={{ color: "green" }}
//                             >
//                               CE
//                             </label>
//                           </div>
//                           <div className="form-check form-check-inline">
//                             <input
//                               className="form-check-input"
//                               type="radio"
//                               name={`cePe${index}`}
//                               value="2"
//                               checked={row.cePe === "2"}
//                               onChange={(event) =>
//                                 handleInputChange(index, event)
//                               }
//                             />
//                             <label
//                               className="form-check-label"
//                               htmlFor={`cePe${index}`}
//                               style={{ color: "orange" }}
//                             >
//                               PE
//                             </label>
//                           </div>
//                         </td>
//                         <td>
//                           <div className="form-check form-check-inline mt-4">
//                             <input
//                               className="form-check-input"
//                               type="radio"
//                               name={`transactionType${index}`}
//                               value="1"
//                               checked={row.transactionType === "1"}
//                               onChange={(event) =>
//                                 handleInputChange(index, event)
//                               }
//                             />
//                             <label className="form-check-label">
//                               <span
//                                 style={{ color: "skyblue", fontWeight: "bold" }}
//                               >
//                                 BUY
//                               </span>
//                             </label>
//                           </div>
//                           <div className="form-check form-check-inline">
//                             <input
//                               className="form-check-input"
//                               type="radio"
//                               name={`transactionType${index}`}
//                               value="2"
//                               checked={row.transactionType === "2"}
//                               onChange={(event) =>
//                                 handleInputChange(index, event)
//                               }
//                             />
//                             <label className="form-check-label">
//                               <span
//                                 style={{ color: "orange", fontWeight: "bold" }}
//                               >
//                                 SELL
//                               </span>
//                             </label>
//                           </div>
//                         </td>
//                         <td>
//                           <select
//                             id="defaultSelect"
//                             className="form-select"
//                             name="exchange"
//                             value={row.exchange}
//                             onChange={(event) =>
//                               handleInputChange(index, event)
//                             }
//                           >
//                             <option value="1">NFO</option>
//                             <option value="2">Exchange 2</option>
//                             <option value="3">Exchange 3</option>
//                           </select>
//                         </td>
//                         <td>
//                           <select
//                             id="defaultSelect"
//                             className="form-select"
//                             name="orderType"
//                             value={row.orderType}
//                             onChange={(event) =>
//                               handleInputChange(index, event)
//                             }
//                           >
//                             <option value="1">MARKET</option>
//                             <option value="2">Order Type 2</option>
//                             <option value="3">Order Type 3</option>
//                           </select>
//                         </td>
//                         <td>
//                           <select
//                             id="defaultSelect"
//                             className="form-select"
//                             name="productType"
//                             value={row.productType}
//                             onChange={(event) =>
//                               handleInputChange(index, event)
//                             }
//                           >
//                             <option value="1">CARRYFORWARD</option>
//                             <option value="2">Product Type 2</option>
//                             <option value="3">Product Type 3</option>
//                           </select>
//                         </td>
//                         <td
//                           className="text-danger"
//                           onClick={() => handleDeleteRow(index)}
//                         >
//                           <i className="ri-close-circle-line ri-2x"></i>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary me-auto"
//                   data-bs-dismiss="modal"
//                 >
//                   Close
//                 </button>
//                 <button type="button" className="btn btn-info">
//                   Execute All
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Basket;

// import React, { useState, useEffect } from "react";
// import Header from "../component/Header";
// import SubHeader from "../component/SubHeader";
// import Footer from "../component/Footer";

// const Basket = () => {
//   const [showModal, setShowModal] = useState(true);
//   const [selectedBasketIndex, setSelectedBasketIndex] = useState(null);
//   const [baskets, setBaskets] = useState([]);
//   const userId = localStorage.getItem("user_id");
//   const [currentBasket, setCurrentBasket] = useState({
//     name: "",
//     rows: [
//       {
//         name: "",
//         instrument: "1",
//         lotQtyBuffer: "1",
//         cePe: "1",
//         transactionType: "1",
//         exchange: "1",
//         orderType: "1",
//         productType: "1",
//       },
//     ],
//   });
//   const [rows, setRows] = useState([
//     {
//       name: "",
//       instrument: "1",
//       lotQtyBuffer: "1",
//       cePe: "1",
//       transactionType: "1",
//       exchange: "1",
//       orderType: "1",
//       productType: "1",
//     },
//   ]);

//   useEffect(() => {
//     fetchBasketList();
//   }, []);

//   const fetchBasketList = async () => {
//     try {
//       const response = await fetch(
//         "http://192.46.212.210/api/teacher/basket_list_view",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ teacher_id: userId }),
//         }
//       );

//       if (response.ok) {
//         const data = await response.json();
//         setBaskets(data.baskets || []);
//       } else {
//         console.error("Failed to fetch basket list", response.statusText);
//       }
//     } catch (error) {
//       console.error(
//         "An error occurred while fetching the basket list",
//         error
//       );
//     }
//   };

//   const handleAddRow = () => {
//     if (rows.length < 10) {
//       setRows([
//         ...rows,
//         {
//           name: "",
//           instrument: "1",
//           lotQtyBuffer: "1",
//           cePe: "1",
//           transactionType: "1",
//           exchange: "1",
//           orderType: "1",
//           productType: "1",
//         },
//       ]);
//     } else {
//       alert("You can only add up to 10 rows.");
//     }
//   };

//   const handleInputChange = (index, event) => {
//     const newRows = [...rows];
//     newRows[index][event.target.name] = event.target.value;
//     setRows(newRows);
//   };

//   const handleDeleteRow = (index) => {
//     const newRows = [...rows];
//     newRows.splice(index, 1);
//     setRows(newRows);
//   };

//   const handleCreateBasket = async () => {
//     const teacherId = userId;

//     const basketData = rows.map((row) => ({
//       instrument: row.instrument,
//       ce_pe: row.cePe === "1" ? "CE" : "PE",
//       lot_quantity_buffer: row.lotQtyBuffer,
//       transactionType: row.transactionType === "1" ? "BUY" : "SELL",
//       exchange: "NFO",
//       orderType: "MARKET",
//       productType: "CARRYFORWARD",
//       ltp: 43,
//     }));

//     const payload = {
//       basket_id: null,
//       basket_name: currentBasket.name,
//       teacher_id: teacherId,
//       basket_data: basketData,
//     };

//     try {
//       const response = await fetch(
//         "http://192.46.212.210/api/teacher/create_update_basket",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(payload),
//         }
//       );

//       if (response.ok) {
//         const result = await response.json();
//         setBaskets([...baskets, { ...currentBasket, rows }]);
//         setRows([
//           {
//             name: "",
//             instrument: "1",
//             lotQtyBuffer: "1",
//             cePe: "1",
//             transactionType: "1",
//             exchange: "1",
//             orderType: "1",
//             productType: "1",
//           },
//         ]);
//         setCurrentBasket({
//           name: "",
//           rows: [
//             {
//               name: "",
//               instrument: "1",
//               lotQtyBuffer: "1",
//               cePe: "1",
//               transactionType: "1",
//               exchange: "1",
//               orderType: "1",
//               productType: "1",
//             },
//           ],
//         });
//       } else {
//         const errorText = await response.text();
//         console.error("Failed to create basket", response.statusText, errorText);
//       }
//     } catch (error) {
//       console.error("An error occurred while creating the basket", error);
//     }
//   };

//   const handleDeleteBasket = (index) => {
//     const newBaskets = [...baskets];
//     newBaskets.splice(index, 1);
//     setBaskets(newBaskets);
//   };

//   const handleEditBasket = (index) => {
//     setSelectedBasketIndex(index);
//     setCurrentBasket(baskets[index]);
//     setRows(baskets[index].rows);
//     handleShow();
//   };

//   const getFormattedBasketName = (index) => {
//     const currentDate = new Date();
//     const options = {
//       month: "long",
//       day: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//     };
//     const formattedDate = currentDate
//       .toLocaleString("default", options)
//       .replace(",", "")
//       .replace(/ at /, " ");
//     return `Basket ${formattedDate}`;
//   };

//   const handleClose = () => setShowModal(false);
//   const handleShow = () => setShowModal(true);

//   return (
//     <div>
//       <Header />
//       <SubHeader />
//       <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
//         <div className="layout-container">
//           <div className="container-xxl flex-grow-1 container-p-y">
//             <div className="row">
//               <div className="col-3">

//                   <div className="card mb-3" >
//                     <div
//                       className="card-datatable table-responsive pt-0"
//                       data-bs-toggle="modal"
//                       data-bs-target="#exLargeModal"
//                       // onClick={() => handleEditBasket(index)}
//                     >
//                       <table className="table">
//                         <tbody>
//                           <tr>
//                             <td className="fw-bold1" colSpan="2">
//                              basket name
//                             </td>
//                             <td className="text-danger">
//                               <i
//                                 className="ri-close-circle-line"

//                               ></i>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td>Total: 1/10</td>
//                             <td>
//                               <span

//                               >
//                                 Buy:
//                               </span>
//                               /10
//                             </td>
//                             <td>
//                               <span

//                               >
//                                 Sell:
//                               </span>
//                               /10
//                             </td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>

//               </div>
//               <div className="col-9">
//                 <div className="card">
//                   <div className="card-header d-flex justify-content-between">
//                     <h5 className="mb-0">Create New Basket</h5>
//                   </div>
//                   <div className="mt-3 mx-3 d-flex align-items-center">
//                     <label htmlFor="basketName" className="form-label me-2">
//                       Basket Name:
//                     </label>
//                   </div>
//                   <div className="mt-3 mx-3  d-flex align-items-center mb-3 d-flex justify-content-between">
//                     <input
//                       type="text"
//                       className="form-control form-control-sm me-5"
//                       id="basketName"
//                       placeholder=" Basket Name"
//                       value={currentBasket.name}
//                       onChange={(event) =>
//                         setCurrentBasket({
//                           ...currentBasket,
//                           name: event.target.value,
//                         })
//                       }
//                     />
//                     <button
//                       className="btn btn-primary active "
//                       onClick={handleAddRow}
//                     >
//                       Add
//                     </button>
//                   </div>

//                   <div className="table-responsive text-nowrap">
//                     <table className="table">
//                       <thead>
//                         <tr>
//                           <th>Instrument</th>
//                           <th>Lot Qty Buffer</th>
//                           <th>CE/PE</th>
//                           <th>Transaction Type</th>
//                           <th>Exchange</th>
//                           <th>Order Type</th>
//                           <th>Product Type</th>
//                           <th>Action</th>
//                         </tr>
//                       </thead>
//                       <tbody className="table-border-bottom-0">
//                         {rows.map((row, index) => (
//                           <tr key={index}>

//                                                           <td>
//                               <select
//                                 id="defaultSelect"
//                                 className="form-select"
//                                 name="instrument"
//                                 value={row.instrument}
//                                 onChange={(event) =>
//                                   handleInputChange(index, event)
//                                 }
//                               >
//                                 <option value="1">BANKNIFTY05JUN2452500PE</option>
//                                 <option value="2">BANKNIFTY05JUN2452500PE</option>
//                                 <option value="3">BANKNIFTY05JUN2452500PE</option>
//                               </select>
//                             </td>

//                             <td>
//                               <input
//                                 type="text"
//                                 className="form-control form-control-sm"
//                                 name="lotQtyBuffer"
//                                 value={row.lotQtyBuffer}
//                                 placeholder="Lot Qty Buffer"
//                                 onChange={(event) =>
//                                   handleInputChange(index, event)
//                                 }
//                               />
//                             </td>
//                             <td>

//                               {/* <div className="mt-3 mx-3 d-flex align-items-center"> */}

//   <div className="form-check form-check-inline">
//     <input
//       type="radio"
//       className="form-check-input"
//       name="cePe"
//       value="1"
//       checked={row.cePe === "1"}
//       onChange={(event) => handleInputChange(index, event)}
//     />
//     <label className="form-check-label text-success ">CE</label>
//   </div>
//   <div className="form-check form-check-inline ml-2">
//     <input
//       type="radio"
//       className="form-check-input"
//       name="cePe"
//       value="2"
//       checked={row.cePe === "2"}
//       onChange={(event) => handleInputChange(index, event)}
//     />
//     <label className="form-check-label text-warning">PE</label>
//   </div>
// {/* </div> */}

//                             </td>
//                             <td>
//                             {/* <div className="mt-3 mx-3 d-flex align-items-center"> */}

//   <div className="form-check form-check-inline">
//     <input
//       type="radio"
//       className="form-check-input"
//       name="transactionType"
//       value="1"
//       checked={row.transactionType === "1"}
//       onChange={(event) => handleInputChange(index, event)}
//     />
//     <label className="form-check-label text-info ">Buy</label>
//   </div>
//   <div className="form-check form-check-inline ml-2">
//     <input
//       type="radio"
//       className="form-check-input"
//       name="transactionType"
//       value="2"
//       checked={row.transactionType === "2"}
//       onChange={(event) => handleInputChange(index, event)}
//     />
//     <label className="form-check-label text-danger">Sell</label>
//   </div>
// {/* </div> */}
//                             </td>
//                             <td>
//                               <select
//                                 className="form-select form-select-sm"
//                                 name="exchange"
//                                 value={row.exchange}
//                                 onChange={(event) =>
//                                   handleInputChange(index, event)
//                                 }
//                               >
//                                 <option value="1">NFO</option>
//                               </select>
//                             </td>
//                             <td>
//                               <select
//                                 className="form-select form-select-sm"
//                                 name="orderType"
//                                 value={row.orderType}
//                                 onChange={(event) =>
//                                   handleInputChange(index, event)
//                                 }
//                               >
//                                 <option value="1">MARKET</option>
//                               </select>
//                             </td>
//                             <td>
//                               <select
//                                 className="form-select form-select-sm"
//                                 name="productType"
//                                 value={row.productType}
//                                 onChange={(event) =>
//                                   handleInputChange(index, event)
//                                 }
//                               >
//                                 <option value="1">CARRYFORWARD</option>
//                               </select>
//                             </td>
//                             <td>
//                               <button
//                                 className="btn btn-outline-danger btn-sm"
//                                 onClick={() => handleDeleteRow(index)}
//                               >
//                                 <i className="ri-delete-bin-line"></i>
//                               </button>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                   <div className="d-flex justify-content-start mt-3 mx-3 mb-3">
//                     <button
//                       className="btn btn-success"
//                       onClick={handleCreateBasket}
//                     >
//                       Create Basket
//                     </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//         <div
//           className="modal fade"
//           id="exLargeModal"
//           tabIndex="-1"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog modal-xl" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title x" id="exampleModalLabel4">
//                   Modal title
//                 </h5>

//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div className="mt-3 mx-3 d-flex align-items-center ">
//                 <label htmlFor="basketName" className="form-label me-2">
//                   Basket Name:
//                 </label>
//               </div>
//               <div className="mt-3 mx-3 d-flex align-items-center mb-3 d-flex justify-content-between">
//                 <input
//                   type="text"
//                   className="form-control form-control-sm"
//                   id="basketName"
//                   placeholder="Enter Basket Name"
//                   value={currentBasket.name}
//                   onChange={(event) =>
//                     setCurrentBasket({
//                       ...currentBasket,
//                       name: event.target.value,
//                     })
//                   }
//                 />
//                 <button
//                   className="btn btn-primary active "
//                   onClick={handleAddRow}
//                 >
//                   Add
//                 </button>
//               </div>

//               <div className="modal-body">
//                 <table className="table">
//                   <thead>
//                     <tr>
//                       {/* <th>Name</th> */}
//                       <th>Instrument</th>
//                       <th>Lot Qty Buffer</th>
//                       <th>CE/PE</th>
//                       <th>Transaction Type</th>
//                       <th>Exchange</th>
//                       <th>Order Type</th>
//                       <th>Product Type</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {rows.map((row, index) => (
//                       <tr key={index}>
//                         {/* <td>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="name"
//                             value={row.name}
//                             onChange={(event) => handleInputChange(index, event)}
//                           />
//                         </td> */}
                        // <td>
                        //   <select
                        //     id="defaultSelect"
                        //     className="form-select"
                        //     name="instrument"
                        //     value={row.instrument}
                        //     onChange={(event) =>
                        //       handleInputChange(index, event)
                        //     }
                        //   >
                        //     <option value="1">Instrument 1</option>
                        //     <option value="2">Instrument 2</option>
                        //     <option value="3">Instrument 3</option>
                        //   </select>
                        // </td>
//                         <td>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="lotQtyBuffer"
//                             placeholder="Enter Lot QTY Buffer"
//                             value={row.lotQtyBuffer}
//                             onChange={(event) =>
//                               handleInputChange(index, event)
//                             }
//                           />
//                         </td>
//                         <td>
//                           <div className="form-check form-check-inline mt-4">
//                             <input
//                               className="form-check-input"
//                               type="radio"
//                               name={`cePe${index}`}
//                               value="1"
//                               checked={row.cePe === "1"}
//                               onChange={(event) =>
//                                 handleInputChange(index, event)
//                               }
//                             />
//                             <label
//                               className="form-check-label"
//                               htmlFor={`cePe${index}`}
//                               style={{ color: "green" }}
//                             >
//                               CE
//                             </label>
//                           </div>
//                           <div className="form-check form-check-inline">
//                             <input
//                               className="form-check-input"
//                               type="radio"
//                               name={`cePe${index}`}
//                               value="2"
//                               checked={row.cePe === "2"}
//                               onChange={(event) =>
//                                 handleInputChange(index, event)
//                               }
//                             />
//                             <label
//                               className="form-check-label"
//                               htmlFor={`cePe${index}`}
//                               style={{ color: "orange" }}
//                             >
//                               PE
//                             </label>
//                           </div>
//                         </td>
//                         <td>
//                           <div className="form-check form-check-inline mt-4">
//                             <input
//                               className="form-check-input"
//                               type="radio"
//                               name={`transactionType${index}`}
//                               value="1"
//                               checked={row.transactionType === "1"}
//                               onChange={(event) =>
//                                 handleInputChange(index, event)
//                               }
//                             />
//                             <label className="form-check-label">
//                               <span
//                                 style={{ color: "skyblue", fontWeight: "bold" }}
//                               >
//                                 BUY
//                               </span>
//                             </label>
//                           </div>
//                           <div className="form-check form-check-inline">
//                             <input
//                               className="form-check-input"
//                               type="radio"
//                               name={`transactionType${index}`}
//                               value="2"
//                               checked={row.transactionType === "2"}
//                               onChange={(event) =>
//                                 handleInputChange(index, event)
//                               }
//                             />
//                             <label className="form-check-label">
//                               <span
//                                 style={{ color: "orange", fontWeight: "bold" }}
//                               >
//                                 SELL
//                               </span>
//                             </label>
//                           </div>
//                         </td>
//                         <td>
//                           <select
//                             id="defaultSelect"
//                             className="form-select"
//                             name="exchange"
//                             value={row.exchange}
//                             onChange={(event) =>
//                               handleInputChange(index, event)
//                             }
//                           >
//                             <option value="1">NFO</option>
//                             <option value="2">Exchange 2</option>
//                             <option value="3">Exchange 3</option>
//                           </select>
//                         </td>
//                         <td>
//                           <select
//                             id="defaultSelect"
//                             className="form-select"
//                             name="orderType"
//                             value={row.orderType}
//                             onChange={(event) =>
//                               handleInputChange(index, event)
//                             }
//                           >
//                             <option value="1">MARKET</option>
//                             <option value="2">Order Type 2</option>
//                             <option value="3">Order Type 3</option>
//                           </select>
//                         </td>
//                         <td>
//                           <select
//                             id="defaultSelect"
//                             className="form-select"
//                             name="productType"
//                             value={row.productType}
//                             onChange={(event) =>
//                               handleInputChange(index, event)
//                             }
//                           >
//                             <option value="1">CARRYFORWARD</option>
//                             <option value="2">Product Type 2</option>
//                             <option value="3">Product Type 3</option>
//                           </select>
//                         </td>
//                         <td
//                           className="text-danger"
//                           onClick={() => handleDeleteRow(index)}
//                         >
//                           <i className="ri-close-circle-line ri-2x"></i>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary me-auto"
//                   data-bs-dismiss="modal"
//                 >
//                   Close
//                 </button>
//                 <button type="button" className="btn btn-info">
//                   Execute All
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <Footer />

//     </div>
//   );
// };

// export default Basket;

// import React, { useState, useEffect } from "react";
// import Header from "../component/Header";
// import SubHeader from "../component/SubHeader";
// import Footer from "../component/Footer";

// const Basket = () => {
//   const [showModal, setShowModal] = useState(true);
//   const [selectedBasketIndex, setSelectedBasketIndex] = useState(null);
//   const handleClose = () => setShowModal(false);
//   const handleShow = () => setShowModal(true);
//   const [baskets, setBaskets] = useState([]); // Ensure baskets is initialized as an empty array

//   const [currentBasket, setCurrentBasket] = useState({
//     name: "",
//     rows: [
//       {
//         name: "",
//         instrument: "1", // Default value
//         lotQtyBuffer: "1", // Default value
//         cePe: "1", // Default value for CE
//         transactionType: "1", // Default value for BUY Order
//         exchange: "1", // Default value
//         orderType: "1", // Default value
//         productType: "1", // Default value
//       },
//     ],
//   });

//   const [rows, setRows] = useState([
//     {
//       name: "",
//       instrument: "1", // Default value
//       lotQtyBuffer: "1", // Default value
//       cePe: "1", // Default value for CE
//       transactionType: "1", // Default value for BUY Order
//       exchange: "1", // Default value
//       orderType: "1", // Default value
//       productType: "1", // Default value
//     },
//   ]);

//   const [instruments, setInstruments] = useState([]);
//   const [loading, setLoading] = useState(true); // Add loading state

//   useEffect(() => {
//     fetchInstrumentList();
//   }, []);

//   const fetchInstrumentList = async () => {
//     try {
//       const response = await fetch(
//         "http://192.46.212.210/api/teacher/get_instrument_list",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ search: "b" }),
//         }
//       );

//       if (response.ok) {
//         const data = await response.json();
//         console.log("Fetched instruments:", data.data);
//         setInstruments(data.data || []); // Ensure you're accessing the correct field from the response
//       } else {
//         console.error("Failed to fetch instrument list", response.statusText);
//       }
//     } catch (error) {
//       console.error(
//         "An error occurred while fetching the instrument list",
//         error
//       );
//     } finally {
//       setLoading(false); // Set loading to false after the fetch completes
//     }
//   };

//   const handleInputChange = (index, event) => {
//     const newRows = [...rows];
//     newRows[index][event.target.name] = event.target.value;
//     setRows(newRows);
//   };

//   const handleDeleteRow = (index) => {
//     const newRows = [...rows];
//     newRows.splice(index, 1);
//     setRows(newRows);
//   };

//   const handleAddRow = () => {
//     setRows([
//       ...rows,
//       {
//         name: "",
//         instrument: "1", // Default value
//         lotQtyBuffer: "1", // Default value
//         cePe: "1", // Default value for CE
//         transactionType: "1", // Default value for BUY Order
//         exchange: "1", // Default value
//         orderType: "1", // Default value
//         productType: "1", // Default value
//       },
//     ]);
//   };

//   const handleCreateBasket = async () => {
//     try {
//       const response = await fetch(
//         "http://192.46.212.210/api/teacher/create_update_basket",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             basket_id: null,
//             basket_name: currentBasket.name,
//             teacher_id: localStorage.getItem("user_id"),
//             basket_data: rows,
//           }),
//         }
//       );

//       if (response.ok) {
//         const data = await response.json();
//         console.log("Basket created:", data);
//         setBaskets([...baskets, data]); // Add the newly created basket to baskets list
//         setRows([
//           {
//             name: "",
//             instrument: "1",
//             lotQtyBuffer: "1",
//             cePe: "1",
//             transactionType: "1",
//             exchange: "1",
//             orderType: "1",
//             productType: "1",
//           },
//         ]);
//         setCurrentBasket({
//           name: "",
//           rows: [
//             {
//               name: "",
//               instrument: "1",
//               lotQtyBuffer: "1",
//               cePe: "1",
//               transactionType: "1",
//               exchange: "1",
//               orderType: "1",
//               productType: "1",
//             },
//           ],
//         });
//       } else {
//         console.error("Failed to create basket:", response.statusText);
//       }
//     } catch (error) {
//       console.error("An error occurred while creating basket:", error);
//     }
//   };

//   const handleDeleteBasket = async (index) => {
//     const basketId = baskets[index].basket_id;

//     try {
//       const response = await fetch(
//         "http://192.46.212.210/api/teacher/delete_basket",
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ basket_id: basketId }),
//         }
//       );

//       if (response.ok) {
//         console.log(`Basket ${basketId} deleted successfully`);
//         const newBaskets = [...baskets];
//         newBaskets.splice(index, 1);
//         setBaskets(newBaskets);
//       } else {
//         console.error("Failed to delete basket:", response.statusText);
//       }
//     } catch (error) {
//       console.error("An error occurred while deleting basket:", error);
//     }
//   };

//   const handleEditBasket = (index) => {
//     setSelectedBasketIndex(index);
//     setCurrentBasket(baskets[index]);
//     setRows(baskets[index].rows); // Update rows with the selected basket's rows
//     handleShow();
//   };

//   const getFormattedBasketName = (index) => {
//     const currentDate = new Date();
//     const options = {
//       month: "long",
//       day: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//     };
//     const formattedDate = currentDate
//       .toLocaleString("default", options)
//       .replace(",", "")
//       .replace(/ at /, " ");
//     return `Basket ${formattedDate}`;
//   };

//   const userId = localStorage.getItem("user_id");

//   useEffect(() => {
//     fetchBasketList();
//   }, []);

//   const fetchBasketList = async () => {
//     try {
//       const response = await fetch(
//         "http://192.46.212.210/api/teacher/basket_list_view",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ teacher_id: userId }),
//         }
//       );

//       if (response.ok) {
//         const data = await response.json();
//         setBaskets(data.data || []);

//         // Print basket list data to console
//         console.log("Basket List Data:", data.data || []);
//       } else {
//         console.error("Failed to fetch basket list", response.statusText);
//       }
//     } catch (error) {
//       console.error("An error occurred while fetching the basket list", error);
//     }
//   };


  

//   return (
//     <div>
//       <Header />
//       <SubHeader />
//       <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
//         <div className="layout-container">
//           <div className="container-xxl flex-grow-1 container-p-y">
//             <div className="row">
//               <div className="col-3">
//               {baskets.map((basket, index) => (
//           <div className="card mb-3" key={index}>
//             <div
//               className="card-datatable table-responsive pt-0"
//               data-bs-toggle="modal"
//               data-bs-target="#exLargeModal"
//               onClick={() => handleEditBasket(index)}
//             >
//               <table className="table">
//                 <tbody>
//                   <tr>
//                     <td className="fw-bold1" colSpan="2">
//                       {basket.name || `Basket ${index + 1}`}
//                     </td>
//                     <td className="text-danger">
//                       <i
//                         className="ri-close-circle-line"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           handleDeleteBasket(index);
//                         }}
//                       ></i>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>Total: {basket.num_basket_details}/10</td>
//                     <td>
//                       <span
//                         className={
//                           basket.num_buy_instruments > 0
//                             ? "text-success"
//                             : ""
//                         }
//                       >
//                         Buy: {basket.num_buy_instruments}
//                       </span>
//                       /10
//                     </td>
//                     <td>
//                       <span
//                         className={
//                           basket.num_sell_instruments > 0
//                             ? "text-danger"
//                             : ""
//                         }
//                       >
//                         Sell: {basket.num_sell_instruments}
//                       </span>
//                       /10
//                     </td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="col-9">
//                 <div className="card">
//                   <div className="card-header d-flex justify-content-between">
//                     <h5 className="mb-0">Create New Basket</h5>
//                   </div>
//                   <div className="mt-3 mx-3 d-flex align-items-center">
//                     <label htmlFor="basketName" className="form-label me-2">
//                       Basket Name:
//                     </label>
//                   </div>
//                   <div className="mt-3 mx-3  d-flex align-items-center mb-3 d-flex justify-content-between">
//                     <input
//                       type="text"
//                       className="form-control form-control-sm me-5"
//                       id="basketName"
//                       placeholder=" Basket Name"
//                       value={currentBasket.name}
//                       onChange={(event) =>
//                         setCurrentBasket({
//                           ...currentBasket,
//                           name: event.target.value,
//                         })
//                       }
//                     />
//                     <button
//                       className="btn btn-primary active "
//                       onClick={handleAddRow}
//                     >
//                       Add
//                     </button>
//                   </div>

//                   <div className="table-responsive text-nowrap">
//                     <table className="table">
//                       <thead>
//                         <tr>
//                           <th>Instrument</th>
//                           <th>Lot Qty Buffer</th>
//                           <th>CE/PE</th>
//                           <th>Transaction Type</th>
//                           <th>Exchange</th>
//                           <th>Order Type</th>
//                           <th>Product Type</th>
//                           <th>Action</th>
//                         </tr>
//                       </thead>
//                       <tbody className="table-border-bottom-0">
//                         {rows.map((row, index) => (
//                           <tr key={index}>
//                             {/* <td>
//                               <select
//                                 id="defaultSelect"
//                                 className="form-select black-text" // Applying CSS class
//                                 name="instrument"
//                                 value={row.instrument}
//                                 onChange={(event) =>
//                                   handleInputChange(index, event)
//                                 }
//                               >
//                                 {instruments.map((instrument) => (
//                                   <option
//                                     key={instrument.id}
//                                     value={instrument.id}
//                                     className="black-text"
//                                   >
//                                     {instrument.name}
//                                   </option>
//                                 ))}
//                               </select>
//                             </td> */}

// <td>
//                           <select
//                             id="defaultSelect"
//                             className="form-select"
//                             name="instrument"
//                             value={row.instrument}
//                             onChange={(event) =>
//                               handleInputChange(index, event)
//                             }
//                           >
//                             <option value="1">NIFTY13JUN2424600CE</option>
//                             <option value="2">Instrument 2</option>
//                             <option value="3">Instrument 3</option>
//                           </select>
//                         </td>

//                             <td>
//                               <input
//                                 type="text"
//                                 className="form-control form-control-sm"
//                                 name="lotQtyBuffer"
//                                 value={row.lotQtyBuffer}
//                                 placeholder="Lot Qty Buffer"
//                                 onChange={(event) =>
//                                   handleInputChange(index, event)
//                                 }
//                               />
//                             </td>
//                             <td>
//                               {/* <div className="mt-3 mx-3 d-flex align-items-center"> */}

//                               <div className="form-check form-check-inline">
//                                 <input
//                                   type="radio"
//                                   className="form-check-input"
//                                   name="cePe"
//                                   value="1"
//                                   checked={row.cePe === "1"}
//                                   onChange={(event) =>
//                                     handleInputChange(index, event)
//                                   }
//                                 />
//                                 <label className="form-check-label text-success ">
//                                   CE
//                                 </label>
//                               </div>
//                               <div className="form-check form-check-inline ml-2">
//                                 <input
//                                   type="radio"
//                                   className="form-check-input"
//                                   name="cePe"
//                                   value="2"
//                                   checked={row.cePe === "2"}
//                                   onChange={(event) =>
//                                     handleInputChange(index, event)
//                                   }
//                                 />
//                                 <label className="form-check-label text-warning">
//                                   PE
//                                 </label>
//                               </div>
//                               {/* </div> */}
//                             </td>
//                             <td>
//                               {/* <div className="mt-3 mx-3 d-flex align-items-center"> */}

//                               <div className="form-check form-check-inline">
//                                 <input
//                                   type="radio"
//                                   className="form-check-input"
//                                   name="transactionType"
//                                   value="1"
//                                   checked={row.transactionType === "1"}
//                                   onChange={(event) =>
//                                     handleInputChange(index, event)
//                                   }
//                                 />
//                                 <label className="form-check-label text-info ">
//                                   Buy
//                                 </label>
//                               </div>
//                               <div className="form-check form-check-inline ml-2">
//                                 <input
//                                   type="radio"
//                                   className="form-check-input"
//                                   name="transactionType"
//                                   value="2"
//                                   checked={row.transactionType === "2"}
//                                   onChange={(event) =>
//                                     handleInputChange(index, event)
//                                   }
//                                 />
//                                 <label className="form-check-label text-danger">
//                                   Sell
//                                 </label>
//                               </div>
//                               {/* </div> */}
//                             </td>
//                             <td>
//                               <select
//                                 className="form-select form-select-sm"
//                                 name="exchange"
//                                 value={row.exchange}
//                                 onChange={(event) =>
//                                   handleInputChange(index, event)
//                                 }
//                               >
//                                 <option value="1">NFO</option>
//                               </select>
//                             </td>
//                             <td>
//                               <select
//                                 className="form-select form-select-sm"
//                                 name="orderType"
//                                 value={row.orderType}
//                                 onChange={(event) =>
//                                   handleInputChange(index, event)
//                                 }
//                               >
//                                 <option value="1">MARKET</option>
//                               </select>
//                             </td>
//                             <td>
//                               <select
//                                 className="form-select form-select-sm"
//                                 name="productType"
//                                 value={row.productType}
//                                 onChange={(event) =>
//                                   handleInputChange(index, event)
//                                 }
//                               >
//                                 <option value="1">CARRYFORWARD</option>
//                               </select>
//                             </td>
//                             <td>
//                               <button
//                                 className="btn btn-outline-danger btn-sm"
//                                 onClick={() => handleDeleteRow(index)}
//                               >
//                                 <i className="ri-delete-bin-line"></i>
//                               </button>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                   <div className="d-flex justify-content-start mt-3 mx-3 mb-3">
//                     <button
//                       className="btn btn-success"
//                       onClick={handleCreateBasket}
//                     >
//                       Create Basket
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div
//             className="modal fade"
//             id="exLargeModal"
//             tabIndex="-1"
//             aria-hidden="true"
//           >
//             <div className="modal-dialog modal-xl" role="document">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <h5 className="modal-title x" id="exampleModalLabel4">
//                     Modal title
//                   </h5>

//                   <button
//                     type="button"
//                     className="btn-close"
//                     data-bs-dismiss="modal"
//                     aria-label="Close"
//                   ></button>
//                 </div>
//                 <div className="mt-3 mx-3 d-flex align-items-center ">
//                   <label htmlFor="basketName" className="form-label me-2">
//                     Basket Name:
//                   </label>
//                 </div>
//                 <div className="mt-3 mx-3 d-flex align-items-center mb-3 d-flex justify-content-between">
//                   <input
//                     type="text"
//                     className="form-control form-control-sm"
//                     id="basketName"
//                     placeholder="Enter Basket Name"
//                     value={currentBasket.name}
//                     onChange={(event) =>
//                       setCurrentBasket({
//                         ...currentBasket,
//                         name: event.target.value,
//                       })
//                     }
//                   />
//                   <button
//                     className="btn btn-primary active "
//                     onClick={handleAddRow}
//                   >
//                     Add
//                   </button>
//                 </div>

//                 <div className="modal-body">
//                   <table className="table">
//                     <thead>
//                       <tr>
//                         {/* <th>Name</th> */}
//                         <th>Instrument</th>
//                         <th>Lot Qty Buffer</th>
//                         <th>CE/PE</th>
//                         <th>Transaction Type</th>
//                         <th>Exchange</th>
//                         <th>Order Type</th>
//                         <th>Product Type</th>
//                         <th>Action</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {rows.map((row, index) => (
//                         <tr key={index}>
//                           {/* <td>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="name"
//                             value={row.name}
//                             onChange={(event) => handleInputChange(index, event)}
//                           />
//                         </td> */}
//                           <td>
//                             <select
//                               id="defaultSelect"
//                               className="form-select"
//                               name="instrument"
//                               value={row.instrument}
//                               onChange={(event) =>
//                                 handleInputChange(index, event)
//                               }
//                             >
//                               <option value="1">Instrument 1</option>
//                               <option value="2">Instrument 2</option>
//                               <option value="3">Instrument 3</option>
//                             </select>
//                           </td>
//                           <td>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="lotQtyBuffer"
//                               placeholder="Enter Lot QTY Buffer"
//                               value={row.lotQtyBuffer}
//                               onChange={(event) =>
//                                 handleInputChange(index, event)
//                               }
//                             />
//                           </td>
//                           <td>
//                             <div className="form-check form-check-inline mt-4">
//                               <input
//                                 className="form-check-input"
//                                 type="radio"
//                                 name={`cePe${index}`}
//                                 value="1"
//                                 checked={row.cePe === "1"}
//                                 onChange={(event) =>
//                                   handleInputChange(index, event)
//                                 }
//                               />
//                               <label
//                                 className="form-check-label"
//                                 htmlFor={`cePe${index}`}
//                                 style={{ color: "green" }}
//                               >
//                                 CE
//                               </label>
//                             </div>
//                             <div className="form-check form-check-inline">
//                               <input
//                                 className="form-check-input"
//                                 type="radio"
//                                 name={`cePe${index}`}
//                                 value="2"
//                                 checked={row.cePe === "2"}
//                                 onChange={(event) =>
//                                   handleInputChange(index, event)
//                                 }
//                               />
//                               <label
//                                 className="form-check-label"
//                                 htmlFor={`cePe${index}`}
//                                 style={{ color: "orange" }}
//                               >
//                                 PE
//                               </label>
//                             </div>
//                           </td>
//                           <td>
//                             <div className="form-check form-check-inline mt-4">
//                               <input
//                                 className="form-check-input"
//                                 type="radio"
//                                 name={`transactionType${index}`}
//                                 value="1"
//                                 checked={row.transactionType === "1"}
//                                 onChange={(event) =>
//                                   handleInputChange(index, event)
//                                 }
//                               />
//                               <label className="form-check-label">
//                                 <span
//                                   style={{
//                                     color: "skyblue",
//                                     fontWeight: "bold",
//                                   }}
//                                 >
//                                   BUY
//                                 </span>
//                               </label>
//                             </div>
//                             <div className="form-check form-check-inline">
//                               <input
//                                 className="form-check-input"
//                                 type="radio"
//                                 name={`transactionType${index}`}
//                                 value="2"
//                                 checked={row.transactionType === "2"}
//                                 onChange={(event) =>
//                                   handleInputChange(index, event)
//                                 }
//                               />
//                               <label className="form-check-label">
//                                 <span
//                                   style={{
//                                     color: "orange",
//                                     fontWeight: "bold",
//                                   }}
//                                 >
//                                   SELL
//                                 </span>
//                               </label>
//                             </div>
//                           </td>
//                           <td>
//                             <select
//                               id="defaultSelect"
//                               className="form-select"
//                               name="exchange"
//                               value={row.exchange}
//                               onChange={(event) =>
//                                 handleInputChange(index, event)
//                               }
//                             >
//                               <option value="1">NFO</option>
//                               <option value="2">Exchange 2</option>
//                               <option value="3">Exchange 3</option>
//                             </select>
//                           </td>
//                           <td>
//                             <select
//                               id="defaultSelect"
//                               className="form-select"
//                               name="orderType"
//                               value={row.orderType}
//                               onChange={(event) =>
//                                 handleInputChange(index, event)
//                               }
//                             >
//                               <option value="1">MARKET</option>
//                               <option value="2">Order Type 2</option>
//                               <option value="3">Order Type 3</option>
//                             </select>
//                           </td>
//                           <td>
//                             <select
//                               id="defaultSelect"
//                               className="form-select"
//                               name="productType"
//                               value={row.productType}
//                               onChange={(event) =>
//                                 handleInputChange(index, event)
//                               }
//                             >
//                               <option value="1">CARRYFORWARD</option>
//                               <option value="2">Product Type 2</option>
//                               <option value="3">Product Type 3</option>
//                             </select>
//                           </td>
//                           <td
//                             className="text-danger"
//                             onClick={() => handleDeleteRow(index)}
//                           >
//                             <i className="ri-close-circle-line ri-2x"></i>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>

//                 <div className="modal-footer">
//                   <button
//                     type="button"
//                     className="btn btn-outline-secondary me-auto"
//                     data-bs-dismiss="modal"
//                   >
//                     Close
//                   </button>
//                   <button type="button" className="btn btn-info">
//                     Execute All
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Basket;


import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import SubHeader from "../component/SubHeader";
import Footer from "../component/Footer";
import Select from 'react-select';
import axios from 'axios';
const Basket = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBasketIndex, setSelectedBasketIndex] = useState(null);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [baskets, setBaskets] = useState([]);
  const [instrumentOptions, setInstrumentOptions] = useState([]);
  const [selectedInstrument, setSelectedInstrument] = useState(null);
  const [currentBasket, setCurrentBasket] = useState({
    name: "",
    rows: [
      {
        name: "",
        instrument: "1", // Default value
        lotQtyBuffer: "1", // Default value
        cePe: "1", // Default value for CE
        transactionType: "1", // Default value for BUY Order
        exchange: "1", // Default value
        orderType: "1", // Default value
        productType: "1", // Default value
      },
    ],
  });
  const [rows, setRows] = useState([
    {
      name: "",
      instrument: "1", // Default value
      lotQtyBuffer: "1", // Default value
      cePe: "1", // Default value for CE
      transactionType: "1", // Default value for BUY Order
      exchange: "1", // Default value
      orderType: "1", // Default value
      productType: "1", // Default value
    },
  ]);
  const [instruments, setInstruments] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
  
    fetchBasketList();
  }, []);

  const loadOptions = (inputValue, callback) => {
    axios({
        method: 'POST',
        url: 'http://192.46.212.210/api/teacher/get_instrument_list', // Replace with your backend endpoint
        headers: {
            'X-CSRFToken': '{{ csrf_token }}', // Replace with your CSRF token
            'Content-Type': 'application/json',
        },
        data: {
            search: inputValue,
        },
    })
        .then((response) => {
            const options = response.data.data.map((instrument) => ({
                value: instrument.id,
                label: instrument.name,
            }));
            setInstrumentOptions(options);
            callback(options);
        })
        .catch((error) => {
            console.error('Error fetching instrument list:', error);
            callback([]);
        });
};

// Handle select change
const handleInstrumentChange = (selectedOption) => {
    setSelectedInstrument(selectedOption);
};

  const handleInputChange = (index, event) => {
    const newRows = [...rows];
    newRows[index][event.target.name] = event.target.value;
    setRows(newRows);
  };

  const handleDeleteRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  const handleAddRow = async () => {
    const requestData = {
      teacher_id: 42,
      symbol: "FINNIFTY25JUN2421900CE",
      ce_pe: "CE",
      lot_quantity_buffer: 1,
      transactionType: "BUY",
      exchange: "NFO",
      orderType: "MARKET",
      productType: "CARRYFORWARD",
    };

    try {
      const response = await fetch(
        "http://192.46.212.210/api/teacher/add_to_basket",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("An error occurred while adding to basket:", error);
    }
  };

  const handleCreateBasket = async () => {
    try {
      const response = await fetch(
        "http://192.46.212.210/api/teacher/create_update_basket",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            basket_id: null,
            basket_name: currentBasket.name,
            teacher_id: localStorage.getItem("user_id"),
            basket_data: rows,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Basket created:", data);
        fetchBasketList(); // Fetch the updated basket list
        setRows([
          {
            name: "",
            instrument: "1",
            lotQtyBuffer: "1",
            cePe: "1",
            transactionType: "1",
            exchange: "1",
            orderType: "1",
            productType: "1",
          },
        ]);
        setCurrentBasket({
          name: "",
          rows: [
            {
              name: "",
              instrument: "1",
              lotQtyBuffer: "1",
              cePe: "1",
              transactionType: "1",
              exchange: "1",
              orderType: "1",
              productType: "1",
            },
          ],
        });
      } else {
        console.error("Failed to create basket:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred while creating basket:", error);
    }
  };

  const handleDeleteBasket = async (index) => {
    const basketId = baskets[index].basket_id;

    try {
      const response = await fetch(
        "http://192.46.212.210/api/teacher/delete_basket",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ basket_id: basketId }),
        }
      );

      if (response.ok) {
        console.log(`Basket ${basketId} deleted successfully`);
        fetchBasketList(); // Fetch the updated basket list
      } else {
        console.error("Failed to delete basket:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred while deleting basket:", error);
    }
  };

  const handleEditBasket = (index) => {
    setSelectedBasketIndex(index);
    setCurrentBasket(baskets[index]);
    setRows(baskets[index].rows); // Update rows with the selected basket's rows
    handleShow();
  };

  const getFormattedBasketName = (index) => {
    const currentDate = new Date();
    const options = {
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const formattedDate = currentDate
      .toLocaleString("default", options)
      .replace(",", "")
      .replace(/ at /, " ");
    return `Basket ${formattedDate}`;
  };

  const userId = localStorage.getItem("user_id");

  const fetchBasketList = async () => {
    try {
      const response = await fetch(
        "http://192.46.212.210/api/teacher/basket_list_view",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ teacher_id: userId }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setBaskets(data.data || []);
      } else {
        console.error("Failed to fetch basket list", response.statusText);
      }
    } catch (error) {
      console.error(
        "An error occurred while fetching the basket list",
        error
      );
    }
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'white',
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'white' : 'black',
      backgroundColor: state.isSelected ? 'blue' : 'white',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'black',
    }),
  };


  return (
    <div>
      <Header />
      <SubHeader />
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div className="layout-container">
          <div className="container-xxl flex-grow-1 container-p-y">
            <div className="row">
              <div className="col-3">
                {baskets.map((basket, index) => (
                  <div className="card mb-3" key={index}>
                    <div
                      className="card-datatable table-responsive pt-0"
                      data-bs-toggle="modal"
                      data-bs-target="#exLargeModal"
                      onClick={() => handleEditBasket(index)}
                    >
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="fw-bold1" colSpan="2">
                              {basket.name || `Basket ${index + 1}`}
                            </td>
                            <td className="text-danger">
                              <i
                                className="ri-close-circle-line"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteBasket(index);
                                }}
                              ></i>
                            </td>
                          </tr>
                          <tr>
                            <td>Total: {basket.num_basket_details}/10</td>
                            <td>
                              <span
                                className={
                                  basket.num_buy_instruments > 0
                                    ? "text-success"
                                    : ""
                                }
                              >
                                Buy: {basket.num_buy_instruments}
                              </span>
                              /10
                            </td>
                            <td>
                              <span
                                className={
                                  basket.num_sell_instruments > 0
                                    ? "text-danger"
                                    : ""
                                }
                              >
                                Sell: {basket.num_sell_instruments}
                              </span>
                              /10
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-9">
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <h5 className="mb-0">Create New Basket</h5>
                  </div>
                 
                 
                    {/* <Select
                id="buySymbol"
                placeholder="Search instrument"
                options={instrumentOptions}
                onInputChange={(inputValue) => loadOptions(inputValue, () => {})}
                onChange={handleInstrumentChange}
                value={selectedInstrument}
                isClearable
                isLoading={!instrumentOptions.length}
            /> */}
            <Select
      id="buySymbol"
      placeholder="Search instrument"
      options={instrumentOptions}
      onInputChange={(inputValue) => loadOptions(inputValue, () => {})}
      onChange={handleInstrumentChange}
      value={selectedInstrument}
      isClearable
      isLoading={!instrumentOptions.length}
      styles={customStyles} // Apply custom styles here
    />
                    
                    
                 

                  <div className="table-responsive text-nowrap">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Instrument</th>
                          <th>Lot Qty Buffer</th>
                          <th>CE/PE</th>
                          <th>Transaction Type</th>
                          <th>Exchange</th>
                          <th>Order Type</th>
                          <th>Product Type</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody className="table-border-bottom-0">
                        {rows.map((row, index) => (
                          <tr key={index}>
                            {/* <td>
                              <select
                                className="form-select black-text"
                                name="instrument"
                                value={row.instrument}
                                onChange={(event) =>
                                  handleInputChange(index, event)
                                }
                              >
                                {instruments.map((instrument) => (
                                  <option
                                    key={instrument.id}
                                    value={instrument.id}
                                    className="black-text"
                                  >
                                    {instrument.name}
                                  </option>
                                ))}
                              </select>
                            </td> */}
                            <td>   
            <Select
                id="buySymbol"
                placeholder="Search instrument"
                options={instrumentOptions}
                onInputChange={(inputValue) => loadOptions(inputValue, () => {})}
                onChange={handleInstrumentChange}
                value={selectedInstrument}
                isClearable
                isLoading={!instrumentOptions.length}
            /></td>

                            <td>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                name="lotQtyBuffer"
                                value={row.lotQtyBuffer}
                                placeholder="Lot Qty Buffer"
                                onChange={(event) =>
                                  handleInputChange(index, event)
                                }
                              />
                            </td>
                            <td>
                              <div className="form-check form-check-inline">
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  name="cePe"
                                  value="1"
                                  checked={row.cePe === "1"}
                                  onChange={(event) =>
                                    handleInputChange(index, event)
                                  }
                                />
                                <label className="form-check-label text-success">
                                  CE
                                </label>
                              </div>
                              <div className="form-check form-check-inline ml-2">
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  name="cePe"
                                  value="2"
                                  checked={row.cePe === "2"}
                                  onChange={(event) =>
                                    handleInputChange(index, event)
                                  }
                                />
                                <label className="form-check-label text-warning">
                                  PE
                                </label>
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-check-inline">
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  name="transactionType"
                                  value="1"
                                  checked={row.transactionType === "1"}
                                  onChange={(event) =>
                                    handleInputChange(index, event)
                                  }
                                />
                                <label className="form-check-label text-info">
                                  Buy
                                </label>
                              </div>
                              <div className="form-check form-check-inline ml-2">
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  name="transactionType"
                                  value="2"
                                  checked={row.transactionType === "2"}
                                  onChange={(event) =>
                                    handleInputChange(index, event)
                                  }
                                />
                                <label className="form-check-label text-danger">
                                  Sell
                                </label>
                              </div>
                            </td>
                            <td>
                              <select
                                className="form-select form-select-sm"
                                name="exchange"
                                value={row.exchange}
                                onChange={(event) =>
                                  handleInputChange(index, event)
                                }
                              >
                                <option value="1">NFO</option>
                              </select>
                            </td>
                            <td>
                              <select
                                className="form-select form-select-sm"
                                name="orderType"
                                value={row.orderType}
                                onChange={(event) =>
                                  handleInputChange(index, event)
                                }
                              >
                                <option value="1">MARKET</option>
                              </select>
                            </td>
                            <td>
                              <select
                                className="form-select form-select-sm"
                                name="productType"
                                value={row.productType}
                                onChange={(event) =>
                                  handleInputChange(index, event)
                                }
                              >
                                <option value="1">CARRYFORWARD</option>
                              </select>
                            </td>
                            <td>
                              <button
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => handleDeleteRow(index)}
                              >
                                <i className="ri-delete-bin-line"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="d-flex justify-content-start mt-3 mx-3 mb-3">
                    <button
                      className="btn btn-success"
                      onClick={handleCreateBasket}
                    >
                      Create Basket
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Basket;


