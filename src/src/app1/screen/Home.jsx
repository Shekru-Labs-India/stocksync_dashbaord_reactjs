// home.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SubHeader from "../component/SubHeader";
import config from "../../app3/config";
import Popup from "../../app3/Admin/Popup";
import { Modal, Button } from "react-bootstrap"; 
const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // State for displaying the Popup component

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `${config.apiDomain}/api/teacher/teacher_home`
        );
        setData(response.data);
      } catch (error) {
        setError(error.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
    <div>
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
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div className="layout-container">
          <div className="container-xxl flex-grow-1 container-p-y">
            <div className="row g-6">
              <div className="col-sm-6 col-lg-3">
                <div className="card card-border-shadow-primary h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                      <div className="avatar me-4">
                        <span className="avatar-initial rounded bg-label-primary"><i className="ri-car-line ri-24px"></i></span>
                      </div>
                      <h4 className="mb-0">42</h4>
                    </div>
                    <h6 className="mb-0 fw-normal">On route vehicles</h6>
                    <p className="mb-0">
                      <span className="me-1 fw-medium">+18.2%</span>
                      <small className="text-muted">than last week</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card card-border-shadow-warning h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                      <div className="avatar me-4">
                        <span className="avatar-initial rounded bg-label-warning"><i className='ri-alert-line ri-24px'></i></span>
                      </div>
                      <h4 className="mb-0">8</h4>
                    </div>
                    <h6 className="mb-0 fw-normal">Vehicles with errors</h6>
                    <p className="mb-0">
                      <span className="me-1 fw-medium">-8.7%</span>
                      <small className="text-muted">than last week</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card card-border-shadow-danger h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                      <div className="avatar me-4">
                        <span className="avatar-initial rounded bg-label-danger"><i className='ri-route-line ri-24px'></i></span>
                      </div>
                      <h4 className="mb-0">27</h4>
                    </div>
                    <h6 className="mb-0 fw-normal">Deviated from route</h6>
                    <p className="mb-0">
                      <span className="me-1 fw-medium">+4.3%</span>
                      <small className="text-muted">than last week</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card card-border-shadow-info h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                      <div className="avatar me-4">
                        <span className="avatar-initial rounded bg-label-info"><i className='ri-time-line ri-24px'></i></span>
                      </div>
                      <h4 className="mb-0">13</h4>
                    </div>
                    <h6 className="mb-0 fw-normal">Late vehicles</h6>
                    <p className="mb-0">
                      <span className="me-1 fw-medium">-2.5%</span>
                      <small className="text-muted">than last week</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

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