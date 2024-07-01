import React, { useEffect, useState,useRef } from "react";
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
import { Toast } from "primereact/toast";
import config from "../config";
const TeacherList = () => {
  const navigate = useNavigate();
  
  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [backClicked, setBackClicked] = useState(false);
  const [error, setError] = useState(null);
  const toast = useRef(null);
  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
         `${config.apiDomain}/api/admin/teacher_report_teacher_list`
      );

      if (response.data && response.data.st === 1) {
        setData(response.data.teacher_data);
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

 

  const openTeacherReport = (teacherId) => {
    navigate(`/admin/teacher_report_details/${teacherId}`);
  };

  const handleRefresh = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
         `${config.apiDomain}/api/admin/teacher_report_teacher_list`
      );

      if (response.data && response.data.st === 1) {
        setData(response.data.teacher_data);

    
          const errorMsg = response.data.msg || "Success";
        // Assuming response.data.data is an array to set in DataTable
         
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
      <i className="ri-home-7-line ri-lg"></i>
      </Link>
    </li>
    <li className="breadcrumb-item">
      <Link to="/admin/profile" className="text-secondary">
        
      </Link>
    profile
    </li>
  
    <li className="breadcrumb-item active text-secondary" aria-current="page">
    Teacher List
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
            rows={20}
            showGridlines
            loading={loading}
            globalFilter={globalFilter}
            emptyMessage="No records found"
          >
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="name"
              header="Name"
        
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="student_count"
              header="Student Count"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              header="Actions"
              body={(rowData) => (
                <Link to={`/admin/teacher_report/${rowData.teacher_id}`}>
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

export default TeacherList;
