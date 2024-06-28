import React, { useState, useEffect } from "react";
import AdminSubHeader from "./AdminSubHeader";
import Footer from "../component/Footer";
import AdminHeader from "./AdminHeader";

const AdminDashboard = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ghanish.in/api/admin/admin_home", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMessage(data.msg); // Assuming 'msg' is the key in the response
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <AdminHeader />
      <AdminSubHeader />
     
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div className="layout-container">
        <div class="container-xxl flex-grow-1 container-p-y">
            
            
            <div class="row g-6">
           
            

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
    </>
  );
};

export default AdminDashboard;

