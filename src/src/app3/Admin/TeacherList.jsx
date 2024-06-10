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

const TeacherList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const userId = "44"; // Change this to dynamically get the user ID as needed

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://192.46.212.210/api/common/my_report",
        {
          user_id: userId,
        }
      );

      if (response.data && response.data.st === 1) {
        setData(response.data.completed_trades_per_month);
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

  const handleRefresh = () => {
    fetchData();
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <>
      <AdminHeader />
      <AdminSubHeader />

      <div className="container-xxl container-p-y" align="center">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-style1">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/admin/profile">Profile</Link>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              Teacher List
            </li>
          </ol>
        </nav>
        <div className="card p-5">
          <div className="row align-items-center">
            <div className="col text-start mb-5">
              <button onClick={handleBack} className="btn btn-transparent">
                Back
              </button>
            </div>
            <div className="col text-start mb-5">
              <h5 className="mb-0">Teacher List</h5>
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
                onClick={handleRefresh}
              />
            )}
            <IconField iconPosition="left">
              <InputIcon className="pi pi-search"></InputIcon>
              <InputText
                type="search"
                placeholder="Search"
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
              />
            </IconField>
          </div>
          <DataTable
            value={data}
            paginator
            rows={5}
            showGridlines
            loading={loading}
            globalFilter={globalFilter}
            emptyMessage="No records found"
            style={{ border: "1px solid #ddd" }}
          >
            <Column
              align={"center"}
              style={{ border: "1px solid #ddd" }}
              body={() => (
                <>
                  <span>Viraj Hole</span>
                </>
              )}
              header="Name"
              sortable
            ></Column>
            <Column
              align={"center"}
              style={{ border: "1px solid #ddd" }}
              body={() => (
                <>
                  <span>5</span>
                </>
              )}
              header="Students"
            ></Column>

            <Column
              align={"center"}
              style={{ border: "1px solid #ddd" }}
              header="Actions"
              body={() => (
                <>
                  <Link to="/admin/teacher_report">
                    <button className="btn btn-info">
                      <i className="ri-timeline-view"></i>
                    </button>
                  </Link>
                </>
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
