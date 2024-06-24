import React, { useEffect, useState,useRef} from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import AdminHeader from "./AdminHeader";
import Footer from "../component/Footer";
import AdminSubHeader from "./AdminSubHeader";
import { Link, useNavigate,useParams } from "react-router-dom";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";

import axios from "axios";
import config from "../config";
import { Toast } from "primereact/toast";
const TeacherReport = () => {
  const { teacherId } = useParams();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [backClicked, setBackClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const toast = useRef(null);
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
          teacher_id: teacherId,
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
    if (!backClicked) {
      setBackClicked(true);
      navigate(-1);
    }
  };
  const handleRefresh = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${config.apiDomain}/api/admin/month_wise_teacher_report`,
        {
          teacher_id: teacherId,
        }
      );

      if (response.data && response.data.st === 1) {
        setData(response.data.completed_trades_per_month);
        setSummary(response.data.completed_trades);
        const errorMsg = response.data.msg || "Success";
        setData(response.data.teacher_data);  // Assuming response.data.data is an array to set in DataTable
       
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Toast ref={toast} />
      <AdminHeader />
      <AdminSubHeader />

      <div className="container-xxl container-p-y">
      <nav aria-label="breadcrumb">
  <ol className="breadcrumb breadcrumb-style1 text-secondary">
    <li className="breadcrumb-item">
      <Link to="/admin/dashboard" className="text-secondary">
      <i className="ri-home-5-line ri-lg"></i>
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
            <button
                onClick={handleBack}
                className="btn rounded-pill btn-outline-secondary btn-xs"
              >
                <i className="ri-arrow-left-circle-fill me-1 ri-md"></i> Back
              </button>
            </div>
            <div className="col text-start mb-5">
              <h5 className="mb-0">Teacher Report</h5>
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
              <i
              className=" ri ri-refresh-line ri-lg mt-4 me-3"

                onClick={handleRefresh}
              />
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
                  to={`/admin/teacher_report_details/${teacherId}/${rowData.month_name}`}
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

