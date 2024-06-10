import React, { useState } from "react";
import Header from '../component/Header';
import SubHeader from '../component/SubHeader';
import Footer from '../component/Footer';

const Basket = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [baskets, setBaskets] = useState([]);
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

  const handleAddRow = () => {
    if (rows.length < 10) {
      setRows([
        ...rows,
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

  const handleCreateBasket = () => {
    setBaskets([...baskets, { ...currentBasket, rows }]);
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
  };

  const handleDeleteBasket = (index) => {
    const newBaskets = [...baskets];
    newBaskets.splice(index, 1);
    setBaskets(newBaskets);
  };

  const handleEditBasket = (index) => {
    setCurrentBasket(baskets[index]);
    handleShow();
  };

  return (
    <div>
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div className="layout-container">
          <Header />
          <SubHeader />

          <div className="container-xxl flex-grow-1 container-p-y">
            <div className='row'>
              <div className='col-3'>
                {baskets.map((basket, index) => (
                  <div className="card mb-3" key={index}>
                    <div className="card-datatable table-responsive pt-0" onClick={() => handleEditBasket(index)}>
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className='fw-bold'>{basket.name || `Basket ${index + 1}`}</td>
                            <td></td>
                            <td className='text-danger'>
                              <i className="ri-close-circle-line" onClick={(e) => { e.stopPropagation(); handleDeleteBasket(index); }}></i>
                            </td>
                          </tr>
                          <tr>
                            <td>Total: {basket.rows.length}/10</td>
                            <td>
                              <span className={basket.rows.filter(row => row.transactionType === "1").length > 0 ? 'text-success' : ''}>
                                Buy: {basket.rows.filter(row => row.transactionType === "1").length}
                              </span>/10
                            </td>
                            <td>
                              <span className={basket.rows.filter(row => row.transactionType === "2").length > 0 ? 'text-danger' : ''}>
                                Sell: {basket.rows.filter(row => row.transactionType === "2").length}
                              </span>/10
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
              <div className='col-9'>
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <h5 className="mb-0">Create New Basket</h5>
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
                                  checked={row.cePe === "1"}
                                  onChange={(event) => handleInputChange(index, event)}
                                />
                                <label className="form-check-label" htmlFor={`cePe${index}`} style={{ color: 'green' }}>
                                  CE
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name={`cePe${index}`}
                                  value="2"
                                  checked={row.cePe === "2"}
                                  onChange={(event) => handleInputChange(index, event)}
                                />
                                <label className="form-check-label" htmlFor={`cePe${index}`} style={{ color: 'orange' }}>
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
                                  checked={row.transactionType === "1"}
                                  onChange={(event) => handleInputChange(index, event)}
                                />
                                <label className="form-check-label">
                                  <span style={{ color: 'skyblue', fontWeight: 'bold' }}>BUY</span>
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name={`transactionType${index}`}
                                  value="2"
                                  checked={row.transactionType === "2"}
                                  onChange={(event) => handleInputChange(index, event)}
                                />
                                <label className="form-check-label">
                                  <span style={{ color: 'orange', fontWeight: 'bold' }}>SELL</span>
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
                                <option value="1">Exchange 1</option>
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
                                <option value="1">Order Type 1</option>
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
                                <option value="1">Product Type 1</option>
                                <option value="2">Product Type 2</option>
                                <option value="3">Product Type 3</option>
                              </select>
                            </td>
                            <td>
                              <i className="ri-delete-bin-line" onClick={() => handleDeleteRow(index)}></i>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary active" onClick={handleCreateBasket}>Create Basket</button>
                  </div>
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

export default Basket;
