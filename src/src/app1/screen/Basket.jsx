// import React, { useState, useEffect, useCallback } from "react";
// import Header from "../component/Header";
// import SubHeader from "../component/SubHeader";
// import Footer from "../component/Footer";
// import { Modal, Button } from "react-bootstrap";
// import axios from "axios";
// import { RadioButton } from "primereact/radiobutton";
// import { Link, useNavigate } from "react-router-dom";
// import config from "../../app3/config";
// import { AutoComplete } from "primereact/autocomplete";
// import { ProgressSpinner } from "primereact/progressspinner";
// import { IconField } from "primereact/iconfield";
// import { InputIcon } from "primereact/inputicon";
// import { InputText } from "primereact/inputtext";
// import { VirtualScroller } from "primereact/virtualscroller";
// import { Tooltip } from "primereact/tooltip";
// const Basket = () => {
//   const navigate = useNavigate();
//   const [baskets, setBaskets] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const userId = localStorage.getItem("userId");
//   console.log(userId)
//   const [showModal, setShowModal] = useState(false);
//   const [value, setValue] = useState("");
//   const [items, setItems] = useState([]);
//   // const [currentBasket, setCurrentBasket] = useState(null);
//   const [selectedBasketIndex, setSelectedBasketIndex] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [globalFilter, setGlobalFilter] = useState("");
//   const [modalOpen, setModalOpen] = useState(false);
//   const titleCase = (str) => {
//     return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
//   };
//   const handleDeleteRow = (index) => {
//     const newRows = [...rows];
//     newRows.splice(index, 1);
//     setRows(newRows);
//   };

//   const [rows, setRows] = useState([
//     {
//       instrument: "",
//       lot_quantity_buffer: "1",
//       ce_pe: "CE",
//       transactionType: "BUY",
//       exchange: "NFO",
//       orderType: "MARKET",
//       productType: "CARRYFORWARD",
//     },
//   ]);

//   const [currentBasket, setCurrentBasket] = useState({
//     name: "",
//     instruments: [],
//   });

//   const [editedBasket, setEditedBasket] = useState({
//     name: "",
//     instruments: [],
//   });
//   // const handleAutoCompleteChange = (e, rowIndex) => {
//   //   const newRows = [...rows];
//   //   newRows[rowIndex].instrument = e.value;
//   //   setRows(newRows);
//   // };
//   const handleDeleteBasket1 = async (index) => {
//     const basketId = baskets[index].basket_id;

//     try {
//       const response = await fetch(
//         `${config.apiDomain}/api/teacher/delete_basket`,
//         {
//           method: "POST",
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

//   const search = async (event) => {
//     try {
//       const response = await axios.post(
//         `${config.apiDomain}/api/teacher/get_instrument_list`,
//         {
//           search: event.query,
//         }
//       );

//       if (response.data.st === 1) {
//         const instrumentText = response.data.data.map((item) => item.text);
//         setItems(instrumentText);
//       } else {
//         console.error("Error response from server:", response.data.msg);
//         setItems([]);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setItems([]);
//     }
//   };

//   const handleAutoCompleteChange = (e, rowIndex) => {
//     const newRows = rows.map((row, index) => {
//       if (index === rowIndex) {
//         return {
//           ...row,
//           instrument: e.value,
//         };
//       }
//       return row;
//     });

//     setRows(newRows);
//   };

//   const handleInputChanges = (index, event) => {
//     const { name, value } = event.target;
//     const newRows = [...rows]; // Copy the current state
//     const fieldName = name.split("_")[0]; // Extract the field name
//     newRows[index] = {
//       ...newRows[index],
//       [fieldName]: value, // Update the specific field
//     };
//     setRows(newRows); // Update the state with the new rows
//   };

//   const fetchBaskets = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         `${config.apiDomain}/api/teacher/basket_list_view`,
//         {
//           teacher_id: userId,
//         }
//       );
//       if (response.data.st === 1) {
//         setBaskets(response.data.data);
//       } else {
//         console.error(response.data.msg || "Failed to fetch baskets");
//       }
//     } catch (error) {
//       console.error("Network error", error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchBaskets();
//   }, []);

//   const filterBaskets = () => {
//     if (!globalFilter) {
//       return baskets;
//     }
//     return baskets.filter((basket) =>
//       basket.name.toLowerCase().includes(globalFilter.toLowerCase())
//     );
//   };
//   const handleEditBasket = async (index) => {
//     try {
//       const basketId = baskets[index].basket_id; // Assuming you have baskets array defined
//       const response = await axios.post(
//         `${config.apiDomain}/api/teacher/get_basket_details`,
//         {
//           basket_id: basketId,
//         }
//       );

//       // Update the currentBasket state to show in the modal
//       setCurrentBasket({
//         name: response.data.basket_name,
//         instruments: response.data.basket_data,
//       });

//       // Show the modal (using Bootstrap modal or any other modal library)
//       const modal = new bootstrap.Modal(
//         document.getElementById("exLargeModal"),
//         {
//           backdrop: "static",
//           keyboard: false,
//         }
//       );
//       modal.show();
//     } catch (error) {
//       console.error("Error fetching basket details: ", error);
//     }
//   };

//   // Function to handle input change
//   const handleInputChange = (index, event, isModal = false) => {
//     const { name, value } = event.target;

//     if (isModal) {
//       const updatedInstruments = [...editedBasket.instruments];
//       updatedInstruments[index] = {
//         ...updatedInstruments[index],
//         [name]: value,
//       };
//       setEditedBasket({
//         ...editedBasket,
//         instruments: updatedInstruments,
//       });
//     } else {
//       const updatedInstruments = [...currentBasket.instruments];
//       updatedInstruments[index] = {
//         ...updatedInstruments[index],
//         [name]: value,
//       };
//       setCurrentBasket({
//         ...currentBasket,
//         instruments: updatedInstruments,
//       });
//     }
//   };

//   // Function to handle execute all
//   const handleExecuteAll = async () => {
//     const userId = localStorage.getItem("userId");// Fetch teacher_id from local storage

//     try {
//       const response = await axios.post(
//         `${config.apiDomain}/api/teacher/execute_orders`,
//         {
//           teacher_id:userId,
//           order_data: currentBasket.instruments.map((instrument) => ({
//             instrument: instrument.instrument,
//             ce_pe: instrument.ce_pe,
//             lot_quantity_buffer: instrument.lot_quantity_buffer,
//             transactionType: instrument.transaction_type,
//             exchange: instrument.exchange,
//             orderType: instrument.order_type,
//             productType: instrument.product_type,
//           })),
//         }
//       );

//       if (response.data.st === 1) {
//         // Navigate to /trade_position if successful
//         navigate("/trade_position");
//         window.location.reload();
//       } else {
//         console.error("Execution failed", response.data.msg);
//       }
//     } catch (error) {
//       console.error("Error executing orders:", error);
//     }
//   };

//   const getFormattedBasketName = (index) => {
//     return `Basket ${index + 1}`;
//   };

//   useEffect(() => {
//     fetchBaskets();
//   }, [userId]);

//   const handleRowChange = (index, field, value) => {
//     const updatedRows = [...editedBasket.rows];
//     updatedRows[index] = { ...updatedRows[index], [field]: value };
//     setEditedBasket({ ...editedBasket, rows: updatedRows });
//   };

//   const handleNameChange = (e) => {
//     setEditedBasket({ ...editedBasket, name: e.target.value });
//   };

