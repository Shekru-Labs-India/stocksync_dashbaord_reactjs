import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";
import { ProgressSpinner } from "primereact/progressspinner";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Tooltip } from "primereact/tooltip";
import { Toast } from "primereact/toast";
import axios from "axios";
import config from "../../app3/config";

import Footer from "../component/Footer";
import Header from "../component/Header";
import SubHeader from "../component/SubHeader";

const Holding = () => {
  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const toast = useRef(null);
  const [backClicked, setBackClicked] = useState(false);

  const fetchData = async () => {
    const userId = localStorage.getItem("userId"); // Fetch the user ID from local storage

    if (!userId) {
      setError(new Error("User ID not found"));
      setLoading(false);
      return;
    }

    setLoading(true);

    await axios
      .post(`${config.apiDomain}/api/common/get_all_holdings`, {
        user_id: userId,
      })
      .then((response) => {
        if (response.data.st === 1 && response.data.data) {
          setData(response.data.data);
        } else {
          setData([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(new Error(error.message || "Failed to fetch data"));
        setLoading(false);
      });
  };


  const handleBack = () => {
    if (!backClicked) {
      setBackClicked(true);
      navigate(-1);
    }
  };

  const handleRefresh = async () => {
    setLoading(true);
    const userId = localStorage.getItem("userId"); // Fetch the user ID from local storage

    if (!userId) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "User ID not found",
      });
      setLoading(false);
      return;
    }

    await axios
      .post(`${config.apiDomain}/api/common/get_all_holdings`, {
        user_id: userId,
      })
      .then((response) => {
        if (response.data.st === 1 && response.data.data) {
          setData(response.data.data);
          toast.current.show({
            severity: "success",
            summary: "Success",
            detail: "Data fetched successfully",
          });
        } else if (response.data.st === 2) {
          toast.current.show({
            severity: "warn",
            summary: "Warning",
            detail: "No data found",
          });
        } else if (response.data.st === 3 || response.data.st === 4) {
          toast.current.show({
            severity: "error",
            summary: "Error",
            detail: "Failed to fetch data",
          });
        }
        setLoading(false);
      })
      .catch((error) => {
        toast.current.show({
          severity: "error",
          summary: "Error",
          detail: error.message || "Failed to fetch data",
        });
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const rowClassName = (rowData, rowIndex) => {
    return rowIndex % 2 === 0 ? "even-row" : "odd-row";
  };

  return (
    <>
      <Header />
      <SubHeader />

      <div className="container-xxl container-p-y">
        <Toast ref={toast} />
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-style1 text-secondary">
            <li className="breadcrumb-item">
              <Link to="/teacher/dashboard" className="text-secondary">
                <i className="ri-home-5-line ri-lg"></i>
              </Link>
            </li>
            <li className="breadcrumb-item active text-secondary" aria-current="page">
              Holding
            </li>
          </ol>
        </nav>

        <div className="card p-5">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <button
              onClick={handleBack}
              className="btn rounded-pill btn-outline-secondary btn-xs"
            >
              <i className="ri-arrow-left-circle-fill me-1 ri-md"></i> Back
            </button>

            <h5 className="mb-0 mx-auto">Holding</h5>
            <div></div>
          </div>
          <div className="d-flex justify-content-end mb-3">
            {loading ? (
               <i className=" custom-target-icon ri-loader-2-line ri-lg mt-4 ms-3 p-text-secondary"></i>
            ) : (
              <div className="mt-4">
                <Tooltip target=".custom-target-icon" />
                <i
                  className="custom-target-icon ri ri-refresh-line ri-lg me-3 p-text-secondary"
                  data-pr-tooltip="Refresh"
                  onClick={handleRefresh}
                  data-pr-position="top"
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
            )}
            <IconField iconPosition="left">
              <InputIcon className="ri ri-search-line"></InputIcon>
              <InputText
                type="search"
                placeholder="Search"
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
                className="rounded"
              />
            </IconField>
          </div>
          <DataTable
            className="text-center"
            style={{ border: "1px solid #ddd" }}
            value={data}
            paginator
            rows={5}
            showGridlines
            loading={loading}
            globalFilter={globalFilter}
            emptyMessage="No records found"
            rowClassName={rowClassName}
          >
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="tradingsymbol"
              header="Symbols"
              sortable
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="quantity"
              header="Quantity"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="exchange"
              header="Exchange"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="ltp"
              header="LTP"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="averageprice"
              header="Average Price"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="profitandloss"
              header="Profit and Loss"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="pnlpercentage"
              header="P&L Percentage"
            ></Column>
          </DataTable>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Holding;
