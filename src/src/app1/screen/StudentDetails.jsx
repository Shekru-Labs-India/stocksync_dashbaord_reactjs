import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SubHeader from "../component/SubHeader";
import { Link, useNavigate } from "react-router-dom";

const StudentDetails = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
          <Header />
          <SubHeader />
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div className="layout-container">
      
          <div className="Container">
            <div className="container-xxl flex-grow-1 container-p-y">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-style1">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/manage_student">Manage Student</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Student Details
                  </li>
                </ol>
              </nav>
              <div className="row">
                <div className="col-md-12">
                  <div className="card mb-6">
                    <div className="d-flex justify-content-between align-items-center card-header">
                      <button onClick={handleBack} className="btn btn-transparent">
                        Back
                      </button>
                      <h5 className="text-center mb-0 flex-grow-1">Student Details</h5>
                    </div>
                    <div className="card-body text-start">
                      <div className="row mb-3 ">
                        <div className="col-md-3 ">
                          <p className="fw-bold mb-0 ">John Doe</p>
                          <label className="form-label">Name</label>
                        </div>
                        <div className="col-md-3">
                          <p className="fw-bold mb-0">2025550111</p>
                          <label className="form-label">Mobile</label>
                        </div>
                        <div className="col-md-3">
                          <p className="fw-bold mb-0">john.doe@example.com</p>
                          <label className="form-label">Email</label>
                        </div>
                        <div className="col-md-3">
                          <p className="fw-bold mb-0">1234 5678 9012</p>
                          <label className="form-label">Aadhaar Number</label>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-3">
                          <p className="fw-bold mb-0">ABCDE1234F</p>
                          <label className="form-label">PAN Card Number</label>
                        </div>
                        <div className="col-md-3">
                          <p className="fw-bold mb-0 text-danger">Not Connected</p>
                          <label className="form-label">Broker Status</label>
                        </div>
                        <div className="col-md-3">
                          <p className="fw-bold mb-0 ">1000</p>
                          <label className="form-label">Balance</label>
                        </div>
                        {/* Additional fields can be added here if needed */}
                      </div>
                    </div>
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

export default StudentDetails;
