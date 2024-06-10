
// import React, { useState, useEffect } from "react";
// import Header from "../component/Header";
// import SubHeader from "../component/SubHeader";
// import Footer from "../component/Footer";
// import { AutoComplete } from "primereact/autocomplete";
// import axios from 'axios';
// const Basket = () => {
//   const [showModal, setShowModal] = useState(true);
//   const [selectedBasketIndex, setSelectedBasketIndex] = useState(null);
//   const handleClose = () => setShowModal(false);
//   const handleShow = () => setShowModal(true);
//   const [baskets, setBaskets] = useState([]); // Ensure baskets is initialized as an empty array
//   const [value, setValue] = useState('');
//   const [items, setItems] = useState([]);
//   const [values, setValues] = useState('');
//   const [item, setItem] = useState([]);
//   const [filteredItems, setFilteredItems] = useState([]);
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

//   const search = async (event) => {
//     try {
//         const response = await axios.post('http://192.46.212.210/api/teacher/get_instrument_list', {
//             search: event.query
//         });
//         if (response.data.st === 1) {
//             setItems(response.data.data.map(item => item.text));
//         } else {
//             setItems([]);
//         }
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         setItems([]);
//     }
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

//   useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://192.46.212.210/api/teacher/get_exchange_options');
//             if (response.data.st === 1) {
//                 setItem(response.data.exchanges.map(item => item.label));
//             } else {
//                 setItem([]);
//             }
//         } catch (error) {
//             console.error("Error fetching data:", error);
//             setItem([]);
//         }
//     };

//     fetchData();
// }, []);

// const searches = (event) => {
//     const filtered = item.filter(item => item.toLowerCase().includes(event.query.toLowerCase()));
//     setFilteredItems(filtered);
// };
  

//   return (
//     <div>
//       <Header />
//       <SubHeader />
//       <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
//         <div className="layout-container">
//           <div className="container-xxl flex-grow-1 container-p-y">
//             <div className="row">
//               <div className="col-3">
//               {baskets?.map((basket, index) => (
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
                            

// <td>
// <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)}forceSelection  />

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
//                             <AutoComplete 
//                 value={values} 
//                 suggestions={filteredItems} 
//                 completeMethod={searches} 
//                 onChange={(e) => setValues(e.value)} 
//                 forceSelection 
//             />
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
// import { AutoComplete } from "primereact/autocomplete";
// import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog';
// import { Link, useLocation } from "react-router-dom";
// import axios from 'axios';
// import { Dropdown } from 'primereact/dropdown';
// const Basket = () => {
//   const [showModal, setShowModal] = useState(true);
//   const [selectedBasketIndex, setSelectedBasketIndex] = useState(null);
//   const handleClose = () => setShowModal(false);
//   const handleShow = () => setShowModal(true);
//   const [baskets, setBaskets] = useState([]); // Ensure baskets is initialized as an empty array
//   const [value, setValue] = useState('');
//   const [items, setItems] = useState([]);
//   const [values, setValues] = useState('');
//   const [item, setItem] = useState([]);
//   const [visible, setVisible] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const [filteredItems, setFilteredItems] = useState([]);
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
//   const search = async (event) => {
//     try {
//         const response = await axios.post('http://192.46.212.210/api/teacher/get_instrument_list', {
//             search: event.query
//         });
//         if (response.data.st === 1) {
//             setItems(response.data.data.map(item => item.text));
//         } else {
//             setItems([]);
//         }
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         setItems([]);
//     }
// };



//   // const handleInputChange = (index, event) => {
//   //   const newRows = [...rows];
//   //   newRows[index][event.target.name] = event.target.value;
//   //   setRows(newRows);
//   // };

//   // const handleDeleteRow = (index) => {
//   //   const newRows = [...rows];
//   //   newRows.splice(index, 1);
//   //   setRows(newRows);
//   // };
//   const handleDeleteRow = (index) => {
//     const newRows = rows.filter((_, i) => i !== index);
//     setRows(newRows);
//   };

  
//   const handleAddRow = () => {
//     const newRow = {
//       instrument: '',
//       lotQtyBuffer: '',
//       cePe: '1',
//       transactionType: '1',
//       exchange: '',
//       orderType: '1',
//       productType: '1'
//     };
//     setRows([...rows, newRow]);
//   };

