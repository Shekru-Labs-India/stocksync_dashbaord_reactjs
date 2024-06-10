import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
    <footer className="content-footer footer bg-footer-theme">
  <div className="container-xxl">
    <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
      <div className="text-body mb-2 mb-md-0">
        © <script>
        document.write(new Date().getFullYear())

        </script>, made with <span className="text-danger"><i className="tf-icons ri-heart-fill"></i></span> by <a href="https://themeselection.com" target="_blank" className="footer-link">ThemeSelection</a>
      </div>
      <div className="d-none d-lg-inline-block">

        {/* <a href="https://themeselection.com/license/" className="footer-link me-4" target="_blank">License</a>
        <a href="https://themeselection.com/" target="_blank" className="footer-link me-4">More Themes</a>

        <a href="https://demos.themeselection.com/materio-bootstrap-html-admin-template/documentation/" target="_blank" className="footer-link me-4">Documentation</a>


        <a href="https://themeselection.com/support/" target="_blank" className="footer-link d-none d-sm-inline-block">Support</a> */}
        <Link to="/landing_home_page">Website</Link>
      </div>
    </div>
  </div>
</footer>





    </div>
  )
}

export default Footer




{/* <div
className="modal fade"
id="exLargeModal"
tabIndex="-1"
aria-hidden="true"
>
<div className="modal-dialog modal-xl" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title x" id="exampleModalLabel4">
        Modal title
      </h5>

      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
    <div className="mt-3 mx-3 d-flex align-items-center ">
      <label htmlFor="basketName" className="form-label me-2">
        Basket Name:
      </label>
    </div>
    <div className="mt-3 mx-3 d-flex align-items-center mb-3 d-flex justify-content-between">
      <input
        type="text"
        className="form-control form-control-sm"
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

    <div className="modal-body">
      <table className="table">
        <thead>
          <tr>
            {/* <th>Name</th> */}
//             <th>Instrument</th>
//             <th>Lot Qty Buffer</th>
//             <th>CE/PE</th>
//             <th>Transaction Type</th>
//             <th>Exchange</th>
//             <th>Order Type</th>
//             <th>Product Type</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((row, index) => (
//             <tr key={index}>
//               {/* <td>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="name"
//                   value={row.name}
//                   onChange={(event) => handleInputChange(index, event)}
//                 />
//               </td> */}
//               <td>
//                 <select
//                   id="defaultSelect"
//                   className="form-select"
//                   name="instrument"
//                   value={row.instrument}
//                   onChange={(event) =>
//                     handleInputChange(index, event)
//                   }
//                 >
//                   <option value="1">Instrument 1</option>
//                   <option value="2">Instrument 2</option>
//                   <option value="3">Instrument 3</option>
//                 </select>
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="lotQtyBuffer"
//                   placeholder="Enter Lot QTY Buffer"
//                   value={row.lotQtyBuffer}
//                   onChange={(event) =>
//                     handleInputChange(index, event)
//                   }
//                 />
//               </td>
//               <td>
//                 <div className="form-check form-check-inline mt-4">
//                   <input
//                     className="form-check-input"
//                     type="radio"
//                     name={`cePe${index}`}
//                     value="1"
//                     checked={row.cePe === "1"}
//                     onChange={(event) =>
//                       handleInputChange(index, event)
//                     }
//                   />
//                   <label
//                     className="form-check-label"
//                     htmlFor={`cePe${index}`}
//                     style={{ color: "green" }}
//                   >
//                     CE
//                   </label>
//                 </div>
//                 <div className="form-check form-check-inline">
//                   <input
//                     className="form-check-input"
//                     type="radio"
//                     name={`cePe${index}`}
//                     value="2"
//                     checked={row.cePe === "2"}
//                     onChange={(event) =>
//                       handleInputChange(index, event)
//                     }
//                   />
//                   <label
//                     className="form-check-label"
//                     htmlFor={`cePe${index}`}
//                     style={{ color: "orange" }}
//                   >
//                     PE
//                   </label>
//                 </div>
//               </td>
//               <td>
//                 <div className="form-check form-check-inline mt-4">
//                   <input
//                     className="form-check-input"
//                     type="radio"
//                     name={`transactionType${index}`}
//                     value="1"
//                     checked={row.transactionType === "1"}
//                     onChange={(event) =>
//                       handleInputChange(index, event)
//                     }
//                   />
//                   <label className="form-check-label">
//                     <span
//                       style={{ color: "skyblue", fontWeight: "bold" }}
//                     >
//                       BUY
//                     </span>
//                   </label>
//                 </div>
//                 <div className="form-check form-check-inline">
//                   <input
//                     className="form-check-input"
//                     type="radio"
//                     name={`transactionType${index}`}
//                     value="2"
//                     checked={row.transactionType === "2"}
//                     onChange={(event) =>
//                       handleInputChange(index, event)
//                     }
//                   />
//                   <label className="form-check-label">
//                     <span
//                       style={{ color: "orange", fontWeight: "bold" }}
//                     >
//                       SELL
//                     </span>
//                   </label>
//                 </div>
//               </td>
//               <td>
//                 <select
//                   id="defaultSelect"
//                   className="form-select"
//                   name="exchange"
//                   value={row.exchange}
//                   onChange={(event) =>
//                     handleInputChange(index, event)
//                   }
//                 >
//                   <option value="1">NFO</option>
//                   <option value="2">Exchange 2</option>
//                   <option value="3">Exchange 3</option>
//                 </select>
//               </td>
//               <td>
//                 <select
//                   id="defaultSelect"
//                   className="form-select"
//                   name="orderType"
//                   value={row.orderType}
//                   onChange={(event) =>
//                     handleInputChange(index, event)
//                   }
//                 >
//                   <option value="1">MARKET</option>
//                   <option value="2">Order Type 2</option>
//                   <option value="3">Order Type 3</option>
//                 </select>
//               </td>
//               <td>
//                 <select
//                   id="defaultSelect"
//                   className="form-select"
//                   name="productType"
//                   value={row.productType}
//                   onChange={(event) =>
//                     handleInputChange(index, event)
//                   }
//                 >
//                   <option value="1">CARRYFORWARD</option>
//                   <option value="2">Product Type 2</option>
//                   <option value="3">Product Type 3</option>
//                 </select>
//               </td>
//               <td
//                 className="text-danger"
//                 onClick={() => handleDeleteRow(index)}
//               >
//                 <i className="ri-close-circle-line ri-2x"></i>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>

//     <div className="modal-footer">
//       <button
//         type="button"
//         className="btn btn-outline-secondary me-auto"
//         data-bs-dismiss="modal"
//       >
//         Close
//       </button>
//       <button type="button" className="btn btn-info">
//         Execute All
//       </button> */}
//     </div>
//   </div>
// </div>
// </div>
// </div>

