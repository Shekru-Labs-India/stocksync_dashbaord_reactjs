import React, { useEffect, useState ,useRef} from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Tooltip } from "primereact/tooltip";
import { ProgressSpinner } from "primereact/progressspinner";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import axios from "axios";
import { Modal, Button } from "react-bootstrap"; 
import Footer from "../component/Footer";
import Header from "../component/Header";
import SubHeader from "../component/SubHeader";
import { Toast } from "primereact/toast";
import config from "../../app3/config";

const OrderbookDetails = () => {
  const { uniqueorderid } = useParams();
  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const toast = useRef(null);
  const [backClicked, setBackClicked] = useState(false);
  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const userId = localStorage.getItem("userId");

  const fetchOrderDetails = async () => {
    setLoading(true);

    try {
      const response = await axios.post(`${config.apiDomain}/api/common/order_details`, {
        user_id: userId,
        uniqueorderid: uniqueorderid,
      });

      if (response.data.st === 1 && response.data.data) {
        const orderDetails = response.data.data;
        setData([orderDetails]); // Set the order details data
      } else {
        setError(new Error("No data found"));
      }
    } catch (error) {
      setError(new Error(error.message || "Failed to fetch data"));
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setLoading(true);

    try {
      const response = await axios.post(`${config.apiDomain}/api/common/order_details`, {
        user_id: userId,
        uniqueorderid: uniqueorderid,
      });

      if (response.data.st === 1 && response.data.data) {
        const orderDetails = response.data.data;
        setData([orderDetails]); // Set the order details data
        const errorMsg = response.data.msg || "Success";
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
  


  useEffect(() => {
    fetchOrderDetails();
  }, [uniqueorderid]);

  
  const handleBack = () => {
    if (!backClicked) {
      setBackClicked(true);
      navigate(-1);
    }
  };

  const rowClassName = (rowData, rowIndex) => {
    return rowIndex % 2 === 0 ? "even-row" : "odd-row";
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
            <li className="breadcrumb-item">
              <Link to="/order_book" className="text-secondary">
                Order Book
              </Link>
            </li>
            <li className="breadcrumb-item active text-secondary" aria-current="page">
              Order Book Details
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

            <h5 className="mb-0 mx-auto">Order Book Details</h5>
            <div></div>
          </div>
          <div className="d-flex justify-content-end mb-3">
            {loading ? (
                                   <i className=" custom-target-icon ri-loader-2-line ri-lg me-3 mt-4 p-text-secondary"

                strokeWidth="5"
                fill="var(--surface-ground)"
                animationDuration=".5s"
              />
            ) : (
              <div className="mt-4">
                <Tooltip target=".custom-target-icon" />
                <i className="custom-target-icon ri ri-refresh-line ri-lg me-3 p-text-secondary"
                   data-pr-tooltip="Refresh"
                   data-pr-position="top"
                   style={{ cursor: 'pointer' }}
                   onClick={handleRefresh} // Adjust unique order ID dynamically if needed
                >
                </i>
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
            rows={20}
            showGridlines
            loading={loading}
            globalFilter={globalFilter}
            emptyMessage="No records found"
            rowClassName={rowClassName}
          >
            <Column align="center" style={{ border: "1px solid #ddd" }} field="variety" header="Variety" ></Column>
            <Column align="center" style={{ border: "1px solid #ddd" }} field="ordertype" header="Order Type"></Column>
            <Column align="center" style={{ border: "1px solid #ddd" }} field="producttype" header="Product Type"></Column>
            <Column align="center" style={{ border: "1px solid #ddd" }} field="quantity" header="Quantity"></Column>
            <Column align="center" style={{ border: "1px solid #ddd" }} field="lotsize" header="Lot Size"></Column>
            <Column align="center" style={{ border: "1px solid #ddd" }} field="tradingsymbol" header="Symbol"></Column>
            <Column align="center" style={{ border: "1px solid #ddd" }} field="transactiontype" header="Transaction Type"></Column>
            <Column align="center" style={{ border: "1px solid #ddd" }} field="exchange" header="Exchange"></Column>
            <Column align="center" style={{ border: "1px solid #ddd" }} field="instrumenttype" header="Instrument Type"></Column>
            <Column align="center" style={{ border: "1px solid #ddd" }} field="strikeprice" header="Strike Price"></Column>
            <Column align="center" style={{ border: "1px solid #ddd" }} field="optiontype" header="Option Type"></Column>
            <Column align="center" style={{ border: "1px solid #ddd" }} field="expirydate" header="Expiry Date"></Column>
            <Column align="center" style={{ border: "1px solid #ddd" }} field="orderstatus" header="Order Status"></Column>
          </DataTable>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OrderbookDetails;

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