// const handleInputChange = (index, event) => {
//   const { name, value, type } = event.target;
//   const updatedRows = [...rows];
//   updatedRows[index][name] = value;
//   setRows(updatedRows);
// };

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
//     setIsLoading(true); // Start loading
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
//     } finally {
//       setIsLoading(false); // End loading
//     }
//   };
  
//   useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://192.46.212.210/api/teacher/get_exchange_options');
//             if (response.data.st === 1) {
//                 setItem(response.data.exchanges.map(item => item.label));
//             } else {
//                 setItem([]);
//             }
//         } catch (error) {
//             console.error("Error fetching data:", error);
//             setItem([]);
//         }
//     };

//     fetchData();
// }, []);

// const searches = (event) => {
//   const filtered = item.filter(item => item.toLowerCase().includes(event.query.toLowerCase()));
//   setFilteredItems(filtered);
// };

  
// const footerContent = (
//   <div className="d-flex justify-content-between w-100">
//       <Button label="Close" onClick={() => setVisible(false)} className="p-button-text" />
//       <Button label="Execute All" onClick={() => setVisible(false)} autoFocus />
//   </div>
// );

// const handleAddToBasket = async () => {
//   try {
//       const response = await axios.post('http://192.46.212.210/api/teacher/add_to_basket', {
//           teacher_id: 43,
//           symbol: value, // Using the value from AutoComplete
//           ce_pe: rows[rows.length - 1].cePe === "1" ? "CE" : "PE",
//           lot_quantity_buffer: rows[rows.length - 1].lotQtyBuffer,
//           transactionType: rows[rows.length - 1].transactionType === "1" ? "BUY" : "SELL",
//           exchange: values, // Using the value from AutoComplete
//           orderType: "MARKET",
//           productType: "CARRYFORWARD"
//       });
//       if (response.data.st === 1) {
//           console.log("Added to basket successfully:", response.data.data_list);
//           const newRow = {
//               instrument: response.data.data_list.symbol,
//               lotQtyBuffer: response.data.data_list.lot_quantity_buffer,
//               cePe: response.data.data_list.ce_pe === "CE" ? "1" : "2",
//               transactionType: response.data.data_list.transactionType === "BUY" ? "1" : "2",
//               exchange: response.data.data_list.exchange,
//               orderType: response.data.data_list.orderType,
//               productType: response.data.data_list.productType
//           };
//           setRows([...rows, newRow]); // Add the new row to the existing rows
//       } else {
//           console.error("Error adding to basket:", response.data.msg);
//       }
//   } catch (error) {
//       console.error("Error adding to basket:", error);
//   }
// };



//   return (
//     <div>
//       <Header />
//       <SubHeader />
//       <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
//         <div className="layout-container">
//           <div className="container-xxl flex-grow-1 container-p-y">
//             <div className="row">
//               <div className="col-3">
//               {isLoading ? (
//             <div>Loading...</div>
//           ) : (
//             baskets?.map((basket, index) => (
//               <div className="card mb-3" key={index}>
//                 <div
//                   className="card-datatable table-responsive pt-0"
//                   onClick={() => setVisible(true)}
//                 >
//                   <table className="table">
//                     <tbody>
//                       <tr>
//                         <td className="fw-bold1" colSpan="2">
//                           {basket.name || `Basket ${index + 1}`}
//                         </td>
//                         <td className="text-danger">
//                           <i
//                             className="ri-close-circle-line"
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               handleDeleteBasket(index);
//                             }}
//                           ></i>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td>Total: {basket.num_basket_details}/10</td>
//                         <td>
//                           <span
//                             className={
//                               basket.num_buy_instruments > 0
//                                 ? "text-success"
//                                 : ""
//                             }
//                           >
//                             Buy: {basket.num_buy_instruments}
//                           </span>
//                           /10
//                         </td>
//                         <td>
//                           <span
//                             className={
//                               basket.num_sell_instruments > 0
//                                 ? "text-danger"
//                                 : ""
//                             }
//                           >
//                             Sell: {basket.num_sell_instruments}
//                           </span>
//                           /10
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             ))
//           )}
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
//                   <button
//                                 className="btn btn-primary active"
//                                 onClick={handleAddRow}
//                             >
//                                 Add
//                             </button>
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
                            

