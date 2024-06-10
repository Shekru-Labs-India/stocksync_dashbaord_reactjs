// import React, { useState } from "react";
// import Footer from "../component/Footer";
// import Header from "../component/Header";
// import SubHeader from "../component/SubHeader";

// const Position = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeTab, setActiveTab] = useState("all");
//   const [selectedPositions, setSelectedPositions] = useState([]);
//   const [data, setData] = useState([
//     {
//       name: "Viraj Hole",
//       instruments: [
//         "BANKNIFTY22 MAY2451000CE",
//         "NIFTY22 JUN155000CE",
//         "BANKNIFTY22 JUL2465000PE",
//       ],
//       lots: [
//         { size: 2, price: 2.2, status: "pending" },
//         { size: 1, price: 4.2, status: "completed" },
//       ],
//     },
//     {
//       name: "John Doe",
//       instruments: [
//         "NIFTY21 JUN155000PE",
//         "BANKNIFTY21 JUN345600PE",
//         "NIFTY22 JUL160000CE",
//       ],
//       lots: [
//         { size: 3, price: 1.5, status: "pending" },
//         { size: 2, price: 3.5, status: "completed" },
//       ],
//     },
//     {
//       name: "Alice Smith",
//       instruments: [
//         "BANKNIFTY22 MAY246000CE",
//         "NIFTY22 AUG155500PE",
//         "BANKNIFTY22 SEP248000CE",
//       ],
//       lots: [{ size: 1, price: 5.0, status: "completed" }],
//     },
//     {
//       name: "Bob Johnson",
//       instruments: [
//         "NIFTY22 JUL160000PE",
//         "BANKNIFTY22 AUG247000CE",
//         "NIFTY22 SEP150000PE",
//       ],
//       lots: [{ size: 2, price: 1.9, status: "completed" }],
//     },
//     {
//       name: "Charlie Brown",
//       instruments: [
//         "BANKNIFTY22 AUG248000CE",
//         "NIFTY22 OCT152000PE",
//         "BANKNIFTY22 NOV249000CE",
//       ],
//       lots: [{ size: 4, price: 2.1, status: "pending" }],
//     },
//   ]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleClearSearch = () => {
//     setSearchTerm("");
//   };

//   const handleExit = (name, lotSize) => {
//     setData((prevData) =>
//       prevData
//         .map((item) =>
//           item.name === name
//             ? {
//                 ...item,
//                 lots: item.lots.filter((lot) => lot.size !== lotSize),
//               }
//             : item
//         )
//         .filter((item) => item.lots.length > 0)
//     );
//   };

//   const handleExitSelected = () => {
//     setData((prevData) =>
//       prevData
//         .map((item) => ({
//           ...item,
//           lots: item.lots.filter(
//             (lot) =>
//               !selectedPositions.some(
//                 (selected) =>
//                   selected.name === item.name &&
//                   selected.size === lot.size &&
//                   selected.lotSize === lot.size
//               )
//           ),
//         }))
//         .filter((item) => item.lots.length > 0)
//     );
//     setSelectedPositions([]);
//   };

//   const handleExitAllPending = () => {
//     setData((prevData) =>
//       prevData
//         .map((item) => ({
//           ...item,
//           lots: item.lots.filter((lot) => lot.status !== "pending"),
//         }))
//         .filter((item) => item.lots.length > 0)
//     );
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleCheckboxChange = (name, lotSize, selectedLotSize) => {
//     setSelectedPositions((prevSelected) => {
//       const isSelected = prevSelected.some(
//         (selected) =>
//           selected.name === name &&
//           selected.size === lotSize &&
//           selected.lotSize === selectedLotSize
//       );

//       if (isSelected) {
//         return prevSelected.filter(
//           (selected) =>
//             selected.name !== name ||
//             selected.size !== lotSize ||
//             selected.lotSize !== selectedLotSize
//         );
//       } else {
//         return [
//           ...prevSelected,
//           { name, size: lotSize, lotSize: selectedLotSize },
//         ];
//       }
//     });
//   };

//   const handleSelectAll = () => {
//     if (selectedPositions.length === openPositions.length) {
//       setSelectedPositions([]);
//     } else {
//       const allPositions = openPositions.flatMap((item) =>
//         item.lots
//           .filter((lot) => lot.status === "pending")
//           .map((lot) => ({
//             name: item.name,
//             size: lot.size,
//             lotSize: lot.size,
//           }))
//       );
//       setSelectedPositions(allPositions);
//     }
//   };

//   const handleLotSizeChange = (name, lotSize, event) => {
//     const selectedLotSize = parseInt(event.target.value, 10);
//     handleCheckboxChange(name, lotSize, selectedLotSize);
//   };

//   const filteredData = data.filter((item) => {
//     const nameMatch = item.name
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());
//     const instrumentsMatch = item.instruments.some((instrument) =>
//       instrument.toLowerCase().includes(searchTerm.toLowerCase())
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

