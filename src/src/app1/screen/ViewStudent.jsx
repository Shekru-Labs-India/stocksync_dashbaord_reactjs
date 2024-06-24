import { Bar } from "react-chartjs-2";
import config from "../../app3/config";
import { Button } from "primereact/button";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SubHeader from "../component/SubHeader";

const ViewStudent = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Use useParams to get the ID from the route
  const [backClicked, setBackClicked] = useState(false);

  const [teacherData, setTeacherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 
  const handleBack = () => {
    if (!backClicked) {
      setBackClicked(true);
      navigate(-1);
    }
  };

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

  // Dummy data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Student Progress',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <Header />
      <SubHeader />
      <div className="container-xxl container-p-y">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-style1 text-secondary">
            <li className="breadcrumb-item">
              <Link to="/teacher/dashboard" className="text-secondary">
                <i className="ri-home-5-line ri-lg"></i>
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/teacher/manage_student" className="text-secondary">
                Manage Teacher
              </Link>
            </li>
            <li className="breadcrumb-item active text-secondary" aria-current="page">
              View Teacher
            </li>
          </ol>
        </nav>
        <div className="card p-5">
          <div className="row align-items-center mb-5">
            <div className="col-5 text-start">
            <button
                onClick={handleBack}
                className="btn rounded-pill btn-outline-secondary btn-xs"
              >
                <i className="ri-arrow-left-circle-fill me-1 ri-md"></i> Back
              </button>
            </div>
            <div className="col-6 text-start">
              <h5 className="mb-0">View Teacher</h5>
            </div>
          </div>
          {loading && <div>Loading...</div>}
          {error && <div>{error.message}</div>}
          {teacherData && (
            <div className="row">
              <div className="col-12">
                <div className="row mt-1">
                  <div className="col-3">
                    <span className="text-black">
                      <strong>{teacherData.name}</strong>
                    </span>
                    <div>Name</div>
                  </div>
                  <div className="col-3">
                    <span className="text-black">
                      <strong>{teacherData.mobile}</strong>
                    </span>
                    <div>Mobile</div>
                  </div>
                  <div className="col-3">
                    <span className="text-black">
                      <strong>{teacherData.email}</strong>
                    </span>
                    <div>Email</div>
                  </div>
                  <div className="col-3">
                    <span className={` ${teacherData.broker_status ? 'text-success' : 'text-danger'}`}>
                      <strong>{teacherData.broker_status ? 'Connected' : 'Disconnected'}</strong>
                    </span>
                    <div>Broker Status</div>
                  </div>
                 
                </div>
              </div>
              <div className="col-12 mt-5 mb-5">
              <div className="row mt-1">
                  
                  <div className="col-3">
                    <span className="text-black">
                      <strong>{teacherData.amount}</strong>
                    </span>
                    <div>Balance</div>
                  </div>
                </div>
              </div>

              <hr />
              <div className="col-12 mt-5 mb-5">
  <div className="row mt-1">
  

    <div className="col-3">
      <span className="text-black">
        <strong>{teacherData.broker_api_key}</strong>
      </span>
      <div>Broker API Key</div>
    </div>

    <div className="col-3">
      <span className="text-black">
        <strong>{teacherData.broker_client_id}</strong>
      </span>
      <div>Broker Client ID</div>
    </div>

    <div className="col-3">
      <span className="text-black">
        <strong>{teacherData.broker_password}</strong>
      </span>
      <div>Broker Password</div>
    </div>

    <div className="col-3  mt-5">
      <span className="text-black">
        <strong>{teacherData.broker_qr_totp_token}</strong>
      </span>
      <div>Broker QR TOTP Token</div>
    </div>
  </div>
</div>

              <div className="col-12 mt-5">
                <div className="row mt-5">
                  <div className="col-12 text-center">
                    <span className="text-black">
                      <h1>
                        <strong>10</strong>
                      </h1>
                    </span>
                    <div>Total Student</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <hr />
        <div className="col-xl-12 col-12 mb-6">
          <div className="card">
            <div className="card-header header-elements">
              <h5 className="card-title mb-0">Latest Statistics</h5>
              <div className="card-action-element ms-auto py-0">
                <div className="card-header-elements ms-auto py-0 d-none d-sm-block">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="radio toggle button group"
                  >
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="dailyRadio"
                      defaultChecked
                    />
                    <label
                      className="btn btn-outline-secondary"
                      htmlFor="dailyRadio"
                    >
                      Daily
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="weeklyRadio"
                    />
                    <label
                      className="btn btn-outline-secondary"
                      htmlFor="weeklyRadio"
                    >
                      Weekly
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="monthlyRadio"
                    />
                    <label
                      className="btn btn-outline-secondary"
                      htmlFor="monthlyRadio"
                    >
                      Monthly
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="yearlyRadio"
                    />
                    <label
                      className="btn btn-outline-secondary"
                      htmlFor="yearlyRadio"
                    >
                      Yearly
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="chart-container">
                <div className="chart has-fixed-height" id="bars_basic">
                  <Bar data={data} options={options} />
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

export default ViewStudent;