// <td >
// <AutoComplete value={value} suggestions={items} placeholder="Instrument" completeMethod={search} onChange={(e) => setValue(e.value)}  forceSelection   panelStyle={{ width: '100px' }}  />

// {/* <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)}
//                 field="label" optionGroupLabel="label" optionGroupChildren="items"  placeholder="Hint: type 'a'" />
//          */}

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
//                                                 <div className="form-check form-check-inline">
//                                                     <input
//                                                         type="radio"
//                                                         className="form-check-input"
//                                                         name={`cePe-${index}`}
//                                                         value="1"
//                                                         checked={row.cePe === "1"}
//                                                         onChange={(e) => handleInputChange(index, e)}
//                                                     />
//                                                     <label className="form-check-label text-success ">
//                                                         CE
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check form-check-inline ml-2">
//                                                     <input
//                                                         type="radio"
//                                                         className="form-check-input"
//                                                         name={`cePe-${index}`}
//                                                         value="2"
//                                                         checked={row.cePe === "2"}
//                                                         onChange={(e) => handleInputChange(index, e)}
//                                                     />
//                                                     <label className="form-check-label text-warning">
//                                                         PE
//                                                     </label>
//                                                 </div>
//                                             </td>
//                                             <td>
//                                                 <div className="form-check form-check-inline">
//                                                     <input
//                                                         type="radio"
//                                                         className="form-check-input"
//                                                         name={`transactionType-${index}`}
//                                                         value="1"
//                                                         checked={row.transactionType === "1"}
//                                                         onChange={(e) => handleInputChange(index, e)}
//                                                     />
//                                                     <label className="form-check-label text-info ">
//                                                         Buy
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check form-check-inline ml-2">
//                                                     <input
//                                                         type="radio"
//                                                         className="form-check-input"
//                                                         name={`transactionType-${index}`}
//                                                         value="2"
//                                                         checked={row.transactionType === "2"}
//                                                         onChange={(e) => handleInputChange(index, e)}
//                                                     />
//                                                     <label className="form-check-label text-danger">
//                                                         Sell
//                                                     </label>
//                                                 </div>
//                                             </td>
//                             <td>
//                             <AutoComplete 
//                 value={values} 
//                 suggestions={filteredItems} 
//                 completeMethod={searches} 
//                 onChange={(e) => setValues(e.value)} 
//                 forceSelection 
//                 placeholder="Exchange"
//             />
//                             </td>
//                             <td>
//                               {/* <select
//                                 className="form-select form-select-sm"
//                                 name="orderType"
//                                 value={row.orderType}
//                                 onChange={(event) =>
//                                   handleInputChange(index, event)
//                                 }
//                               >
//                                 <option value="1">MARKET</option>
//                               </select> */}
//                               <Dropdown
//                                         value={row.orderType}
//                                         options={[{ label: 'MARKET' , value: '1' },{ label: 'LIMIT' , value: '2' },{ label: 'STOPLOSS_LIMIT' , value: '3' },{ label: 'STOPLOSS_MARKET' , value: '4' }]}
//                                         onChange={(e) => handleInputChange(index, { target: { name: 'orderType', value: e.value } })}
//                                         placeholder="Select Order Type"
                                       
//                                     />
//                             </td>
                         
