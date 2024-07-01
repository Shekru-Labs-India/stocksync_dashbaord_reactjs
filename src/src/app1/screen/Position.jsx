// import React, { useState, useEffect } from "react";
// import Footer from "../component/Footer";
// import Header from "../component/Header";
// import config from "../../app3/config";
// import SubHeader from "../component/SubHeader";
// import { Button } from "primereact/button";
// import { Link } from "react-router-dom";
// import { ProgressSpinner } from "primereact/progressspinner";
// import { IconField } from "primereact/iconfield";
// import { InputIcon } from "primereact/inputicon";
// import { InputText } from "primereact/inputtext";
// import { VirtualScroller } from "primereact/virtualscroller";
// // const userId = localStorage.getItem("user_id");
// const userId = 119;
// import { Tooltip } from "primereact/tooltip";
// const Position = () => {
//   const [loading, setLoading] = useState(false);

//   const [positionsSelected, setPositionsSelected] = useState(false);
//   const [globalFilter, setGlobalFilter] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeTab, setActiveTab] = useState("all");
//   // const [selectedPositions, setSelectedPositions] = useState([]);
//   const [selectedPositions, setSelectedPositions] = useState(new Set());
//   const [allSelected, setAllSelected] = useState(false);
//   const [allUnselected, setAllUnselected] = useState(false);
//   const [data, setData] = useState([]);
//   const handleExitAllInstruments = async (student_id) => {
//     try {
//       setLoading(true);

//       const requestOptions = {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           student_id: student_id,
//         }),
//       };
//       console.log(student_id);
//       const response = await fetch(
//         "https://ghanish.in/api/teacher/exit_students_all_instrument",
//         requestOptions
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const responseData = await response.json();
//       console.log("Exit all instruments response:", responseData);

//       // Refresh student list after exiting
//       getOrderPlacedStudentList();
//     } catch (error) {
//       console.error("Error exiting all student instruments:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleExit = async (studentId, instrumentData) => {
//     try {
//       setLoading(true);

//       const requestOptions = {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           student_id: studentId,
//           instrument_data: instrumentData,
//         }),
//       };

//       const response = await fetch(
//         `${config.apiDomain}/api/teacher/exit_student_instrument`,
//         requestOptions
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const responseData = await response.json();
//       console.log("Exit student instrument response:", responseData);

//       // Refresh student list after exiting
//       getOrderPlacedStudentList();
//     } catch (error) {
//       console.error("Error exiting student instrument:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getOrderPlacedStudentList = async () => {
//     try {
//       setLoading(true);

//       const requestOptions = {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ teacher_id: userId }),
//       };

//       const response = await fetch(
//         `${config.apiDomain}/api/teacher/get_order_placed_student_list`,
//         requestOptions
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();

//       if (data && data.data && data.data.length > 0) {
//         setData(
//           data.data.map((student) => ({
//             name: student.name,
//             user_id: student.user_id,
//             instruments: student.orders.map((order) => order.symbol),
//             lots: student.orders.map((order) => ({
//               size: order.buy_lots,
//               price: order.buy_price,
//               status: order.sell_lots > 0 ? "completed" : "pending",
//               sell: order.sell_lots,
//               sellPrice: order.sell_price,
//               symboltoken: order.token,
//             })),
//           }))
//         );
//       } else {
//         console.error("No data found in get_order_placed_student_list");
//       }
//     } catch (error) {
//       console.error("Error fetching order placed student list:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getOrderPlacedStudentList();
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleClearSearch = () => {
//     setSearchTerm("");
//   };

//   const filteredData = data.filter((item) => {
//     const nameMatch = item.name
//       .toLowerCase()
//       .includes(globalFilter.toLowerCase());
//     const instrumentsMatch = item.instruments.some((instrument) =>
//       instrument.toLowerCase().includes(globalFilter.toLowerCase())
//     );
//     return nameMatch || instrumentsMatch;
//   });

//   const displayData = filteredData.filter((item) =>
//     activeTab === "all"
//       ? true
//       : item.lots.some((lot) => lot.status === activeTab)
//   );

//   const pendingCount = data.reduce(
//     (count, item) =>
//       count + item.lots.filter((lot) => lot.status === "pending").length,
//     0
//   );
//   const totalCount = data.length;

//   const openPositions = data.filter((item) =>
//     item.lots.some((lot) => lot.status === "pending")
//   );

//   const closePositions = data.filter((item) =>
//     item.lots.some((lot) => lot.status === "completed")
//   );

//   const [positionData, setPositionData] = useState({
//     openPositions: [],
//     closedPositions: [],
//     totalRealisedPnl: 0.0,
//     totalUnrealisedPnl: 0.0,
//   });
//   const getPositionList = async () => {
//     try {
//       const userId = 119;
//       const response = await fetch(
//         `${config.apiDomain}/api/teacher/get_position_list`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ teacher_id: userId }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();

//       let openPositionRows = [];
//       let closedPositionRows = [];
//       let totalRealisedPnl = 0.0;
//       let totalUnrealisedPnl = 0.0;

//       data.position_list.forEach((item) => {
//         const dailyDiffPercent = (
//           ((item.ltp - item.close) / item.close) *
//           100
//         ).toFixed(2);
//         const netqty = parseInt(item.netqty);
//         const lotsize = parseInt(item.lotsize);
//         const lotquantity = parseInt(netqty / lotsize);
//         const ordertype = netqty > 0 ? "BUY" : "SELL";
//         const color_ordertype = netqty > 0 ? "text-success" : "text-danger";
//         const avg_price =
//           netqty > 0 ? item.totalbuyavgprice : item.totalsellavgprice;
//         const color_pnl = item.pnl > 0 ? "text-success" : "text-danger";
//         const color_diff_percent =
//           dailyDiffPercent > 0 ? "text-success" : "text-danger";

//         if (netqty !== 0) {
//           totalUnrealisedPnl += parseFloat(item.unrealised);
//           const dropdownOptions = Array.from(
//             { length: lotquantity },
//             (_, index) => lotquantity - index
//           );

//           openPositionRows.push(
//             <tr key={item.tradingsymbol}>
//               <td>
//                 <span className="instrument_symbol">{item.tradingsymbol}</span>{" "}
//                 <span className="d-none instrument_token">
//                   {item.symboltoken}
//                 </span>
//               </td>
//               <td>
//                 <span className="instrument_producttype">
//                   {item.producttype}
//                 </span>
//               </td>
//               <td>{item.optiontype}</td>
//               <td className={color_ordertype}>{ordertype}</td>
//               <td>
//                 <span className="instrument_exchange">{item.exchange}</span>
//               </td>
//               <td className={color_pnl}>
//                 {lotquantity} Lots{" "}
//                 <span className="text-body-tertiary lot_size">
//                   (1 Lot = {item.lotsize})
//                 </span>
//               </td>
//               <td>
//                 <span className={color_diff_percent}>{item.ltp} ₹</span>{" "}
//                 <span className="text-body-tertiary">
//                   ({dailyDiffPercent}%)
//                 </span>
//               </td>
//               <td>{avg_price} ₹</td>
//               <td className={color_pnl}>{item.pnl} ₹</td>
//               {allSelected && (
//           <td>
//             <div className="d-flex align-items-center mb-2">
//               <select
//                 id={`${item.tradingsymbol}-lot-size`} // Unique identifier for each dropdown
//                 onChange={(event) =>
//                   handleLotSizeChange(
//                     item.tradingsymbol,
//                     lotquantity,
//                     event
//                   )
//                 }
//                 className="form-control me-2"
//                 style={{ width: "auto" }}
//               >
//                 {dropdownOptions.map((option) => (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>

//               <input
//                 type="checkbox"
//                 onChange={() =>
//                   handleCheckboxChange(
//                     item.tradingsymbol,
//                     item.symboltoken,
//                     lotquantity
//                   )
//                 }
//               />
//             </div>
//           </td>
//         )}
//             </tr>
//           );
//         } else {
//           totalRealisedPnl += parseFloat(item.realised);
//           closedPositionRows.push(
//             <tr key={item.tradingsymbol}>
//               <td>
//                 <span className="instrument_symbol">{item.tradingsymbol}</span>{" "}
//                 <span className="d-none instrument_token">
//                   {item.symboltoken}
//                 </span>
//               </td>
//               <td>{item.producttype}</td>
//               <td>{item.optiontype}</td>
//               <td>{item.exchange}</td>
//               <td>
//                 0 Lots{" "}
//                 <span className="text-body-tertiary">
//                   (1 Lot = {item.lotsize})
//                 </span>
//               </td>
//               <td>
//                 <span className={color_diff_percent}>{item.ltp} ₹</span>{" "}
//                 <span className="text-body-tertiary">
//                   ({dailyDiffPercent}%)
//                 </span>
//               </td>
//               <td>{item.totalbuyavgprice} ₹</td>
//               <td>{item.totalsellavgprice} ₹</td>
//               <td className={color_pnl}>{item.pnl} ₹</td>
//             </tr>
//           );
//         }
//       });

//       setPositionData({
//         openPositions: openPositionRows,
//         closedPositions: closedPositionRows,
//         totalRealisedPnl,
//         totalUnrealisedPnl,
//       });
//     } catch (error) {
//       console.error("Error occurred while fetching position list:", error);
//     }
//   };
//   const handleCheckboxChange = (tradingsymbol, symboltoken, lotquantity) => {
//     const key = JSON.stringify({ tradingsymbol, symboltoken, lotquantity });
//     if (selectedPositions.has(key)) {
//       selectedPositions.delete(key);
//     } else {
//       selectedPositions.add(key);
//     }
//     setSelectedPositions(new Set(selectedPositions));
//   };

//   const handleToggleSelectAll = () => {
//     if (allSelected) {
//       setSelectedPositions(new Set());
//     } else {
//       const newSelected = new Set();
//       data.forEach((item) => {
//         if (item.netqty !== 0) {
//           newSelected.add(
//             JSON.stringify({
//               tradingsymbol: item.tradingsymbol,
//               symboltoken: item.symboltoken,
//               lotquantity: parseInt(item.netqty / item.lotsize),
//             })
//           );
//         }
//       });
//       setSelectedPositions(newSelected);
//     }
//     setAllSelected(!allSelected);
//   };

//   useEffect(() => {
//     getPositionList();
//   }, []);
//   // const handleCheckboxChange = (tradingsymbol, symboltoken, lotquantity) => {
//   //   setSelectedPositions((prevSelected) => {
//   //     const newSelected = new Set(prevSelected);
//   //     const position = { tradingsymbol, symboltoken, lotquantity };

//   //     const positionString = JSON.stringify(position); // Convert to string for Set storage

//   //     if (newSelected.has(positionString)) {
//   //       newSelected.delete(positionString);
//   //     } else {
//   //       newSelected.add(positionString);
//   //     }

//   //     return newSelected;
//   //   });
//   // };

//   const exitPosition = async () => {
//     try {
//       const userId = 119;
//       const order_data = Array.from(selectedPositions).map((positionString) => {
//         const { tradingsymbol, symboltoken, lotquantity } =
//           JSON.parse(positionString);
//         const exit_lot = parseInt(
//           document.getElementById(`${tradingsymbol}-lot-size`).value
//         );
//         // Retrieve selected value from the dropdown and parse it as an integer

//         return {
//           instrument: tradingsymbol,
//           symboltoken,
//           exit_lot,
//         };
//       });

//       const body = {
//         teacher_id: userId,
//         order_data,
//       };

//       console.log("Sending request body:", body); // Log the request body

//       const response = await fetch(
//         `${config.apiDomain}/api/teacher/exit_position`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(body),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("Position exited successfully:", data);

//       // After successful exit, refresh the position list
//       getPositionList();
//     } catch (error) {
//       console.error("Error occurred while exiting position:", error);
//     }
//   };

//   const handleExitAllPending = async () => {
//     try {
//       const userId = 119;
//       const response = await fetch(
//         `https://ghanish.in/api/teacher/exit_all_student_pending`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             teacher_id: userId,
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("Exited all pending positions successfully:", data);

//       // After successful exit of all pending, refresh the position list
//       getPositionList();
//     } catch (error) {
//       console.error(
//         "Error occurred while exiting all pending positions:",
//         error
//       );
//     }
//   };

//   const handleRefresh = () => {
//     getPositionList();
//   };

//   const handleBack = () => {
//     navigate(-1);
//   };

//   const handleLotSizeChange = (name, lotSize, event) => {
//     const selectedLotSize = parseInt(event.target.value, 10);
//     handleCheckboxChange(name, lotSize, selectedLotSize);
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };
//   return (
//     <>
//       <Header />
//       <SubHeader />

//       <div className="container-xxl container-p-y">
//         <nav aria-label="breadcrumb">
//           <ol className="breadcrumb breadcrumb-style1 text-secondary">
//             <li className="breadcrumb-item">
//               <Link to="/teacher/dashboard" className="text-secondary">
//                 <i className="ri-home-5-line ri-lg"></i>
//               </Link>
//             </li>
//             <li
//               className="breadcrumb-item active text-secondary"
//               aria-current="page"
//             >
//               Position
//             </li>
//           </ol>
//         </nav>
//         <div className="row ">
//           <div className="col-xl-9 d-flex flex-column">
//             <div className="container-md-12 ">
//               <div className="card mb-3" style={{ overflow: "hidden" }}>
//                 <div className="col text-start mb-5 mt-5 ms-5">
//                   <button
//                     onClick={handleBack}
//                     className="btn rounded-pill btn-outline-secondary btn-xs"
//                   >
//                     <i className="ri-arrow-left-circle-fill me-1 ri-md"></i>{" "}
//                     Back
//                   </button>
//                 </div>
//                 <div className=" text-center">
//                   <div className="row">
//                     <div className="col-md-4 mb-3">
//                       <h4 className="text-danger">
//                         {positionData.totalUnrealisedPnl} ₹
//                       </h4>
//                       <p className="mb-0">Unrealised Profit & Loss</p>
//                     </div>
//                     <div className="col-md-4 mb-3">
//                       <h4 className="text-danger">
//                         {positionData.totalRealisedPnl} ₹
//                       </h4>
//                       <p className="mb-0">Realised Profit & Loss</p>
//                     </div>
//                     <div className="col-md-4 mb-3">
//                       <h4 className="text-danger">
//                         {positionData.totalRealisedPnl +
//                           positionData.totalUnrealisedPnl}{" "}
//                         ₹
//                       </h4>
//                       <p className="mb-0">Total Profit & Loss</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="card">
//                 <div className="card-header d-flex align-items-center justify-content-between">
//                   <h5 className="text-center flex-grow-1 m-0">Open Position</h5>
//                   <div>
//                     {loading ? (
//                       <ProgressSpinner
//                         style={{
//                           width: "30px",
//                           height: "30px",
//                           marginRight: "10px",
//                         }}
//                         strokeWidth="5"
//                         fill="var(--surface-ground)"
//                         animationDuration=".5s"
//                       />
//                     ) : (
//                       <div>
//                         <Tooltip target=".custom-target-icon" />
//                         <i
//                           className="custom-target-icon ri ri-refresh-line ri-lg p-text-secondary"
//                           data-pr-tooltip="Refresh"
//                           data-pr-position="top"
//                           style={{ cursor: "pointer" }}
//                           onClick={handleRefresh}
//                         ></i>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 <div className="table-responsive text-start">