//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row vh-100">
//           <div className="col-xl-9 d-flex flex-column">
//             <div className="container-md-12 container-p-y">
//               <div className="card">
//                 <h5 className="card-header text-start">Open Position</h5>
//                 <div className="table-responsive text-start">
//                   <div className="container mb-4">
//                     <div className="row">
//                       <div className="col-md-4">
//                         <h4 className="text-danger">0 ₹</h4>
//                         <p>Unrealised Profit & Loss</p>
//                       </div>
//                       <div className="col-md-4">
//                         <h4 className="text-danger">0 ₹</h4>
//                         <p>Realised Profit & Loss</p>
//                       </div>
//                       <div className="col-md-4">
//                         <h4 className="text-danger">0 ₹</h4>
//                         <p>Total Profit & Loss</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="d-flex justify-content-end mb-2 pe-5">
//                     <button
//                       type="button"
//                       className="btn  btn-xs  rounded-pill btn-outline-dark waves-effect"
//                       onClick={handleSelectAll}
//                     >
//                       {selectedPositions.length === openPositions.length
//                         ? "Unselect All"
//                         : "Select All"}
//                     </button>
//                   </div>

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
//                         {selectedPositions.length > 0 && <th>Action</th>}
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {openPositions.length === 0 ? (
//                         <tr>
//                           <td colSpan="10" className="text-center">
//                             No records found
//                           </td>
//                         </tr>
//                       ) : (
//                         openPositions.map((item, index) => (
//                           <tr key={index}>
//                             <td>BANKNIFTY22 AUG248000CE</td>
//                             <td>CARRY FORWARD</td>
//                             <td>CE</td>
//                             <td className="text-success">BUY</td>
//                             <td>NFO</td>
//                             <td>
//                               {item.lots
//                                 .filter((lot) => lot.status === "pending")
//                                 .map((lot, idx) => (
//                                   <div key={idx}>{lot.size}</div>
//                                 ))}
//                               {item.lots.filter(
//                                 (lot) => lot.status === "pending"
//                               ).length === 0 && <div>0</div>}
//                             </td>
//                             <td className="text-danger">0.85 ₹ (-50.00%)</td>
//                             <td>
//                               {item.lots
//                                 .filter((lot) => lot.status === "pending")
//                                 .map((lot, idx) => (
//                                   <div key={idx}>{lot.price}</div>
//                                 ))}
//                             </td>
//                             <td className="text-danger">-0.75 ₹</td>
//                             {selectedPositions.length > 0 && (
//                               <td>
//                                 {item.lots
//                                   .filter((lot) => lot.status === "pending")
//                                   .map((lot, idx) => (
//                                     <div
//                                       key={idx}
//                                       className="d-flex align-items-center mb-2"
//                                     >
//                                       <select
//                                         onChange={(event) =>
//                                           handleLotSizeChange(
//                                             item.name,
//                                             lot.size,
//                                             event
//                                           )
//                                         }
//                                         defaultValue={lot.size}
//                                         className="form-control me-2"
//                                         style={{ width: "auto" }}
//                                       >
//                                         {[...Array(lot.size).keys()].map(
//                                           (_, i) => (
//                                             <option key={i + 1} value={i + 1}>
//                                               {i + 1}
//                                             </option>
//                                           )
//                                         )}
//                                       </select>
//                                       <input
//                                         type="checkbox"
//                                         onChange={() =>
//                                           handleCheckboxChange(
//                                             item.name,
//                                             lot.size,
//                                             lot.size
//                                           )
//                                         }
//                                         checked={selectedPositions.some(
//                                           (selected) =>
//                                             selected.name === item.name &&
//                                             selected.size === lot.size
//                                         )}
//                                       />
//                                     </div>
//                                   ))}
//                               </td>
//                             )}
//                           </tr>
//                         ))
//                       )}
//                     </tbody>
//                     <tfoot>
//                       <tr>
//                         <td colSpan="10">
//                           {selectedPositions.length > 0 && (
//                             <div className="d-flex justify-content-end">
//                               <button
//                                 type="button"
//                                 className="btn btn-danger btn-xs"
//                                 onClick={handleExitSelected}
//                               >
//                                 Exit {selectedPositions.length} Selected
//                               </button>
//                             </div>
//                           )}
//                         </td>
//                       </tr>
//                     </tfoot>
//                   </table>
//                 </div>
//               </div>
//               <div className="card mt-3">
//                 <h5 className="card-header text-start">Closed Position</h5>
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
//                     <tbody>
//                       {closePositions.length === 0 ? (
//                         <tr>
//                           <td colSpan="9" className="text-center">
//                             No records found
//                           </td>
//                         </tr>
//                       ) : (
//                         closePositions.map((item, index) => (
//                           <tr key={index}>
//                             <td>{item.instruments.join(", ")}</td>
//                             <td>CARRY FORWARD</td>
//                             <td>CE</td>
//                             <td>NFO</td>
//                             <td>
//                               {item.lots
//                                 .filter((lot) => lot.status === "completed")
//                                 .map((lot, idx) => (
//                                   <div key={idx}>{lot.size}</div>
//                                 ))}
//                               {item.lots.filter(
//                                 (lot) => lot.status === "completed"
//                               ).length === 0 && <div>0</div>}
//                             </td>
//                             <td className="text-danger">0.8 ₹ (-53.13%)</td>
//                             <td>0.85 ₹</td>
//                             <td>
//                               {item.lots
//                                 .filter((lot) => lot.status === "completed")
//                                 .map((lot, idx) => (
//                                   <div key={idx}>{lot.price}</div>
//                                 ))}
//                             </td>
//                             <td className="text-danger">-1.50 ₹</td>
//                           </tr>
//                         ))
//                       )}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-xl-3 d-flex flex-column mt-9">
//             {/* Right side content */}
//             <div className="right-side-content">
//               <div className="card">
//                 <div className="d-flex justify-content-around mt-5">
//                   <button
//                     type="button"
//                     style={{ background: "#0069d9" }}
//                     className={`btn text-white  btn-xs ${
//                       activeTab === "all" ? "active" : ""
//                     }`}
//                     onClick={() => handleTabClick("all")}
//                   >
//                     All ({totalCount})
//                   </button>
//                   <button
//                     type="button"
//                     className={`btn btn-warning  btn-xs ${
//                       activeTab === "pending" ? "active" : ""
//                     }`}
//                     onClick={() => handleTabClick("pending")}
//                   >
//                     Pending ({pendingCount})
//                   </button>
//                   <button
//                     type="button"
//                     className="btn btn-danger  btn-xs"
//                     onClick={handleExitAllPending}
//                     disabled={pendingCount === 0}
//                   >
//                     Exit All Pendings
//                   </button>
//                 </div>
//                 <div className="card-body">
//                   <div className="mb-3">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Search Name/instruments"
//                       value={searchTerm}
//                       onChange={handleSearch}
//                     />
//                     <span className="">
//                       <i
//                         className="fas fa-times"
//                         onClick={handleClearSearch}
//                       ></i>
//                     </span>
//                   </div>
//                   {displayData.map((item, index) => (
//                     <div key={index}>
//                       <div className="align-items-center mb-3">
//                         <p className="text-center mb-0 fw-bold text-black">
//                           {item.name}
//                         </p>
//                       </div>
//                       {item.instruments.map((instrument, instrumentIndex) => (
//                         <div key={instrumentIndex} className="">
//                           <div className="d-flex justify-content-between align-items-center  mb-1">
//                             <span className="text-start text-primary1">
//                               {instrument}
//                             </span>
//                             {activeTab !== "all" && item.lots.length > 0 && (
//                               <>
//                                 {item.lots.reduce(
//                                   (acc, cur) =>
//                                     cur.status === "pending" ||
//                                     cur.status === "completed"
//                                       ? cur.size
//                                       : acc,
//                                   0
//                                 ) > 0 && (
//                                   <button
//                                     type="button"
//                                     className="btn btn-danger btn-xs btn rounded-pill btn-outline-danger waves-effect"
//                                     onClick={() =>
//                                       handleExit(
//                                         item.name,
//                                         item.lots.reduce(
//                                           (acc, cur) =>
//                                             cur.status === "pending"
//                                               ? acc + cur.size
//                                               : acc - cur.size,
//                                           0
//                                         )
//                                       )
//                                     }
//                                   >
//                                     Exit{" "}
//                                     {item.lots.reduce(
//                                       (acc, cur) =>
//                                         cur.status === "pending"
//                                           ? acc + cur.size
//                                           : acc - cur.size,
//                                       0
//                                     )}
//                                   </button>
//                                 )}
//                               </>
//                             )}
//                           </div>
//                           <div className="col-12">
//                             <div className="row">
//                               {item.lots
//                                 .filter(
//                                   (lot) =>
//                                     lot.status === "pending" ||
//                                     lot.status === "completed"
//                                 )

//                                 .map((lot, idx) => (
//                                   <div key={idx} className="col-md-6 mb-3">
//                                     <div className="d-flex justify-content-between align-items-center">
//                                       <span
//                                         className={`text-start ${
//                                           lot.status === "pending"
//                                             ? "text-success text-start"
//                                             : "text-danger text-end"
//                                         }`}
//                                       >
//                                         <strong className="text-black">
//                                           Lot:
//                                         </strong>{" "}
//                                         {lot.size} ({lot.price} Rs.)
//                                       </span>
//                                     </div>
//                                   </div>
//                                 ))}
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                       <hr className="my-3" />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Position;


import React, { useState, useEffect } from 'react';
import Footer from "../component/Footer";
import Header from "../component/Header";
import SubHeader from "../component/SubHeader";

const userId = localStorage.getItem('user_id');
const Position = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [selectedPositions, setSelectedPositions] = useState([]);
  const [data, setData] = useState([
    {
      name: "Viraj Hole",
      instruments: [
        "BANKNIFTY22 MAY2451000CE",
        "NIFTY22 JUN155000CE",
        "BANKNIFTY22 JUL2465000PE",
      ],
      lots: [
        { size: 2, price: 2.2, status: "pending" },
        { size: 1, price: 4.2, status: "completed" },
      ],
    },
    {
      name: "John Doe",
      instruments: [
        "NIFTY21 JUN155000PE",
        "BANKNIFTY21 JUN345600PE",
        "NIFTY22 JUL160000CE",
      ],
      lots: [
        { size: 3, price: 1.5, status: "pending" },
        { size: 2, price: 3.5, status: "completed" },
      ],
    },
    {
      name: "Alice Smith",
      instruments: [
        "BANKNIFTY22 MAY246000CE",
        "NIFTY22 AUG155500PE",
        "BANKNIFTY22 SEP248000CE",
      ],
      lots: [{ size: 1, price: 5.0, status: "completed" }],
    },
    {
      name: "Bob Johnson",
      instruments: [
        "NIFTY22 JUL160000PE",
        "BANKNIFTY22 AUG247000CE",
        "NIFTY22 SEP150000PE",
      ],
      lots: [{ size: 2, price: 1.9, status: "completed" }],
    },
    {
      name: "Charlie Brown",
      instruments: [
        "BANKNIFTY22 AUG248000CE",
        "NIFTY22 OCT152000PE",
        "BANKNIFTY22 NOV249000CE",
      ],
      lots: [{ size: 4, price: 2.1, status: "pending" }],
    },
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const handleExit = (name, lotSize) => {
    setData((prevData) =>
      prevData
        .map((item) =>
          item.name === name
            ? {
                ...item,
                lots: item.lots.filter((lot) => lot.size !== lotSize),
              }
            : item
        )
        .filter((item) => item.lots.length > 0)
    );
  };

  const handleExitSelected = () => {
    setData((prevData) =>
      prevData
        .map((item) => ({
          ...item,
          lots: item.lots.filter(
            (lot) =>
              !selectedPositions.some(
                (selected) =>
                  selected.name === item.name &&
                  selected.size === lot.size &&
                  selected.lotSize === lot.size
              )
          ),
        }))
        .filter((item) => item.lots.length > 0)
    );
    setSelectedPositions([]);
  };

  const handleExitAllPending = () => {
    setData((prevData) =>
      prevData
        .map((item) => ({
          ...item,
          lots: item.lots.filter((lot) => lot.status !== "pending"),
        }))
        .filter((item) => item.lots.length > 0)
    );
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCheckboxChange = (name, lotSize, selectedLotSize) => {
    setSelectedPositions((prevSelected) => {
      const isSelected = prevSelected.some(
        (selected) =>
          selected.name === name &&
          selected.size === lotSize &&
          selected.lotSize === selectedLotSize
      );

      if (isSelected) {
        return prevSelected.filter(
          (selected) =>
            selected.name !== name ||
            selected.size !== lotSize ||
            selected.lotSize !== selectedLotSize
        );
      } else {
        return [
          ...prevSelected,
          { name, size: lotSize, lotSize: selectedLotSize },
        ];
      }
    });
  };

  const handleSelectAll = () => {
    if (selectedPositions.length === openPositions.length) {
      setSelectedPositions([]);
    } else {
      const allPositions = openPositions.flatMap((item) =>
        item.lots
          .filter((lot) => lot.status === "pending")
          .map((lot) => ({
            name: item.name,
            size: lot.size,
            lotSize: lot.size,
          }))
      );
      setSelectedPositions(allPositions);
    }
  };

 

  const filteredData = data.filter((item) => {
    const nameMatch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const instrumentsMatch = item.instruments.some((instrument) =>
      instrument.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return nameMatch || instrumentsMatch;
  });

  const displayData = filteredData.filter((item) =>
    activeTab === "all"
      ? true
      : item.lots.some((lot) => lot.status === activeTab)
  );

  const pendingCount = data.reduce(
    (count, item) =>
      count + item.lots.filter((lot) => lot.status === "pending").length,
    0
  );
  const totalCount = data.length;

  const openPositions = data.filter((item) =>
    item.lots.some((lot) => lot.status === "pending")
  );

  const closePositions = data.filter((item) =>
    item.lots.some((lot) => lot.status === "completed")
  );

  const [positionData, setPositionData] = useState({
    openPositions: [],
    closedPositions: [],
    totalRealisedPnl: 0.0,
    totalUnrealisedPnl: 0.0
  });

  useEffect(() => {
    getPositionList();
  }, []);

  const getPositionList = async () => {
    try {
      const user_id = localStorage.getItem('user_id');
      const response = await fetch('http://192.46.212.210/api/teacher/get_position_list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id: userId })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      let openPositionRows = [];
      let closedPositionRows = [];
      let totalRealisedPnl = 0.0;
      let totalUnrealisedPnl = 0.0;
  
      data.position_list.forEach(item => {
        // Assuming item is already parsed correctly
        const dailyDiffPercent = (((item.ltp - item.close) / item.close) * 100).toFixed(2);
        const netqty = parseInt(item.netqty);
        const lotsize = parseInt(item.lotsize);
        const lotquantity = parseInt(netqty / lotsize);
        const ordertype = lotsize > 0 ? "BUY" : "SELL";
        const color_ordertype = lotsize > 0 ? 'text-success' : 'text-danger';
        const avg_price = lotsize > 0 ? item.totalbuyavgprice : item.totalsellavgprice;
        const color_pnl = item.pnl > 0 ? 'text-success' : 'text-danger';
        const color_lots = lotsize > 0 ? 'text-success' : 'text-danger';
        const color_diff_percent = dailyDiffPercent > 0 ? 'text-success' : 'text-danger';
  
        if (netqty !== 0) {
          totalUnrealisedPnl += parseFloat(item.unrealised);
          openPositionRows.push(
            <tr key={item.tradingsymbol}>
              <td><span className="instrument_symbol">{item.tradingsymbol}</span> <span className="d-none instrument_token">{item.symboltoken}</span></td>
              <td><span className="instrument_producttype">{item.producttype}</span></td>
              <td>{item.optiontype}</td>
              <td className={color_ordertype}>{ordertype}</td>
              <td><span className="instrument_exchange">{item.exchange}</span></td>
              <td className={color_lots}>
                {lotquantity} Lots
                <span className="text-body-tertiary lot_size">(1 Lot = {item.lotsize})</span>
                <span className="d-none buy_quantity">{netqty}</span>
              </td>
              <td><span className={color_diff_percent}>{item.ltp} ₹</span> <span className="text-body-tertiary">({dailyDiffPercent}%)</span></td>
              <td>{avg_price} ₹</td>
              <td className={color_pnl}>{item.pnl} ₹</td>
            </tr>
          );
        } else {
          totalRealisedPnl += parseFloat(item.realised);
          closedPositionRows.push(
            <tr key={item.tradingsymbol}>
              <td><span className="instrument_symbol">{item.tradingsymbol}</span> <span className="d-none instrument_token">{item.symboltoken}</span></td>
              <td>{item.producttype}</td>
              <td>{item.optiontype}</td>
              <td>{item.exchange}</td>
              <td>0 Lots <span className="text-body-tertiary">(1 Lot = {item.lotsize})</span></td>
              <td><span className={color_diff_percent}>{item.ltp} ₹</span> <span className="text-body-tertiary">({dailyDiffPercent}%)</span></td>
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
        totalUnrealisedPnl
      });
  
    } catch (error) {
      console.error("Error occurred while fetching position list:", error);
    }
  };
  

  return (
    <>
     <Header />
    <SubHeader />
    <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
     
      <div className="container-fluid">
        <div className="row vh-100">
          <div className="col-xl-9 d-flex flex-column">
            <div className="container-md-12 container-p-y">
              <div className="card">
                <h5 className="card-header text-start">Open Position</h5>
                <div className="table-responsive text-start">
                  <div className="container mb-4">
                    <div className="row">
                      <div className="col-md-4">
                        <h4 className="text-danger">{positionData.totalUnrealisedPnl} ₹</h4>
                        <p>Unrealised Profit & Loss</p>
                      </div>
                      <div className="col-md-4">
                        <h4 className="text-danger">{positionData.totalRealisedPnl} ₹</h4>
                        <p>Realised Profit & Loss</p>
                      </div>
                      <div className="col-md-4">
                        <h4 className="text-danger">{(positionData.totalRealisedPnl + positionData.totalUnrealisedPnl)} ₹</h4>
                        <p>Total Profit & Loss</p>
                      </div>
                    </div>
                  </div>
                  
  

                  <div className="d-flex justify-content-end mb-2 pe-5">
                    <button
                      type="button"
                      className="btn  btn-xs  rounded-pill btn-outline-dark waves-effect"
                      onClick={handleSelectAll}
                    >
                      {selectedPositions.length === openPositions.length
                        ? "Unselect All"
                        : "Select All"}
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
                        {selectedPositions.length > 0 && <th>Action</th>}
                      </tr>
                    </thead>
                    <tbody>
                      
                        
                    {positionData.openPositions}
                    
                       
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="10">
                          {selectedPositions.length > 0 && (
                            <div className="d-flex justify-content-end">
                              <button
                                type="button"
                                className="btn btn-danger btn-xs"
                                onClick={handleExitSelected}
                              >
                                Exit {selectedPositions.length} Selected
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div className="card mt-3">
                <h5 className="card-header text-start">Closed Position</h5>
                <div className="table-responsive text-start">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Instrument</th>
                        <th>Product Type</th>
                        <th>Option Type</th>
                        <th>Exchange</th>
                        <th>Lots</th>
                        <th>LTP</th>
                        <th>Sell Price</th>
                        <th>Buy Price</th>
                        <th>Profit & Loss</th>
                      </tr>
                    </thead>
                    <tbody>
                    {positionData.closedPositions}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 d-flex flex-column mt-9">
            {/* Right side content */}
            <div className="right-side-content">
              <div className="card">
                <div className="d-flex justify-content-around mt-5">
                  <button
                    type="button"
                    style={{ background: "#0069d9" }}
                    className={`btn text-white  btn-xs ${
                      activeTab === "all" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("all")}
                  >
                    All ({totalCount})
                  </button>
                  <button
                    type="button"
                    className={`btn btn-warning  btn-xs ${
                      activeTab === "pending" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("pending")}
                  >
                    Pending ({pendingCount})
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger  btn-xs"
                    onClick={handleExitAllPending}
                    disabled={pendingCount === 0}
                  >
                    Exit All Pendings
                  </button>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Name/instruments"
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                    <span className="">
                      <i
                        className="fas fa-times"
                        onClick={handleClearSearch}
                      ></i>
                    </span>
                  </div>
                  {displayData.map((item, index) => (
                    <div key={index}>
                      <div className="align-items-center mb-3">
                        <p className="text-center mb-0 fw-bold text-black">
                          {item.name}
                        </p>
                      </div>
                      {item.instruments.map((instrument, instrumentIndex) => (
                        <div key={instrumentIndex} className="">
                          <div className="d-flex justify-content-between align-items-center  mb-1">
                            <span className="text-start text-primary1">
                              {instrument}
                            </span>
                            {activeTab !== "all" && item.lots.length > 0 && (
                              <>
                                {item.lots.reduce(
                                  (acc, cur) =>
                                    cur.status === "pending" ||
                                    cur.status === "completed"
                                      ? cur.size
                                      : acc,
                                  0
                                ) > 0 && (
                                  <button
                                    type="button"
                                    className="btn btn-danger btn-xs btn rounded-pill btn-outline-danger waves-effect"
                                    onClick={() =>
                                      handleExit(
                                        item.name,
                                        item.lots.reduce(
                                          (acc, cur) =>
                                            cur.status === "pending"
                                              ? acc + cur.size
                                              : acc - cur.size,
                                          0
                                        )
                                      )
                                    }
                                  >
                                    Exit{" "}
                                    {item.lots.reduce(
                                      (acc, cur) =>
                                        cur.status === "pending"
                                          ? acc + cur.size
                                          : acc - cur.size,
                                      0
                                    )}
                                  </button>
                                )}
                              </>
                            )}
                          </div>
                          <div className="col-12">
                            <div className="row">
                              {item.lots
                                .filter(
                                  (lot) =>
                                    lot.status === "pending" ||
                                    lot.status === "completed"
                                )

                                .map((lot, idx) => (
                                  <div key={idx} className="col-md-6 mb-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                      <span
                                        className={`text-start ${
                                          lot.status === "pending"
                                            ? "text-success text-start"
                                            : "text-danger text-end"
                                        }`}
                                      >
                                        <strong className="text-black">
                                          Lot:
                                        </strong>{" "}
                                        {lot.size} ({lot.price} Rs.)
                                      </span>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                      ))}
                      <hr className="my-3" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default Position;