//                             <td>
//                               {/* <select
//                                 className="form-select form-select-sm"
//                                 name="productType"
//                                 value={row.productType}
//                                 onChange={(event) =>
//                                   handleInputChange(index, event)
//                                 }
//                               >
//                                 <option value="1">CARRYFORWARD</option>
//                               </select> */}
//                               <Dropdown
//                                         value={row.productType}
//                                         options={[{ label: 'CARRYFORWARD' , value: '1' },{ label: 'DELIVERY' , value: '2' },{ label: 'MARGIN' , value: '3' },{ label: 'STOPLOSS_MARKET' , value: '4' },{ label: 'BO' , value: '5' }]}
//                                         onChange={(e) => handleInputChange(index, { target: { name: 'productType', value: e.value } })}
//                                         placeholder="Select Product Type"
//                                         className="w-full md:w-14rem" 
//                                     />
//                             </td>
//                             <td>
//                               {/* <button
//                                 className="btn btn-outline-danger btn-sm"
//                                 onClick={() => handleDeleteRow(index)}
//                               >
//                                 <i className="ri-delete-bin-line"></i>
//                               </button> */}
//                                    {rows.length > 1 && (
//                         <button
//                           className="btn btn-outline-danger btn-sm"
//                           onClick={() => handleDeleteRow(index)}
//                         >
//                           <i className="ri-delete-bin-line"></i>
//                         </button>
//                       )}
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
//           <Dialog header="Header" visible={visible} onHide={() => setVisible(false)} footer={footerContent}  style={{ width: '80vw' }}>
      
//                     <div className="card">
                       
//                         <div className="mt-3 mx-3 d-flex align-items-center">
//                             <label htmlFor="basketName" className="form-label me-2">
//                                 Basket Name:
//                             </label>
//                         </div>
//                         <div className="mt-3 mx-3 d-flex align-items-center mb-3 d-flex justify-content-between">
//                             <input
//                                 type="text"
//                                 className="form-control form-control-sm me-5"
//                                 id="basketName"
//                                 placeholder="Basket Name"
//                                 value={currentBasket.name}
//                                 onChange={(event) =>
//                                     setCurrentBasket({
//                                         ...currentBasket,
//                                         name: event.target.value,
//                                     })
//                                 }
//                             />
//                             <button
//                                 className="btn btn-primary active"
//                                 onClick={handleAddRow}
//                             >
//                                 Add
//                             </button>
//                         </div>

