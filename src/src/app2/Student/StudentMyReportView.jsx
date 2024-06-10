import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import StudentHeader from "./StudentHeader";
import Footer from "../component/Footer";
import SubHeaderS from "./SubHeaderS";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import axios from "axios";

const StudentMyReportView = () => {
  const navigate = useNavigate();
  const userId = "44";
  const sell_month = "June"; // Change this as needed
  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [summary, setSummary] = useState({
    total_trades_count: 0,
    total_profitable_trades: 0,
    total_losing_trades: 0,
    total_commission: 0.0,
  });

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://192.46.212.210/api/common/trade_details",
        {
          user_id: userId,
          sell_month,
        }
      );

      if (response.data) {
        setData(response.data.trades);
        setSummary(response.data.completed_trades_aggregate);
      } else {
        setError(new Error("No data found"));
      }
    } catch (error) {
      setError(new Error(error.message || "Failed to fetch data"));
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <StudentHeader />
      <SubHeaderS />

      <div className="container-xxl container-p-y">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-style1">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/app2/student_profile">Profile</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/app2/student_report">My Report</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              My Report Details
            </li>
          </ol>
        </nav>
        <div className="card p-5">
          <div className="row align-items-center">
            <div className="col text-start mb-5 ">
              <button onClick={handleBack} className="btn btn-transparent  ">
                Back
              </button>
            </div>
            <div className="col text-start mb-5">
              <h5 className="mb-0">My Report Details</h5>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-3">
              <h4>{summary.total_trades_count}</h4>
              <p>Total Trades</p>
            </div>
            <div className="col-md-3">
              <h4>{summary.total_profitable_trades}</h4>
              <p>Profitable Trades</p>
            </div>
            <div className="col-md-3">
              <h4>{summary.total_losing_trades}</h4>
              <p>Losing Trades</p>
            </div>
            <div className="col-md-3">
              <h4>{summary.total_commission} Rs.</h4>
              <p>Commission</p>
            </div>
          </div>

          <div className="d-flex justify-content-end mb-3">
            {loading ? (
              <ProgressSpinner
                style={{
                  width: "30px",
                  height: "30px",
                  marginRight: "10px",
                }}
                strokeWidth="5"
                fill="var(--surface-ground)"
                animationDuration=".5s"
              />
            ) : (
              <Button
                type="button"
                icon="pi pi-refresh"
                text
                onClick={fetchData}
              />
            )}
            <IconField iconPosition="left">
              <InputIcon className="pi pi-search"></InputIcon>
              <InputText
                type="search"
                placeholder="Search"
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
              />
            </IconField>
          </div>
          <DataTable
            style={{ border: "1px solid #ddd" }}
            value={data}
            paginator
            rows={5}
            showGridlines
            loading={loading}
            globalFilter={globalFilter}
            emptyMessage="No records found"
          >
            <Column
                align="center"
              style={{ border: "1px solid #ddd" }}
              field="buy_price"
              header="Buy Price"
              sortable
            ></Column>
            <Column
                align="center"
              style={{ border: "1px solid #ddd" }}
              field="buy_lotsize"
              header="Buy Lot Size"
            ></Column>
            <Column 
                align="center"
              style={{ border: "1px solid #ddd" }}
              field="buy_stock_quantity"
              header="Buy Quantity"
            ></Column>
            <Column
                align="center"
              style={{ border: "1px solid #ddd" }}
              field="buy_datetime"
              header="Buy Time"
            ></Column>
            <Column
                align="center"
              style={{ border: "1px solid #ddd" }}
              field="buy_orderid"
              header="Buy Order ID"
            ></Column>
            <Column
                align="center"
              style={{ border: "1px solid #ddd" }}
              field="sell_price"
              header="Sell Price"
            ></Column>
            <Column
                align="center"
              style={{ border: "1px solid #ddd" }}
              field="sell_lotsize"
              header="Sell Lot Size"
            ></Column>
            <Column
                align="center"
              style={{ border: "1px solid #ddd" }}
              field="sell_stock_quantity"
              header="Sell Quantity"
            ></Column>
            <Column
              style={{ border: "1px solid #ddd" }}
              field="sell_datetime"
              header="Sell Time"
            ></Column>
            <Column
                align="center"
              style={{ border: "1px solid #ddd" }}
              field="sell_orderid"
              header="Sell Order ID"
            ></Column>
            <Column
                align="center"
              style={{ border: "1px solid #ddd" }}
              field="pandl"
              header="P&L"
            ></Column>
            <Column
                align="center"
              style={{ border: "1px solid #ddd" }}
              field="pandl_total"
              header="P&L Total"
            ></Column>
            <Column
                align="center"
              style={{ border: "1px solid #ddd" }}
              field="pandl_percent"
              header="P&L Percent"
            ></Column>
            <Column
                align="center"
              style={{ border: "1px solid #ddd" }}
              field="commission"
              header="Commission (%)"
            ></Column>
          </DataTable>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default StudentMyReportView;
