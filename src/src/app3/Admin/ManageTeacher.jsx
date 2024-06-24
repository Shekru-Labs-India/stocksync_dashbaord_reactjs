import React, { useEffect, useState, useRef } from "react";
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
import { Tooltip } from "primereact/tooltip";
import { Toast } from "primereact/toast";

const ManageTeacher = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [backClicked, setBackClicked] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const toast = useRef(null);
 

  const handleToggle = async (userId) => {
    try {
      const response = await fetch(
        `${config.apiDomain}/api/admin/teacher_active_switch`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ teacher_id: userId }),
        }
      );
      const responseData = await response.json();

      if (response.ok && responseData.st === 1) {
        const updatedData = data.map((item) => {
          if (item.user_id === userId) {
            return {
              ...item,
              active_status: !item.active_status,
            };
          }
          return item;
        });

        setData(updatedData);
        alert("Teacher status updated successfully");
      } else {
        alert(responseData.msg || "Failed to update teacher status");
      }
    } catch (error) {
      console.error("Network error", error);
      alert("Network error");
    }
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${config.apiDomain}/api/admin/manage_teachers/listview`);

      if (response.data && response.data.st === 1) {
        // Assuming each item in the data array has a timestamp or ID to sort by
        const sortedData = response.data.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        setData(sortedData);
      } else {
        const errorMsg = response.data.msg || "Failed to fetch data";
        setError(new Error(errorMsg));
      }
    } catch (error) {
      const errorMsg = error.message || "Failed to fetch data";
      setError(new Error(errorMsg));
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
      const response = await axios.get(
        `${config.apiDomain}/api/admin/manage_teachers/listview`
      );
  
      if (response.data && response.data.st === 1) {
        const sortedData = response.data.data.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        const errorMsg = response.data.msg || "Success: Server Error";
        setError(new Error(errorMsg));
        setData(sortedData);
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
    } finally {
      setLoading(false);
    }
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
          body: JSON.stringify({ student_id: rowData.user_id }),
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
    fetchData();
  }, []);
  const nameBodyTemplate = (rowData) => {
    return <span>{toTitleCase(rowData.name)}</span>;
  };
  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  return (
    <>
          <Toast ref={toast} />
      <AdminHeader />
      <AdminSubHeader />

      <div className="container-xxl container-p-y" align="center">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-style1 text-secondary">
            <li className="breadcrumb-item">
              <Link to="/admin/dashboard" className="text-secondary">
                <i class="ri-home-5-line ri-lg"></i>
              </Link>
            </li>

            <li
              className="breadcrumb-item active text-secondary"
              aria-current="page"
            >
              Manage Teacher
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
            <div className="col text-center mb-5">
              <h5 className="mb-0">Manage Teacher</h5>
            </div>
            <div className="col text-end mb-5">
              <Link to="/admin/create_teacher">
                <button className="btn btn-success">
                  <i className="ri-add-circle-line ri-lg me-1"> </i>
                  <span>Create Teacher</span>
                </button>
              </Link>
            </div>
          </div>

          <div className="d-flex justify-content-end mb-3">
            {loading ? (
                                    <i className=" custom-target-icon ri-loader-2-line ri-lg mt-4 me-3"></i>

            ) : (
              <div className="mt-4">
                <Tooltip target=".custom-target-icon" />
              <i
               data-pr-tooltip="Refresh"
               data-pr-position="top"
                className=" ri ri-refresh-line ri-lg mt-4 me-3"
                onClick={handleRefresh}
                style={{ cursor: "pointer" }}
              />
              </div>
            )}
          
            <IconField iconPosition="left">
              <InputIcon className="ri ri-search-line "></InputIcon>
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
            value={data}
            paginator
            rows={5}
            showGridlines
            loading={loading}
            globalFilter={globalFilter}
            emptyMessage="No records found"
            style={{ border: "1px solid #ddd",  }}
             className="p-datatable-rounded"
            
             body={nameBodyTemplate}
          >
            <Column
              align={"center"}
              style={{ border: "1px solid #ddd" }}
              field="name"
              header="Name"
             
              body={nameBodyTemplate}
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
              header=" Broker Status"
              body={(rowData) => (
                <button
                  className={`btn rounded-pill btn-xs ${rowData.broker_status
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
              header="Account Status"
              body={(rowData) => (
                <button
                  className={`btn rounded-pill  btn-xs ${rowData.active_status
                      ? "btn-outline-success"
                      : "btn-outline-danger"
                    } waves-effect`}
                  onClick={() => handleToggle(rowData.user_id)}
                >
                  {rowData.active_status ? "Active" : "Inactive"}
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
                  <Link
                    to={`/admin/update_teacher/${rowData.user_id}`}
                    state={{ teacherId: rowData.user_id }}
                  >
                  <button
                    className="btn btn-info me-3 custom-btn-action1"
                    // onClick={() => handleEdit(rowData)}
                  >
                    <i className="ri-edit-line ri-lg"></i>
                  </button>
</Link>
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
