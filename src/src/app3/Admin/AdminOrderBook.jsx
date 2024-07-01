import React, { useEffect, useState,useRef  } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Footer from "../component/Footer";

import { Link, useNavigate} from "react-router-dom";
import { ProgressSpinner } from "primereact/progressspinner";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import axios from "axios";
import config from "../config";
import AdminHeader from "./AdminHeader";
import { Tooltip } from "primereact/tooltip";
import AdminSubHeader from "./AdminSubHeader";
const AdminOrderBook = () => {
  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [backClicked, setBackClicked] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const toast = useRef(null);
  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });}
  const fetchData = async () => {
    const userId = localStorage.getItem("userId"); // Fetch the user ID from local storage

    if (!userId) {
      setError(new Error("User ID not found"));
      setLoading(false);
      return;
    }

    setLoading(true);

    await axios
      .post(`${config.apiDomain}/api/common/order_book`, {
        user_id: userId,
      })
      .then((response) => {
        if (response.data.data) {
          setData(response.data.data);
        } else {
          setError(new Error("No data found"));
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(new Error(error.message || "Failed to fetch data"));
        setLoading(false);
      });
  };

 

  const handleRefresh = async () => {
    const userId = localStorage.getItem("userId"); // Fetch the user ID from local storage
  
    if (!userId) {
      setError(new Error("User ID not found"));
      setLoading(false);
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await axios.post(`${config.apiDomain}/api/common/order_book`, {
        user_id: userId,
      });
  
      if (response.data && response.data.st === 1) {
        const errorMsg = response.data.msg || "Success";
        setData(response.data.data); // Assuming response.data.data is an array to set in DataTable
       
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: toTitleCase(errorMsg),
          life: 3000,
        });
      } else if (response.data && response.data.st === 2) {
        const errorMsg = response.data.msg || "Warning";
        setError(new Error(errorMsg));
        toast.current.show({
          severity: "warn",
          summary: "Warning",
          detail: toTitleCase(errorMsg),
          life: 3000,
        });
      } else if (response.data && (response.data.st === 3 || response.data.st === 4)) {
        const errorMsg = response.data.msg || "Danger: Server Error";
        setError(new Error(errorMsg));
        toast.current.show({
          severity: "error",
          summary: "Error",
          detail: toTitleCase(errorMsg),
          life: 3000,
        });
      } else {
        const errorMsg = response.data.msg || "Failed to fetch data";
        setError(new Error(errorMsg));
        toast.current.show({
          severity: "error",
          summary: "Error",
          detail: toTitleCase(errorMsg),
          life: 3000,
        });
      }
    } catch (error) {
      const errorMsg = error.response ? error.response.data.msg || "Failed to fetch data" : error.message || "Failed to fetch data";
      setError(new Error(errorMsg));
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: toTitleCase(errorMsg),
        life: 3000,
      });
    } finally {
      setLoading(false);
    }
  };
  
  


  const rowClassName = (rowData, rowIndex) => {
    return rowIndex % 2 === 0 ? 'even-row' : 'odd-row';
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  const handleBack = () => {
    if (!backClicked) {
      setBackClicked(true);
      navigate(-1);
    }
  };

  const renderTransactionType = (rowData) => {
    const style = {
      color: rowData.transactiontype === 'BUY' ? 'green' : 'orange'
    };
    return <span style={style}>{rowData.transactiontype}</span>;
  };

  const renderorderstatus = (rowData) => {
    const style = {
      color: rowData.orderstatus === 'complete' ? 'green' : 'orange'
    };
    return <span style={style}>{rowData.orderstatus}</span>;
  };
  return (
    <>
     <AdminHeader></AdminHeader>
     <AdminSubHeader></AdminSubHeader>
     <Toast ref={toast} />
      <div className="container-xxl container-p-y">
      <nav aria-label="breadcrumb">
  <ol className="breadcrumb breadcrumb-style1 text-secondary">
    <li className="breadcrumb-item">
      <Link to="/student/dashboard" className="text-secondary">
        <i className="ri-home-7-line ri-lg"></i>
      </Link>
    </li>
    <li className="breadcrumb-item active text-secondary" aria-current="page">
      Order Book
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

            <h5 className="mb-0 mx-auto">Order Book</h5>
            <div></div>
          </div>
          <div className="d-flex justify-content-end mb-3">
            {loading ? (
                                         <i className=" custom-target-icon ri-loader-2-line ri-lg mt-4 ms-e p-text-secondary"

                strokeWidth="5"
                fill="var(--surface-ground)"
                animationDuration=".5s"
              />
            ) : (
              <i
              className=" ri ri-refresh-line ri-lg mt-4 me-3"

                onClick={handleRefresh}
              />
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
            rows={20}
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
              
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="transactiontype"
              header="Transaction Type"
              body={renderTransactionType}
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
              field="instrumenttype"
              header="Instrument Type"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="strikeprice"
              header="Strike Price"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="optiontype"
              header="Option Type"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="orderstatus"
              header="Order Status"
              body={renderorderstatus}
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              header="Actions"
              body={(rowData) => (
                   <Link to={`/admin/order_book/order_details/${rowData.uniqueorderid}`}>

                  <button className="btn btn-primary active btn-xs">
                    <i className="ri-timeline-view"></i>
                  </button>
                </Link>
              )}
            ></Column>
          </DataTable>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdminOrderBook;
