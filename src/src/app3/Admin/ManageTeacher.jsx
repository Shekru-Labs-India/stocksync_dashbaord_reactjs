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
const ManageTeacher = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleToggle = async (userId) => {
    try {
      const response = await fetch(`${config.apiDomain}/api/admin/teacher_active_switch`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ teacher_id: userId })
      });
      const responseData = await response.json();

      if (response.ok && responseData.st === 1) {
        const updatedData = data.map(item => {
          if (item.user_id === userId) {
            return {
              ...item,
              active_status: !item.active_status
            };
          }
          return item;
        });

        setData(updatedData);
        alert('Teacher status updated successfully');
      } else {
        alert(responseData.msg || 'Failed to update teacher status');
      }
    } catch (error) {
      console.error('Network error', error);
      alert('Network error');
    }
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${config.apiDomain}/api/admin/manage_teachers/listview`
      );

      if (response.data && response.data.st === 1) {
        setData(response.data.data);
      } else {
        setError(new Error(response.data.msg || "Failed to fetch data"));
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

  const handleEdit = (rowData) => {
    navigate(`/admin/update_teacher/${rowData.user_id}`, { state: rowData });
  };

  const handleDelete = async (rowData) => {
    try {
      const response = await fetch(
        `${config.apiDomain}/api/teacher/manage_students/delete`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_id: rowData.user_id }),
        }
      );
      const responseData = await response.json();
  
      if (response.ok && responseData.st === 1) {
        // Update the data state by removing the deleted teacher
        const updatedData = data.filter(
          (item) => item.user_id !== rowData.user_id
        );

        setData(updatedData);
        alert("Teacher deleted successfully");
      } else {
        alert(responseData.msg || "Failed to delete teacher");
      }
    } catch (error) {
      console.error("Network error", error);
      alert("Network error");
    }
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
  <ol className="breadcrumb breadcrumb-style1 text-secondary">
    <li className="breadcrumb-item">
      <Link to="/admin/dashboard" className="text-secondary">
        <i className="ri-home-line ri-lg"></i>
      </Link>
    </li>
   
    <li className="breadcrumb-item active text-secondary" aria-current="page">
   Manage Teacher
    </li>
  </ol>
</nav>
        <div className="card p-5">
          <div className="row align-items-center">
            <div className="col text-start mb-5">
            <Button
              onClick={handleBack}
              className="btn btn-transparent p-button-text small-button"
              style={{ color: "A9A9A9", borderColor: "A9A9A9", borderStyle: "solid",width:'72px', }}            >
              <i className="ri-arrow-left-circle-line me-1 ri-md"></i> Back
            </Button>
            </div>
            <div className="col text-center mb-5">
              <h5 className="mb-0">Manage Teacher</h5>
            </div>
            <div className="col text-end mb-5">
              <Link to="/admin/create_teacher">
                <button className="btn btn-success">
                  <i className="ri-add-circle-line ri-lg"> Create Teacher</i>
                </button>
              </Link>
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
              field="name"
              header="Name"
              sortable
            ></Column>
            <Column
              align={"center"}
              style={{ border: "1px solid #ddd" }}
              field="mobile"
              header="Mobile"
            ></Column>
            <Column
              align={"center"}
              style={{ border: "1px solid #ddd" }}
              header="Status"
              body={(rowData) => (
                <button
                  className={`btn rounded-pill ${
                    rowData.broker_status
                      ? "btn-outline-success"
                      : "btn-outline-danger"
                  } waves-effect`}
                >
                  {rowData.broker_status ? "Connected" : "Disconnected"}
                </button>
              )}
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              header="Active Status"
              body={(rowData) => (
                
                    <button
                  className={`btn rounded-pill ${
                    rowData.active_status
                      ? "btn-outline-success"
                      : "btn-outline-danger"
                  } waves-effect`}
                  onClick={() => handleToggle(rowData.user_id)}
                >
                  {rowData.active_status ? 'Active' : 'Inactive'}
                </button>
              )}
            />
            <Column
              align={"center"}
              style={{ border: "1px solid #ddd" }}
              header="Actions"
              body={(rowData) => (
                <>
                  <Link
                    to={`/admin/view_teacher/${rowData.user_id}`}
                    state={{ teacherId: rowData.user_id }}
                  >
                    <button className="btn btn-primary me-3 custom-btn-action1">
                      <i className="ri-timeline-view ri-lg"></i>
                    </button>
                  </Link>

                  <button
                    className="btn btn-info me-3 custom-btn-action1"
                    onClick={() => handleEdit(rowData)}
                  >
                    <i className="ri-edit-line ri-lg"></i>
                  </button>

                  <button
                    className="btn btn-danger active text-align custom-btn-action1"
                    onClick={() => handleDelete(rowData)}
                  >
                    <i className="ri-close-line ri-lg"></i>
                  </button>
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

export default ManageTeacher;