//   <div className="d-flex justify-content-end mb-3 fixed-bottom-end">
//     <button
//       type="button"
//       className="btn btn-xs rounded-pill btn-outline-dark waves-effect me-3"
//       onClick={handleToggleSelectAll}
//     >
//       {allSelected ? "Unselect All" : "Select All"}
//     </button>
//   </div>

//                   <table className="table table-bordered">
//                     <thead>
//                       <tr>
//                         <th>Instrument</th>
//                         <th>Product Type</th>
//                         <th>Option Type</th>
//                         <th>Order Type</th>
//                         <th>Exchange</th>
//                         <th>Lots</th>
//                         <th>LTP</th>
//                         <th>Avg. Price</th>
//                         <th>Profit & Loss</th>
//                         {allSelected && <th>Action</th>}
//                       </tr>
//                     </thead>
//                     <tbody>{positionData.openPositions}</tbody>
//                     <tfoot>
//                       <tr>
//                         {allSelected &&
//                         <td colSpan="10">
//                           <div className="d-flex justify-content-end">
//                             <button
//                               type="button"
//                               className="btn btn-danger btn-sm rounded"
//                               onClick={exitPosition}
//                             >
//                               <i className="ri-telegram-line ri-lg me-3"></i>
//                               Exit {selectedPositions.size} Selected
//                             </button>
//                           </div>
//                         </td>
// }
//                       </tr>
//                     </tfoot>
//                   </table>
//                 </div>
//               </div>
//               <div className="card mt-3">
//                 <div className="card-header d-flex align-items-center justify-content-between">
//                   <h5 className="text-center flex-grow-1 m-0">
//                     Closed Position
//                   </h5>

//                   {loading ? (
//                     <ProgressSpinner
//                       style={{
//                         width: "30px",
//                         height: "30px",
//                         marginRight: "10px",
//                       }}
//                       strokeWidth="5"
//                       fill="var(--surface-ground)"
//                       animationDuration=".5s"
//                     />
//                   ) : (
//                     <div>
//                       <Tooltip target=".custom-target-icon" />
//                       <i
//                         className="custom-target-icon ri ri-refresh-line ri-lg p-text-secondary"
//                         data-pr-tooltip="Refresh"
//                         data-pr-position="top"
//                         style={{ cursor: "pointer" }}
//                         onClick={handleRefresh}
//                       ></i>
//                     </div>
//                   )}
//                 </div>

//                 <div className="table-responsive text-start">
//                   <table className="table table-bordered">
//                     <thead>
//                       <tr>
//                         <th>Instrument</th>
//                         <th>Product Type</th>
//                         <th>Option Type</th>
//                         <th>Exchange</th>
//                         <th>Lots</th>
//                         <th>LTP</th>
//                         <th>Sell Price</th>
//                         <th>Buy Price</th>
//                         <th>Profit & Loss</th>
//                       </tr>
//                     </thead>
//                     <tbody>{positionData.closedPositions}</tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-xl-3 d-flex flex-column">
//             {/* Right side content */}
//             <div className="right-side-content">
//               <div className="card">
//                 <div className="d-flex justify-content-around mt-5">
//                   <button
//                     type="button"
//                     className="btn btn-danger rounded btn-md w-100 ms-5 me-5"
//                     onClick={handleExitAllPending}
//                     // disabled={pendingCount === 0}
//                   >
//                     <i className="ri-telegram-line ri-lg me-3 "></i> Exit All
//                     Pendings
//                   </button>
//                 </div>
//                 <div className="card-body">
//                   <div className="d-flex justify-content-around  mb-5 w-100 ">
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
//                   </div>

//                   <div className="d-flex justify-content-between">
//                     <button
//                       type="button"
//                       className={`btn btn-outline-primary btn-xs rounded-pill  ${
//                         activeTab === "all" ? "active" : ""
//                       }`}
//                       onClick={() => handleTabClick("all")}
//                     >
//                       All ({totalCount})
//                     </button>
//                     <button
//                       type="button"
//                       className={`btn btn-outline-warning btn-xs rounded-pill ${
//                         activeTab === "pending" ? "active" : ""
//                       }`}
//                       onClick={() => handleTabClick("pending")}
//                     >
//                       Pending ({pendingCount})
//                     </button>

//                     <div className="d-flex justify-content-end ">
//                       <div className="mt-2">
//                         <i
//                           className="ri ri-refresh-line ri-lg me-3 p-text-secondary custom-target-icon"
//                           data-pr-tooltip="Refresh"
//                           data-pr-position="top"
//                           style={{ cursor: "pointer" }}
//                           onClick={getOrderPlacedStudentList}
//                         ></i>
//                       </div>
//                     </div>
//                   </div>
//                   <hr />

//                   <div
//                     className="virtual-scroller-container"
//                     style={{
//                       height: "500px",
//                       overflowY: "auto",
//                       overflowX: "hidden",
//                     }}
//                   >
//                     <VirtualScroller
//                       className=""
//                       items={data}
//                       itemSize={70} // Adjust item size as needed
//                       itemTemplate={(item, index) => (
//                         <div key={index} className="border-bottom mb-3 pb-3">
//                           <div className="d-flex align-items-start mb-3">
//                             <p className="text-start mb-0 fw-bold text-black flex-grow-1">
//                               {item.name}
//                             </p>
//                             <button
//                               type="button"
//                               className="btn btn-danger btn-xs btn btn-outline-danger waves-effect ms-3"
//                               onClick={() =>
//                                 handleExitAllInstruments(item.user_id)
//                               }
//                             >
//                               <i className="ri-telegram-line ri-lg"></i> Exit
//                             </button>
//                           </div>

//                           {item.lots.map((lot, lotIndex) => (
//                             <div key={lotIndex} className="mb-3">
//                               <div className="d-flex align-items-center mb-1">
//                                 <span>{item.instruments[lotIndex]}</span>
//                               </div>
//                               <div className="d-flex justify-content-between align-items-center">
//                                 <div className="text-start text-primary1">
//                                   <strong className="text-black">Buy:</strong>{" "}
//                                   <span
//                                     className={
//                                       lot.size === 0
//                                         ? "text-black"
//                                         : "text-success"
//                                     }
//                                   >
//                                     {lot.size} ({lot.price} Rs.)
//                                   </span>{" "}
//                                 </div>
//                                 <div className="text-end text-primary1">
//                                   <strong className="text-black">Sell:</strong>{" "}
//                                   <span
//                                     className={
//                                       lot.sell === 0
//                                         ? "text-black"
//                                         : "text-danger"
//                                     }
//                                   >
//                                     {lot.sell} ({lot.sellPrice} Rs.)
//                                   </span>
//                                 </div>
//                                 <button
//                                   type="button"
//                                   className="btn btn-danger custom-btn-action1 btn-xs btn btn-outline-danger waves-effect"
//                                   onClick={() =>
//                                     handleExit(item.user_id, {
//                                       tradingsymbol: item.instruments[lotIndex],
//                                       symboltoken:
//                                         item.lots[lotIndex].symboltoken,
//                                     })
//                                   }
//                                 >
//                                   <i className="ri-telegram-line ri-lg"></i>
//                                 </button>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                       style={{ height: "100%" }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* </div> */}
//       {/* <Footer/> */}
//     </>
//   );
// };

// export default Position;

// import React, { useState, useEffect } from "react";
// import Footer from "../component/Footer";
// import Header from "../component/Header";
// import config from "../../app3/config";
// import SubHeader from "../component/SubHeader";
// import { Button } from "primereact/button";
// import { Link } from "react-router-dom";
// import { ProgressSpinner } from "primereact/progressspinner";
// import { IconField } from "primereact/iconfield";
// import { InputIcon } from "primereact/inputicon";
// import { InputText } from "primereact/inputtext";
// import { VirtualScroller } from "primereact/virtualscroller";
// import { Tooltip } from "primereact/tooltip";
// // const userId = localStorage.getItem("user_id");
// const userId = localStorage.getItem("userId");

// const Position = () => {
//     const [loading, setLoading] = useState(false);

//     const [positionsSelected, setPositionsSelected] = useState(false);
//     const [globalFilter, setGlobalFilter] = useState("");
//     const [activeTab, setActiveTab] = useState("all");
//     // const [selectedPositions, setSelectedPositions] = useState([]);
//     const [selectedPositions, setSelectedPositions] = useState(new Set());
//     const [allSelected, setAllSelected] = useState(false);
//     const [allUnselected, setAllUnselected] = useState(false);
//     const [data, setData] = useState([]);
//     // const [filterableData, setFilterableData] = useState([]);
//     const [filteredeData, setFilteredeData] = useState(data); // Separate state for filtered data
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         filterData(searchTerm);
//     }, [searchTerm]); // Trigger filterData whenever searchTerm changes

//     const filterData = (searchTerm) => {
//         const filtered = filteredeData.filter(item =>
//             item.name.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         setFilteredeData(filtered);
//     };

//     const handleSearch = (event) => {
//         const term = event.target.value;
//         setSearchTerm(term);
//     };

//     const clearSearch = () => {
//         setSearchTerm('');
//         setFilteredeData(data); // Reset filtered data to initialData
//     };

//     const handleExitAllInstruments = async (student_id) => {
//         try {
//             setLoading(true);

//             const requestOptions = {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     student_id: student_id,
//                 }),
//             };
//             console.log(student_id);
//             const response = await fetch(
//                 "https://ghanish.in/api/teacher/exit_students_all_instrument",
//                 requestOptions
//             );

//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             const responseData = await response.json();
//             console.log("Exit all instruments response:", responseData);

//             // Refresh student list after exiting
//             getOrderPlacedStudentList();
//         } catch (error) {
//             console.error("Error exiting all student instruments:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleExit = async (studentId, instrumentData) => {
//         try {
//             setLoading(true);

//             const requestOptions = {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     student_id: studentId,
//                     instrument_data: instrumentData,
//                 }),
//             };

//             const response = await fetch(
//                 `${config.apiDomain}/api/teacher/exit_student_instrument`,
//                 requestOptions
//             );

//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             const responseData = await response.json();
//             console.log("Exit student instrument response:", responseData);

//             // Refresh student list after exiting
//             getOrderPlacedStudentList();
//         } catch (error) {
//             console.error("Error exiting student instrument:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const getOrderPlacedStudentList = async () => {
//         try {
//             setLoading(true);

//             const requestOptions = {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ teacher_id: userId }),
//             };

//             const response = await fetch(
//                 `${config.apiDomain}/api/teacher/get_order_placed_student_list`,
//                 requestOptions
//             );

//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             const data = await response.json();

//             if (data && data.data && data.data.length > 0) {
//                 setData(
//                     data.data.map((student) => ({
//                         name: student.name,
//                         user_id: student.user_id,
//                         instruments: student.orders.map((order) => order.symbol),
//                         lots: student.orders.map((order) => ({
//                             size: order.buy_lots,
//                             price: order.buy_price,
//                             status: order.sell_lots > 0 ? "completed" : "pending",
//                             sell: order.sell_lots,
//                             sellPrice: order.sell_price,
//                             symboltoken: order.token,
//                         })),
//                     }))
//                 );
//                 setFilteredeData(
//                     data.data.map((student) => ({
//                         name: student.name,
//                         user_id: student.user_id,
//                         instruments: student.orders.map((order) => order.symbol),
//                         lots: student.orders.map((order) => ({
//                             size: order.buy_lots,
//                             price: order.buy_price,
//                             status: order.sell_lots > 0 ? "completed" : "pending",
//                             sell: order.sell_lots,
//                             sellPrice: order.sell_price,
//                             symboltoken: order.token,
//                         })),
//                     }))
//                 );
//             } else {
//                 console.error("No data found in get_order_placed_student_list");
//             }
//         } catch (error) {
//             console.error("Error fetching order placed student list:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         getOrderPlacedStudentList();
//     }, []);

//     const filteredData = data.filter((item) => {
//         const nameMatch = item.name
//             .toLowerCase()
//             .includes(globalFilter.toLowerCase());
//         const instrumentsMatch = item.instruments.some((instrument) =>
//             instrument.toLowerCase().includes(globalFilter.toLowerCase())
//         );
//         return nameMatch || instrumentsMatch;
//     });

//     const displayData = filteredData.filter((item) =>
//         activeTab === "all"
//             ? true
//             : item.lots.some((lot) => lot.status === activeTab)
//     );

//     const pendingCount = data.reduce(
//         (count, item) =>
//             count + item.lots.filter((lot) => lot.status === "pending").length,
//         0
//     );
//     const totalCount = data.length;

//     const openPositions = data.filter((item) =>
//         item.lots.some((lot) => lot.status === "pending")
//     );

//     const closePositions = data.filter((item) =>
//         item.lots.some((lot) => lot.status === "completed")
//     );

//     const [positionData, setPositionData] = useState({
//         openPositions: [],
//         closedPositions: [],
//         totalRealisedPnl: 0.0,
//         totalUnrealisedPnl: 0.0,
//     });
//     const getPositionList = async () => {
//         try {
//             const userId = localStorage.getItem("userId");
//             const response = await fetch(
//                 `${config.apiDomain}/api/teacher/get_position_list`,
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({ teacher_id: userId }),
//                 }
//             );

//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             const data = await response.json();

//             let openPositionRows = [];
//             let closedPositionRows = [];
//             let totalRealisedPnl = 0.0;
//             let totalUnrealisedPnl = 0.0;

//             data.position_list.forEach((item) => {
//                 const dailyDiffPercent = (
//                     ((item.ltp - item.close) / item.close) *
//                     100
//                 ).toFixed(2);
//                 const netqty = parseInt(item.netqty);
//                 const lotsize = parseInt(item.lotsize);
//                 const lotquantity = parseInt(netqty / lotsize);
//                 const ordertype = netqty > 0 ? "BUY" : "SELL";
//                 const color_ordertype = netqty > 0 ? "text-success" : "text-danger";
//                 const avg_price =
//                     netqty > 0 ? item.totalbuyavgprice : item.totalsellavgprice;
//                 const color_pnl = item.pnl > 0 ? "text-success" : "text-danger";
//                 const color_diff_percent =
//                     dailyDiffPercent > 0 ? "text-success" : "text-danger";

//                 if (netqty !== 0) {
//                     totalUnrealisedPnl += parseFloat(item.unrealised);
//                     const dropdownOptions = Array.from(
//                         { length: lotquantity },
//                         (_, index) => lotquantity - index
//                     );