//                         <div className="table-responsive text-nowrap">
//                             <table className="table">
//                                 <thead>
//                                     <tr>
//                                         <th>Instrument</th>
//                                         <th>Lot Qty Buffer</th>
//                                         <th>CE/PE</th>
//                                         <th>Transaction Type</th>
//                                         <th>Exchange</th>
//                                         <th>Order Type</th>
//                                         <th>Product Type</th>
//                                         <th>Action</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody className="table-border-bottom-0">
//                                     {rows.map((row, index) => (
//                                         <tr key={index}>
//                                             <td>
//                                                 <AutoComplete 
//                                                     value={row.instrument} 
//                                                     suggestions={filteredItems} 
//                                                     completeMethod={search} 
//                                                     onChange={(e) => handleInputChange(index, { target: { name: 'instrument', value: e.value } })} 
//                                                     forceSelection 
//                                                 />
//                                             </td>
//                                             <td>
//                                                 <input
//                                                     type="text"
//                                                     className="form-control form-control-sm"
//                                                     name="lotQtyBuffer"
//                                                     value={row.lotQtyBuffer}
//                                                     placeholder="Lot Qty Buffer"
//                                                     onChange={(event) =>
//                                                         handleInputChange(index, event)
//                                                     }
//                                                 />
//                                             </td>
//                                             <td>
//                                                 <div className="form-check form-check-inline">
//                                                     <input
//                                                         type="radio"
//                                                         className="form-check-input"
//                                                         name="cePe"
//                                                         value="1"
//                                                         checked={row.cePe === "1"}
//                                                         onChange={(event) =>
//                                                             handleInputChange(index, event)
//                                                         }
//                                                     />
//                                                     <label className="form-check-label text-success ">
//                                                         CE
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check form-check-inline ml-2">
//                                                     <input
//                                                         type="radio"
//                                                         className="form-check-input"
//                                                         name="cePe"
//                                                         value="2"
//                                                         checked={row.cePe === "2"}
//                                                         onChange={(event) =>
//                                                             handleInputChange(index, event)
//                                                         }
//                                                     />
//                                                     <label className="form-check-label text-warning">
//                                                         PE
//                                                     </label>
//                                                 </div>
//                                             </td>
//                                             <td>
//                                                 <div className="form-check form-check-inline">
//                                                     <input
//                                                         type="radio"
//                                                         className="form-check-input"
//                                                         name="transactionType"
//                                                         value="1"
//                                                         checked={row.transactionType === "1"}
//                                                         onChange={(event) =>
//                                                             handleInputChange(index, event)
//                                                         }
//                                                     />
//                                                     <label className="form-check-label text-info ">
//                                                         Buy
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check form-check-inline ml-2">
//                                                     <input
//                                                         type="radio"
//                                                         className="form-check-input"
//                                                         name="transactionType"
//                                                         value="2"
//                                                         checked={row.transactionType === "2"}
//                                                         onChange={(event) =>
//                                                             handleInputChange(index, event)
//                                                         }
//                                                     />
//                                                     <label className="form-check-label text-danger">
//                                                         Sell
//                                                     </label>
//                                                 </div>
//                                             </td>
//                                             <td>
//                                                 <AutoComplete 
//                                                     value={row.exchange} 
//                                                     suggestions={filteredItems} 
//                                                     completeMethod={searches} 
//                                                     onChange={(e) => handleInputChange(index, { target: { name: 'exchange', value: e.value } })} 
//                                                     forceSelection 
//                                                 />
//                                             </td>
//                                             <td>
//                                                 <select
//                                                     className="form-select form-select-sm"
//                                                     name="orderType"
//                                                     value={row.orderType}
//                                                     onChange={(event) =>
//                                                         handleInputChange(index, event)
//                                                     }
//                                                 >
//                                                     <option value="1">MARKET</option>
//                                                 </select>
//                                             </td>
//                                             <td>
//                                                 <select
//                                                     className="form-select form-select-sm"
//                                                     name="productType"
//                                                     value={row.productType}
//                                                     onChange={(event) =>
//                                                         handleInputChange(index, event)
//                                                     }
//                                                 >
//                                                     <option value="1">CARRYFORWARD</option>
//                                                 </select>
//                                             </td>
//                                             <td>
//                                                 <button
//                                                     className="btn btn-outline-danger btn-sm"
//                                                     onClick={() => handleDeleteRow(index)}
//                                                 >
//                                                     <i className="ri-delete-bin-line"></i>
//                                                 </button>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
                
