import React, { useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import SubHeader from "../component/SubHeader";

const BasicTable = () => {
  const [rows, setRows] = useState([
    {
      name: "",
      instrument: "",
      lotQtyBuffer: "",
      cePe: "",
      transactionType: "",
      exchange: "",
      orderType: "",
      productType: "",
    },
  ]);

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        name: "",
        instrument: "",
        lotQtyBuffer: "",
        cePe: "",
        transactionType: "",
        exchange: "",
        orderType: "",
        productType: "",
      },
    ]);
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

  return (
    <div>
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div className="layout-container">
          <Header />
          <SubHeader />
          <div className="container-xxl flex-grow-1 container-p-y ">
            <div className="row"></div>
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Table Basic</h5>
                <button className="btn btn-primary active" onClick={handleAddRow}>Add</button>
              </div>

              <div className="table-responsive text-nowrap">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
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
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={row.name}
                            onChange={(event) => handleInputChange(index, event)}
                          />
                        </td>
                        <td>
                          <select
                            id="defaultSelect"
                            className="form-select"
                            name="instrument"
                            value={row.instrument}
                            onChange={(event) => handleInputChange(index, event)}
                          >
                            <option></option>
                            <option value="1">Instrument 1</option>
                            <option value="2">Instrument 2</option>
                            <option value="3">Instrument 3</option>
                          </select>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            name="lotQtyBuffer"
                            value={row.lotQtyBuffer}
                            onChange={(event) => handleInputChange(index, event)}
                          />
                        </td>
                        <td>
                          <div className="form-check form-check-inline mt-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name={`cePe${index}`}
                              value="1"
                              onChange={(event) => handleInputChange(index, event)}
                            />
                            <label className="form-check-label" htmlFor={`cePe${index}`}>
                              CE
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name={`cePe${index}`}
                              value="2"
                              onChange={(event) => handleInputChange(index, event)}
                            />
                            <label className="form-check-label" htmlFor={`cePe${index}`}>
                              PE
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="form-check form-check-inline mt-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name={`transactionType${index}`}
                              value="1"
                              onChange={(event) => handleInputChange(index, event)}
                            />
                            <label className="form-check-label" htmlFor={`transactionType${index}`}>
                              BUY Order
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name={`transactionType${index}`}
                              value="2"
                              onChange={(event) => handleInputChange(index, event)}
                            />
                            <label className="form-check-label" htmlFor={`transactionType${index}`}>
                              SELL Order
                            </label>
                          </div>
                        </td>
                        <td>
                          <select
                            id="defaultSelect"
                            className="form-select"
                            name="exchange"
                            value={row.exchange}
                            onChange={(event) => handleInputChange(index, event)}
                          >
                            <option></option>
                            <option value="1">NFO</option>
                            <option value="2">Exchange 2</option>
                            <option value="3">Exchange 3</option>
                          </select>
                        </td>
                        <td>
                          <select
                            id="defaultSelect"
                            className="form-select"
                            name="orderType"
                            value={row.orderType}
                            onChange={(event) => handleInputChange(index, event)}
                          >
                            <option></option>
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
                            onChange={(event) => handleInputChange(index, event)}
                          >
                            <option></option>
                            <option value="1">CARRYFORWARD</option>
                            <option value="2">Product Type 2</option>
                            <option value="3">Product Type 3</option>
                          </select>
                        </td>
                        <td className="text-danger" onClick={() => handleDeleteRow(index)}>
                          <i className="ri-close-circle-line ri-2x"></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      {/* <!--/ Basic Bootstrap Table -->    */}
    </div>
  );
};

export default BasicTable;