//   const handleAddRow = () => {
//     if (rows.length < 10) {
//       setRows([
//         ...rows,
//         {
//           instrument: "",
//           lot_quantity_buffer: "1",
//           ce_pe: "PE",
//           transactionType: "SELL",
//           exchange: "NFO",
//           orderType: "MARKET",
//           productType: "CARRYFORWARD",
//         },
//       ]);
//     } else {
//       alert("You can only add up to 10 rows.");
//     }
//   };

//   const handleCreateBasket = async () => {
//     try {
//       const response = await fetch(
//         `${config.apiDomain}/api/teacher/create_update_basket`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             basket_id: null,
//             basket_name: editedBasket.name,
//             teacher_id: userId,
//             basket_data: rows,
//           }),
//         }
//       );

//       if (response.ok) {
//         const data = await response.json();
//         setBaskets([...baskets, data]);
//         setRows([
//           {
//             instrument: "",
//             lot_quantity_buffer: "1",
//             ce_pe: "CE",
//             transactionType: "BUY",
//             exchange: "NFO",
//             orderType: "MARKET",
//             productType: "CARRYFORWARD",
//           },
//         ]);
//         setEditedBasket({
//           name: "",
//           instruments: [],
//         });
//         setShowModal(false);
//         fetchBaskets();
//       } else {
//         console.error("Failed to create basket:", response.statusText);
//       }
//     } catch (error) {
//       console.error("An error occurred while creating basket:", error);
//     }
//   };

//   const handleBack = () => {
//     navigate(-1);
//   };

//   const handleRefresh = () => {
//     fetchBaskets();
//   };
//   const handleCloseModal = () => {
//     setModalOpen(false);
//     // Perform any action you want to do upon modal close, such as refreshing the page
//     window.location.reload(); // This will refresh the entire page
//   };

//   return (
//     <div>
//       <Header />
//       <SubHeader />
//       <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
//         <div className="layout-container">
//           <div className="container-xxl flex-grow-1 container-p-y">
//             <nav aria-label="breadcrumb">
//               <ol className="breadcrumb breadcrumb-style1 text-secondary">
//                 <li className="breadcrumb-item">
//                   <Link to="/teacher/dashboard" className="text-secondary">
//                     <i className="ri-home-5-line ri-lg"></i>
//                   </Link>
//                 </li>
//                 <li
//                   className="breadcrumb-item active text-secondary"
//                   aria-current="page"
//                 >
//                   Basket
//                 </li>
//               </ol>
//             </nav>
//             <div className="row">
//               <div className="col-xl-3 d-flex flex-row">
//                 <div className="card">
//                   <div className="col-5 text-start mb-5 mt-5 ms-4">
//                     <button
//                       onClick={handleBack}
//                       className="btn rounded-pill btn-outline-secondary btn-xs"
//                     >
//                       <i className="ri-arrow-left-circle-fill me-1 ri-md"></i>{" "}
//                       Back
//                     </button>
//                   </div>

//                   <div className="d-flex justify-content-start ms-4  me-3">
//                     <IconField iconPosition="left">
//                       <InputIcon className="ri ri-search-line"></InputIcon>
//                       <InputText
//                         type="search"
//                         placeholder="Search"
//                         value={globalFilter}
//                         onChange={(e) => setGlobalFilter(e.target.value)}
//                         className="rounded custom-search-box"
//                       />
//                     </IconField>
//                     {loading ? (

//                       <i className=" custom-target-icon ri-loader-2-line ri-lg ms-3 p-text-secondary"></i>

//                     ) : (
//                       <div className="mt-3">
//                         <Tooltip target=".custom-target-icon" />
//                         <i
//                           className="custom-target-icon ri ri-refresh-line ri-lg ms-3 p-text-secondary "
//                           data-pr-tooltip="Refresh"
//                           onClick={handleRefresh}
//                           data-pr-position="top"
//                           style={{ cursor: "pointer" }}
//                         ></i>
//                       </div>
//                     )}
//                   </div>

//                   {loading ? (
//                     <p>Loading...</p>
//                   ) : (
//                     <VirtualScroller
//                       items={filterBaskets()}
//                       itemSize={70} // Adjust item size as needed
//                       itemTemplate={(basket, options) => (
//                         <div
//                           key={basket.basket_id}
//                           className="card-datatable table-responsive pt-0"
//                         >
//                            <table className="table table-sm">
//       <tbody>
//         <tr>
//           <td
//             className="fw-bold"
//             colSpan="2"
//             onClick={() => handleEditBasket(options.index)}
//             data-bs-toggle="modal"
//              data-bs-target="#staticBackdrop"
//             style={{ border: "none", cursor: "pointer" }}
//           >
//             <small>{titleCase(basket.name || getFormattedBasketName(options.index))}</small>
//           </td>
//           <td className="text-center" style={{ border: "none" }}>
//             <button
//               type="button"
//               className="btn btn-xs btn-outline-danger"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleDeleteBasket1(options.index);
//               }}
//             >
//               <i className="ri-close-large-line ri-xs"></i>
//             </button>
//           </td>
//         </tr>
//         <tr
//           onClick={() => handleEditBasket(options.index)}
//           data-bs-toggle="modal"
//           data-bs-target="#staticBackdrop"
//         >
//           <td>
//             <small>Total: {basket.total_instruments_count}/10</small>
//           </td>
//           <td>
//             <small>
//               <span
//                 className={
//                   basket.buy_instruments_count > 0 ? "text-success" : ""
//                 }
//               >
//                 Buy: {basket.buy_instruments_count}/10
//               </span>
//             </small>
//           </td>
//           <td>
//             <small>
//               <span
//                 className={
//                   basket.sell_instruments_count > 0 ? "text-danger" : ""
//                 }
//               >
//                 Sell: {basket.sell_instruments_count}/10
//               </span>
//             </small>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//                         </div>
//                       )}
//                       delay={250}
//                       className="border-1 surface-border border-round"
//                       style={{ height: "500px" }} // Adjust height as needed
//                     />
//                   )}
//                 </div>
//               </div>

//               <div className="col-9">
//                 <div className="card">
//                   <div className="text-center mt-5 ">
//                     <h5 className="mb-0 text-center">Create Basket</h5>
//                   </div>
//                   <div className="mt-3 mx-3 d-flex align-items-center ">
//                     <label htmlFor="basketName " className="form-label me-2">
//                       <strong>Basket Name:</strong>
//                     </label>
//                   </div>
//                   <div className="mx-3 d-flex align-items-center mb-3 d-flex justify-content-between">
//                     <input
//                       type="text"
//                       className="form-control form-control-sm me-3  w-50"
//                       placeholder="Enter basket name"
//                       value={editedBasket.name}
//                       onChange={handleNameChange}
//                     />
//                   </div>
//                   <div className="m-3 table-responsive table-bordered">
//                     <table className="table table-sm">
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
//                       <tbody>
//                         {rows.map((row, index) => (
//                           <tr key={index}>
//                             <td>
//                               <AutoComplete
//                                 value={row.instrument}
//                                 suggestions={items}
//                                 completeMethod={search}
//                                 forceSelection
//                                 onChange={(e) =>
//                                   handleAutoCompleteChange(e, index)
//                                 }
//                                 placeholder="Search for instruments"
//                               />
//                             </td>
//                             <td>
//                               <input
//                                 type="text"
//                                 className="form-control form-control-sm"
//                                 name="lot_quantity_buffer"
//                                 value={row.lot_quantity_buffer}
//                                 onChange={(event) =>
//                                   handleInputChanges(index, event)
//                                 }
//                               />
//                             </td>
//                             <td>
//                               <input
//                                 type="text"
//                                 className="form-control form-control-sm"
//                                 name="ce_pe"
//                                 value={row.ce_pe}
//                                 onChange={(event) =>
//                                   handleInputChanges(index, event)
//                                 }
//                               />
//                             </td>