//                     openPositionRows.push(
//                         <tr key={item.tradingsymbol}>
//                             <td>
//                                 <span className="instrument_symbol">{item.tradingsymbol}</span>{" "}
//                                 <span className="d-none instrument_token">
//                                     {item.symboltoken}
//                                 </span>
//                             </td>
//                             <td>
//                                 <span className="instrument_producttype">
//                                     {item.producttype}
//                                 </span>
//                             </td>
//                             <td>{item.optiontype}</td>
//                             <td className={color_ordertype}>{ordertype}</td>
//                             <td>
//                                 <span className="instrument_exchange">{item.exchange}</span>
//                             </td>
//                             <td className={color_pnl}>
//                                 {lotquantity} Lots{" "}
//                                 <span className="text-body-tertiary lot_size">
//                                     (1 Lot = {item.lotsize})
//                                 </span>
//                             </td>
//                             <td>
//                                 <span className={color_diff_percent}>{item.ltp} ₹</span>{" "}
//                                 <span className="text-body-tertiary">
//                                     ({dailyDiffPercent}%)
//                                 </span>
//                             </td>
//                             <td>{avg_price} ₹</td>
//                             <td className={color_pnl}>{item.pnl} ₹</td>
//                             {allSelected && (
//                                 <td>
//                                     <div className="d-flex align-items-center mb-2">
//                                         <select
//                                             id={`${item.tradingsymbol}-lot-size`} // Unique identifier for each dropdown
//                                             onChange={(event) =>
//                                                 handleLotSizeChange(
//                                                     item.tradingsymbol,
//                                                     lotquantity,
//                                                     event
//                                                 )
//                                             }
//                                             className="form-control me-2"
//                                             style={{ width: "auto" }}
//                                         >
//                                             {dropdownOptions.map((option) => (
//                                                 <option key={option} value={option}>
//                                                     {option}
//                                                 </option>
//                                             ))}
//                                         </select>

//                                         <input
//                                             type="checkbox"
//                                             checked={positionData.openPositions.find(position => position.tradingsymbol == item.tradingsymbol)}
//                                             onChange={() =>
//                                                 handleCheckboxChange(
//                                                     item.tradingsymbol,
//                                                     item.symboltoken,
//                                                     lotquantity
//                                                 )
//                                             }
//                                         />
//                                     </div>
//                                 </td>
//                             )}
//                         </tr>
//                     );
//                 } else {
//                     totalRealisedPnl += parseFloat(item.realised);
//                     closedPositionRows.push(
//                         <tr key={item.tradingsymbol}>
//                             <td>
//                                 <span className="instrument_symbol">{item.tradingsymbol}</span>{" "}
//                                 <span className="d-none instrument_token">
//                                     {item.symboltoken}
//                                 </span>
//                             </td>
//                             <td>{item.producttype}</td>
//                             <td>{item.optiontype}</td>
//                             <td>{item.exchange}</td>
//                             <td>
//                                 0 Lots{" "}
//                                 <span className="text-body-tertiary">
//                                     (1 Lot = {item.lotsize})
//                                 </span>
//                             </td>
//                             <td>
//                                 <span className={color_diff_percent}>{item.ltp} ₹</span>{" "}
//                                 <span className="text-body-tertiary">
//                                     ({dailyDiffPercent}%)
//                                 </span>
//                             </td>
//                             <td>{item.totalbuyavgprice} ₹</td>
//                             <td>{item.totalsellavgprice} ₹</td>
//                             <td className={color_pnl}>{item.pnl} ₹</td>
//                         </tr>
//                     );
//                 }
//             });

//             setPositionData({
//                 openPositions: openPositionRows,
//                 closedPositions: closedPositionRows,
//                 totalRealisedPnl,
//                 totalUnrealisedPnl,
//             });
//         } catch (error) {
//             console.error("Error occurred while fetching position list:", error);
//         }
//     };

//     const handleCheckboxChange = (tradingsymbol, symboltoken, lotquantity) => {
//         const key = JSON.stringify({ tradingsymbol, symboltoken, lotquantity });
//         if (selectedPositions.has(key)) {
//             selectedPositions.delete(key);
//         } else {
//             selectedPositions.add(key);
//         }
//         setSelectedPositions(new Set(selectedPositions));
//     };

//     const handleToggleSelectAll = () => {
//         if (allSelected) {
//             setSelectedPositions(new Set());
//             setAllSelected(false);
//         } else {
//             console.log(positionData.openPositions)
//             const newSelected = new Set();
//             positionData.openPositions.forEach((item) => {
//                 newSelected.add(
//                     JSON.stringify({
//                         tradingsymbol: item.key,
//                         symboltoken: item.symboltoken,
//                         lotquantity: parseInt(item.netqty / item.lotsize),
//                     })
//                 );
//             });
//             setSelectedPositions(newSelected);
//             setAllSelected(true);
//         }
//         // getPositionList();
//     };

//     useEffect(() => {
//         getPositionList();
//     }, [allSelected]);
//     // const handleCheckboxChange = (tradingsymbol, symboltoken, lotquantity) => {
//     //   setSelectedPositions((prevSelected) => {
//     //     const newSelected = new Set(prevSelected);
//     //     const position = { tradingsymbol, symboltoken, lotquantity };

//     //     const positionString = JSON.stringify(position); // Convert to string for Set storage

//     //     if (newSelected.has(positionString)) {
//     //       newSelected.delete(positionString);
//     //     } else {
//     //       newSelected.add(positionString);
//     //     }

//     //     return newSelected;
//     //   });
//     // };

//     const exitPosition = async () => {
//         try {
//             const userId = localStorage.getItem("userId");
//             const order_data = Array.from(selectedPositions).map((positionString) => {
//                 const { tradingsymbol, symboltoken, lotquantity } =
//                     JSON.parse(positionString);
//                 const exit_lot = parseInt(
//                     document.getElementById(`${tradingsymbol}-lot-size`).value
//                 );
//                 // Retrieve selected value from the dropdown and parse it as an integer

//                 return {
//                     instrument: tradingsymbol,
//                     symboltoken,
//                     exit_lot,
//                 };
//             });

//             // console.log("Sending request body:", body); // Log the request body

//             const response = await fetch(
//                 `${config.apiDomain}/api/teacher/exit_position`,
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                         teacher_id: userId,
//                         order_data,
//                     }),
//                 }
//             );

//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             const data = await response.json();
//             console.log("Position exited successfully:", data);

//             // After successful exit, refresh the position list
//             getPositionList();
//         } catch (error) {
//             console.error("Error occurred while exiting position:", error);
//         }
//     };

//     const handleExitAllPending = async () => {
//         try {
//              const userId = localStorage.getItem("userId");
//             const response = await fetch(
//                 `https://ghanish.in/api/teacher/exit_all_student_pending`,
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                         teacher_id: userId,
//                     }),
//                 }
//             );

//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             const data = await response.json();
//             console.log("Exited all pending positions successfully:", data);

//             // After successful exit of all pending, refresh the position list
//             getPositionList();
//         } catch (error) {
//             console.error(
//                 "Error occurred while exiting all pending positions:",
//                 error
//             );
//         }
//     };

//     const handleRefresh = () => {
//         getPositionList();
//     };

//     const handleBack = () => {
//         // navigate(-1);
//     };

//     const handleLotSizeChange = (name, lotSize, event) => {
//         const selectedLotSize = parseInt(event.target.value, 10);
//         handleCheckboxChange(name, lotSize, selectedLotSize);
//     };

//     const handleTabClick = (tab) => {
//         setActiveTab(tab);
//     };
//     return (
//         <>
//             <Header />
//             <SubHeader />

//             <div className="container-xxl container-p-y">
//                 <nav aria-label="breadcrumb">
//                     <ol className="breadcrumb breadcrumb-style1 text-secondary">
//                         <li className="breadcrumb-item">
//                             <Link to="/teacher/dashboard" className="text-secondary">
//                                 <i className="ri-home-5-line ri-lg"></i>
//                             </Link>
//                         </li>
//                         <li
//                             className="breadcrumb-item active text-secondary"
//                             aria-current="page"
//                         >
//                             Position
//                         </li>
//                     </ol>
//                 </nav>
//                 <div className="row ">
//                     <div className="col-xl-9 d-flex flex-column">
//                         <div className="container-md-12 ">
//                             <div className="card mb-3" style={{ overflow: "hidden" }}>
//                                 <div className="col text-start mb-5 mt-5 ms-5">
//                                     <button
//                                         onClick={handleBack}
//                                         className="btn rounded-pill btn-outline-secondary btn-xs"
//                                     >
//                                         <i className="ri-arrow-left-circle-fill me-1 ri-md"></i>{" "}
//                                         Back
//                                     </button>
//                                 </div>
//                                 <div className=" text-center">
//                                     <div className="row">
//                                         <div className="col-md-4 mb-3">
//                                             <h4 className="text-danger">
//                                                 {positionData.totalUnrealisedPnl} ₹
//                                             </h4>
//                                             <p className="mb-0">Unrealised Profit & Loss</p>
//                                         </div>
//                                         <div className="col-md-4 mb-3">
//                                             <h4 className="text-danger">
//                                                 {positionData.totalRealisedPnl} ₹
//                                             </h4>
//                                             <p className="mb-0">Realised Profit & Loss</p>
//                                         </div>
//                                         <div className="col-md-4 mb-3">
//                                             <h4 className="text-danger">
//                                                 {positionData.totalRealisedPnl +
//                                                     positionData.totalUnrealisedPnl}{" "}
//                                                 ₹
//                                             </h4>
//                                             <p className="mb-0">Total Profit & Loss</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="card">
//                                 <div className="card-header d-flex align-items-center justify-content-between">
//                                     <h5 className="text-center flex-grow-1 m-0">Open Position</h5>
//                                     <div>
//                                         {loading ? (
//                                             <ProgressSpinner
//                                                 style={{
//                                                     width: "30px",
//                                                     height: "30px",
//                                                     marginRight: "10px",
//                                                 }}
//                                                 strokeWidth="5"
//                                                 fill="var(--surface-ground)"
//                                                 animationDuration=".5s"
//                                             />
//                                         ) : (
//                                             <div>
//                                                 <Tooltip target=".custom-target-icon" />
//                                                 <i
//                                                     className="custom-target-icon ri ri-refresh-line ri-lg p-text-secondary"
//                                                     data-pr-tooltip="Refresh"
//                                                     data-pr-position="top"
//                                                     style={{ cursor: "pointer" }}
//                                                     onClick={handleRefresh}
//                                                 ></i>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>

//                                 <div className="table-responsive text-start">

//                                     <div className="d-flex justify-content-end mb-3 fixed-bottom-end">
//                                         <button
//                                             type="button"
//                                             className="btn btn-xs rounded-pill btn-outline-dark waves-effect me-3"
//                                             onClick={handleToggleSelectAll}
//                                         >
//                                             {allSelected ? "Unselect All" : "Select All"}
//                                         </button>
//                                     </div>

//                                     <table className="table table-bordered">
//                                         <thead>
//                                             <tr>
//                                                 <th>Instrument</th>
//                                                 <th>Product Type</th>
//                                                 <th>Option Type</th>
//                                                 <th>Order Type</th>
//                                                 <th>Exchange</th>
//                                                 <th>Lots</th>
//                                                 <th>LTP</th>
//                                                 <th>Avg. Price</th>
//                                                 <th>Profit & Loss</th>
//                                                 {allSelected && <th>Action</th>}
//                                             </tr>
//                                         </thead>
//                                         <tbody>{positionData.openPositions}</tbody>
//                                         <tfoot>
//                                             <tr>
//                                                 {allSelected &&
//                                                     <td colSpan="10">
//                                                         <div className="d-flex justify-content-end">
//                                                             <button
//                                                                 type="button"
//                                                                 className="btn btn-danger btn-sm rounded"
//                                                                 onClick={exitPosition}
//                                                             >
//                                                                 <i className="ri-telegram-line ri-lg me-3"></i>
//                                                                 Exit {selectedPositions.size} Selected
//                                                             </button>
//                                                         </div>
//                                                     </td>
//                                                 }
//                                             </tr>
//                                         </tfoot>
//                                     </table>
//                                 </div>
//                             </div>
//                             <div className="card mt-3">
//                                 <div className="card-header d-flex align-items-center justify-content-between">
//                                     <h5 className="text-center flex-grow-1 m-0">
//                                         Closed Position
//                                     </h5>

//                                     {loading ? (
//                                         <ProgressSpinner
//                                             style={{
//                                                 width: "30px",
//                                                 height: "30px",
//                                                 marginRight: "10px",
//                                             }}
//                                             strokeWidth="5"
//                                             fill="var(--surface-ground)"
//                                             animationDuration=".5s"
//                                         />
//                                     ) : (
//                                         <div>
//                                             <Tooltip target=".custom-target-icon" />
//                                             <i
//                                                 className="custom-target-icon ri ri-refresh-line ri-lg p-text-secondary"
//                                                 data-pr-tooltip="Refresh"
//                                                 data-pr-position="top"
//                                                 style={{ cursor: "pointer" }}
//                                                 onClick={handleRefresh}
//                                             ></i>
//                                         </div>
//                                     )}
//                                 </div>

//                                 <div className="table-responsive text-start">
//                                     <table className="table table-bordered">
//                                         <thead>
//                                             <tr>
//                                                 <th>Instrument</th>
//                                                 <th>Product Type</th>
//                                                 <th>Option Type</th>
//                                                 <th>Exchange</th>
//                                                 <th>Lots</th>
//                                                 <th>LTP</th>
//                                                 <th>Sell Price</th>
//                                                 <th>Buy Price</th>
//                                                 <th>Profit & Loss</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>{positionData.closedPositions}</tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-xl-3 d-flex flex-column">
//                         {/* Right side content */}
//                         <div className="right-side-content">
//                             <div className="card">
//                                 <div className="d-flex justify-content-around mt-5">
//                                     <button
//                                         type="button"
//                                         className="btn btn-danger rounded btn-md w-100 ms-5 me-5"
//                                         onClick={handleExitAllPending}
//                                     // disabled={pendingCount === 0}
//                                     >
//                                         <i className="ri-telegram-line ri-lg me-3 "></i> Exit All
//                                         Pendings
//                                     </button>
//                                 </div>
//                                 <div className="card-body">
//                                     <div className="d-flex justify-content-around mb-5 w-100 ">
//                                         <IconField iconPosition="left">
//                                             <InputIcon className="ri ri-search-line"></InputIcon>
//                                             <InputText
//                                                 type="search"
//                                                 placeholder="Search"
//                                                 value={searchTerm}
//                                                 onChange={handleSearch}
//                                                 className="rounded custom-search-box"
//                                                 onClick={clearSearch}
//                                             />
//                                         </IconField>
//                                         {/* <button onClick={clearSearch} className="btn btn-xs rounded">Clear</button> */}
//                                     </div>

//                                     <div className="d-flex justify-content-between">
//                                         <button
//                                             type="button"
//                                             className={`btn btn-outline-primary btn-xs rounded-pill  ${activeTab === "all" ? "active" : ""
//                                                 }`}
//                                             onClick={() => handleTabClick("all")}
//                                         >
//                                             All ({totalCount})
//                                         </button>
//                                         <button
//                                             type="button"
//                                             className={`btn btn-outline-warning btn-xs rounded-pill ${activeTab === "pending" ? "active" : ""
//                                                 }`}
//                                             onClick={() => handleTabClick("pending")}
//                                         >
//                                             Pending ({pendingCount})
//                                         </button>

//                                         <div className="d-flex justify-content-end ">
//                                             <div className="mt-2">
//                                                 <i
//                                                     className="ri ri-refresh-line ri-lg me-3 p-text-secondary custom-target-icon"
//                                                     data-pr-tooltip="Refresh"
//                                                     data-pr-position="top"
//                                                     style={{ cursor: "pointer" }}
//                                                     onClick={getOrderPlacedStudentList}
//                                                 ></i>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <hr />

