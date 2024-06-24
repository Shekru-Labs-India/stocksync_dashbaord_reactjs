import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import Footer from "../component/Footer";
import Header from "../component/Header";
import SubHeader from "../component/SubHeader";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import axios from "axios";
import config from "../../app3/config";
import { Tooltip } from 'primereact/tooltip';

const ManageStudent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [students, setStudents] = useState([]);
  const userId = localStorage.getItem("userId");
  const [backClicked, setBackClicked] = useState(false);


  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
 
  const [modalOpen, setModalOpen] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false); // Track if file has been uploaded
  const [successCount, setSuccessCount] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [errorDetails, setErrorDetails] = useState([]);

  const teacherId = localStorage.getItem('teacherId'); // Get teacher ID from localStorage
 
  
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setError(null);
    } else {
      setFile(null);
      setFileName('');
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      setError('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('teacher_id', userId);
    formData.append('csv_file', file);

    try {
      const response = await fetch('https://ghanish.in/api/teacher/bulk_upload_students', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (response.ok) {
        setSuccessCount(data.success_count);
        setErrorCount(data.error_count);
        setErrorDetails(data.error_details);
        setFileUploaded(true);
      } else {
        setError(data.msg || 'Failed to upload file.');
      }
    } catch (error) {
      setError('Failed to upload file.');
    }
  };



  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${config.apiDomain}/api/teacher/manage_students/listview`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ teacher_id: userId })
      });
      const data = await response.json();
      if (response.ok && data.st === 1) {
        setStudents(data.data);
      } else {
        console.error(data.message || 'Failed to fetch students');
      }
    } catch (error) {
      console.error('Network error', error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = async (studentId) => {
    try {
      const response = await fetch(`${config.apiDomain}/api/teacher/student_active_switch`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ student_id: studentId })
      });
      const responseData = await response.json();

      if (response.ok && responseData.st === 1) {
        const updatedStudents = students.map(student => {
          if (student.student_id === studentId) {
            return {
              ...student,
              active_status: !student.active_status
            };
          }
          return student;
        });

        setStudents(updatedStudents);
        alert('Student status updated successfully');
      } else {
        alert(responseData.msg || 'Failed to update student status');
      }
    } catch (error) {
      console.error('Network error', error);
      alert('Network error');
    }
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
          body: JSON.stringify({ student_id: rowData.student_id }),
        }
      );
      const responseData = await response.json();

      if (response.ok && responseData.st === 1) {
        const updatedStudents = students.filter(
          (student) => student.student_id !== rowData.student_id
        );

        setStudents(updatedStudents);
        alert("Student deleted successfully");
      } else {
        alert(responseData.msg || "Failed to delete student");
      }
    } catch (error) {
      console.error("Network error", error);
      alert("Network error");
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  
  const handleBack = () => {
    if (!backClicked) {
      setBackClicked(true);
      navigate(-1);
    }
  };

  const handleRefresh = () => {
    fetchData();
  };

  const handleEdit = (rowData) => {
    navigate(`/teacher/update_student/${rowData.student_id}`, { state: rowData });
  };

  return (
    <>
      <Header />
      <SubHeader />
      <div className="container-xxl container-p-y" align="center">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-style1 text-secondary">
            <li className="breadcrumb-item">
              <Link to="/teacher/dashboard" className="text-secondary">
                <i className="ri-home-5-line ri-lg"></i>
              </Link>
            </li>
            <li className="breadcrumb-item active text-secondary" aria-current="page">
              Manage Student
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
        <h5 className="mb-0">Manage Student</h5>
      </div>
      <div className="col text-end mb-5">
     
        <button
          type="button"
          className="btn btn-primary me-3"
          onClick={() => setModalOpen(true)}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i className="ri-folder-upload-fill"></i>
        </button>
       

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  File Upload
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    setFile(null);
                    setFileName('');
                    setError(null);
                    setFileUploaded(false);
                  }}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    
                    <div className="d-flex align-items-center">
                      <input
                        type="file"
                        className="form-control me-2"
                        id="fileUpload"
                        onChange={handleFileChange}
                      />
                    
                      {error && <p className="text-danger me-2 mb-0">{error}</p>}
                      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
           
              

              {/* Table display */}
              {fileUploaded && (
                <div className="modal-body mt-3">
            
                  <h5 className="text-start">Success Uploaded: {successCount}</h5>
                  <h5 className="text-start">Error Uploaded: {errorCount}</h5>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Row</th>
                        <th>Error</th>
                      </tr>
                    </thead>
                    <tbody>
                      {errorDetails.map((detail, index) => (
                        <tr key={index}>
                          <td>{detail.row}</td>
                          <td>{detail.error}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {error && <div className="text-danger">{error}</div>}
                </div>
              )}
               
               </div>
               <div className="modal-footer">
               
               
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                </div>
                </div>
                
          </div>
          </div>
        
      
        <Link to="/teacher/create_student">
          <button className="btn btn-success">
            <i className="ri-add-circle-line ri-lg me-2"></i><span>Create Student</span>
          </button>
        </Link>
     
        </div>
   
    </div>
          <div className="d-flex justify-content-end mb-3">
            {loading ? (
              <i className="custom-target-icon ri-loader-2-line ri-lg mt-4 me-3 p-text-secondary" />
            ) : (
              <div className="mt-4">
                <Tooltip target=".custom-target-icon" />
                <i
                  className="custom-target-icon ri ri-refresh-line ri-lg me-3 p-text-secondary"
                  data-pr-tooltip="Refresh"
                  onClick={handleRefresh}
                  data-pr-position="top"
                  style={{ cursor: 'pointer' }}
                />
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
          <DataTable
            value={students}
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
            />
            <Column
              align={"center"}
              style={{ border: "1px solid #ddd" }}
              field="mobile"
              header="Mobile"
            />
            <Column
              align={"center"}
              style={{ border: "1px solid #ddd" }}
              header="Status"
              body={(rowData) => (
                <button
                  className={`btn rounded-pill btn-xs ${
                    rowData.broker_status
                      ? "btn-outline-success"
                      : "btn-outline-danger"
                  } waves-effect`}
                >
                  {rowData.broker_status ? "Connected" : "Disconnected"}
                </button>
              )}
            />
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              header="Active Status"
              body={(rowData) => (
                <button
                  className={`btn rounded-pill btn-xs ${
                    rowData.active_status
                      ? "btn-outline-success"
                      : "btn-outline-danger"
                  } waves-effect`}
                  onClick={() => handleToggle(rowData.student_id)}
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
                    to={`/teacher/view_student/${rowData.student_id}`}
                    state={{ teacherId: rowData.student_id }}
                  >
                    <button className="btn btn-primary me-3 custom-btn-action1">
                      <i className="ri-timeline-view ri-lg"></i>
                    </button>
                  </Link>

                  <Link
                    to={`/teacher/update_student/${rowData.student_id}`}
                    state={{ teacherId: rowData.student_id }}
                  >
                  <button
                    className="btn btn-info me-3 custom-btn-action1"
                   
                    
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
            />
          </DataTable>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ManageStudent;