//                             <td>
//                               <select
//                                 type="text"
//                                 className="form-control form-control-sm"
//                                 name="transactionType"
//                                 value={row.transactionType}
//                                 onChange={(event) =>
//                                   handleInputChanges(index, event)
//                                 }
//                               >
//                                 {" "}
//                                 <option value="BUY">BUY</option>
//                                 <option value="SELL">SEll</option>
//                               </select>
//                             </td>
//                             <td>
//                               <select
//                                 type="text"
//                                 className="form-control form-control-sm"
//                                 name="exchange"
//                                 value={row.exchange}
//                                 onChange={(event) =>
//                                   handleInputChanges(index, event)
//                                 }
//                               >
//                                 {" "}
//                                 <option value="NFO">NFO</option>
//                                 <option value="BFO">BFO</option>
//                                 <option value="BSE">BSE</option>
//                                 <option value="NSE">NSE</option>
//                                 <option value="MCX">MCX</option>
//                                 <option value="CDS">CDS</option>
//                               </select>
//                             </td>
//                             <td>
//                               <select
//                                 type="text"
//                                 className="form-control form-control-sm"
//                                 name="orderType"
//                                 value={row.orderType}
//                                 onChange={(event) =>
//                                   handleInputChanges(index, event)
//                                 }
//                               >
//                                 {" "}
//                                 <option value="MARKET">MARKET</option>
//                                 <option value="LIMIT">LIMIT</option>
//                                 <option value="STOPLOSS_LIMIT">
//                                   STOPLOSS_LIMIT
//                                 </option>
//                                 <option value="STOPLOSS_MARKET">
//                                   STOPLOSS_MARKET
//                                 </option>
//                               </select>
//                             </td>
//                             <td>
//                               <select
//                                 type="text"
//                                 className="form-control form-control-sm"
//                                 name="productType"
//                                 value={row.productType}
//                                 onChange={(event) =>
//                                   handleInputChanges(index, event)
//                                 }
//                               >
//                                 {" "}
//                                 <option value="CARRYFORWARD">
//                                   CARRYFORWARD
//                                 </option>
//                                 <option value="DELIVERY">DELIVERY</option>
//                                 <option value="MARGIN">MARGIN</option>
//                                 <option value="ENTRADAY">ENTRADAY</option>
//                                 <option value="BO">BO</option>
//                               </select>
//                             </td>
//                             <td>
//                               {index === 0 ? (
//                                 // Render Add button for the first row
//                                 <button
//                                   type="button"
//                                   className="btn  btn-outline-primary btn-xs"
//                                   onClick={handleAddRow}
//                                 >
//                                   <i className="ri-add-circle-line ri-sm"></i>
//                                 </button>
//                               ) : (
//                                 // Render Delete button for subsequent rows
//                                 <button
//                                   type="button"
//                                   className="btn btn-xs btn-outline-danger "
//                                   onClick={(e) => {
//                                     e.stopPropagation();
//                                     handleDeleteRow(index);
//                                   }}
//                                 >
//                                   <i className="ri-close-large-line ri-sm"></i>
//                                 </button>
//                               )}
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                   <div className="text-end mb-5 me-5 mt-3">
//                     <button
//                       type="button"
//                       className="btn btn-sm btn-success"
//                       onClick={handleCreateBasket}
//                     >
//                       <i className="ri-add-circle-line ri-lg me-2"></i>
//                       Create Basket
//                     </button>
//                   </div>
//                   <div
//                     className="modal fade "
//                     id="staticBackdrop"
//                     data-bs-backdrop="static"
//                     data-bs-keyboard="false"
//                     tabindex="-1"
//                     aria-labelledby="staticBackdropLabel"
//                     aria-hidden="true"
//                   >
//                     <div className="modal-dialog modal-xl">
//                       <div className="modal-content">
//                         <div className="modal-header">
//                           <h5
//                             className="modal-title text-center w-100"
//                             id="exLargeModalLabel"
//                           >
//                        {titleCase(currentBasket?.name)}

//                           </h5>
//                           <button
//                             type="button"
//                             className="btn-close"
//                             data-bs-dismiss="modal"
//                             aria-label="Close"
//                             onClick={handleCloseModal}
//                           ></button>
//                         </div>
//                         <div className="modal-body">
//                           <table className="table">
//                             <thead>
//                               <tr>
//                                 <th>Instrument</th>
//                                 <th>Lot Qty Buffer</th>
//                                 <th>CE/PE</th>
//                                 <th>Transaction Type</th>
//                                 <th>Exchange</th>
//                                 <th>Order Type</th>
//                                 <th>Product Type</th>

//                                 <th>Action</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               {currentBasket?.instruments.map((row, index) => (
//                                 <tr key={index}>
//                                   <td>
//                                     <input
//                                       type="text"
//                                       className="form-control"
//                                       name="instrument"
//                                       placeholder="Enter instrument"
//                                       value={row.instrument}
//                                       onChange={(event) =>
//                                         handleInputChange(index, event)
//                                       }
//                                     />
//                                   </td>
//                                   <td>
//                                     <input
//                                       type="text"
//                                       className="form-control"
//                                       name="lot_quantity_buffer"
//                                       placeholder="Enter Lot QTY Buffer"
//                                       value={row.lot_quantity_buffer}
//                                       onChange={(event) =>
//                                         handleInputChange(index, event)
//                                       }
//                                     />
//                                   </td>
//                                   <td>
//                                     <input
//                                       type="text"
//                                       className="form-control"
//                                       name="ce_pe"
//                                       placeholder="CE/PE"
//                                       value={row.ce_pe}
//                                       onChange={(event) =>
//                                         handleInputChange(index, event)
//                                       }
//                                     />
//                                   </td>
//                                   <td>
//                                     <input
//                                       type="text"
//                                       className="form-control"
//                                       name="transaction_type"
//                                       placeholder="Transaction Type"
//                                       value={row.transaction_type}
//                                       onChange={(event) =>
//                                         handleInputChange(index, event)
//                                       }
//                                     />
//                                   </td>
//                                   <td>
//                                     <input
//                                       type="text"
//                                       className="form-control"
//                                       name="exchange"
//                                       placeholder="Exchange"
//                                       value={row.exchange}
//                                       onChange={(event) =>
//                                         handleInputChange(index, event)
//                                       }
//                                     />
//                                   </td>
//                                   <td>
//                                     <input
//                                       type="text"
//                                       className="form-control"
//                                       name="order_type"
//                                       placeholder="Order Type"
//                                       value={row.order_type}
//                                       onChange={(event) =>
//                                         handleInputChange(index, event)
//                                       }
//                                     />
//                                   </td>
//                                   <td>
//                                     <input
//                                       type="text"
//                                       className="form-control"
//                                       name="product_type"
//                                       placeholder="Product Type"
//                                       value={row.product_type}
//                                       onChange={(event) =>
//                                         handleInputChange(index, event)
//                                       }
//                                     />
//                                   </td>

