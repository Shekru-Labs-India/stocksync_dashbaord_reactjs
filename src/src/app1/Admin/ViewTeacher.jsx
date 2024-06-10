import React from "react";
import AdminHeader from "./AdminHeader";
import Footer from "../component/Footer";
import AdminSubHeader from "./AdminSubHeader";
import { Link, useNavigate } from "react-router-dom";

const ViewTeacher = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <AdminHeader />
      <AdminSubHeader />

      <div className="container-xxl flex-grow-1 container-p-y">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-style1">
            <li className="breadcrumb-item">
              <Link to="/"> Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/admin/manage_teacher"> Manage Teacher</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              View Teacher
            </li>
          </ol>
        </nav>
        <div className="card p-5">
          <div className="row align-items-center mb-5">
            <div className="col text-start">
              <button onClick={handleBack} className="btn btn-transparent mt-3">
                Back
              </button>
            </div>
            <div className="col text-start">
              <h5 className="mb-0">View Teacher</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row mt-1">
                <div className="col-3">
                  <span className="text-black">
                    <strong>Viraj Hole</strong>
                  </span>
                  <div>Name</div>
                </div>
                <div className="col-3">
                  <span className="text-black">
                    {" "}
                    <strong>7774829155</strong>
                  </span>
                  <div>Mobile</div>
                </div>
                <div className="col-3">
                  <span className="text-black">
                    {" "}
                    <strong>virajhole7774@gmail.com</strong>
                  </span>
                  <div>Email</div>
                </div>
                <div className="col-3">
                  <span className="text-black">
                    {" "}
                    <strong>None</strong>
                  </span>
                  <div>Aadhar</div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5">
              <div className="row mt-1">
                <div className="col-3">
                  <span className="text-black">
                    <strong>BAEPH3656F</strong>
                  </span>
                  <div>Pancard Number</div>
                </div>
                <div className="col-3">
                  <span className="text-black">
                    {" "}
                    <strong>Not Connected</strong>
                  </span>
                  <div>Broker Status</div>
                </div>
                <div className="col-3">
                  <span className="text-black">
                    {" "}
                    <strong>--</strong>
                  </span>
                  <div>Balance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>

      <Footer />
    </>
  );
};

export default ViewTeacher;
