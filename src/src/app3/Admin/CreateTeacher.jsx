import React, { useState ,useRef} from "react";
import AdminHeader from "./AdminHeader";
import Footer from "../component/Footer";
import AdminSubHeader from "./AdminSubHeader";
import { Link, useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import axios from "axios";
import config from "../config";
import { Toast } from 'primereact/toast';
const CreateTeacher = () => {
  const navigate = useNavigate();
  const [backClicked, setBackClicked] = useState(false);
  const toast = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    commission: "10",
    trading_power: "",
    lot_size_limit: "1" // Added missing lot_size_limit in initial state
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only digits and set a maximum limit of 5000
    if (name === 'lot_size_limit') {
      if (!/^\d*$/.test(value)) {
        setError('Only digits are allowed');
        return;
      } else if (parseInt(value, 10) > 5000) {
        setError('Maximum limit is 5000');
        return;
      } else {
        setError(null); // Clear error if valid
      }
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBack = () => {
    if (!backClicked) {
      setBackClicked(true);
      navigate(-1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${config.apiDomain}/api/admin/manage_teachers/create`,
        formData
      );

      if (response.data && response.data.st === 1) {
          toast.current.show({ severity: 'success', summary: 'Success', detail: response.data.msg, life: 3000 });

        navigate("/admin/manage_teacher");
      } else {
        setError(new Error(response.data.msg || "Failed to create teacher"));
      }
    } catch (error) {
      setError(new Error(error.message || "Failed to create teacher"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AdminHeader />
      <AdminSubHeader />

      <div className="container-xxl flex-grow-1 container-p-y">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-style1 text-secondary">
            <li className="breadcrumb-item">
              <Link to="/admin/dashboard" className="text-secondary">
                <i className="ri-home-7-line ri-lg"></i>
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/admin/manage_teacher" className="text-secondary">
                Manage Teacher
              </Link>
            </li>
            <li className="breadcrumb-item active text-secondary" aria-current="page">
              Create Teacher
            </li>
          </ol>
        </nav>
        <div className="card p-5">
          <div className="row align-items-center">
            <div className="col-5 text-start mb-5">
              <button
                onClick={handleBack}
                className="btn rounded-pill btn-outline-secondary btn-xs"
              >
                <i className="ri-arrow-left-circle-fill me-1 ri-md"></i> Back
              </button>
            </div>
            <div className="col-6 text-start mb-5">
              <h5 className="mb-0">Create Teacher</h5>
            </div>
          </div>
          <div className="row">
            <h5 className="text-start">
              {" "}
              <i className="ri-user-line ri-ms me-2"></i>
              Personal Information
            </h5>
            <div className="col-12">
              <form onSubmit={handleSubmit}>
                <div className="row mt-1">
                  <div className="col-3">
                    <div className="form-floating form-floating-outline">
                      <input
                        className="form-control"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                      />
                      <label htmlFor="name">
                        {" "}
                        <span className="text-danger">*</span> Name{" "}
                      </label>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="form-floating form-floating-outline">
                      <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-mail"
                        required
                      />
                      <label htmlFor="email">
                        {" "}
                        <span className="text-danger">*</span> E-mail{" "}
                      </label>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="form-floating form-floating-outline">
                      <input
                        className="form-control"
                        type="text"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Mobile Number"
                        required
                      />
                      <label htmlFor="mobile">
                        {" "}
                        <span className="text-danger">*</span> Mobile Number{" "}
                      </label>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="form-floating form-floating-outline">
                      <input
                        className="form-control"
                        type="text"
                        id="lot_size_limit"
                        name="lot_size_limit"
                        value={formData.lot_size_limit}
                        onChange={handleChange}
                        placeholder="Lot Size Limit"
                        required
                      />
                      <label htmlFor="lot_size_limit">
                        <span className="text-danger">*</span> Lot Size Limit{" "}
                      </label>
                      {error && typeof error === 'string' && (
                        <p className="text-danger">{error}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-3 mt-3">
                    <div className="form-floating form-floating-outline">
                      <input
                        type="text"
                        className="form-control"
                        id="commission"
                        name="commission"
                        value="10"
                        onChange={handleChange}
                        placeholder="Commission"
                        required
                      />
                      <label htmlFor="commission">
                        <span className="text-danger">*</span> Commission
                      </label>
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div className="row mb-3">
                  <h5 className="text-start">
                    {" "}
                    <i className="ri-group-line ri-ms me-2"></i>
                    Broker Information
                  </h5>

                  <div className="col-3">
                    <div className="form-floating form-floating-outline">
                      <input
                        type="text"
                        className="form-control"
                        id="brokerClientId"
                        name="brokerClientId"
                        placeholder="Broker Client ID"
                        required
                      />
                      <label htmlFor="brokerClientId">
                        <span className="text-danger">*</span> Client ID
                      </label>
                    </div>
                  </div>

                  <div className="col-3">
                    <div className="form-floating form-floating-outline">
                      <input
                        type="text"
                        className="form-control"
                        id="brokerPassword"
                        name="brokerPassword"
                        placeholder="Broker Password"
                        required
                      />
                      <label htmlFor="brokerPassword">
                        {" "}
                        <span className="text-danger">*</span> Password
                      </label>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="form-floating form-floating-outline">
                      <input
                        type="text"
                        className="form-control"
                        id="brokerQrTotpToken"
                        name="brokerQrTotpToken"
                        placeholder="Broker QR TOTP Token"
                        required
                      />
                      <label htmlFor="brokerQrTotpToken">
                        {" "}
                        <span className="text-danger">*</span> QR TOTP Token
                      </label>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="form-floating form-floating-outline">
                      <input
                        type="text"
                        className="form-control"
                        id="brokerApiKey"
                        name="brokerApiKey"
                        placeholder="Broker API Key"
                        required
                      />
                      <label htmlFor="brokerApiKey">
                        {" "}
                        <span className="text-danger">*</span> API Key
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                <div className="col-5 text-start mb-5 mt-4">
    <button
      onClick={handleBack}
      className="btn rounded-pill btn-outline-secondary btn-xs"
    >
      <i className="ri-arrow-left-circle-fill me-1 ri-md"></i> Back
    </button>
  </div>
  <div className="col-7 text-end mb-5 mt-4">
  {loading && <i className="ri-loader-2-line text-secondary me-2"></i>}
  <Button
                    type="submit"
                    label="Save Data"
        icon="ri-checkbox-circle-line ri-lg"
        className="btn btn-success rounded-pill"
                    disabled={loading}
                    onClick={handleSubmit}
                  />
                   <Toast ref={toast} position="top-right" />
  </div>
</div>

              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CreateTeacher;
