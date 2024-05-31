


import React, { useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import SubHeader from "../component/SubHeader";

const Position = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [selectedPositions, setSelectedPositions] = useState([]);
  const [data, setData] = useState([
    {
      name: "Viraj Hole",
      instrument: "BANKNIFTY22 MAY2451000CE",
      lots: [
        { size: 2, price: 2.2, status: "pending" },
        { size: 1, price: 4.2, status: "completed" },
      ],
    },
    {
      name: "John Doe",
      instrument: "NIFTY21 JUN155000PE",
      lots: [
        { size: 3, price: 1.5, status: "pending" },
        { size: 2, price: 3.5, status: "completed" },
      ],
    },
    {
      name: "Alice Smith",
      instrument: "BANKNIFTY22 MAY246000CE",
      lots: [
        { size: 1, price: 2.8, status: "pending" },
        { size: 1, price: 5.0, status: "completed" },
      ],
    },
    {
      name: "Bob Johnson",
      instrument: "NIFTY22 JUL160000PE",
      lots: [{ size: 2, price: 1.9, status: "completed" }],
    },
    {
      name: "Charlie Brown",
      instrument: "BANKNIFTY22 AUG248000CE",
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
                  selected.name === item.name && selected.size === lot.size
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

  const handleCheckboxChange = (name, lotSize) => {
    setSelectedPositions((prevSelected) => {
      const isSelected = prevSelected.some(
        (selected) => selected.name === name && selected.size === lotSize
      );

      if (isSelected) {
        return prevSelected.filter(
          (selected) => selected.name !== name || selected.size !== lotSize
        );
      } else {
        return [...prevSelected, { name, size: lotSize }];
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
          .map((lot) => ({ name: item.name, size: lot.size }))
      );
      setSelectedPositions(allPositions);
    }
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.instrument.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  return (
    <>
           <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
      <div className="layout-container">
        <Header />
        <SubHeader />
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
                        <h4 className="text-danger">0 ₹</h4>
                        <p>Unrealised Profit & Loss</p>
                      </div>
                      <div className="col-md-4">
                        <h4 className="text-danger">0 ₹</h4>
                        <p>Realised Profit & Loss</p>
                      </div>
                      <div className="col-md-4">
                        <h4 className="text-danger">0 ₹</h4>
                        <p>Total Profit & Loss</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mb-2">
                    <button
                      type="button"
                      className="btn text-white"
                      style={{ background: "#0069d9" }}
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
                      {openPositions.length === 0 ? (
                        <tr>
                          <td colSpan="10" className="text-center">
                            No records found
                          </td>
                        </tr>
                      ) : (
                        openPositions.map((item, index) => (
                          <tr key={index}>
                            <td>{item.instrument}</td>
                            <td>CARRY FORWARD</td>
                            <td>CE</td>
                            <td className="text-success">BUY</td>
                            <td>NFO</td>
                            <td>
                              {item.lots
                                .filter((lot) => lot.status === "pending")
                                .map((lot, idx) => (
                                  <div key={idx}>{lot.size}</div>
                                ))}
                              {item.lots.filter(
                                (lot) => lot.status === "pending"
                              ).length === 0 && <div>0</div>}
                            </td>
                            <td className="text-danger">0.85 ₹ (-50.00%)</td>
                            <td>
                              {item.lots
                                .filter((lot) => lot.status === "pending")
                                .map((lot, idx) => (
                                  <div key={idx}>{lot.price}</div>
                                ))}
                            </td>
                            <td className="text-danger">-0.75 ₹</td>
                            {selectedPositions.length > 0 && (
                              <td>
                                {item.lots
                                  .filter((lot) => lot.status === "pending")
                                  .map((lot, idx) => (
                                    <input
                                      type="checkbox"
                                      key={idx}
                                      onChange={() =>
                                        handleCheckboxChange(
                                          item.name,
                                          lot.size
                                        )
                                      }
                                      checked={selectedPositions.some(
                                        (selected) =>
                                          selected.name === item.name &&
                                          selected.size === lot.size
                                      )}
                                    />
                                  ))}
                              </td>
                            )}
                          </tr>
                        ))
                      )}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="10">
                          {selectedPositions.length > 0 && (
                            <div className="d-flex justify-content-end">
                              <button
                                type="button"
                                className="btn btn-danger"
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
                      {closePositions.length === 0 ? (
                        <tr>
                          <td colSpan="9" className="text-center">
                            No records found
                          </td>
                        </tr>
                      ) : (
                        closePositions.map((item, index) => (
                          <tr key={index}>
                            <td>{item.instrument}</td>
                            <td>CARRY FORWARD</td>
                            <td>CE</td>
                            <td>NFO</td>
                            <td>
                              {item.lots
                                .filter((lot) => lot.status === "completed")
                                .map((lot, idx) => (
                                  <div key={idx}>{lot.size}</div>
                                ))}
                              {item.lots.filter(
                                (lot) => lot.status === "completed"
                              ).length === 0 && <div>0</div>}
                            </td>
                            <td className="text-danger">0.8 ₹ (-53.13%)</td>
                            <td>0.85 ₹</td>
                            <td>
                              {item.lots
                                .filter((lot) => lot.status === "completed")
                                .map((lot, idx) => (
                                  <div key={idx}>{lot.price}</div>
                                ))}
                            </td>
                            <td className="text-danger">-1.50 ₹</td>
                          </tr>
                        ))
                      )}
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
                    className={`btn text-white ${
                      activeTab === "all" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("all")}
                  >
                    All ({totalCount})
                  </button>
                  <button
                    type="button"
                    className={`btn btn-warning ${
                      activeTab === "pending" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("pending")}
                  >
                    Pending ({pendingCount})
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
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
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <p className="text-start mb-0">{item.name}</p>
                        {activeTab !== "all" && item.lots.length > 0 && (
                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() =>
                              handleExit(item.name, item.lots[0].size)
                            }
                          >
                            Exit {item.lots[0].size}
                          </button>
                        )}
                      </div>
                      <p className="text-start text-primary1">
                        {item.instrument}
                      </p>

                      <div className="col-12">
                        <div className="row">
                          {item.lots.map((lot, idx) => (
                            <div key={idx} className="col-md-6 mb-3  ">
                              <div className="d-flex justify-content-between align-items-center">
                                <span
                                  className={`text-start ${
                                    lot.status === "pending"
                                      ? "text-success"
                                      : "text-danger"
                                  }`}
                                >
                                  <strong className="text-dark">Lot:</strong>{" "}
                                  {lot.size} ({lot.price} Rs.)
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

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
      {/* <Footer></Footer> */}
      </div>
    </>
  );
};

export default Position;