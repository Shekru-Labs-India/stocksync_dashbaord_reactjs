import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Header from "../component/Header";
import SubHeader from "../component/SubHeader";
import Footer from "../component/Footer";
import { Button } from "primereact/button";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { ProgressSpinner } from "primereact/progressspinner";
import { Tooltip } from 'primereact/tooltip';
const StudentReport = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId"); 
  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [backClicked, setBackClicked] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `https://ghanish.in/api/teacher/month_wise_list`,
        {
          teacher_id: userId,
        }
      );

      if (response.data && response.data.st === 1) {
        setData(response.data.data);
      } else {
        setError(new Error(response.data.message || "No data found"));
      }
    } catch (error) {
      setError(new Error(error.message || "Failed to fetch data"));
    } finally {
      setLoading(false);
    }
  };

 
  const handleBack = () => {
    if (!backClicked) {
      setBackClicked(true);
      navigate(-1);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              <Link to="/teacher/user_profile" className="text-secondary">
                Profile
              </Link>
            </li>
            
            <li className="breadcrumb-item active text-secondary" aria-current="page">
              Student Report
            </li>
          </ol>
        </nav>
        <div className="card p-5">
          <div className="row align-items-center">
            <div className="col text-start mb-5">
            <button
                onClick={handleBack}
                className="btn rounded-pill btn-outline-secondary btn-xs"
              >
                <i className="ri-arrow-left-circle-fill me-1 ri-md"></i> Back
              </button>
            </div>
            <div className="col text-start mb-5">
              <h5 className="mb-0">Student Report</h5>
            </div>
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
    onClick={fetchData}
    data-pr-position="top"
    
    
    style={{  cursor: 'pointer' }}>
    
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
          {error ? (
            <div className="text-center text-danger">{error.message}</div>
          ) : (
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Month</th>
                    <th scope="col">Total Trades</th>
                    <th scope="col">Profitable Trades</th>
                    <th scope="col">Losing Trades</th>
                    <th scope="col">Commission</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.month_name}</td>
                      <td>{item.trades_count}</td>
                      <td>{item.profitable_trades}</td>
                      <td>{item.losing_trades}</td>
                      <td>{item.commission}</td>
                      <td>
                        <Link
                          to={`/teacher/student_report_list/${userId}/${item.month_name}`}
                        >
                          <button className="btn btn-info active custom-btn-action1">
                            <i className="ri-timeline-view"></i>
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default StudentReport;