//                                   <td>
//                                     {index === 0 ? (
//                                       // Render Add button for the first row
//                                       <button
//                                         type="button"
//                                         className="btn btn-sm btn-outline-primary custom-btn-action1"
//                                         onClick={handleAddRow}
//                                       >
//                                         <i className="ri-add-circle-line ri-lg"></i>
//                                       </button>
//                                     ) : (
//                                       // Render Delete button for subsequent rows
//                                       <button
//                                         type="button"
//                                         className="btn btn-sm btn-outline-danger custom-btn-action1"
//                                         onClick={() => handleDeleteRow(index)}
//                                       >
//                                         <i className="ri-delete-bin-line ri-lg"></i>
//                                       </button>
//                                     )}
//                                   </td>
//                                 </tr>
//                               ))}
//                             </tbody>
//                           </table>
//                         </div>
//                         <div className="modal-footer">
//                           <button
//                             type="button"
//                             className="btn btn-outline-secondary me-auto"
//                             data-bs-dismiss="modal"
//                             onClick={handleCloseModal}
//                           >
//                           <i className="ri-close-large-line me-2"></i>  Close
//                           </button>
//                           <button
//                             type="button"
//                             className="btn btn-info"
//                             onClick={handleExecuteAll}
//                           >
//                             <i className=" ri ri-checkbox-circle-line me-1 ri-lg"></i>{" "}
//                             Execute All
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
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