//                </Dialog>
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
import { Modal, Button } from 'react-bootstrap';
import { AutoComplete } from "primereact/autocomplete";
import axios from 'axios';
const Basket = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBasketIndex, setSelectedBasketIndex] = useState(null);
  const [baskets, setBaskets] = useState([]);
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);
  const [values, setValues] = useState('');
  const [item, setItem] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentBasket, setCurrentBasket] = useState({
    name: "",
    rows: [
      {
        instrument:"BANKNIFTY12JUN2447000CE",
            ce_pe:"CE",
            lot_quantity_buffer:1,
            transactionType:"BUY",
            exchange:"",
            orderType:"MARKET",
            productType:"CARRYFORWARD"
      },
    ],
  });
  const [rows, setRows] = useState([
    {
      instrument:"BANKNIFTY12JUN2447000CE",
      ce_pe:"CE",
      lot_quantity_buffer:1,
      transactionType:"BUY",
      exchange:"",
      orderType:"MARKET",
      productType:"CARRYFORWARD"
    },
  ]);
  const [editedBasket, setEditedBasket] = useState({ ...currentBasket });

  // Fetch basket list data
  useEffect(() => {
    fetch("http://192.46.212.210/api/teacher/basket_list_view", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        teacher_id: 43,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.st === 1) {
          setBaskets(data.data);
        } else {
          // Handle error or no data case
          console.error("Failed to fetch basket list:", data.msg);
        }
      })
      .catch((error) => {
        console.error("Error fetching basket list:", error);
      });
  }, []);

  const handleRowChange = (index, field, value) => {
    const updatedRows = [...editedBasket.rows];
    updatedRows[index] = { ...updatedRows[index], [field]: value };
    setEditedBasket({ ...editedBasket, rows: updatedRows });
  };

  const handleNameChange = (e) => {
    setEditedBasket({ ...editedBasket, name: e.target.value });
  };

  const handleCloseModal = () => {
    setBaskets((prevBaskets) => {
      const updatedBaskets = [...prevBaskets];
      updatedBaskets[selectedBasketIndex] = editedBasket;
      return updatedBaskets;
    });
    setShowModal(false);
  };

  const handleShow = () => setShowModal(true);

  const handleAddRow = () => {
    if (rows.length < 10) {
      setRows([
        ...rows,
        {
          instrument:"BANKNIFTY12JUN2447000CE",
            ce_pe:"CE",
            lot_quantity_buffer:1,
            transactionType:"BUY",
            exchange:"",
            orderType:"MARKET",
            productType:"CARRYFORWARD"
        },
      ]);
    } else {
      alert("You can only add up to 10 rows.");
    }
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

  

  const handleDeleteBasket = (index) => {
    const newBaskets = [...baskets];
    newBaskets.splice(index, 1);
    setBaskets(newBaskets);
  };

  const handleEditBasket = (index) => {
    setSelectedBasketIndex(index);
    setCurrentBasket(baskets[index]);
    setRows(baskets[index].rows); // Update rows with the selected basket's rows
    handleShow();
  };

  const getFormattedBasketName = (index) => {
    const currentDate = new Date();
    const options = { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDate = currentDate.toLocaleString('default', options).replace(',', '').replace(/ at /, ' ');
    return `Basket ${formattedDate}`;
  };

  const handleExecuteAll = () => {
    // Your execute all logic here
  };

  const search = async (event) => {
    try {
        const response = await axios.post('http://192.46.212.210/api/teacher/get_instrument_list', {
            search: event.query
        });
        if (response.data.st === 1) {
            setItems(response.data.data.map(item => item.text));
        } else {
            setItems([]);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        setItems([]);
    }
};

useEffect(() => {
  const fetchData = async () => {
      try {
          const response = await axios.get('http://192.46.212.210/api/teacher/get_exchange_options');
          if (response.data.st === 1) {
              setItem(response.data.exchanges.map(item => item.label));
          } else {
              setItem([]);
          }
      } catch (error) {
          console.error("Error fetching data:", error);
          setItem([]);
      }
  };

  fetchData();
}, []);

const searches = (event) => {
  const filtered = item.filter(item => item.toLowerCase().includes(event.query.toLowerCase()));
  setFilteredItems(filtered);
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
          teacher_id: 43,
          basket_data: currentBasket.rows, // Send current basket rows data
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log("Basket created:", data);
      setBaskets([...baskets, data]); // Add the newly created basket to baskets list
      // Reset currentBasket and rows state
      setCurrentBasket({
        name: "",
        rows: [],
      });
      setRows([]);
      handleCloseModal(); // Close the modal
    } else {
      console.error("Failed to create basket:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred while creating basket:", error);
  }
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
                      onClick={() => handleEditBasket(index)}
                    >
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="fw-bold1 " colSpan="2">
                              {basket.name || getFormattedBasketName(index)}
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
                            <td>Total: {basket.total_instruments_count}/10</td>
                            <td>
                              <span
                                className={
                                  basket.buy_instruments_count > 0 ? 'text-success' : ''
                                }
                              >
                                Buy: {basket.buy_instruments_count}
                              </span>
                              /10
                            </td>
                            <td>
                              <span
                                className={
                                  basket.sell_instruments_count > 0 ? 'text-danger' : ''
                                }
                              >
                                Sell: {basket.sell_instruments_count}
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
                  <div className="card-header d-flex justify-content-between ">
                    <h5 className="mb-0 ">Create New Basket</h5>
                  </div>
                  <div className="mt-3 mx-3 d-flex align-items-center ">
                    <label htmlFor="basketName" className="form-label me-2">
                      Basket Name:
                    </label>
                  </div>
                  <div className="mt-3 mx-3 d-flex align-items-center mb-3 d-flex justify-content-between">
                    <input
                      type="text"
                      className=" form-control form-control-sm"
                      id="basketName"
                      placeholder="Enter Basket Name"
                      value={currentBasket.name}
                      onChange={(event) =>
                        setCurrentBasket({
                          ...currentBasket,
                          name: event.target.value,
                        })
                      }
                    />
                    <button
                      className="btn btn-primary active "
                      onClick={handleAddRow}
                    >
                      Add
                    </button>
                  </div>
                  <div className="table-responsive text-nowrap ">
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
                      <tbody>
                  {rows.map((row, index) => (
                    <tr key={index}>
                      <td>
                        {/* <select
                          id="defaultSelect"
                          className="form-select"
                          name="instrument"
                          value={row.instrument}
                          onChange={(event) =>
                            handleInputChange(index, event)
                          }
                        >
                          <option value="1">Instrument 1</option>
                          <option value="2">Instrument 2</option>
                          <option value="3">Instrument 3</option>
                        </select> */}
                        <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)}forceSelection  />

                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="lot_quantity_buffer"
                          placeholder="Enter Lot QYT Buffer"
                          value={row.lot_quantity_buffer}
                          onChange={(event) =>
                            handleInputChange(index, event)
                          }
                        />
                      </td>
                      <td>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name={`cePe${index}`}
                            id={`ce${index}`}
                            value="1"
                            checked={row.cePe === '1'}
                            onChange={(event) =>
                              handleInputChange(index, {
                                target: {
                                  name: 'cePe',
                                  value: event.target.value,
                                },
                              })
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`ce${index}`}
                          >
                            CE
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name={`cePe${index}`}
                            id={`pe${index}`}
                            value="2"
                            checked={row.cePe === '2'}
                            onChange={(event) =>
                              handleInputChange(index, {
                                target: {
                                  name: 'cePe',
                                  value: event.target.value,
                                },
                              })
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`pe${index}`}
                          >
                            PE
                          </label>
                        </div>
                      </td>
                      <td>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name={`transactionType${index}`}
                            id={`buy${index}`}
                            value="1"
                            checked={row.transactionType === '1'}
                            onChange={(event) =>
                              handleInputChange(index, {
                                target: {
                                  name: 'transactionType',
                                  value: event.target.value,
                                },
                              })
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`buy${index}`}
                          >
                            BUY Order
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name={`transactionType${index}`}
                            id={`sell${index}`}
                            value="2"
                            checked={row.transactionType === '2'}
                            onChange={(event) =>
                              handleInputChange(index, {
                                target: {
                                  name: 'transactionType',
                                  value: event.target.value,
                                },
                              })
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`sell${index}`}
                          >
                            SELL Order
                          </label>
                        </div>
                      </td>
                      <td>
                        {/* <select
                          id="defaultSelect"
                          className="form-select"
                          name="exchange"
                          value={row.exchange}
                          onChange={(event) =>
                            handleInputChange(index, event)
                          }
                        >
                          <option value="1">Exchange 1</option>
                          <option value="2">Exchange 2</option>
                          <option value="3">Exchange 3</option>
                        </select> */}
                                                    <AutoComplete 
                value={values} 
                suggestions={filteredItems} 
                completeMethod={searches} 
                onChange={(e) => setValues(e.value)} 
                forceSelection 
            />
                      </td>
                      <td>
                        <select
                          id="defaultSelect"
                          className="form-select"
                          name="orderType"
                          value={row.orderType}
                          onChange={(event) =>
                            handleInputChange(index, event)
                          }
                        >
                          <option value="1">MARKET</option>
                          <option value="2">Order Type 2</option>
                          <option value="3">Order Type 3</option>
                        </select>
                      </td>
                      <td>
                        <select
                          id="defaultSelect"
                          className="form-select"
                          name="productType"
                          value={row.productType}
                          onChange={(event) =>
                            handleInputChange(index, event)
                          }
                        >
                          <option value="1">CARRYFORWARD</option>
                          <option value="2">Product Type 2</option>
                          <option value="3">Product Type 3</option>
                        </select>
                      </td>
                      <td>
                      {rows.length > 1 && (
                        <i
                          className="ri-delete-bin-7-fill"
                          onClick={() => handleDeleteRow(index)}
                        ></i>
                      )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-footer text-end">
            <div className="d-flex justify-content-start mt-3 mx-3 mb-3">
                    <button
                      className="btn btn-success"
                      onClick={handleCreateBasket}
                    >
                      Create Basket
                    </button>
                  </div>
             
            </div>                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>{editedBasket.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="mb-3">
          <label htmlFor="basketName" className="form-label">
            Basket Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="basketName"
            value={editedBasket.name}
            onChange={handleNameChange}
          />
        </div>

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
          <tbody>
            {editedBasket.rows.map((row, index) => (
              <tr key={index}>
                <td>
                  <select
                    className="form-select"
                    value={row.instrument}
                    onChange={(e) => handleRowChange(index, 'instrument', e.target.value)}
                  >
                    <option value="1">Instrument 1</option>
                    <option value="2">Instrument 2</option>
                    <option value="3">Instrument 3</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={row.lotQtyBuffer}
                    onChange={(e) => handleRowChange(index, 'lotQtyBuffer', e.target.value)}
                  />
                </td>
                <td>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`cePe${index}`}
                      value="1"
                      checked={row.cePe === '1'}
                      onChange={(e) => handleRowChange(index, 'cePe', e.target.value)}
                    />
                    <label className="form-check-label">CE</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`cePe${index}`}
                      value="2"
                      checked={row.cePe === '2'}
                      onChange={(e) => handleRowChange(index, 'cePe', e.target.value)}
                    />
                    <label className="form-check-label">PE</label>
                  </div>
                </td>
                <td>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`transactionType${index}`}
                      value="1"
                      checked={row.transactionType === '1'}
                      onChange={(e) => handleRowChange(index, 'transactionType', e.target.value)}
                    />
                    <label className="form-check-label">BUY</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`transactionType${index}`}
                      value="2"
                      checked={row.transactionType === '2'}
                      onChange={(e) => handleRowChange(index, 'transactionType', e.target.value)}
                    />
                    <label className="form-check-label">SELL</label>
                  </div>
                </td>
                <td>
                  <select
                    className="form-select"
                    value={row.exchange}
                    onChange={(e) => handleRowChange(index, 'exchange', e.target.value)}
                  >
                    <option value="1">NFO</option>
                    <option value="2">Exchange 2</option>
                    <option value="3">Exchange 3</option>
                  </select>
                </td>
                <td>
                  <select
                    className="form-select"
                    value={row.orderType}
                    onChange={(e) => handleRowChange(index, 'orderType', e.target.value)}
                  >
                    <option value="1">MARKET</option>
                    <option value="2">Order Type 2</option>
                    <option value="3">Order Type 3</option>
                  </select>
                </td>
                <td>
                  <select
                    className="form-select"
                    value={row.productType}
                    onChange={(e) => handleRowChange(index, 'productType', e.target.value)}
                  >
                    <option value="1">CARRYFORWARD</option>
                    <option value="2">Product Type 2</option>
                    <option value="3">Product Type 3</option>
                  </select>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDeleteRow(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="info" onClick={handleExecuteAll}>
          Execute All
        </Button>
      </Modal.Footer>
    </Modal>




      <Footer />



      
    </div>
  );
};

export default Basket;

