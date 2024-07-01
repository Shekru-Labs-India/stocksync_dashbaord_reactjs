import React, { useEffect, useState,useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import Footer from "../component/Footer";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Modal} from "react-bootstrap"; 
import { ProgressSpinner } from "primereact/progressspinner";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import axios from "axios";
import { Tooltip } from 'primereact/tooltip';
import config from "../../app3/config";
import Header from "../component/Header";
import SubHeader from "../component/SubHeader";
import { Toast } from "primereact/toast";
const MyReport = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId"); // Fetch the user ID from localStorage
  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [backClicked, setBackClicked] = useState(false);
  const toast = useRef(null);
  const [summary, setSummary] = useState({
    total_trades_count: 0,
    total_profitable_trades: 0,
    total_losing_trades: 0,
    total_commission: 0.0,
  });
  const [month, setMonth] = useState(""); // State for month

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${config.apiDomain}/api/common/my_report`,
        {
          user_id: userId,
        }
      );

      if (response.data && response.data.st === 1) {
        setData(response.data.completed_trades_per_month);
        setSummary(response.data.completed_trades);
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
    setError(null);

    try {
      const response = await axios.post(
        `${config.apiDomain}/api/common/my_report`,
        {
          user_id:userId,
        }
      );

      if (response.data && response.data.st === 1) {
        setData(response.data.completed_trades_per_month);
        setSummary(response.data.completed_trades);
        
          const errorMsg = response.data.msg || "Success";
         // Assuming response.data.data is an array to set in DataTable
         
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




  const handleBack = () => {
    if (!backClicked) {
      setBackClicked(true);
      navigate(-1);
    }
  };

  const handleViewReport = (rowData) => {
    navigate(`/teacher/my_report_view`, { state: { userId, month: rowData.month_name } });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
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

 

  if (error) {
    return <div>Error: {error}</div>;
  }

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
     <Header></Header>
<SubHeader></SubHeader>
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
              <Link to="/teacher/user_profile" className="text-secondary"></Link>
              Profile
            </li>
            <li
              className="breadcrumb-item active text-secondary"
              aria-current="page"
            >
              My Report
            </li>
          </ol>
        </nav>
        <div className="card p-5">
          <div className="row align-items-center">
            <div className="col text-start mb-5 ">
            <button
                onClick={handleBack}
                className="btn rounded-pill btn-outline-secondary btn-xs"
              >
                <i className="ri-arrow-left-circle-fill me-1 ri-md"></i> Back
              </button>
            </div>
            <div className="col text-start mb-5">
              <h5 className="mb-0">My Report</h5>
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
                             <i className=" custom-target-icon ri-loader-2-line ri-lg mt-4 me-3 p-text-secondary"

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
            style={{
              border: "1px solid #ddd",
            }}
            align="center"
            value={data}
            paginator
            rows={20}
            showGridlines
            loading={loading}
            globalFilter={globalFilter}
            emptyMessage="No records found"
          >
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="month_name"
              header="Month"
              
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="trades_count"
              header="Total Trades"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="profitable_trades"
              header="Profitable Trades"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="losing_trades"
              header="Losing Trades"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="commission"
              header="Commission"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              header="Actions"
              body={(rowData) => (
                <Button
                  onClick={() => handleViewReport(rowData)}
                  className="btn btn-primary active custom-btn-action1"
                >
                  <i className="ri-timeline-view"></i>
                </Button>
              )}
            ></Column>
          </DataTable>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyReport;


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