import React, { useState, useEffect, useCallback, useRef } from "react";
import Header from "../component/Header";
import SubHeader from "../component/SubHeader";
import Select from 'react-select';
import Footer from "../component/Footer";
import { Button } from 'primereact/button';
import { Modal } from "react-bootstrap";
import axios from "axios";
import { RadioButton } from "primereact/radiobutton";
import { Link, useNavigate } from "react-router-dom";
import config from "../../app3/config";
import { AutoComplete } from "primereact/autocomplete";
import { ProgressSpinner } from "primereact/progressspinner";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { VirtualScroller } from "primereact/virtualscroller";
import { Tooltip } from "primereact/tooltip";
import { Toast } from "primereact/toast";
const Basket = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [baskets, setBaskets] = useState([]);
  const [loading, setLoading] = useState(false);
  const userId = localStorage.getItem("userId");
  console.log(userId);
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  // const [currentBasket, setCurrentBasket] = useState(null);
  const [selectedBasketIndex, setSelectedBasketIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [globalFilter, setGlobalFilter] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [executionMessage, setExecutionMessage] = useState("");
  const [backClicked, setBackClicked] = useState(false);
  const [error, setError] = useState(null);

  const toast = useRef(null);

  const titleCase = (str) => {
    return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  };
  const handleDeleteRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  const handleDeleteRowModal = (index) => {
    const newInstruments = [...currentBasket.instruments];
    newInstruments.splice(index, 1);
    setCurrentBasket((prevBasket) => ({
      ...prevBasket,
      instruments: newInstruments,
    }));
  };

  const [rows, setRows] = useState([
    {
      instrument: "",
      lot_quantity_buffer: "1",

      transactionType: "BUY",
      exchange: "NFO",
      orderType: "MARKET",
      productType: "CARRYFORWARD",
    },
  ]);

  const [currentBasket, setCurrentBasket] = useState({
    name: "",
    instruments: [],
  });

  const [editedBasket, setEditedBasket] = useState({
    name: "",
    instruments: [],
  });
  // const handleAutoCompleteChange = (e, rowIndex) => {
  //   const newRows = [...rows];
  //   newRows[rowIndex].instrument = e.value;
  //   setRows(newRows);
  // };

  const fetchBaskets = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${config.apiDomain}/api/teacher/basket_list_view`,
        {
          teacher_id: userId,
        }
      );
      if (response.data.st === 1) {
        setBaskets(response.data.data);
        console.log("Fetched baskets:", response.data.data); // Debugging log
      } else {
        console.error(response.data.msg || "Failed to fetch baskets");
      }
    } catch (error) {
      console.error("Network error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBaskets();
  }, []);

  // const handleDeleteAllBaskets = async () => {
  //   try {
  //     const response = await axios.post(
  //       `${config.apiDomain}/api/teacher/delete_baskets_all`,
  //       {
  //         teacher_id: userId,
  //       }
  //     );

  //     // Handle success response
  //     if (response.data && response.data.st === 1) {
  //       console.log("All baskets deleted successfully");
  //       fetchBaskets(); // Fetch baskets again to reflect the changes
  //     } else {
  //       console.error("Failed to delete all baskets:", response.data.msg);
  //       console.log("Response data:", response.data); // Debugging log
  //     }
  //   } catch (error) {
  //     console.error("Failed to delete all baskets:", error.message);
  //     console.log("Error details:", error); // Debugging log
  //   }
  // };


 
    
    const [deleteLoading, setDeleteLoading] = useState(false);
  
    const handleDeleteAllBaskets = async () => {
      setShowModal(true); // Show modal to confirm deletion
    };
  
    const confirmDeleteAll = async () => {
      try {
        setDeleteLoading(true); // Set loading state while deleting
  
        const response = await axios.post(
          `${config.apiDomain}/api/teacher/delete_baskets_all`,
          {
            teacher_id: userId,
          }
        );
  
        // Handle success response
        if (response.data && response.data.st === 1) {
          console.log("All baskets deleted successfully");
          fetchBaskets(); // Fetch baskets again to reflect the changes
        } else {
          console.error("Failed to delete all baskets:", response.data.msg);
          console.log("Response data:", response.data); // Debugging log
        }
      } catch (error) {
        console.error("Failed to delete all baskets:", error.message);
        console.log("Error details:", error); // Debugging log
      } finally {
        setDeleteLoading(false); // Reset loading state
        setShowModal(false); // Close the modal after deletion
      }
    };
  
    const closeModal = () => {
      setShowModal(false); // Close modal on cancel
    };

  // const handleRefresh = () => {
  //   fetchBaskets();
  // };
  const handleDeleteBasket1 = async (index) => {
    const basketId = baskets[index].basket_id;

    try {
      const response = await fetch(
        `${config.apiDomain}/api/teacher/delete_basket`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ basket_id: basketId }),
        }
      );

      if (response.ok) {
        console.log(`Basket ${basketId} deleted successfully`);
        const newBaskets = [...baskets];
        newBaskets.splice(index, 1);
        setBaskets(newBaskets);
      } else {
        console.error("Failed to delete basket:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred while deleting basket:", error);
    }
  };

  const search = async (event) => {
    try {
      const response = await axios.post(
        `${config.apiDomain}/api/teacher/get_instrument_list`,
        {
          search: event.query,
        }
      );

      if (response.data.st === 1) {
        const instrumentText = response.data.data.map((item) => item.text);
        setItems(instrumentText);
      } else {
        console.error("Error response from server:", response.data.msg);
        setItems([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setItems([]);
    }
  };

  const handleAutoCompleteChange = (e, rowIndex) => {
    const newRows = rows.map((row, index) => {
      if (index === rowIndex) {
        return {
          ...row,
          instrument: e.value,
        };
      }
      return row;
    });

    setRows(newRows);
  };

  // const handleInputChanges = (index, event) => {
  //   const { name, value } = event.target;
  //   const newRows = [...rows]; // Copy the current state
  //   const fieldName = name.split("_")[0]; // Extract the field name
  //   newRows[index] = {
  //     ...newRows[index],
  //     [fieldName]: value, // Update the specific field
  //   };
  //   setRows(newRows); // Update the state with the new rows
  // };

  const handleRefresh = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${config.apiDomain}/api/teacher/basket_list_view`,
        {
          teacher_id: userId,
        }
      );

      if (response.data.st === 1) {
        setBaskets(response.data.data);
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: response.data.msg,
        });
      } else if (response.data.st === 2) {
        toast.current.show({
          severity: "warn",
          summary: "Warning",
          detail: response.data.msg,
        });
      } else if (response.data.st === 3 || response.data.st === 4) {
        toast.current.show({
          severity: "error",
          summary: "Error",
          detail: response.data.msg,
        });
      } else {
        console.error(response.data.msg || "Failed to fetch baskets");
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code outside the 2xx range
        if (error.response.data.st) {
          // If the error response contains an 'st' field, handle it like in the success case
          const { st, msg } = error.response.data;
          if (st === 4) {
            toast.current.show({
              severity: "error",
              summary: "Method Not Allowed",
              detail: msg,
            });
          } else {
            toast.current.show({
              severity: "error",
              summary: "Error",
              detail: msg,
            });
          }
        } else {
          // Generic error handling for other status codes
          toast.current.show({
            severity: "error",
            summary: "Error",
            detail: "An error occurred",
          });
        }
      } else {
        // Network error or other unexpected errors
        toast.current.show({
          severity: "error",
          summary: "Network Error",
          detail: "Failed to fetch baskets",
        });
      }
      console.error("Network error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChanges = (index, event) => {
    const { name, value } = event.target;
    const newRows = [...rows]; // Copy the current state
    newRows[index] = {
      ...newRows[index],
      [name]: value, // Update the specific field
    };
    setRows(newRows); // Update the state with the new rows
  };
  // const fetchBaskets = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.post(
  //       `${config.apiDomain}/api/teacher/basket_list_view`,
  //       {
  //         teacher_id: userId,
  //       }
  //     );
  //     if (response.data.st === 1) {
  //       setBaskets(response.data.data);

  //     } else {
  //       console.error(response.data.msg || "Failed to fetch baskets");
  //     }
  //   } catch (error) {
  //     console.error("Network error", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   fetchBaskets();
  // }, []);

  const filterBaskets = () => {
    if (!globalFilter) {
      return baskets;
    }
    return baskets.filter((basket) =>
      basket.name.toLowerCase().includes(globalFilter.toLowerCase())
    );
  };
  const handleEditBasket = async (index) => {
    try {
      const basketId = baskets[index].basket_id; // Assuming you have baskets array defined
      const response = await axios.post(
        `${config.apiDomain}/api/teacher/get_basket_details`,
        {
          basket_id: basketId,
        }
      );

      // Update the currentBasket state to show in the modal
      setCurrentBasket({
        name: response.data.basket_name,
        instruments: response.data.basket_data,
      });

      // Show the modal (using Bootstrap modal or any other modal library)
      const modal = new bootstrap.Modal(
        document.getElementById("exLargeModal"),
        {
          backdrop: "static",
          keyboard: false,
        }
      );
      modal.show();
    } catch (error) {
      console.error("Error fetching basket details: ", error);
    }
  };

  // Function to handle input change
  const handleInputChange = (index, event, isModal = false) => {
    const { name, value } = event.target;

    if (isModal) {
      const updatedInstruments = [...editedBasket.instruments];
      updatedInstruments[index] = {
        ...updatedInstruments[index],
        [name]: value,
      };
      setEditedBasket({
        ...editedBasket,
        instruments: updatedInstruments,
      });
    } else {
      const updatedInstruments = [...currentBasket.instruments];
      updatedInstruments[index] = {
        ...updatedInstruments[index],
        [name]: value,
      };
      setCurrentBasket({
        ...currentBasket,
        instruments: updatedInstruments,
      });
    }
  };

  const handleExecuteAll = async () => {
    const userId = localStorage.getItem("userId");

    // Displaying message
    setMessage("Executing orders on teacher and all student accounts...");

    try {
      const response = await axios.post(
        `${config.apiDomain}/api/teacher/execute_orders`,
        {
          teacher_id: userId,
          order_data: currentBasket.instruments.map((instrument) => ({
            instrument: instrument.instrument,

            lot_quantity_buffer: instrument.lot_quantity_buffer,
            transactionType: instrument.transaction_type,
            exchange: instrument.exchange,
            orderType: instrument.order_type,
            productType: instrument.product_type,
          })),
        }
      );

      if (response.data.st === 1) {
        // Navigate to /trade_position if successful
        navigate("/trade_position");
        window.location.reload();
      } else {
        console.error("Execution failed", response.data.msg);
      }
    } catch (error) {
      console.error("Error executing orders:", error);
    }
  };

  const getFormattedBasketName = (index) => {
    return `Basket ${index + 1}`;
  };

  useEffect(() => {
    fetchBaskets();
  }, [userId]);

  const handleRowChange = (index, field, value) => {
    const updatedRows = [...editedBasket.rows];
    updatedRows[index] = { ...updatedRows[index], [field]: value };
    setEditedBasket({ ...editedBasket, rows: updatedRows });
  };

  const handleNameChange = (e) => {
    setEditedBasket({ ...editedBasket, name: e.target.value });
  };

  const handleAddRow = () => {
    if (rows.length < 10) {
      setRows([
        ...rows,
        {
          instrument: "",
          lot_quantity_buffer: "1",

          transactionType: "SELL",
          exchange: "NFO",
          orderType: "MARKET",
          productType: "CARRYFORWARD",
        },
      ]);
    } else {
      alert("You can only add up to 10 rows.");
    }
  };

  const handleAddRowModal = () => {
    if (currentBasket.instruments.length < 10) {
      setCurrentBasket((prevBasket) => ({
        ...prevBasket,
        instruments: [
          ...prevBasket.instruments,
          {
            instrument: "",
            lot_quantity_buffer: "1",

            transaction_type: "BUY",
            exchange: "NFO",
            order_type: "MARKET",
            product_type: "CARRYFORWARD",
          },
        ],
      }));
    }
  };

  const handleCreateBasket = async () => {
    const isValid = validateFields();

    if (!isValid) {
      console.log("Validation errors found. Cannot create basket.");
      return;
    }

    setLoading(true); // Show loading icon

    try {
      const response = await axios.post(
        `${config.apiDomain}/api/teacher/create_update_basket`,
        {
          basket_id: null,
          basket_name: editedBasket.name,
          teacher_id: userId,
          basket_data: rows,
        }
      );

      if (response.status === 200) {
        const data = response.data;

        setBaskets([...baskets, data]);
        setRows([
          {
            instrument: "",
            lot_quantity_buffer: "1",
            transactionType: "BUY",
            exchange: "NFO",
            orderType: "MARKET",
            productType: "CARRYFORWARD",
          }
        ]);
        setEditedBasket({
          name: "",
          instruments: [],
        });
        setShowModal(false);
        fetchBaskets();

        // Show success toast message
        toast.current.show({ severity: 'success', summary: 'Success', detail: response.data.msg, life: 3000 });
      } else {
        console.error("Failed to create basket:", response.statusText);
        toast.current.show({ severity: 'error', summary: 'Error',detail: response.data.msg, life: 3000});
      }
    } catch (error) {
      console.error("An error occurred while creating basket:", error);
      toast.current.show({ severity: 'error', summary: 'Error', detail: response.data.msg, life: 3000 });
    } finally {
      setLoading(false); // Hide loading icon
    }
  };

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    rows: Array(rows.length).fill({
      instrument: "",
      lot_quantity_buffer: "",
      transactionType: "",
      exchange: "",
      orderType: "",
      productType: "",
    }),
  });

  const validateFields = () => {
    let isValid = true;
    const errors = { ...validationErrors };

    // Validate Basket Name
    if (!editedBasket.name.trim()) {
      errors.name = "Basket Name is required";
      isValid = false;
    } else {
      errors.name = "";
    }

    // Validate each row
    rows.forEach((row, index) => {
      const rowErrors = { ...errors.rows[index] };

      if (!row.instrument.trim()) {
        rowErrors.instrument = "Instrument is required";
        isValid = false;
      } else {
        rowErrors.instrument = "";
      }

      if (!row.lot_quantity_buffer.trim()) {
        rowErrors.lot_quantity_buffer = "Lot Qty Buffer is required";
        isValid = false;
      } else {
        rowErrors.lot_quantity_buffer = "";
      }

      if (!row.transactionType.trim()) {
        rowErrors.transactionType = "Transaction type is required";
        isValid = false;
      } else {
        rowErrors.transactionType = "";
      }

      if (!row.exchange.trim()) {
        rowErrors.exchange = "Exchange is required";
        isValid = false;
      } else {
        rowErrors.exchange = "";
      }

      if (!row.orderType.trim()) {
        rowErrors.orderType = "Order Type is required";
        isValid = false;
      } else {
        rowErrors.orderType = "";
      }

      if (!row.productType.trim()) {
        rowErrors.productType = "Product Type is required";
        isValid = false;
      } else {
        rowErrors.productType = "";
      }
      // Add other validations for transactionType, exchange, orderType, productType if needed

      errors.rows[index] = rowErrors;
    });

    setValidationErrors(errors);
    return isValid;
  };

  const handleBack = () => {
    if (!backClicked) {
      setBackClicked(true);
      navigate(-1);
    }
  };

  // const handleRefresh = () => {
  //   fetchBaskets();
  // };
  const handleCloseModal = () => {
    setModalOpen(false);
    // Perform any action you want to do upon modal close, such as refreshing the page
    window.location.reload(); // This will refresh the entire page
  };
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const isMarketOpen = () => {
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentDay = currentTime.getDay();

    // Market open from 9:15 AM to 3:15 PM
    const marketOpenHour = 9;
    const marketOpenMinute = 15;
    const marketCloseHour = 15;
    const marketCloseMinute = 15;

    // Check if today is Saturday (6) or Sunday (0)
    if (currentDay === 0 || currentDay === 6) {
      return false;
    }

    // Check if the current time is within market hours
    if (
      (currentHour > marketOpenHour ||
        (currentHour === marketOpenHour && currentMinute >= marketOpenMinute)) &&
      (currentHour < marketCloseHour ||
        (currentHour === marketCloseHour && currentMinute <= marketCloseMinute))
    ) {
      return true;
    } else {
      return false;
    }
  };

  const [showPopup, setShowPopup] = useState(false); // State for displaying the Popup component

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      // Check if it's 9:15 AM or 3:15 PM
      if ((hours === 9 && minutes === 15) || (hours === 15 && minutes === 15)) {
        setShowPopup(true);
      }
    };

    const interval = setInterval(() => {
      checkTime();
    }, 60000); // Every minute

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Helper function to determine modal button variant
  const getButtonVariant = () => {
    const now = new Date();
    const hours = now.getHours();

    if (hours === 9) {
      return "success"; // Green color for 9:15 AM
    } else if (hours === 15) {
      return "danger"; // Red color for 3:15 PM
    }
    return "secondary"; // Default color
  };

  return (
    <div>
      <Toast ref={toast} />
      <Header />
      <SubHeader />
      <Modal
        show={showPopup}
        onHide={handleClosePopup}
        dialogClassName={getColorModalClass()}
      >
        <Modal.Header closeButton>
          <Modal.Title>{getModalTitle()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{getModalBody()}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={getButtonVariant()} onClick={handleClosePopup}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="mt-3 container-xxl">
      {isMarketOpen() ? (
        <div
          className="text-center "
          style={{
            border: "2px solid green",
            padding: "10px",
            color: "green",
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        >
          Market is Open
        </div>
      ) : (
        <div
          className="text-center "
          style={{
            border: "2px solid orange",
            padding: "10px",
            color: "orange",
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        >
          Market is Closed
        </div>
      )}
    </div>

      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div className="layout-container">
          <div className="container-xxl flex-grow-1 container-p-y">
       
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-style1 text-secondary">
                <li className="breadcrumb-item">
                  <Link to="/teacher/dashboard" className="text-secondary">
                    <i className="ri-home-5-line ri-lg"></i>
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-secondary"
                  aria-current="page"
                >
                  Basket
                </li>
              </ol>
            </nav>
            <div className="row">
              <div className="col-9">
                <div className="card">
                  <div className="col-7 text-start mb-5 mt-5 ms-3 d-flex align-items-center justify-content-between">
                    <button
                      onClick={handleBack}
                      className="btn rounded-pill btn-outline-secondary btn-xs "
                    >
                      <i className="ri-arrow-left-circle-fill me-1 ri-md"></i>{" "}
                      Back
                    </button>
                    <strong
                      className="mb-0 text-center"
                      style={{ fontSize: "1.4rem" }}
                    >
                      Create Basket
                    </strong>
                  </div>

                 
                  <div className="mx-3 align-items-center mb-3">
  <div className={`form-floating form-floating-outline ${validationErrors.name ? 'has-error' : ''}`}>
    <input
      type="text"
      className={`form-control form-control-sm me-3 w-50 ${validationErrors.name ? 'is-invalid' : ''}`}
      placeholder="Enter basket name"
      value={editedBasket.name}
      onChange={handleNameChange}
    />
    <label htmlFor="brokerApiKey">Basket Name</label>
    {validationErrors.name && (
      <span className="text-danger">{validationErrors.name}</span>
    )}
  </div>
</div>


                  
                  <div className="m-3 table-responsive table-bordered">
                    <table className="table table-sm">
                      <thead>
                        <tr>
                          <th>Instrument</th>
                          <th>Lot Qty Buffer</th>

                          <th>Trans. Type</th>
                          <th>Exchange</th>
                          <th>Order Type</th>
                          <th>Product Type</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((row, index) => (
                          <tr key={index}>
                            <td>
                              <AutoComplete
                                value={row.instrument}
                                suggestions={items}
                                completeMethod={search}
                              
                                panelStyle={{ width: '200px', fontSize: '14px' }} // Adjust the dropdown panel size here
                                onChange={(e) =>
                                  handleAutoCompleteChange(e, index)
                                }
                                placeholder="Search for instruments"
                              /> 
                               {/* <Select
       value={row.instrument}
      options={items}
      onChange={(e) =>
        handleAutoCompleteChange(e, index)}
      placeholder="Search instrument"
      isClearable
      noOptionsMessage={() => 'No options'}
    /> */}
                              {validationErrors.rows[index]?.instrument && (
                                <span className="text-danger">
                                  {validationErrors.rows[index].instrument}
                                </span>
                              )}
                            </td>
                            <td>
                              <input
                                type="text"
                                className="form-control"
                                name="lot_quantity_buffer"
                                placeholder="Enter Lot QTY Buffer"
                                value={row.lot_quantity_buffer}
                                onChange={(event) =>
                                  handleInputChanges(index, event)
                                }
                              />
                              {validationErrors.rows[index]
                                ?.lot_quantity_buffer && (
                                <span className="text-danger">
                                  {
                                    validationErrors.rows[index]
                                      .lot_quantity_buffer
                                  }
                                </span>
                              )}
                            </td>

                            <td>
                              <select
                                type="text"
                                className="form-control form-control-sm"
                                name="transactionType"
                                value={row.transactionType}
                                onChange={(event) =>
                                  handleInputChanges(index, event)
                                }
                              >
                                {" "}
                                <option value="BUY">BUY</option>
                                <option value="SELL">SELL</option>
                              </select>

                              {validationErrors.rows[index]
                                ?.transactionType && (
                                <span className="text-danger">
                                  {validationErrors.rows[index].transactionType}
                                </span>
                              )}
                            </td>
                            <td>
                              <select
                                type="text"
                                className="form-control form-control-sm"
                                name="exchange"
                                value={row.exchange}
                                onChange={(event) =>
                                  handleInputChanges(index, event)
                                }
                              >
                                {" "}
                                <option value="NFO">NFO</option>
                                <option value="BFO">BFO</option>
                                <option value="BSE">BSE</option>
                                <option value="NSE">NSE</option>
                                <option value="MCX">MCX</option>
                                <option value="CDS">CDS</option>
                              </select>

                              {validationErrors.rows[index]?.exchange && (
                                <span className="text-danger">
                                  {validationErrors.rows[index].exchange}
                                </span>
                              )}
                            </td>
                            <td>
                              <select
                                type="text"
                                className="form-control form-control-sm"
                                name="orderType"
                                value={row.orderType}
                                onChange={(event) =>
                                  handleInputChanges(index, event)
                                }
                              >
                                {" "}
                                <option value="MARKET">MARKET</option>
                                <option value="LIMIT">LIMIT</option>
                                <option value="STOPLOSS_LIMIT">
                                  STOPLOSS_LIMIT
                                </option>
                                <option value="STOPLOSS_MARKET">
                                  STOPLOSS_MARKET
                                </option>
                              </select>

                              {validationErrors.rows[index]?.orderType && (
                                <span className="text-danger">
                                  {validationErrors.rows[index].orderType}
                                </span>
                              )}
                            </td>
                            <td>
                              <select
                                type="text"
                                className="form-control form-control-sm"
                                name="productType"
                                value={row.productType}
                                onChange={(event) =>
                                  handleInputChanges(index, event)
                                }
                              >
                                {" "}
                                <option value="CARRYFORWARD">
                                  CARRYFORWARD
                                </option>
                                <option value="DELIVERY">DELIVERY</option>
                                <option value="MARGIN">MARGIN</option>
                                <option value="INTRADAY">INTRADAY</option>
                                <option value="BO">BO</option>
                              </select>

                              {validationErrors.rows[index]?.productType && (
                                <span className="text-danger">
                                  {validationErrors.rows[index].productType}
                                </span>
                              )}
                            </td>
                            <td>
                              {index === 0 ? (
                                // Render Add button for the first row
                                <button
                                  type="button"
                                  className="btn  btn-outline-primary btn-xs"
                                  onClick={handleAddRow}
                                >
                                  <i className="ri-add-large-line ri-md"></i>
                                </button>
                              ) : (
                                // Render Delete button for subsequent rows
                                <button
                                  type="button"
                                  className="btn btn-xs btn-outline-warning "
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeleteRow(index);
                                  }}
                                >
                                  <i className="ri-close-large-line ri-sm"></i>
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="text-end mb-5 me-5 mt-3">
      {loading && <i className="ri-loader-line text-secondary me-2"></i>}
      <Button
        type="button"
        className="btn btn-success rounded-pill"
        onClick={handleCreateBasket}
        disabled={loading}
        icon="ri-checkbox-circle-line ri-lg"
        label="Save Data"
      />
      
      <Toast ref={toast} position="top-right" className="text-start"/>

    </div>
  );
                </div>
              </div>
              <div className="col-xl-3 d-flex flex-row">
                <div className="card">
                  <div className="col-5 text-start mb-5 mt-2  ms-auto">
                    {/* <button
                      onClick={handleDeleteAllBaskets}
                      className="btn btn-warning btn-xs rounded-pill"
                    >
                      <i className="ri-close-large-line me-1 ri-lg"></i> Delete
                      all
                    </button> */}

<button
        onClick={handleDeleteAllBaskets}
        className="btn btn-warning btn-xs rounded-pill"
      >
        <i className="ri-close-large-line me-1 ri-lg"></i> Delete all
      </button>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete all baskets?
        </Modal.Body>
        <Modal.Footer>
        <div className="d-flex justify-content-between w-100">
            <Button variant="outline-secondary" onClick={closeModal} size="sm">
              <i className="ri-close-large-line me-2"></i> <span className="text-secondary">Cancel</span>
            </Button>
            <Button variant="danger" onClick={confirmDeleteAll} disabled={deleteLoading} size="sm">
              <i className="ri-close-large-line me-2"></i> {deleteLoading ? 'Deleting...' : 'Delete All'}
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
                  </div>

                  <div className="d-flex justify-content-start ms-4 mb-3 me-3">
                    <IconField iconPosition="left">
                      <InputIcon className="ri ri-search-line"></InputIcon>
                      <InputText
                        type="search"
                        placeholder="Search"
                        value={globalFilter}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                        className="rounded custom-search-box"
                      />
                    </IconField>
                    {loading ? (
                      <i className=" custom-target-icon ri-loader-2-line ri-lg ms-3 p-text-secondary"></i>
                    ) : (
                      <div className="mt-3">
                        <Tooltip target=".custom-target-icon" />
                        <i
                          className="custom-target-icon ri ri-refresh-line ri-lg ms-3 p-text-secondary "
                          data-pr-tooltip="Refresh"
                          onClick={handleRefresh}
                          data-pr-position="top"
                          style={{ cursor: "pointer" }}
                        ></i>
                      </div>
                    )}
                  </div>

                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    
                    <VirtualScroller
                      items={filterBaskets()}
                      itemSize={70} // Adjust item size as needed
                      itemTemplate={(basket, options) => (
                        <div
                          key={basket.basket_id}
                          className="card-datatable table-responsive pt-0"
                        >
                          <table className="table table-sm">
                            <tbody>
                              <tr>
                                <td
                                  className="fw-bold"
                                  colSpan="2"
                                  onClick={() =>
                                    handleEditBasket(options.index)
                                  }
                                  data-bs-toggle="modal"
                                  data-bs-target="#staticBackdrop"
                                  style={{ border: "none", cursor: "pointer" }}
                                >
                                  <small>
                                    {titleCase(
                                      basket.name ||
                                        getFormattedBasketName(options.index)
                                    )}
                                  </small>
                                </td>
                                <td
                                  className="text-center"
                                  style={{ border: "none" }}
                                >
                                  <button
                                    type="button"
                                    className="btn btn-xs btn-outline-warning"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleDeleteBasket1(options.index);
                                    }}
                                  >
                                    <i className="ri-close-large-line ri-xs"></i>
                                  </button>
                                </td>
                              </tr>
                              <tr
                                onClick={() => handleEditBasket(options.index)}
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                              >
                                <td>
                                  <small>
                                    Total: {basket.total_instruments_count}/10
                                  </small>
                                </td>
                                <td>
                                  <small>
                                    <span
                                      className={
                                        basket.buy_instruments_count > 0
                                          ? "text-success"
                                          : ""
                                      }
                                    >
                                     <span className="text-secondary" >Buy:</span> {basket.buy_instruments_count}/10
                                    </span>
                                  </small>
                                </td>
                                <td>
                                  <small>
                                    <span
                                      className={
                                        basket.sell_instruments_count > 0
                                          ? "text-danger"
                                          : ""
                                      }
                                    >
                                     <span className="text-secondary">Sell:</span>  {basket.sell_instruments_count}/10
                                    </span>
                                  </small>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}
                      delay={250}
                      className="border-1 surface-border border-round"
                      style={{ height: "500px" }} // Adjust height as needed
                    />
                  )}
                </div>
              </div>
              <div
                className="modal fade "
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title text-center w-100"
                        id="exLargeModalLabel"
                      >
                        {titleCase(currentBasket?.name)}
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={handleCloseModal}
                      ></button>
                    </div>
                    <div className="modal-body">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Instrument</th>
                            <th>Lot Qty Buffer</th>

                            <th>Trans. Type</th>
                            <th>Exchange</th>
                            <th>Order Type</th>
                            <th>Product Type</th>

                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentBasket?.instruments.map((row, index) => (
                            <tr key={index}>
                              <td>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="instrument"
                                  placeholder="Enter instrument"
                                  value={row.instrument}
                                  onChange={(event) =>
                                    handleInputChange(index, event)
                                  }
                                />
                              </td>

                              <td>
                                <input
                                  type="text"
                                  className="form-control "
                                  name="lot_quantity_buffer"
                                  placeholder="Enter Lot QTY Buffer"
                                  value={row.lot_quantity_buffer}
                                  onChange={(event) =>
                                    handleInputChange(index, event)
                                  }
                                />
                              </td>
                              {/* <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="ce_pe"
                                      placeholder="CE/PE"
                                      value={row.ce_pe}
                                      onChange={(event) =>
                                        handleInputChange(index, event)
                                      }
                                    />
                                  </td> */}

                              {/* <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="transaction_type"
                                      placeholder="Transaction Type"
                                      value={row.transaction_type}
                                      onChange={(event) =>
                                        handleInputChange(index, event)
                                      }
                                    />
                                  </td> */}

                              <td>
                                <select
                                  type="text"
                                  className="form-control "
                                  name="transaction_type"
                                  value={row.transaction_type}
                                  placeholder="Transaction Type"
                                  onChange={(event) =>
                                    handleInputChange(index, event)
                                  }
                                >
                                  {" "}
                                  <option value="BUY">BUY</option>
                                  <option value="SELL">SELL</option>
                                </select>
                              </td>
                              {/* <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="exchange"
                                      placeholder="Exchange"
                                      value={row.exchange}
                                      onChange={(event) =>
                                        handleInputChange(index, event)
                                      }
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="order_type"
                                      placeholder="Order Type"
                                      value={row.order_type}
                                      onChange={(event) =>
                                        handleInputChange(index, event)
                                      }
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="product_type"
                                      placeholder="Product Type"
                                      value={row.product_type}
                                      onChange={(event) =>
                                        handleInputChange(index, event)
                                      }
                                    />
                                  </td>

                                  <td> */}

                              {/* <td>
                              <select
                                type="text"
                                className="form-control form-control-sm"
                                name="transactionType"
                                value={row.transactionType}
                                onChange={(event) =>
                                  handleInputChange(index, event)
                                }
                              >
                                {" "}
                                <option value="BUY">BUY</option>
                                <option value="SELL">SELL</option>
                              </select>
                            </td> */}
                              <td>
                                <select
                                  type="text"
                                  className="form-control form-control-sm"
                                  name="exchange"
                                  value={row.exchange}
                                  onChange={(event) =>
                                    handleInputChange(index, event)
                                  }
                                >
                                  {" "}
                                  <option value="NFO">NFO</option>
                                  <option value="BFO">BFO</option>
                                  <option value="BSE">BSE</option>
                                  <option value="NSE">NSE</option>
                                  <option value="MCX">MCX</option>
                                  <option value="CDS">CDS</option>
                                </select>
                              </td>
                              <td>
                                <select
                                  type="text"
                                  className="form-control form-control-sm"
                                  name="order_type"
                                  value={row.order_type}
                                  onChange={(event) =>
                                    handleInputChange(index, event)
                                  }
                                >
                                  {" "}
                                  <option value="MARKET">MARKET</option>
                                  <option value="LIMIT">LIMIT</option>
                                  <option value="STOPLOSS_LIMIT">
                                    STOPLOSS_LIMIT
                                  </option>
                                  <option value="STOPLOSS_MARKET">
                                    STOPLOSS_MARKET
                                  </option>
                                </select>
                              </td>
                              <td>
                                <select
                                  type="text"
                                  className="form-control form-control-sm"
                                  name="product_type"
                                  value={row.product_type}
                                  onChange={(event) =>
                                    handleInputChange(index, event)
                                  }
                                >
                                  {" "}
                                  <option value="CARRYFORWARD">
                                    CARRYFORWARD
                                  </option>
                                  <option value="DELIVERY">DELIVERY</option>
                                  <option value="MARGIN">MARGIN</option>
                                  <option value="INTRADAY">INTRADAY</option>
                                  <option value="BO">BO</option>
                                </select>
                              </td>
                              <td>
                                {index === 0 ? (
                                  // Render Add button for the first row
                                  <button
                                    type="button"
                                    className="btn btn-xs btn-outline-primary "
                                    onClick={handleAddRowModal}
                                  >
                                    <i className="ri-add-circle-line ri-md"></i>
                                  </button>
                                ) : (
                                  // Render Delete button for subsequent rows
                                  <button
                                    type="button"
                                    className="btn btn-xs btn-outline-danger "
                                    onClick={() => handleDeleteRowModal(index)}
                                  >
                                    <i className="ri-close-large-line ri-sm"></i>
                                  </button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-outline-secondary me-auto"
                        data-bs-dismiss="modal"
                        onClick={handleCloseModal}
                      >
                        <i className="ri-close-large-line me-2"></i> Close
                      </button>
                      <div className="d-flex align-items-center">
                        {/* Displaying message */}
                        {message && (
                          <div className="d-flex align-items-center">
                            <i className="ri ri-checkbox-circle-fill text-success me-2 ri-lg"></i>
                            <div>
                              <div className="text-muted me-3">
                                Executing these instruments on <br></br> teacher
                                and all student accounts...
                              </div>
                              {/* <div className="text-muted text-success">{message}</div> */}
                            </div>
                          </div>
                        )}

                        {/* Button to execute all */}
                        <button
                          type="button"
                          className="btn btn-info d-flex align-items-center"
                          onClick={handleExecuteAll}
                          disabled={message === "Executing orders..."} // Disable button while executing
                        >
                          <i className="ri ri-checkbox-circle-line me-1 ri-lg"></i>{" "}
                          Execute All
                        </button>
                      </div>
                    </div>
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

const getColorModalClass = () => {
  const now = new Date();
  const hours = now.getHours();

  if (hours === 9 || hours === 15) {
    return hours === 9 ? "modal-green" : "modal-red"; // Apply custom modal background colors
  }
  return "";
};

const getModalTitle = () => {
  const now = new Date();
  const hours = now.getHours();

  if (hours === 9) {
    return "Market is Open!";
  } else if (hours === 15) {
    return "Market is Closed!";
  }
  return "";
};

const getModalBody = () => {
  const now = new Date();
  const hours = now.getHours();

  if (hours === 9) {
    return "Market is currently open. Take necessary actions.";
  } else if (hours === 15) {
    return "Market is currently closed. Come back tomorrow.";
  }
  return "";
};
