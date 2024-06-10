import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import SubHeader from '../component/SubHeader';
import Profile from './Profile';

const Home = () => {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    const fetchTeacherHome = async () => {
      try {
        const response = await fetch("http://192.46.212.210/api/teacher/teacher_home", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setApiResponse(data.msg);
        } else {
          console.error("Failed to fetch teacher home data", response.statusText);
        }
      } catch (error) {
        console.error("An error occurred while fetching teacher home data", error);
      }
    };

    fetchTeacherHome();
  }, []);

  return (
    <div>
      <Header />
      <SubHeader />
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div className="layout-container">
          <div className="container-xxl flex-grow-1 container-p-y">
            {apiResponse && (
              <div className="alert " role="alert">
                {apiResponse}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
        



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
  // const [value, setValue] = useState('');
  // const [items, setItems] = useState([]);
  // const [values, setValues] = useState('');
  // const [item, setItem] = useState([]);
  // const [filteredItems, setFilteredItems] = useState([]);
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

  // const handleCreateBasket = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://192.46.212.210/api/teacher/create_update_basket",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           basket_id: null,
  //           basket_name: currentBasket.name,
  //           teacher_id: localStorage.getItem("user_id"),
  //           basket_data: rows,
  //         }),
  //       }
  //     );

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log("Basket created:", data);
  //       setBaskets([...baskets, data]); // Add the newly created basket to baskets list
  //       setRows([
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
  //       setCurrentBasket({
  //         name: "",
  //         rows: [
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
  //         ],
  //       });
  //     } else {
  //       console.error("Failed to create basket:", response.statusText);
  //     }
  //   } catch (error) {
  //     console.error("An error occurred while creating basket:", error);
  //   }
  // };

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
{/* <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)}forceSelection  /> */}

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
            //                 <AutoComplete 
            //     value={values} 
            //     suggestions={filteredItems} 
            //     completeMethod={searches} 
            //     onChange={(e) => setValues(e.value)} 
            //     forceSelection 
            // />
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
                  // <div className="d-flex justify-content-start mt-3 mx-3 mb-3">
                  //   <button
                  //     className="btn btn-success"
                  //     onClick={handleCreateBasket}
                  //   >
                  //     Create Basket
                  //   </button>
                  // </div>
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