//                                     <div
//                                         className="virtual-scroller-container"
//                                         style={{
//                                             height: "500px",
//                                             overflowY: "auto",
//                                             overflowX: "hidden",
//                                         }}
//                                     >
//                                         <VirtualScroller
//                                             className=""
//                                             items={filteredeData}
//                                             itemSize={70} // Adjust item size as needed
//                                             itemTemplate={(item, index) => (
//                                                 <div key={index} className="border-bottom mb-3 pb-3">
//                                                     <div className="d-flex align-items-start mb-3">
//                                                         <p className="text-start mb-0 fw-bold text-black flex-grow-1">
//                                                             {item.name}
//                                                         </p>
//                                                         <button
//                                                             type="button"
//                                                             className="btn btn-warning btn-xs btn btn-outline-warning waves-effect ms-3"
//                                                             onClick={() =>
//                                                                 handleExitAllInstruments(item.user_id)
//                                                             }
//                                                         >
//                                                             <i className="ri-telegram-line ri-lg"></i> Exit
//                                                         </button>
//                                                     </div>

//                                                     {item.lots.map((lot, lotIndex) => (
//                                                         <div key={lotIndex} className="mb-3">
//                                                             <div className="d-flex align-items-center mb-1">
//                                                                 <span>{item.instruments[lotIndex]}</span>
//                                                             </div>
//                                                             <div className="d-flex justify-content-between align-items-center">
//                                                                 <div className="text-start text-primary1">
//                                                                     <strong className="text-black">Buy:</strong>{" "}
//                                                                     <span
//                                                                         className={
//                                                                             lot.size === 0
//                                                                                 ? "text-black"
//                                                                                 : "text-success"
//                                                                         }
//                                                                     >
//                                                                         {lot.size} ({lot.price} Rs.)
//                                                                     </span>{" "}
//                                                                 </div>
//                                                                 <div className="text-end text-primary1">
//                                                                     <strong className="text-black">Sell:</strong>{" "}
//                                                                     <span
//                                                                         className={
//                                                                             lot.sell === 0
//                                                                                 ? "text-black"
//                                                                                 : "text-danger"
//                                                                         }
//                                                                     >
//                                                                         {lot.sell} ({lot.sellPrice} Rs.)
//                                                                     </span>
//                                                                 </div>
//                                                                 <button
//                                                                     type="button"
//                                                                     className="btn btn-warning custom-btn-action1 btn-xs btn btn-outline-warning waves-effect"
//                                                                     onClick={() =>
//                                                                         handleExit(item.user_id, {
//                                                                             tradingsymbol: item.instruments[lotIndex],
//                                                                             symboltoken:
//                                                                                 item.lots[lotIndex].symboltoken,
//                                                                         })
//                                                                     }
//                                                                 >
//                                                                     <i className="ri-telegram-line ri-lg"></i>
//                                                                 </button>
//                                                             </div>
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             )}
//                                             style={{ height: "100%" }}
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* </div> */}
//             {/* <Footer/> */}
//         </>
//     );
// };

// export default Position;

// import React, { useState, useEffect, useRef } from "react";
// import Footer from "../component/Footer";
// import Header from "../component/Header";
// import config from "../../app3/config";
// import SubHeader from "../component/SubHeader";
// import { Button } from "primereact/button";
// import { Modal } from "react-bootstrap"; 
// import { Toast } from "primereact/toast";
// import { useNavigate, Link } from "react-router-dom";
// import { ProgressSpinner } from "primereact/progressspinner";
// import { IconField } from "primereact/iconfield";
// import { InputIcon } from "primereact/inputicon";
// import { InputText } from "primereact/inputtext";
// import { VirtualScroller } from "primereact/virtualscroller";
// import { Tooltip } from "primereact/tooltip";
// // const userId = localStorage.getItem("user_id");
// const userId = localStorage.getItem("userId");

// const Position = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const toast = useRef(null);
//   const [positionsSelected, setPositionsSelected] = useState(false);
//   const [globalFilter, setGlobalFilter] = useState("");
//   const [activeTab, setActiveTab] = useState("all");
//   // const [selectedPositions, setSelectedPositions] = useState([]);
//   const navigate = useNavigate();
//   const [backClicked, setBackClicked] = useState(false);
//   const [allUnselected, setAllUnselected] = useState(false);
//   const [data, setData] = useState([]);
//   // const [filterableData, setFilterableData] = useState([]);
//   const [filteredeData, setFilteredeData] = useState(data); // Separate state for filtered data
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     filterData(searchTerm);
//   }, [searchTerm]); // Trigger filterData whenever searchTerm changes

//   const filterData = (searchTerm) => {
//     const filtered = filteredeData.filter((item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredeData(filtered);
//   };

//   const handleSearch = (event) => {
//     const term = event.target.value;
//     setSearchTerm(term);
//   };

//   const clearSearch = () => {
//     setSearchTerm("");
//     setFilteredeData(data); // Reset filtered data to initialData
//   };

//   // const handleExitAllInstruments = async (student_id) => {
//   //   try {
//   //     setLoading(true);

//   //     const requestOptions = {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify({
//   //         student_id: student_id,
//   //       }),
//   //     };
//   //     console.log(student_id);
//   //     const response = await fetch(
//   //       "https://ghanish.in/api/teacher/exit_students_all_instrument",
//   //       requestOptions
//   //     );

//   //     if (!response.ok) {
//   //       throw new Error(`HTTP error! Status: ${response.status}`);
//   //     }

//   //     const responseData = await response.json();
//   //     console.log("Exit all instruments response:", responseData);

//   //     // Refresh student list after exiting
//   //     await getOrderPlacedStudentList();
//   //   } catch (error) {
//   //     console.error("Error exiting all student instruments:", error);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   // const handleExit = async (studentId, instrumentData) => {
//   //   try {
//   //     setLoading(true);

//   //     const requestOptions = {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify({
//   //         student_id: studentId,
//   //         instrument_data: instrumentData,
//   //       }),
//   //     };

//   //     const response = await fetch(
//   //       `${config.apiDomain}/api/teacher/exit_student_instrument`,
//   //       requestOptions
//   //     );

//   //     if (!response.ok) {
//   //       throw new Error(`HTTP error! Status: ${response.status}`);
//   //     }

//   //     const responseData = await response.json();
//   //     console.log("Exit student instrument response:", responseData);

//   //     // Refresh student list after exiting
//   //     await getOrderPlacedStudentList();
//   //   } catch (error) {
//   //     console.error("Error exiting student instrument:", error);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   // const getOrderPlacedStudentList = async () => {
//   //   try {
//   //     setLoading(true);

//   //     const requestOptions = {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify({ teacher_id: userId }),
//   //     };

//   //     const response = await fetch(
//   //       `${config.apiDomain}/api/teacher/get_order_placed_student_list`,
//   //       requestOptions
//   //     );

//   //     if (!response.ok) {
//   //       throw new Error(`HTTP error! Status: ${response.status}`);
//   //     }

//   //     const data = await response.json();

//   //     if (data && data.data && data.data.length > 0) {
//   //       setData(
//   //         data.data.map((student) => ({
//   //           name: student.name,
//   //           user_id: student.user_id,
//   //           instruments: student.orders.map((order) => order.symbol),
//   //           lots: student.orders.map((order) => ({
//   //             size: order.buy_lots,
//   //             price: order.buy_price,
//   //             status: order.sell_lots > 0 ? "completed" : "pending",
//   //             sell: order.sell_lots,
//   //             sellPrice: order.sell_price,
//   //             symboltoken: order.token,
//   //           })),
//   //         }))
//   //       );
//   //       setFilteredeData(
//   //         data.data.map((student) => ({
//   //           name: student.name,
//   //           user_id: student.user_id,
//   //           instruments: student.orders.map((order) => order.symbol),
//   //           lots: student.orders.map((order) => ({
//   //             size: order.buy_lots,
//   //             price: order.buy_price,
//   //             status: order.sell_lots > 0 ? "completed" : "pending",
//   //             sell: order.sell_lots,
//   //             sellPrice: order.sell_price,
//   //             symboltoken: order.token,
//   //           })),
//   //         }))
//   //       );
//   //     } else {
//   //       console.error("No data found in get_order_placed_student_list");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error fetching order placed student list:", error);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   // useEffect(() => {
//   //   getOrderPlacedStudentList();
//   // }, []);


//  const handleRefreshes = async () => {
//   setLoading(true);
//   try {
//     const requestOptions = {
//       method: "Post",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ teacher_id: userId }),
//     };

//     const response = await fetch(
//       `${config.apiDomain}/api/teacher/get_order_placed_student_list`,
//       requestOptions
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();

//     if (data && data.st === 1) {
//       setData(
//         data.data.map((student) => ({
//           name: student.name,
//           user_id: student.user_id,
//           instruments: student.orders.map((order) => order.symbol),
//           lots: student.orders.map((order) => ({
//             size: order.buy_lots,
//             price: order.buy_price,
//             status: order.sell_lots > 0 ? "completed" : "pending",
//             sell: order.sell_lots,
//             sellPrice: order.sell_price,
//             symboltoken: order.token,
//           })),
//         }))
//       );
//       setFilteredeData(
//         data.data.map((student) => ({
//           name: student.name,
//           user_id: student.user_id,
//           instruments: student.orders.map((order) => order.symbol),
//           lots: student.orders.map((order) => ({
//             size: order.buy_lots,
//             price: order.buy_price,
//             status: order.sell_lots > 0 ? "completed" : "pending",
//             sell: order.sell_lots,
//             sellPrice: order.sell_price,
//             symboltoken: order.token,
//           })),
//         }))
//       );
//       toast.current.show({
//         severity: "success",
//         summary: "Success",
//         detail: data.msg || "Data refreshed successfully",
//         life: 3000,
//       });
//     } else if (data.st === 2) {
//       toast.current.show({
//         severity: "warn",
//         summary: "Warning",
//         detail: data.msg || "Warning: Data may not be refreshed",
//         life: 3000,
//       });
//     } else if (data.st === 3 || data.st === 4) {
//       toast.current.show({
//         severity: "error",
//         summary: "Error",
//         detail: data.msg || "Failed to fetch data",
//         life: 3000,
//       });
//     } else {
//       console.error("No data found in get_order_placed_student_list");
//     }
//   } catch (error) {
//     console.error("Error fetching order placed student list:", error);
//     toast.current.show({
//       severity: "error",
//       summary: "Error",
//       detail: "Network error: Failed to fetch data",
//       life: 3000,
//     });
//   } finally {
//     setLoading(false);
//   }
// };



//   // const getOrderPlacedStudentList = async () => {
//   //   try {
//   //     setLoading(true);
  
//   //     const requestOptions = {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify({ teacher_id: userId }),
//   //     };
  
//   //     const response = await fetch(
//   //       `${config.apiDomain}/api/teacher/get_order_placed_student_list`,
//   //       requestOptions
//   //     );
  
//   //     if (!response.ok) {
//   //       throw new Error(`HTTP error! Status: ${response.status}`);
//   //     }
  
//   //     const data = await response.json();
  
//   //     if (data && data.data && data.data.length > 0) {
//   //       setData(
//   //         data.data.map((student) => ({
//   //           name: student.name,
//   //           user_id: student.user_id,
//   //           instruments: student.orders.map((order) => order.symbol),
//   //           lots: student.orders.map((order) => ({
//   //             size: order.buy_lots,
//   //             price: order.buy_price,
//   //             status: order.sell_lots > 0 ? "completed" : "pending",
//   //             sell: order.sell_lots,
//   //             sellPrice: order.sell_price,
//   //             symboltoken: order.token,
//   //           })),
//   //         }))
//   //       );
//   //       setFilteredeData(
//   //         data.data.map((student) => ({
//   //           name: student.name,
//   //           user_id: student.user_id,
//   //           instruments: student.orders.map((order) => order.symbol),
//   //           lots: student.orders.map((order) => ({
//   //             size: order.buy_lots,
//   //             price: order.buy_price,
//   //             status: order.sell_lots > 0 ? "completed" : "pending",
//   //             sell: order.sell_lots,
//   //             sellPrice: order.sell_price,
//   //             symboltoken: order.token,
//   //           })),
//   //         }))
//   //       );
//   //     } else {
//   //       console.error("No data found in get_order_placed_student_list");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error fetching order placed student list:", error);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
  
//   // const handleExitAllInstruments = async (student_id) => {
//   //   try {
//   //     setLoading(true);
  
//   //     const requestOptions = {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify({
//   //         student_id: student_id,
//   //       }),
//   //     };
  
//   //     const response = await fetch(
//   //       `${config.apiDomain}/api/teacher/exit_students_all_instrument`,
//   //       requestOptions
//   //     );
  
//   //     if (!response.ok) {
//   //       throw new Error(`HTTP error! Status: ${response.status}`);
//   //     }
  
//   //     const responseData = await response.json();
//   //     console.log("Exit all instruments response:", responseData);
  
//   //     // Refresh student list after exiting
//   //     await getOrderPlacedStudentList();
//   //   } catch (error) {
//   //     console.error("Error exiting all student instruments:", error);
//   //   } finally {
//   //     setLoading(false); // Ensure loading state is set to false
//   //   }
//   // };
  
  
//   const handleExit = async (studentId, instrumentData) => {
//     try {
//       setLoading(true);
  
//       const requestOptions = {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           student_id: studentId,
//           instrument_data: instrumentData,
//         }),
//       };
  
//       const response = await fetch(
//         `${config.apiDomain}/api/teacher/exit_student_instrument`,
//         requestOptions
//       );
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const responseData = await response.json();
//       console.log("Exit student instrument response:", responseData);
  
//       // Refresh student list after exiting
//       await getOrderPlacedStudentList();
//     } catch (error) {
//       console.error("Error exiting student instrument:", error);
//     } finally {
//       setLoading(false); // Ensure loading state is set to false
//     }
//   };
  
//   useEffect(() => {
//     getOrderPlacedStudentList();
//   }, []);
  
  


//   const filteredData = data.filter((item) => {
//     const nameMatch = item.name
//       .toLowerCase()
//       .includes(globalFilter.toLowerCase());
//     const instrumentsMatch = item.instruments.some((instrument) =>
//       instrument.toLowerCase().includes(globalFilter.toLowerCase())
//     );
//     return nameMatch || instrumentsMatch;
//   });

//   const [positionData, setPositionData] = useState({
//     openPositions: [],
//     closedPositions: [],
//     totalRealisedPnl: 0.0,
//     totalUnrealisedPnl: 0.0,
//   });
//   const [selectedPositions, setSelectedPositions] = useState(new Set());
//   const [allSelected, setAllSelected] = useState(false);
//   const [selectedCount, setSelectedCount] = useState(0); // New state variable
//   const [showActionColumn, setShowActionColumn] = useState(false);

//   const getPositionList = async () => {
//     try {
//       const userId = localStorage.getItem("userId");
//       const response = await fetch(
//         `${config.apiDomain}/api/teacher/get_position_list`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ teacher_id: userId }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();

//       let openPositionRows = [];
//       let closedPositionRows = [];
//       let totalRealisedPnl = 0.0;
//       let totalUnrealisedPnl = 0.0;

//       data.position_list.forEach((item) => {
//         const dailyDiffPercent = (
//           ((item.ltp - item.close) / item.close) *
//           100
//         ).toFixed(2);

