import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import AdminHeader from "./AdminHeader";
import Footer from "../component/Footer";
import AdminSubHeader from "./AdminSubHeader";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import axios from "axios";
import config from "../config";
const TeacherReport = () => {
  const navigate = useNavigate();
  const userId = "120"; // Change this to dynamically get the user ID as needed
  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [summary, setSummary] = useState({
    total_trades_count: 0,
    total_profitable_trades: 0,
    total_losing_trades: 0,
    total_commission: 0.0,
  });

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${config.apiDomain}/api/admin/month_wise_teacher_report`,
        {
          teacher_id: userId,
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

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <AdminHeader />
      <AdminSubHeader />

      <div className="container-xxl container-p-y">
      <nav aria-label="breadcrumb">
  <ol className="breadcrumb breadcrumb-style1 text-secondary">
    <li className="breadcrumb-item">
      <Link to="/admin/dashboard" className="text-secondary">
        <i className="ri-home-line ri-lg"></i>
      </Link>
    </li>
    <li className="breadcrumb-item">
      <Link to="/admin/profile" className="text-secondary">
        
      </Link>
    profile
    </li>
    <li className="breadcrumb-item">
      <Link to="/admin/teacher_list" className="text-secondary">
        
      </Link>
   Teacher List
    </li>
  
    <li className="breadcrumb-item active text-secondary" aria-current="page">
    Teacher Report
    </li>
  </ol>
</nav>
        <div className="card p-5">
          <div className="row align-items-center">
            <div className="col text-start mb-5 ">
            <Button
              onClick={handleBack}
              className="btn btn-transparent p-button-text small-button"
              style={{ color: "A9A9A9", borderColor: "A9A9A9", borderStyle: "solid",width:'72px', }}            >
              <i className="ri-arrow-left-circle-line me-1 ri-md"></i> Back
            </Button>
            </div>
            <div className="col text-start mb-5">
              <h5 className="mb-0">Teacher Report</h5>
            </div>
          </div>

          <div className="d-flex justify-content-end mb-3">
            {loading ? (
              <ProgressSpinner
                style={{
                  width: "30px",
                  height: "30px",
                  marginRight: "10px",
                }}
                strokeWidth="5"
                fill="var(--surface-ground)"
                animationDuration=".5s"
              />
            ) : (
              <Button
                type="button"
                icon="pi pi-refresh"
                text
                onClick={fetchData}
              />
            )}
            <IconField iconPosition="left">
              <InputIcon className="pi pi-search"> </InputIcon>
              <InputText
                type="search"
                placeholder="Search"
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
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
            rows={5}
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
              sortable
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
                <Link
                  to={`/admin/teacher_report_details/${userId}/${rowData.month_name}`}
                >
                  <button className="btn btn-info active custom-btn-action1">
                    <i className="ri-timeline-view"></i>
                  </button>
                </Link>
              )}
            ></Column>
          </DataTable>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TeacherReport;

