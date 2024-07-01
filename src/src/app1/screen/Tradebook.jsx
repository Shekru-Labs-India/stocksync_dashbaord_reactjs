import React, { useEffect, useState,useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { Tooltip } from 'primereact/tooltip';


import SubHeader from "../component/SubHeader";

import { Link, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import axios from "axios";
import config from "../../app3/config";
import { Toast } from "primereact/toast";
import { Modal } from "react-bootstrap"; 
const TradeBook = () => {
  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const toast = useRef(null);
  const [backClicked, setBackClicked] = useState(false);
  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  const fetchData = async () => {
    console.log("fetchData called");
    const userId = localStorage.getItem("userId"); // Fetch the user ID from local storage

    if (!userId) {
      setError(new Error("User ID not found"));
      setLoading(false);
      return;
    }

    setLoading(true);

    await axios
      .post(`${config.apiDomain}/api/common/trade_book`, {
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

 
  const handleBack = () => {
    if (!backClicked) {
      setBackClicked(true);
      navigate(-1);
    }
  };

  const handleRefresh = async () => {
    console.log("fetchData called");
    const userId = localStorage.getItem("userId"); // Fetch the user ID from local storage

    if (!userId) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "User ID not found",
        life: 3000,
      });
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${config.apiDomain}/api/common/trade_book`, {
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
    }  finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // This should ideally be called once when the component mounts
  }, []);

  const renderTransactionType = (rowData) => {
    const style = {
      color: rowData.transactiontype === 'BUY' ? 'green' : 'orange'
    };
    return <span style={style}>{rowData.transactiontype}</span>;
  };

  const formatExpiryDate = (dateString) => {
    const monthMap = {
      JAN: 'January',
      FEB: 'February',
      MAR: 'March',
      APR: 'April',
      MAY: 'May',
      JUN: 'June',
      JUL: 'July',
      AUG: 'August',
      SEP: 'September',
      OCT: 'October',
      NOV: 'November',
      DEC: 'December'
    };

    const day = dateString.slice(0, 2);
    const monthAbbr = dateString.slice(2, 5).toUpperCase();
    const year = dateString.slice(5);

    const month = monthMap[monthAbbr];

    if (day && month && year) {
      return `${day} ${month} ${year}`;
    }
    return dateString;
  };

  const renderExpiryDate = (rowData) => {
    return formatExpiryDate(rowData.expirydate);
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
      <Toast ref={toast} />
            <Header />
            <SubHeader />
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

      <div className="container-xxl container-p-y">
      <nav aria-label="breadcrumb">
  <ol className="breadcrumb breadcrumb-style1 text-secondary">
    <li className="breadcrumb-item">
    <Link to="/teacher/dashboard" className="text-secondary">
                <i className="ri-home-7-line ri-lg"></i>
              </Link>
    </li>
    <li className="breadcrumb-item active text-secondary" aria-current="page">
      Trade Book
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

            <h5 className="mb-0 mx-auto">Trade Book</h5>
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
              <div className="mt-4">
              <Tooltip target=".custom-target-icon" />
              <i className="custom-target-icon ri ri-refresh-line ri-lg me-3 p-text-secondary "
    data-pr-tooltip="Refresh"
    onClick={handleRefresh}
    data-pr-position="top"
    
    
    style={{  cursor: 'pointer' }}>
    
</i>
</div>
            )}
          
            <IconField iconPosition="left">
              <InputIcon className="ri ri-search-line"> </InputIcon>
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
            style={{ border: "1px solid #ddd" }}
            value={data}
            paginator
            rows={20}
            loading={loading}
            showGridlines
            globalFilter={globalFilter}
            emptyMessage="No records found"
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
              field="producttype"
              header="Product Type"
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
              field="marketlot"
              header="Lot Size"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="expirydate"
              header="Expiry Date"
               body={renderExpiryDate}
            ></Column>
           
          </DataTable>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TradeBook;


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