//         const netqty = parseInt(item.netqty);
//         const lotsize = parseInt(item.lotsize);
//         const lotquantity = parseInt(netqty / lotsize);
//         const ordertype = netqty > 0 ? "BUY" : "SELL";
//         const color_ordertype = netqty > 0 ? "text-success" : "text-danger";
//         const avg_price =
//           netqty > 0 ? item.totalbuyavgprice : item.totalsellavgprice;
//         const color_pnl = item.pnl > 0 ? "text-success" : "text-danger";
//         const color_diff_percent =
//           dailyDiffPercent > 0 ? "text-success" : "text-danger";

//         if (netqty !== 0) {
//           totalUnrealisedPnl += parseFloat(item.unrealised);
//           const dropdownOptions = Array.from(
//             { length: lotquantity },
//             (_, index) => lotquantity - index
//           );
//           openPositionRows.push({
//             tradingsymbol: item.tradingsymbol,
//             symboltoken: item.symboltoken,
//             producttype: item.producttype,
//             optiontype: item.optiontype,
//             exchange: item.exchange,
//             lotsize: item.lotsize,
//             netqty: item.netqty,
//             ltp: item.ltp,
//             close: item.close,
//             totalbuyavgprice: item.totalbuyavgprice,
//             totalsellavgprice: item.totalsellavgprice,
//             pnl: item.pnl,
//             dailyDiffPercent,
//             ordertype,
//             color_ordertype,
//             color_pnl,
//             color_diff_percent,
//             dropdownOptions,
//             lotquantity,
//             avg_price,
//           });
//         } else {
//           totalRealisedPnl += parseFloat(item.realised);
//           closedPositionRows.push(
//             <tr key={item.tradingsymbol}>
//               <td>
//                 <span className="instrument_symbol">{item.tradingsymbol}</span>{" "}
//                 <span className="d-none instrument_token">
//                   {item.symboltoken}
//                 </span>
//               </td>
//               <td>{item.producttype}</td>
//               <td>{item.optiontype}</td>
//               <td>{item.exchange}</td>
//               <td>
//                 0 Lots{" "}
//                 <span className="text-body-tertiary">
//                   (1 Lot = {item.lotsize})
//                 </span>
//               </td>
//               <td>
//                 <span className={color_diff_percent}>{item.ltp} ₹</span>{" "}
//                 <span className="text-body-tertiary">
//                   ({dailyDiffPercent}%)
//                 </span>
//               </td>
//               <td>{item.totalbuyavgprice} ₹</td>
//               <td>{item.totalsellavgprice} ₹</td>
//               <td className={color_pnl}>{item.pnl} ₹</td>
//             </tr>
//           );
//         }
//       });

//       setPositionData({
//         openPositions: openPositionRows,
//         closedPositions: closedPositionRows,
//         totalRealisedPnl,
//         totalUnrealisedPnl,
//       });
//     } catch (error) {
//       console.error("Error occurred while fetching position list:", error);
//     }
//   };

//   const handleCheckboxChange = (tradingsymbol, symboltoken, lotquantity) => {
//     const key = JSON.stringify({ tradingsymbol, symboltoken, lotquantity });
//     setSelectedPositions((prevSelected) => {
//       const newSelected = new Set(prevSelected);
//       if (newSelected.has(key)) {
//         newSelected.delete(key);
//       } else {
//         newSelected.add(key);
//       }
//       setSelectedCount(newSelected.size);
//       return newSelected;
//     });
//   };
//   const handleToggleSelectAll = () => {
//     if (allSelected) {
//       // Clear all selected checkboxes
//       setSelectedPositions(new Set());
//       setSelectedCount(0);
//       setAllSelected(false);
//       setShowActionColumn(false); // Hide action column
//     } else {
//       // Select all checkboxes
//       const newSelected = new Set();
//       positionData.openPositions.forEach((item) => {
//         if (item.netqty !== 0) {
//           // Only add checkboxes
//           const key = JSON.stringify({
//             tradingsymbol: item.tradingsymbol,
//             symboltoken: item.symboltoken,
//             lotquantity: parseInt(item.netqty / item.lotsize),
//           });
//           newSelected.add(key);
//         }
//       });
//       setSelectedPositions(newSelected);
//       setSelectedCount(newSelected.size);
//       setAllSelected(true);
//       setShowActionColumn(true); // Show action column
//     }
//   };

//   const isChecked = (tradingsymbol, symboltoken, lotquantity) => {
//     const key = JSON.stringify({ tradingsymbol, symboltoken, lotquantity });
//     return selectedPositions.has(key);
//   };

//   useEffect(() => {
//     getPositionList();
//   }, []);

//   const exitPosition = async () => {
//     try {
//       const userId = localStorage.getItem("userId");
//       const order_data = Array.from(selectedPositions).map((positionString) => {
//         const { tradingsymbol, symboltoken, lotquantity } =
//           JSON.parse(positionString);
//         const exit_lot = parseInt(
//           document.getElementById(`${tradingsymbol}-lot-size`).value
//         );
//         return {
//           instrument: tradingsymbol,
//           symboltoken,
//           exit_lot,
//         };
//       });

//       const response = await fetch(
//         `${config.apiDomain}/api/teacher/exit_position`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             teacher_id: userId,
//             order_data,
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("Position exited successfully:", data);
//       console.log("Selected count:", selectedCount); // Display the count
//       if (data.st === 1) {
//         toast.current.show({
//           severity: "success",
//           summary: "Success",
//           detail: "Position exited successfully",
//           life: 3000,
//         });
//       }
//       getPositionList();
//     } catch (error) {
//       console.error("Error occurred while exiting position:", error);
//     }
//   };

//   const handleExitAllPending = async () => {
//     try {
//       const userId = localStorage.getItem("userId");
//       const response = await fetch(
//         `https://ghanish.in/api/teacher/exit_all_student_pending`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             teacher_id: userId,
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("Exited all pending positions successfully:", data);

//       // After successful exit of all pending, refresh the position list
//       getPositionList();
//       getOrderPlacedStudentList();
//     } catch (error) {
//       console.error(
//         "Error occurred while exiting all pending positions:",
//         error
//       );
//     }
//   };

 
//   const handleRefresh = async () => {
//     try {
//       const userId = localStorage.getItem("userId");
//       const response = await fetch(
//         `${config.apiDomain}/api/teacher/get_position_list`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ teacher_id: userId }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();

//       if (data.st === 1) {
//         toast.current.show({
//           severity: "success",
//           summary: "Success",
//           detail: data.msg || "Data fetched successfully",
//           life: 3000,
//         });
//       } else if (data.st === 2) {
//         toast.current.show({
//           severity: "warn",
//           summary: "Warning",
//           detail: data.msg || "Warning: Data may not be fully refreshed",
//           life: 3000,
//         });
//       } else if (data.st === 3 || data.st === 4) {
//         toast.current.show({
//           severity: "error",
//           summary: "Error",
//           detail: data.msg || "Failed to fetch data",
//           life: 3000,
//         });
//       } else {
//         console.error("Unexpected status code:", data.st);
//       }

//       let openPositionRows = [];
//       let closedPositionRows = [];
//       let totalRealisedPnl = 0.0;
//       let totalUnrealisedPnl = 0.0;

//       data.position_list.forEach((item) => {
//         const dailyDiffPercent = (
//           ((item.ltp - item.close) / item.close) *
//           100
//         ).toFixed(2);

//         const netqty = parseInt(item.netqty);
//         const lotsize = parseInt(item.lotsize);
//         const lotquantity = parseInt(netqty / lotsize);
//         const ordertype = netqty > 0 ? "BUY" : "SELL";
//         const color_ordertype = netqty > 0 ? "text-success" : "text-danger";
//         const avg_price =
//           netqty > 0 ? item.totalbuyavgprice : item.totalsellavgprice;
//         const color_pnl = item.pnl > 0 ? "text-success" : "text-danger";
//         const color_diff_percent =
//           dailyDiffPercent > 0 ? "text-success" : "text-danger";

//         if (netqty !== 0) {
//           totalUnrealisedPnl += parseFloat(item.unrealised);
//           const dropdownOptions = Array.from(
//             { length: lotquantity },
//             (_, index) => lotquantity - index
//           );
//           openPositionRows.push({
//             tradingsymbol: item.tradingsymbol,
//             symboltoken: item.symboltoken,
//             producttype: item.producttype,
//             optiontype: item.optiontype,
//             exchange: item.exchange,
//             lotsize: item.lotsize,
//             netqty: item.netqty,
//             ltp: item.ltp,
//             close: item.close,
//             totalbuyavgprice: item.totalbuyavgprice,
//             totalsellavgprice: item.totalsellavgprice,
//             pnl: item.pnl,
//             dailyDiffPercent,
//             ordertype,
//             color_ordertype,
//             color_pnl,
//             color_diff_percent,
//             dropdownOptions,
//             lotquantity,
//             avg_price,
//           });
//         } else {
//           totalRealisedPnl += parseFloat(item.realised);
//           closedPositionRows.push(
//             <tr key={item.tradingsymbol}>
//               <td>
//                 <span className="instrument_symbol">{item.tradingsymbol}</span>{" "}
//                 <span className="d-none instrument_token">
//                   {item.symboltoken}
//                 </span>
//               </td>
//               <td>{item.producttype}</td>
//               <td>{item.optiontype}</td>
//               <td>{item.exchange}</td>
//               <td>
//                 0 Lots{" "}
//                 <span className="text-body-tertiary">
//                   (1 Lot = {item.lotsize})
//                 </span>
//               </td>
//               <td>
//                 <span className={color_diff_percent}>{item.ltp} ₹</span>{" "}
//                 <span className="text-body-tertiary">
//                   ({dailyDiffPercent}%)
//                 </span>
//               </td>
//               <td>{item.totalbuyavgprice} ₹</td>
//               <td>{item.totalsellavgprice} ₹</td>
//               <td className={color_pnl}>{item.pnl} ₹</td>
//             </tr>
//           );
//         }
//       });

//       setPositionData({
//         openPositions: openPositionRows,
//         closedPositions: closedPositionRows,
//         totalRealisedPnl,
//         totalUnrealisedPnl,
//       });
//     } catch { 
//     }
//   };

//   // const handleRefreshes = () => {
//   //   getOrderPlacedStudentList();
//   // };
 
//   const handleBack = () => {
//     if (!backClicked) {
//       setBackClicked(true);
//       navigate(-1);
//     }
//   };

//   const handleLotSizeChange = (event, tradingsymbol, symboltoken) => {
//     const selectedLotSize = parseInt(event.target.value, 10);

//     setSelectedPositions((prevSelected) => {
//       const updatedSelected = new Set(prevSelected);

//       // Create the key for the item that needs its lot size updated
//       const key = JSON.stringify({ tradingsymbol, symboltoken });

//       // Check if the key exists in the selected positions
//       if (updatedSelected.has(key)) {
//         // Remove the existing item with the old lot size
//         updatedSelected.delete(key);

//         // Add the updated item with the new lot size
//         updatedSelected.add(
//           JSON.stringify({
//             tradingsymbol,
//             symboltoken,
//             lotquantity: selectedLotSize,
//           })
//         );
//       }

//       return updatedSelected;
//     });
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };
//   const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const isMarketOpen = () => {
//     const currentHour = currentTime.getHours();
//     const currentMinute = currentTime.getMinutes();

//     // Market open from 9:15 AM to 3:15 PM
//     const marketOpenHour = 9;
//     const marketOpenMinute = 15;
//     const marketCloseHour = 15;
//     const marketCloseMinute = 15;

//     if (
//       (currentHour > marketOpenHour || (currentHour === marketOpenHour && currentMinute >= marketOpenMinute)) &&
//       (currentHour < marketCloseHour || (currentHour === marketCloseHour && currentMinute <= marketCloseMinute))
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   };
//   const [showPopup, setShowPopup] = useState(false); // State for displaying the Popup component

 

//   useEffect(() => {
//     const checkTime = () => {
//       const now = new Date();
//       const hours = now.getHours();
//       const minutes = now.getMinutes();

//       // Check if it's 9:15 AM or 3:15 PM
//       if ((hours === 9 && minutes === 15) || (hours === 15 && minutes === 15)) {
//         setShowPopup(true);
//       }
//     };

//     const interval = setInterval(() => {
//       checkTime();
//     }, 60000); // Every minute

//     // Clear interval on component unmount
//     return () => clearInterval(interval);
//   }, []);

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };



//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   // Helper function to determine modal button variant
//   const getButtonVariant = () => {
//     const now = new Date();
//     const hours = now.getHours();

//     if (hours === 9) {
//       return "success"; // Green color for 9:15 AM
//     } else if (hours === 15) {
//       return "danger"; // Red color for 3:15 PM
//     }
//     return "secondary"; // Default color
//   };

//   return (
//     <>
//       <Header />
//       <SubHeader />
//       <Toast ref={toast} />
     
//       <Modal
//         show={showPopup}
//         onHide={handleClosePopup}
//         dialogClassName={getColorModalClass()}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{getModalTitle()}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>{getModalBody()}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant={getButtonVariant()} onClick={handleClosePopup}>
//             Ok
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       <div className="container-xxl container-p-y">
    
      
//         {isMarketOpen() ? (
//           <div className="text-center mb-3" style={{ border: '2px solid green', padding: '10px', color: 'green', backgroundColor: 'white', borderRadius: '5px' }}>
//             Market is Open
//           </div>
//         ) : (
//           <div className="text-center mb-3" style={{ border: '2px solid orange', padding: '10px', color: 'orange', backgroundColor: 'white', borderRadius: '5px' }}>
//             Market is Closed
//           </div>
//         )}
   
  

//         <nav aria-label="breadcrumb">
//           <ol className="breadcrumb breadcrumb-style1 text-secondary">
//             <li className="breadcrumb-item">
//               <Link to="/teacher/dashboard" className="text-secondary">
//                 <i className="ri-home-5-line ri-lg"></i>
//               </Link>
//             </li>
//             <li
//               className="breadcrumb-item active text-secondary"
//               aria-current="page"
//             >
//               Position
//             </li>
//           </ol>
//         </nav>
//         <div className="row ">
//           <div className="col-xl-9 d-flex flex-column">
//             <div className="container-md-12 ">
//               {/* <div className="d-flex align-items-center justify-content-between">
//                     <h4 className="fw-bold">Position</h4>
//                     <div className="d-flex">
//                         <Button
//                             label="Refresh"
//                             icon="pi pi-refresh"
//                             className="p-button-text p-button-sm"
//                             onClick={handleRefresh}
//                         />
//                         <Button
//                             label="Back"
//                             icon="pi pi-chevron-left"
//                             className="p-button-text p-button-sm"
//                             onClick={handleBack}
//                         />
//                     </div>
//                 </div> */}

