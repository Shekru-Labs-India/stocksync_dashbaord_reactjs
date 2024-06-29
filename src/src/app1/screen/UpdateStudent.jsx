import React, { useState, useEffect ,useRef} from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SubHeader from "../component/SubHeader";
import { Toast } from 'primereact/toast';
import axios from "axios";
import config from "../../app3/config";
import { Modal, Button } from "react-bootstrap"; 
const UpdateStudent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const studentData = location.state || {};
  const { id } = useParams();
  const [teacherData, setTeacherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [backClicked, setBackClicked] = useState(false);
  const toast = useRef(null); 
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.post(
          `${config.apiDomain}/api/teacher/manage_students/view`,
          {
            student_id: id,
          }
        );

        if (response.data && response.data.st === 1) {
          setTeacherData(response.data.data);
        } else {
          setError(new Error(response.data.msg || "Failed to fetch data"));
        }
      } catch (error) {
        setError(new Error(error.message || "Failed to fetch data"));
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);
  const handleBack = () => {
    if (!backClicked) {
      setBackClicked(true);
      navigate(-1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const payload = {
      student_id: id,
      name: teacherData.name,
      mobile: teacherData.mobile,
      email: teacherData.email,
      commission: teacherData.commission,
      lot_size_limit: teacherData.lot_size_limit,
      broker_client_id: teacherData.broker_client_id,
      broker_password: teacherData.broker_password,
      broker_qr_totp_token: teacherData.broker_qr_totp_token,
      broker_api_key: teacherData.broker_api_key
    };

    try {
      const response = await axios.put(`${config.apiDomain}/api/teacher/manage_students/update`, payload, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.data.st === 1) {
        // Show success toast
        toast.current.show({ severity: 'success', summary: 'Success', detail: response.data.msg, life: 3000 });
        navigate("/teacher/manage_student");
      } else {
        // Show error toast
        toast.current.show({ severity: 'error', summary: 'Error', detail: response.data.msg || 'Failed to update student', life: 3000 });
      }
    } catch (error) {
      console.error("Network error", error);
      // Show network error toast
      toast.current.show({ severity: 'error', summary: 'Error', detail: 'Network error', life: 3000 });
    } finally {
      setLoading(false); // Stop loading
    }
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
          <div className="Container">
            <div className="container-xxl flex-grow-1 container-p-y">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-style1">
                  <li className="breadcrumb-item">
                    <Link to="/teacher/dashboard" className="text-secondary">
                      <i className="ri-home-5-line ri-lg"></i>
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/teacher/manage_student" className="text-secondary">Manage Student</Link>
                  </li>
                  <li className="breadcrumb-item active text-secondary" aria-current="page" >Update Student</li>
                </ol>
              </nav>
              {loading && <div>Loading...</div>}
              {error && <div>{error.message}</div>}
              {teacherData && (
                <div className="row">
                  <div className="col-md-12">
                    <div className="card mb-6">
                      <div className="d-flex justify-content-between align-items-center card-header">
                        <button
                          onClick={handleBack}
                          className="btn rounded-pill btn-outline-secondary btn-xs"
                        >
                          <i className="ri-arrow-left-circle-fill me-1 ri-md"></i> Back
                        </button>
                        <h5 className="text-center mb-0 flex-grow-1">Update Student</h5>
                      </div>
                      <div className="card-body pt-0">
                        <form id="formAccountSettings" onSubmit={handleSubmit}>
                          <div className="row mt-1 g-3">
                          <h5 className="text-start">
              {" "}
              <i className="ri-user-line ri-ms me-2"></i>
              Personal Information
            </h5>
                            <div className="col-md-3">
                              <div className="form-floating form-floating-outline">
                                <input
                                  className="form-control"
                                  type="text"
                                  id="name"
                                  name="name"
                                  placeholder="Name"
                                  value={teacherData.name}
                                  onChange={(e) =>
                                    setTeacherData({ ...teacherData, name: e.target.value })
                                  }
                                  required
                                />
                                <label htmlFor="name"><span className="text-danger">*</span> Name</label>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="input-group input-group-merge">
                                <div className="form-floating form-floating-outline">
                                  <input
                                    type="text"
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    className="form-control"
                                    placeholder="202 555 0111"
                                    value={teacherData.mobile}
                                    onChange={(e) =>
                                      setTeacherData({ ...teacherData, mobile: e.target.value })
                                    }
                                    required
                                  />
                                  <label htmlFor="mobileNumber"><span className="text-danger">*</span> Mobile Number</label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-floating form-floating-outline">
                                <input
                                  className="form-control"
                                  type="email"
                                  id="email"
                                  name="email"
                                  placeholder="john.doe@example.com"
                                  value={teacherData.email}
                                  onChange={(e) =>
                                    setTeacherData({ ...teacherData, email: e.target.value })
                                  }
                                  required
                                />
                                <label htmlFor="email"><span className="text-danger">*</span> E-mail</label>
                              </div>
                            </div>
                            <div className="col-md-3">
  <div className="form-floating form-floating-outline">
    <input
      type="number"
      className="form-control"
      id="lot_size_limit"
      name="lot_size_limit"
      placeholder="Lot Size Limit"
      value={teacherData.lot_size_limit}
      onChange={(e) => {
        let value = e.target.value;
        if (value === "" || (value >= 0 && value <= 5000)) {
          setTeacherData({ ...teacherData, lot_size_limit: value });
        }
      }}
      required
    />
    <label htmlFor="lot_size_limit">
      <span className="text-danger">*</span> Lot Size Limit
    </label>
  </div>
</div>
</div>
                          <div className="row mt-3 g-3">
                     
                            <div className="col-md-3">
                              <div className="form-floating form-floating-outline">
                                <input
                                  type="number"
                                  className="form-control"
                                  id="commission"
                                  name="commission"
                                  placeholder="Commission"
                                  value={teacherData.commission}
                                  onChange={(e) =>
                                    setTeacherData({ ...teacherData, commission: e.target.value })
                                  }
                                  required
                                />
                                <label htmlFor="commission"><span className="text-danger">*</span> Commission</label>
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div className="row mt-3 g-3">
                          <h5 className="text-start">
                    {" "}
                    <i className="ri-group-line ri-ms me-2"></i>
                    Broker Information
                  </h5>
                            <div className="col-md-3">
                              <div className="form-floating form-floating-outline">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="brokerClientId"
                                  name="brokerClientId"
                                  placeholder="Broker Client ID"
                                  value={teacherData.broker_client_id}
                                  onChange={(e) =>
                                    setTeacherData({ ...teacherData, broker_client_id: e.target.value })
                                  }
                                />
                                <label htmlFor="brokerClientId"><span className="text-danger">*</span> Broker Client ID</label>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-floating form-floating-outline">
                                <input
                                  type="password"
                                  className="form-control"
                                  id="brokerPassword"
                                  name="brokerPassword"
                                  placeholder="Broker Password"
                                  value={teacherData.broker_password}
                                  onChange={(e) =>
                                    setTeacherData({ ...teacherData, broker_password: e.target.value })
                                  }
                                />
                                <label htmlFor="brokerPassword"><span className="text-danger">*</span> Broker Password</label>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-floating form-floating-outline">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="brokerQrTotpToken"
                                  name="brokerQrTotpToken"
                                  placeholder="Broker QR Totp Token"
                                  value={teacherData.broker_qr_totp_token}
                                  onChange={(e) =>
                                    setTeacherData({ ...teacherData, broker_qr_totp_token: e.target.value })
                                  }
                                />
                                <label htmlFor="brokerQrTotpToken"><span className="text-danger">*</span> Broker QR Totp Token</label>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-floating form-floating-outline">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="brokerApiKey"
                                  name="brokerApiKey"
                                  placeholder="Broker API Key"
                                  value={teacherData.broker_api_key}
                                  onChange={(e) =>
                                    setTeacherData({ ...teacherData, broker_api_key: e.target.value })
                                  }
                                />
                                <label htmlFor="brokerApiKey"><span className="text-danger">*</span> Broker API Key</label>
                              </div>
                            </div>
                          </div>
                          <Toast ref={toast} />
                          <div className="row">
  <div className="col text-start mt-4">
    <button
      onClick={handleBack}
      className="btn rounded-pill btn-outline-secondary btn-xs"
    >
      <i className="ri-arrow-left-circle-fill me-1 ri-md"></i> Back
    </button>
  </div>
  <div className="col text-end mt-4">
  {loading && <i className="ri-loader-2-line text-secondary me-2"></i>}
<button type="submit" className="btn rounded-pill btn-info btn-sm">
      <i className="ri-checkbox-circle-line ri-lg me-2"></i> Save Data
    </button>

    
  </div>
</div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateStudent;

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