//               <div className="card mb-3" style={{ overflow: "hidden" }}>
//                 <div className="col text-start mb-5 mt-5 ms-5">
//                   <button
//                     onClick={handleBack}
//                     className="btn rounded-pill btn-outline-secondary btn-xs"
//                   >
//                     <i className="ri-arrow-left-circle-fill me-1 ri-md"></i>{" "}
//                     Back
//                   </button>
//                 </div>
//                 <div className=" text-center">
//                   <div className="row">
//                     <div className="col-md-4 mb-3">
//                       <h4 className="text-danger">
//                         {positionData.totalUnrealisedPnl.toFixed(2)} ₹
//                       </h4>
//                       <p className="mb-0">Unrealised Profit & Loss</p>
//                     </div>
//                     <div className="col-md-4 mb-3">
//                       <h4 className="text-danger">
//                         {positionData.totalRealisedPnl.toFixed(2)} ₹
//                       </h4>
//                       <p className="mb-0">Realised Profit & Loss</p>
//                     </div>
//                     <div className="col-md-4 mb-3">
//                       {/* <h4 className="text-danger">
//                                                 {positionData.totalRealisedPnl +
//                                                     positionData.totalUnrealisedPnl}{" "}
//                                                 ₹
//                                             </h4> */}
//                       <h4 className="text-danger">
//                         {(
//                           positionData.totalRealisedPnl +
//                           positionData.totalUnrealisedPnl
//                         ).toFixed(2)}{" "}
//                         ₹
//                       </h4>

//                       <p className="mb-0">Total Profit & Loss</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="card">
//       <div className="card-header d-flex align-items-center justify-content-between">
//         <h5 className="text-center flex-grow-1 m-0">Open Position</h5>
//         <div>
//           {loading ? (
//             <i className=" custom-target-icon ri-loader-2-line ri-lg ms-3 p-text-secondary"></i>
//           ) : (
//             <div>
//               <Tooltip target=".custom-target-icon" />
//               <i
//                 className="custom-target-icon ri ri-refresh-line ri-lg mb-3 p-text-secondary"
//                 data-pr-tooltip="Refresh"
//                 data-pr-position="top"
//                 style={{ cursor: "pointer" }}
//                 onClick={handleRefresh}
//               ></i>
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="table-responsive text-start p-3">
//         <div className="d-flex justify-content-end mb-3">
//           <button
//             type="button"
//             className="btn btn-xs rounded-pill btn-outline-dark waves-effect me-3"
//             onClick={handleToggleSelectAll}
//           >
//             {allSelected ? "Unselect All" : "Select All"}
//           </button>
//         </div>
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>Instrument</th>
//               <th>Product Type</th>
//               <th>Option Type</th>
//               <th>Order Type</th>
//               <th>Exchange</th>
//               <th>Lots</th>
//               <th>LTP</th>
//               <th>Avg. Price</th>
//               <th>Profit & Loss</th>
//               {showActionColumn && <th>Action</th>}
//             </tr>
//           </thead>
//           <tbody>
//                       {positionData.openPositions.map((item, index) => (
//                         <tr key={index}>
//                           <td>
//                             <span className="instrument_symbol">
//                               {item.tradingsymbol}
//                             </span>{" "}
//                             <span className="d-none instrument_token">
//                               {item.symboltoken}
//                             </span>
//                           </td>
//                           <td>
//                             <span className="instrument_producttype">
//                               {item.producttype}
//                             </span>
//                           </td>
//                           <td>{item.optiontype}</td>
//                           <td className={item.color_ordertype}>
//                             {item.ordertype}
//                           </td>
//                           <td>
//                             <span className="instrument_exchange">
//                               {item.exchange}
//                             </span>
//                           </td>
//                           <td className={item.color_pnl}>
//                             {item.lotquantity} Lots{" "}
//                             <span className="text-body-tertiary lot_size">
//                               (1 Lot = {item.lotsize})
//                             </span>
//                           </td>
//                           <td>
//                             <span className={item.color_diff_percent}>
//                               {item.ltp} ₹
//                             </span>{" "}
//                             <span className="text-body-tertiary">
//                               ({item.dailyDiffPercent}%)
//                             </span>
//                           </td>
//                           <td>{item.avg_price} ₹</td>
//                           <td className={item.color_pnl}>{item.pnl} ₹</td>
//                           {showActionColumn && (
//                             <td>
//                               <div className="d-flex align-items-center">
//                                 <select
//                                   className=""
//                                   id={`${item.tradingsymbol}-lot-size`}
//                                   onChange={(event) =>
//                                     handleLotSizeChange(
//                                       event,
//                                       item.tradingsymbol,
//                                       item.symboltoken
//                                     )
//                                   }
//                                   disabled
//                                 >
//                                   {item.dropdownOptions.map(
//                                     (option, optionIndex) => (
//                                       <option key={optionIndex} value={option}>
//                                         {option}
//                                       </option>
//                                     )
//                                   )}
//                                 </select>
//                                 <input
//                                   type="checkbox"
//                                   checked={isChecked(
//                                     item.tradingsymbol,
//                                     item.symboltoken,
//                                     parseInt(item.netqty / item.lotsize)
//                                   )}
//                                   onChange={() =>
//                                     handleCheckboxChange(
//                                       item.tradingsymbol,
//                                       item.symboltoken,
//                                       parseInt(item.netqty / item.lotsize)
//                                     )
//                                   }
//                                   id={`${item.tradingsymbol}-checkbox`}
//                                 />
//                               </div>
//                             </td>
//                           )}
//                         </tr>
//                       ))}
//                     </tbody>
//                     <tfoot>
//                       {showActionColumn && (
//                         <tr>
//                           <td colSpan="10">
//                             <div className="d-flex justify-content-end">
//                               <button
//                                 type="button"
//                                 className="btn btn-danger btn-sm rounded"
//                                 onClick={exitPosition}
//                                 disabled={selectedCount == 0}
//                               >
//                                 <i className="ri-telegram-line ri-lg me-3"></i>
//                                 Exit {selectedCount} Selected
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       )}
//                     </tfoot>
//                   </table>
//                 </div>
//               </div>
//               <div className="card mt-3">
//                 <div className="card-header d-flex align-items-center justify-content-between">
//                   <h5 className="text-center flex-grow-1 m-0">
//                     Closed Position
//                   </h5>

//                   {loading ? (
//                     <i className=" custom-target-icon ri-loader-2-line ri-lg ms-3 p-text-secondary"></i>
//                   ) : (
//                     <div>
//                       <Tooltip target=".custom-target-icon" />
//                       <i
//                         className="custom-target-icon ri ri-refresh-line ri-lg p-text-secondary"
//                         data-pr-tooltip="Refresh"
//                         data-pr-position="top"
//                         style={{ cursor: "pointer" }}
//                         onClick={handleRefresh}
//                       ></i>
//                     </div>
//                   )}
//                 </div>

//                 <div className="table-responsive text-start">
//                   <table className="table table-bordered">
//                     <thead>
//                       <tr>
//                         <th>Instrument</th>
//                         <th>Product Type</th>
//                         <th>Option Type</th>
//                         <th>Exchange</th>
//                         <th>Lots</th>
//                         <th>LTP</th>
//                         <th>Buy Price</th>
//                         <th>Sell Price</th>
//                         <th>Profit & Loss</th>
//                       </tr>
//                     </thead>
//                     <tbody>{positionData.closedPositions}</tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-xl-3 d-flex flex-column">
//             {/* Right side content */}
//             <div className="right-side-content">
//               <div className="card">
//                 <div className="d-flex justify-content-around mt-5">
//                   <button
//                     type="button"
//                     className="btn btn-danger rounded btn-md w-100 ms-5 me-5"
//                     onClick={handleExitAllPending}
//                      disabled={filteredeData.length === 0} 
                   
//                   >
//                     <i className="ri-telegram-line ri-lg me-3 "></i> Exit All
//                     Pendings
//                   </button>
//                 </div>
//                 <div className="card-body">
//                   <div className="d-flex justify-content-between mb-5 me-3">
//                     <IconField iconPosition="left">
//                       <InputIcon className="ri ri-search-line"></InputIcon>
//                       <InputText
//                         type="search"
//                         placeholder="Search"
//                         value={searchTerm}
//                         onChange={handleSearch}
//                         className="rounded custom-search-box"
//                         // onClick={clearSearch}
//                       />
//                     </IconField>
//                     {/* <div className="mt-3 ms-3">
//                 <i
//                     className="ri ri-refresh-line ri-lg me-3 p-text-secondary custom-target-icon"
//                     data-pr-tooltip="Refresh"
//                     data-pr-position="top"
//                     style={{ cursor: 'pointer' }}
//                     onClick={handleRefreshes}
//                 ></i>
//             </div> */}
//                     {loading ? (
//                       <i className=" custom-target-icon ri-loader-2-line ri-lg mt-3 ms-3 p-text-secondary"></i>
//                     ) : (
//                       <div>
//                         <Tooltip target=".custom-target-icon" />
//                         <div className="mt-3 ms-3">
//                           <i
//                             className="custom-target-icon ri ri-refresh-line ri-lg p-text-secondary "
//                             data-pr-tooltip="Refresh"
//                             data-pr-position="top"
//                             style={{ cursor: "pointer" }}
//                             onClick={handleRefreshes}
//                           ></i>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   <hr />

//                   <div
//                     className="virtual-scroller-container"
//                     style={{
//                       height: "500px",
//                       overflowY: "auto",
//                       overflowX: "hidden",
//                     }}
//                   >
//                     <VirtualScroller
//                       className=""
//                       items={filteredeData}
//                       itemSize={70} // Adjust item size as needed
//                       itemTemplate={(item, index) => (
//                         <div key={index} className="border-bottom mb-3 pb-3">
//                           <div className="d-flex align-items-start mb-3">
//                             <p className="text-start mb-0 fw-bold text-black flex-grow-1">
//                             {capitalizeFirstLetter(item.name)}
//                             </p>
//                             <button
//                               type="button"
//                               className="btn btn-danger btn-xs btn btn-outline-danger waves-effect ms-3"
//                               onClick={() =>
//                                 handleExitAllInstruments(item.user_id)
//                               }
//                             >
//                               <i className="ri-telegram-line ri-lg"></i> Exit
//                             </button>
//                           </div>

//                           {item.lots.map((lot, lotIndex) => (
//                             <div key={lotIndex} className="mb-3">
//                               <div className="d-flex align-items-center mb-1">
//                                 <span>{item.instruments[lotIndex]}</span>
//                               </div>
//                               <div className="d-flex justify-content-between align-items-center">
//                                 <div className="text-start text-primary1">
//                                   <strong className="text-black">Buy:</strong>{" "}
//                                   <span
//                                     className={
//                                       lot.size === 0
//                                         ? "text-black"
//                                         : "text-success"
//                                     }
//                                   >
//                                     {lot.size} ({lot.price} Rs.)
//                                   </span>{" "}
//                                 </div>
//                                 <div className="text-end text-primary1">
//                                   <strong className="text-black">Sell:</strong>{" "}
//                                   <span
//                                     className={
//                                       lot.sell === 0
//                                         ? "text-black"
//                                         : "text-danger"
//                                     }
//                                   >
//                                     {lot.sell} ({lot.sellPrice} Rs.)
//                                   </span>
//                                 </div>
//                                 <button
//                                   type="button"
//                                   className="btn btn-danger custom-btn-action1 btn-xs btn btn-outline-danger waves-effect"
//                                   onClick={() =>
//                                     handleExit(item.user_id, {
//                                       tradingsymbol: item.instruments[lotIndex],
//                                       symboltoken:
//                                         item.lots[lotIndex].symboltoken,
//                                     })
//                                   }
//                                 >
//                                   <i className="ri-telegram-line ri-lg"></i>
//                                 </button>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                       style={{ height: "100%" }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* </div> */}
//       <Footer/>
//     </>
//   );
// };

// export default Position;


// const getColorModalClass = () => {
//   const now = new Date();
//   const hours = now.getHours();

//   if (hours === 9 || hours === 15) {
//     return hours === 9 ? "modal-green" : "modal-red"; // Apply custom modal background colors
//   }
//   return "";
// };

// const getModalTitle = () => {
//   const now = new Date();
//   const hours = now.getHours();

//   if (hours === 9) {
//     return "Market is Open!";
//   } else if (hours === 15) {
//     return "Market is Closed!";
//   }
//   return "";
// };

// const getModalBody = () => {
//   const now = new Date();
//   const hours = now.getHours();

//   if (hours === 9) {
//     return "Market is currently open. Take necessary actions.";
//   } else if (hours === 15) {
//     return "Market is currently closed. Come back tomorrow.";
//   }
//   return "";
// };


import React, { useState, useEffect, useRef } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import config from "../../app3/config";
import SubHeader from "../component/SubHeader";
import { Button } from "primereact/button";
import { Modal } from "react-bootstrap"; 
import { Toast } from "primereact/toast";
import { useNavigate, Link } from "react-router-dom";
import { ProgressSpinner } from "primereact/progressspinner";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { VirtualScroller } from "primereact/virtualscroller";
import { Tooltip } from "primereact/tooltip";
// const userId = localStorage.getItem("user_id");
const userId = localStorage.getItem("userId");

const Position = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toast = useRef(null);
  const [positionsSelected, setPositionsSelected] = useState(false);
  const [globalFilter, setGlobalFilter] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  // const [selectedPositions, setSelectedPositions] = useState([]);
  const navigate = useNavigate();
  const [backClicked, setBackClicked] = useState(false);
  const [allUnselected, setAllUnselected] = useState(false);
  const [data, setData] = useState([]);
  // const [filterableData, setFilterableData] = useState([]);
  const [filteredeData, setFilteredeData] = useState(data); // Separate state for filtered data
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    filterData(searchTerm);
  }, [searchTerm]); // Trigger filterData whenever searchTerm changes

  const filterData = (searchTerm) => {
    const filtered = filteredeData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredeData(filtered);
  };

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setFilteredeData(data); // Reset filtered data to initialData
  };

  // const handleExitAllInstruments = async (student_id) => {
  //   try {
  //     setLoading(true);

  //     const requestOptions = {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         student_id: student_id,
  //       }),
  //     };
  //     console.log(student_id);
  //     const response = await fetch(
  //       "https://ghanish.in/api/teacher/exit_students_all_instrument",
  //       requestOptions
  //     );

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     const responseData = await response.json();
  //     console.log("Exit all instruments response:", responseData);

  //     // Refresh student list after exiting
  //     await getOrderPlacedStudentList();
  //   } catch (error) {
  //     console.error("Error exiting all student instruments:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleExit = async (studentId, instrumentData) => {
  //   try {
  //     setLoading(true);

  //     const requestOptions = {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         student_id: studentId,
  //         instrument_data: instrumentData,
  //       }),
  //     };

  //     const response = await fetch(
  //       `${config.apiDomain}/api/teacher/exit_student_instrument`,
  //       requestOptions
  //     );

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     const responseData = await response.json();
  //     console.log("Exit student instrument response:", responseData);

  //     // Refresh student list after exiting
  //     await getOrderPlacedStudentList();
  //   } catch (error) {
  //     console.error("Error exiting student instrument:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const getOrderPlacedStudentList = async () => {
  //   try {
  //     setLoading(true);

  //     const requestOptions = {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ teacher_id: userId }),
  //     };

  //     const response = await fetch(
  //       `${config.apiDomain}/api/teacher/get_order_placed_student_list`,
  //       requestOptions
  //     );

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     const data = await response.json();

  //     if (data && data.data && data.data.length > 0) {
  //       setData(
  //         data.data.map((student) => ({
  //           name: student.name,
  //           user_id: student.user_id,
  //           instruments: student.orders.map((order) => order.symbol),
  //           lots: student.orders.map((order) => ({
  //             size: order.buy_lots,
  //             price: order.buy_price,
  //             status: order.sell_lots > 0 ? "completed" : "pending",
  //             sell: order.sell_lots,
  //             sellPrice: order.sell_price,
  //             symboltoken: order.token,
  //           })),
  //         }))
  //       );
  //       setFilteredeData(
  //         data.data.map((student) => ({
  //           name: student.name,
  //           user_id: student.user_id,
  //           instruments: student.orders.map((order) => order.symbol),
  //           lots: student.orders.map((order) => ({
  //             size: order.buy_lots,
  //             price: order.buy_price,
  //             status: order.sell_lots > 0 ? "completed" : "pending",
  //             sell: order.sell_lots,
  //             sellPrice: order.sell_price,
  //             symboltoken: order.token,
  //           })),
  //         }))
  //       );
  //     } else {
  //       console.error("No data found in get_order_placed_student_list");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching order placed student list:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getOrderPlacedStudentList();
  // }, []);


 const handleRefreshes = async () => {
  setLoading(true);
  try {
    const requestOptions = {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ teacher_id: userId }),
    };

    const response = await fetch(
      `${config.apiDomain}/api/teacher/get_order_placed_student_list`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data && data.st === 1) {
      setData(
        data.data.map((student) => ({
          name: student.name,
          user_id: student.user_id,
          instruments: student.orders.map((order) => order.symbol),
          lots: student.orders.map((order) => ({
            size: order.buy_lots,
            price: order.buy_price,
            status: order.sell_lots > 0 ? "completed" : "pending",
            sell: order.sell_lots,
            sellPrice: order.sell_price,
            symboltoken: order.token,
          })),
        }))
      );
      setFilteredeData(
        data.data.map((student) => ({
          name: student.name,
          user_id: student.user_id,
          instruments: student.orders.map((order) => order.symbol),
          lots: student.orders.map((order) => ({
            size: order.buy_lots,
            price: order.buy_price,
            status: order.sell_lots > 0 ? "completed" : "pending",
            sell: order.sell_lots,
            sellPrice: order.sell_price,
            symboltoken: order.token,
          })),
        }))
      );
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: data.msg || "Data refreshed successfully",
        life: 3000,
      });
    } else if (data.st === 2) {
      toast.current.show({
        severity: "warn",
        summary: "Warning",
        detail: data.msg || "Warning: Data may not be refreshed",
        life: 3000,
      });
    } else if (data.st === 3 || data.st === 4) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: data.msg || "Failed to fetch data",
        life: 3000,
      });
    } else {
      console.error("No data found in get_order_placed_student_list");
    }
  } catch (error) {
    console.error("Error fetching order placed student list:", error);
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "Network error: Failed to fetch data",
      life: 3000,
    });
  } finally {
    setLoading(false);
  }
};



  const getOrderPlacedStudentList = async () => {
    try {
      setLoading(true);
  
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ teacher_id: userId }),
      };
  
      const response = await fetch(
        `${config.apiDomain}/api/teacher/get_order_placed_student_list`,
        requestOptions
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      if (data && data.data && data.data.length > 0) {
        setData(
          data.data.map((student) => ({
            name: student.name,
            user_id: student.user_id,
            instruments: student.orders.map((order) => order.symbol),
            lots: student.orders.map((order) => ({
              size: order.buy_lots,
              price: order.buy_price,
              status: order.sell_lots > 0 ? "completed" : "pending",
              sell: order.sell_lots,
              sellPrice: order.sell_price,
              symboltoken: order.token,
            })),
          }))
        );
        setFilteredeData(
          data.data.map((student) => ({
            name: student.name,
            user_id: student.user_id,
            instruments: student.orders.map((order) => order.symbol),
            lots: student.orders.map((order) => ({
              size: order.buy_lots,
              price: order.buy_price,
              status: order.sell_lots > 0 ? "completed" : "pending",
              sell: order.sell_lots,
              sellPrice: order.sell_price,
              symboltoken: order.token,
            })),
          }))
        );
      } else {
        console.error("No data found in get_order_placed_student_list");
      }
    } catch (error) {
      console.error("Error fetching order placed student list:", error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleExitAllInstruments = async (student_id) => {
    try {
      setLoading(true);
  
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          student_id: student_id,
        }),
      };
  
      const response = await fetch(
        `${config.apiDomain}/api/teacher/exit_students_all_instrument`,
        requestOptions
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log("Exit all instruments response:", responseData);
  
      // Refresh student list after exiting
      await getOrderPlacedStudentList();
    } catch (error) {
      console.error("Error exiting all student instruments:", error);
    } finally {
      setLoading(false); // Ensure loading state is set to false
    }
  };

  // const getOrderPlacedStudentList = async () => {
  //   try {
  //     setLoading(true);
  
  //     const requestOptions = {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ teacher_id: userId }),
  //     };
  
  //     const response = await fetch(
  //       `${config.apiDomain}/api/teacher/get_order_placed_student_list`,
  //       requestOptions
  //     );
  
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  
  //     const data = await response.json();
  
  //     if (data && data.data && data.data.length > 0) {
  //       setData(
  //         data.data.map((student) => ({
  //           name: student.name,
  //           user_id: student.user_id,
  //           instruments: student.orders.map((order) => order.symbol),
  //           lots: student.orders.map((order) => ({
  //             size: order.buy_lots,
  //             price: order.buy_price,
  //             status: order.sell_lots > 0 ? "completed" : "pending",
  //             sell: order.sell_lots,
  //             sellPrice: order.sell_price,
  //             symboltoken: order.token,
  //           })),
  //         }))
  //       );
  //       setFilteredeData(
  //         data.data.map((student) => ({
  //           name: student.name,
  //           user_id: student.user_id,
  //           instruments: student.orders.map((order) => order.symbol),
  //           lots: student.orders.map((order) => ({
  //             size: order.buy_lots,
  //             price: order.buy_price,
  //             status: order.sell_lots > 0 ? "completed" : "pending",
  //             sell: order.sell_lots,
  //             sellPrice: order.sell_price,
  //             symboltoken: order.token,
  //           })),
  //         }))
  //       );
  //     } else {
  //       console.error("No data found in get_order_placed_student_list");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching order placed student list:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  
  // const handleExitAllInstruments = async (student_id) => {
  //   try {
  //     setLoading(true);
  
  //     const requestOptions = {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         student_id: student_id,
  //       }),
  //     };
  
  //     const response = await fetch(
  //       `${config.apiDomain}/api/teacher/exit_students_all_instrument`,
  //       requestOptions
  //     );
  
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  
  //     const responseData = await response.json();
  //     console.log("Exit all instruments response:", responseData);
  
  //     // Check if `st = 1` in the response
  //     if (responseData.st === 1) {
  //       console.log("Status is 1");
  
  //       // Update the local state to reflect changes
  //       await getOrderPlacedStudentList(); // Ensure this function updates state correctly
  //     } else {
  //       console.log("Status is not 1");
  //     }
  //   } catch (error) {
  //     console.error("Error exiting all student instruments:", error);
  //     setError(error.message);
  //   } finally {
  //     setLoading(false); // Ensure loading state is set to false
  //   }
  // };
  
  
  const handleExit = async (studentId, instrumentData) => {
    try {
      setLoading(true);
  
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          student_id: studentId,
          instrument_data: instrumentData,
        }),
      };
  
      const response = await fetch(
        `${config.apiDomain}/api/teacher/exit_student_instrument`,
        requestOptions
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log("Exit student instrument response:", responseData);
  
      // Refresh student list after exiting
      await getOrderPlacedStudentList();
    } catch (error) {
      console.error("Error exiting student instrument:", error);
    } finally {
      setLoading(false); // Ensure loading state is set to false
    }
  };
  
  useEffect(() => {
    getOrderPlacedStudentList();
  }, []);
  
  


  const filteredData = data.filter((item) => {
    const nameMatch = item.name
      .toLowerCase()
      .includes(globalFilter.toLowerCase());
    const instrumentsMatch = item.instruments.some((instrument) =>
      instrument.toLowerCase().includes(globalFilter.toLowerCase())
    );
    return nameMatch || instrumentsMatch;
  });

  const [positionData, setPositionData] = useState({
    openPositions: [],
    closedPositions: [],
    totalRealisedPnl: 0.0,
    totalUnrealisedPnl: 0.0,
  });
  const [selectedPositions, setSelectedPositions] = useState(new Set());
  const [allSelected, setAllSelected] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0); // New state variable
  const [showActionColumn, setShowActionColumn] = useState(false);

  const getPositionList = async () => {
    setLoading(true);
    try {
      const userId = localStorage.getItem("userId");
      const response = await fetch(
        `${config.apiDomain}/api/teacher/get_position_list`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ teacher_id: userId }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      let openPositionRows = [];
      let closedPositionRows = [];
      let totalRealisedPnl = 0.0;
      let totalUnrealisedPnl = 0.0;

      data.position_list.forEach((item) => {
        const dailyDiffPercent = (
          ((item.ltp - item.close) / item.close) *
          100
        ).toFixed(2);

        const netqty = parseInt(item.netqty);
        const lotsize = parseInt(item.lotsize);
        const lotquantity = parseInt(netqty / lotsize);
        const ordertype = netqty > 0 ? "BUY" : "SELL";
        const color_ordertype = netqty > 0 ? "text-success" : "text-danger";
        const avg_price =
          netqty > 0 ? item.totalbuyavgprice : item.totalsellavgprice;
        const color_pnl = item.pnl > 0 ? "text-success" : "text-danger";
        const color_diff_percent =
          dailyDiffPercent > 0 ? "text-success" : "text-danger";

        if (netqty !== 0) {
          totalUnrealisedPnl += parseFloat(item.unrealised);
          const dropdownOptions = Array.from(
            { length: lotquantity },
            (_, index) => lotquantity - index
          );
          openPositionRows.push({
            tradingsymbol: item.tradingsymbol,
            symboltoken: item.symboltoken,
            producttype: item.producttype,
            optiontype: item.optiontype,
            exchange: item.exchange,
            lotsize: item.lotsize,
            netqty: item.netqty,
            ltp: item.ltp,
            close: item.close,
            totalbuyavgprice: item.totalbuyavgprice,
            totalsellavgprice: item.totalsellavgprice,
            pnl: item.pnl,
            dailyDiffPercent,
            ordertype,
            color_ordertype,
            color_pnl,
            color_diff_percent,
            dropdownOptions,
            lotquantity,
            avg_price,
          });
        } else {
          totalRealisedPnl += parseFloat(item.realised);
          closedPositionRows.push(
            <tr key={item.tradingsymbol}>
              <td>
                <span className="instrument_symbol">{item.tradingsymbol}</span>{" "}
                <span className="d-none instrument_token">
                  {item.symboltoken}
                </span>
              </td>
              <td>{item.producttype}</td>
              <td>{item.optiontype}</td>
              <td>{item.exchange}</td>
              <td>
                0 Lots{" "}
                <span className="text-body-tertiary">
                  (1 Lot = {item.lotsize})
                </span>
              </td>
              <td>
                <span className={color_diff_percent}>{item.ltp} ₹</span>{" "}
                <span className="text-body-tertiary">
                  ({dailyDiffPercent}%)
                </span>
              </td>
              <td>{item.totalbuyavgprice} ₹</td>
              <td>{item.totalsellavgprice} ₹</td>
              <td className={color_pnl}>{item.pnl} ₹</td>
            </tr>
          );
        }
      });

      setPositionData({
        openPositions: openPositionRows,
        closedPositions: closedPositionRows,
        totalRealisedPnl,
        totalUnrealisedPnl,
      });
    } catch (error) {
      console.error("Error occurred while fetching position list:", error);
    }
    finally {
      setLoading(false); // Ensure loading state is set to false
    }
  };

  const handleCheckboxChange = (tradingsymbol, symboltoken, lotquantity) => {
    const key = JSON.stringify({ tradingsymbol, symboltoken, lotquantity });
    setSelectedPositions((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(key)) {
        newSelected.delete(key);
      } else {
        newSelected.add(key);
      }
      setSelectedCount(newSelected.size);
      return newSelected;
    });
  };
  const handleToggleSelectAll = () => {
    if (allSelected) {
      // Clear all selected checkboxes
      setSelectedPositions(new Set());
      setSelectedCount(0);
      setAllSelected(false);
      setShowActionColumn(false); // Hide action column
    } else {
      // Select all checkboxes
      const newSelected = new Set();
      positionData.openPositions.forEach((item) => {
        if (item.netqty !== 0) {
          // Only add checkboxes
          const key = JSON.stringify({
            tradingsymbol: item.tradingsymbol,
            symboltoken: item.symboltoken,
            lotquantity: parseInt(item.netqty / item.lotsize),
          });
          newSelected.add(key);
        }
      });
      setSelectedPositions(newSelected);
      setSelectedCount(newSelected.size);
      setAllSelected(true);
      setShowActionColumn(true); // Show action column
    }
  };

  const isChecked = (tradingsymbol, symboltoken, lotquantity) => {
    const key = JSON.stringify({ tradingsymbol, symboltoken, lotquantity });
    return selectedPositions.has(key);
  };

  useEffect(() => {
    getPositionList();
  }, []);

  const exitPosition = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const order_data = Array.from(selectedPositions).map((positionString) => {
        const { tradingsymbol, symboltoken, lotquantity } =
          JSON.parse(positionString);
        const exit_lot = parseInt(
          document.getElementById(`${tradingsymbol}-lot-size`).value
        );
        return {
          instrument: tradingsymbol,
          symboltoken,
          exit_lot,
        };
      });

      const response = await fetch(
        `${config.apiDomain}/api/teacher/exit_position`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            teacher_id: userId,
            order_data,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Position exited successfully:", data);
      console.log("Selected count:", selectedCount); // Display the count
      if (data.st === 1) {
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Position exited successfully",
          life: 3000,
        });
      }
      getPositionList();
    } catch (error) {
      console.error("Error occurred while exiting position:", error);
    }
  };

  const handleExitAllPending = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await fetch(
        `https://ghanish.in/api/teacher/exit_all_student_pending`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            teacher_id: userId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Exited all pending positions successfully:", data);

      // After successful exit of all pending, refresh the position list
      getPositionList();
      getOrderPlacedStudentList();
    } catch (error) {
      console.error(
        "Error occurred while exiting all pending positions:",
        error
      );
    }
  };

 
  const handleRefresh = async () => {
    setLoading(true);
    try {
      const userId = localStorage.getItem("userId");
      const response = await fetch(
        `${config.apiDomain}/api/teacher/get_position_list`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ teacher_id: userId }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.st === 1) {
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: data.msg || "Data fetched successfully",
          life: 3000,
        });
      } else if (data.st === 2) {
        toast.current.show({
          severity: "warn",
          summary: "Warning",
          detail: data.msg || "Warning: Data may not be fully refreshed",
          life: 3000,
        });
      } else if (data.st === 3 || data.st === 4) {
        toast.current.show({
          severity: "error",
          summary: "Error",
          detail: data.msg || "Failed to fetch data",
          life: 3000,
        });
      } else {
        console.error("Unexpected status code:", data.st);
      }

      let openPositionRows = [];
      let closedPositionRows = [];
      let totalRealisedPnl = 0.0;
      let totalUnrealisedPnl = 0.0;

      data.position_list.forEach((item) => {
        const dailyDiffPercent = (
          ((item.ltp - item.close) / item.close) *
          100
        ).toFixed(2);

        const netqty = parseInt(item.netqty);
        const lotsize = parseInt(item.lotsize);
        const lotquantity = parseInt(netqty / lotsize);
        const ordertype = netqty > 0 ? "BUY" : "SELL";
        const color_ordertype = netqty > 0 ? "text-success" : "text-danger";
        const avg_price =
          netqty > 0 ? item.totalbuyavgprice : item.totalsellavgprice;
        const color_pnl = item.pnl > 0 ? "text-success" : "text-danger";
        const color_diff_percent =
          dailyDiffPercent > 0 ? "text-success" : "text-danger";

        if (netqty !== 0) {
          totalUnrealisedPnl += parseFloat(item.unrealised);
          const dropdownOptions = Array.from(
            { length: lotquantity },
            (_, index) => lotquantity - index
          );
          openPositionRows.push({
            tradingsymbol: item.tradingsymbol,
            symboltoken: item.symboltoken,
            producttype: item.producttype,
            optiontype: item.optiontype,
            exchange: item.exchange,
            lotsize: item.lotsize,
            netqty: item.netqty,
            ltp: item.ltp,
            close: item.close,
            totalbuyavgprice: item.totalbuyavgprice,
            totalsellavgprice: item.totalsellavgprice,
            pnl: item.pnl,
            dailyDiffPercent,
            ordertype,
            color_ordertype,
            color_pnl,
            color_diff_percent,
            dropdownOptions,
            lotquantity,
            avg_price,
          });
        } else {
          totalRealisedPnl += parseFloat(item.realised);
          closedPositionRows.push(
            <tr key={item.tradingsymbol}>
              <td>
                <span className="instrument_symbol">{item.tradingsymbol}</span>{" "}
                <span className="d-none instrument_token">
                  {item.symboltoken}
                </span>
              </td>
              <td>{item.producttype}</td>
              <td>{item.optiontype}</td>
              <td>{item.exchange}</td>
              <td>
                0 Lots{" "}
                <span className="text-body-tertiary">
                  (1 Lot = {item.lotsize})
                </span>
              </td>
              <td>
                <span className={color_diff_percent}>{item.ltp} ₹</span>{" "}
                <span className="text-body-tertiary">
                  ({dailyDiffPercent}%)
                </span>
              </td>
              <td>{item.totalbuyavgprice} ₹</td>
              <td>{item.totalsellavgprice} ₹</td>
              <td className={color_pnl}>{item.pnl} ₹</td>
            </tr>
          );
        }
      });

      setPositionData({
        openPositions: openPositionRows,
        closedPositions: closedPositionRows,
        totalRealisedPnl,
        totalUnrealisedPnl,
      });
    } catch { 
    }
  };

  // const handleRefreshes = () => {
  //   getOrderPlacedStudentList();
  // };
 
  const handleBack = () => {
    if (!backClicked) {
      setBackClicked(true);
      navigate(-1);
    }
  };

  const handleLotSizeChange = (event, tradingsymbol, symboltoken) => {
    const selectedLotSize = parseInt(event.target.value, 10);

    setSelectedPositions((prevSelected) => {
      const updatedSelected = new Set(prevSelected);

      // Create the key for the item that needs its lot size updated
      const key = JSON.stringify({ tradingsymbol, symboltoken });

      // Check if the key exists in the selected positions
      if (updatedSelected.has(key)) {
        // Remove the existing item with the old lot size
        updatedSelected.delete(key);

        // Add the updated item with the new lot size
        updatedSelected.add(
          JSON.stringify({
            tradingsymbol,
            symboltoken,
            lotquantity: selectedLotSize,
          })
        );
      }

      return updatedSelected;
    });
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
    <>
      <Header />
      <SubHeader />
      <Toast ref={toast} />
     
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
          className="text-center"
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

      <div className="container-xxl container-p-y">
    
      
       
   
  

        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-style1 text-secondary">
            <li className="breadcrumb-item">
              <Link to="/teacher/dashboard" className="text-secondary">
                <i className="ri-home-7-line ri-lg"></i>
              </Link>
            </li>
            <li
              className="breadcrumb-item active text-secondary"
              aria-current="page"
            >
              Position
            </li>
          </ol>
        </nav>
        <div className="row ">
          <div className="col-xl-9 d-flex flex-column">
            <div className="container-md-12 ">
              {/* <div className="d-flex align-items-center justify-content-between">
                    <h4 className="fw-bold">Position</h4>
                    <div className="d-flex">
                        <Button
                            label="Refresh"
                            icon="pi pi-refresh"
                            className="p-button-text p-button-sm"
                            onClick={handleRefresh}
                        />
                        <Button
                            label="Back"
                            icon="pi pi-chevron-left"
                            className="p-button-text p-button-sm"
                            onClick={handleBack}
                        />
                    </div>
                </div> */}

              <div className="card mb-3" style={{ overflow: "hidden" }}>
                <div className="col text-start mb-5 mt-5 ms-5">
                  <button
                    onClick={handleBack}
                    className="btn rounded-pill btn-outline-secondary btn-xs"
                  >
                    <i className="ri-arrow-left-circle-fill me-1 ri-md"></i>{" "}
                    Back
                  </button>
                </div>
                <div className=" text-center">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                    <h4 className={positionData.totalUnrealisedPnl < 0 ? "text-danger" : "text-success"}>

  
</h4>


 

                      <p className="mb-0">Unrealised Profit & Loss</p>
                    </div>
                    <div className="col-md-4 mb-3">
                      <h4 className="text-danger">
                        {positionData.totalRealisedPnl.toFixed(2)} ₹
                      </h4>
                      <p className="mb-0">Realised Profit & Loss</p>
                    </div>
                    <div className="col-md-4 mb-3">
                      {/* <h4 className="text-danger">
                                                {positionData.totalRealisedPnl +
                                                    positionData.totalUnrealisedPnl}{" "}
                                                ₹
                                            </h4> */}
                      <h4 className="text-danger">
                        {(
                          positionData.totalRealisedPnl +
                          positionData.totalUnrealisedPnl
                        ).toFixed(2)}{" "}
                        ₹
                      </h4>

                      <p className="mb-0">Total Profit & Loss</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
      <div className="card-header d-flex align-items-center justify-content-between">
        <h5 className="text-center flex-grow-1 m-0">Open Position</h5>
        <div>
          {loading ? (
            <i className=" custom-target-icon ri-loader-line ri-lg ms-3 p-text-secondary"></i>
          ) : (
            <div>
              <Tooltip target=".custom-target-icon" />
              <i
                className="custom-target-icon ri ri-refresh-line ri-lg mb-3 p-text-secondary"
                data-pr-tooltip="Refresh"
                data-pr-position="top"
                style={{ cursor: "pointer" }}
                onClick={handleRefresh}
              ></i>
            </div>
          )}
        </div>
      </div>
      <div className="table-responsive text-start p-3">
        <div className="d-flex justify-content-end mb-3">
          <button
            type="button"
            className="btn btn-xs rounded-pill btn-outline-dark waves-effect me-3"
            onClick={handleToggleSelectAll}
          >
            {allSelected ? "Unselect All" : "Select All"}
          </button>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Product Type</th>
              <th>Option Type</th>
              <th>Order Type</th>
              <th>Exchange</th>
              <th>Lots</th>
              <th>LTP</th>
              <th>Avg. Price</th>
              <th>Profit & Loss</th>
              {showActionColumn && <th>Action</th>}
            </tr>
          </thead>
          <tbody>
                      {positionData.openPositions.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <span className="instrument_symbol">
                              {item.tradingsymbol}
                            </span>{" "}
                            <span className="d-none instrument_token">
                              {item.symboltoken}
                            </span>
                          </td>
                          <td>
                            <span className="instrument_producttype">
                              {item.producttype}
                            </span>
                          </td>
                          <td>{item.optiontype}</td>
                          <td className={item.color_ordertype}>
                            {item.ordertype}
                          </td>
                          <td>
                            <span className="instrument_exchange">
                              {item.exchange}
                            </span>
                          </td>
                          <td className={item.color_pnl}>
                            {item.lotquantity} Lots{" "}
                            <span className="text-body-tertiary lot_size">
                              (1 Lot = {item.lotsize})
                            </span>
                          </td>
                          <td>
                            <span className={item.color_diff_percent}>
                              {item.ltp} ₹
                            </span>{" "}
                            <span className="text-body-tertiary">
                              ({item.dailyDiffPercent}%)
                            </span>
                          </td>
                          <td>{item.avg_price} ₹</td>
                          <td className={item.color_pnl}>{item.pnl} ₹</td>
                          {showActionColumn && (
                            <td>
                              <div className="d-flex align-items-center">
                                <select
                                  className="form-control"
                                  id={`${item.tradingsymbol}-lot-size`}
                                  onChange={(event) =>
                                    handleLotSizeChange(
                                      event,
                                      item.tradingsymbol,
                                      item.symboltoken
                                    )
                                  }
                                  disabled
                                >
                                  {item.dropdownOptions.map(
                                    (option, optionIndex) => (
                                      <option key={optionIndex} value={option}>
                                        {option}
                                      </option>
                                    )
                                  )}
                                </select>
                                <input
                                  type="checkbox"
                                  checked={isChecked(
                                    item.tradingsymbol,
                                    item.symboltoken,
                                    parseInt(item.netqty / item.lotsize)
                                  )}
                                  onChange={() =>
                                    handleCheckboxChange(
                                      item.tradingsymbol,
                                      item.symboltoken,
                                      parseInt(item.netqty / item.lotsize)
                                    )
                                  }
                                  id={`${item.tradingsymbol}-checkbox`}
                                />
                              </div>
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      {showActionColumn && (
                        <tr>
                          <td colSpan="10">
                            <div className="d-flex justify-content-end">
                              <button
                                type="button"
                                className="btn btn-danger btn-sm rounded"
                                onClick={exitPosition}
                                disabled={selectedCount == 0}
                              >
                                <i className="ri-telegram-line ri-lg me-3"></i>
                                Exit {selectedCount} Selected
                              </button>
                            </div>
                          </td>
                        </tr>
                      )}
                    </tfoot>
                  </table>
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="text-center flex-grow-1 m-0">
                    Closed Position
                  </h5>

                  {loading ? (
                    <i className=" custom-target-icon ri-loader-line ri-lg ms-3 p-text-secondary"></i>
                  ) : (
                    <div>
                      <Tooltip target=".custom-target-icon" />
                      <i
                        className="custom-target-icon ri ri-refresh-line ri-lg p-text-secondary"
                        data-pr-tooltip="Refresh"
                        data-pr-position="top"
                        style={{ cursor: "pointer" }}
                        onClick={handleRefresh}
                      ></i>
                    </div>
                  )}
                </div>

                <div className="table-responsive text-start p-3">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Instrument</th>
                        <th>Product Type</th>
                        <th>Option Type</th>
                        <th>Exchange</th>
                        <th>Lots</th>
                        <th>LTP</th>
                        <th>Buy Price</th>
                        <th>Sell Price</th>
                        <th>Profit & Loss</th>
                      </tr>
                    </thead>
                    <tbody>{positionData.closedPositions}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 d-flex flex-column">
            {/* Right side content */}
            <div className="right-side-content">
              <div className="card">
                <div className="d-flex justify-content-around mt-5">
                  <button
                    type="button"
                    className="btn btn-danger rounded btn-md w-100 ms-5 me-5"
                    onClick={handleExitAllPending}
                     disabled={filteredeData.length === 0} 
                   
                  >
                    <i className="ri-telegram-line ri-lg me-3 "></i> Exit All
                    Pendings
                  </button>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-5 me-3">
                    <IconField iconPosition="left">
                      <InputIcon className="ri ri-search-line"></InputIcon>
                      <InputText
                        type="search"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="rounded custom-search-box"
                        // onClick={clearSearch}
                      />
                    </IconField>
                    {/* <div className="mt-3 ms-3">
                <i
                    className="ri ri-refresh-line ri-lg me-3 p-text-secondary custom-target-icon"
                    data-pr-tooltip="Refresh"
                    data-pr-position="top"
                    style={{ cursor: 'pointer' }}
                    onClick={handleRefreshes}
                ></i>
            </div> */}
                    {loading ? (
                      <i className=" custom-target-icon ri-loader-2-line ri-lg mt-3 ms-3 p-text-secondary"></i>
                    ) : (
                      <div>
                        <Tooltip target=".custom-target-icon" />
                        <div className="mt-3 ms-3">
                          <i
                            className="custom-target-icon ri ri-refresh-line ri-lg p-text-secondary "
                            data-pr-tooltip="Refresh"
                            data-pr-position="top"
                            style={{ cursor: "pointer" }}
                            onClick={handleRefreshes}
                          ></i>
                        </div>
                      </div>
                    )}
                  </div>

                  <hr />

                  <div
                    className="virtual-scroller-container"
                    style={{
                      height: "500px",
                      overflowY: "auto",
                      overflowX: "hidden",
                    }}
                  >
                    <VirtualScroller
                      className=""
                      items={filteredeData}
                      itemSize={70} // Adjust item size as needed
                      itemTemplate={(item, index) => (
                        <div key={index} className="border-bottom mb-3 pb-3">
                          <div className="d-flex align-items-start mb-3">
                            <p className="text-start mb-0 fw-bold text-black flex-grow-1">
                            {capitalizeFirstLetter(item.name)}
                            </p>
                            <button
                              type="button"
                              className="btn btn-danger btn-xs btn btn-outline-danger waves-effect ms-3"
                              onClick={() =>
                                handleExitAllInstruments(item.user_id)
                              }
                            >
                              <i className="ri-telegram-line ri-lg"></i> Exit
                            </button>
                          </div>

                          {item.lots.map((lot, lotIndex) => (
                            <div key={lotIndex} className="mb-3">
                              <div className="d-flex align-items-center mb-1">
                                <span>{item.instruments[lotIndex]}</span>
                              </div>
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="text-start text-primary1">
                                  <strong className="text-black">Buy:</strong>{" "}
                                  <span
                                    className={
                                      lot.size === 0
                                        ? "text-black"
                                        : "text-success"
                                    }
                                  >
                                    {lot.size} ({lot.price} Rs.)
                                  </span>{" "}
                                </div>
                                <div className="text-end text-primary1">
                                  <strong className="text-black">Sell:</strong>{" "}
                                  <span
                                    className={
                                      lot.sell === 0
                                        ? "text-black"
                                        : "text-danger"
                                    }
                                  >
                                    {lot.sell} ({lot.sellPrice} Rs.)
                                  </span>
                                </div>
                                <button
                                  type="button"
                                  className="btn btn-danger custom-btn-action1 btn-xs btn btn-outline-danger waves-effect"
                                  onClick={() =>
                                    handleExit(item.user_id, {
                                      tradingsymbol: item.instruments[lotIndex],
                                      symboltoken:
                                        item.lots[lotIndex].symboltoken,
                                    })
                                  }
                                >
                                  <i className="ri-telegram-line ri-lg"></i>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      style={{ height: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <Footer/>
    </>
  );
};

export default Position;


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