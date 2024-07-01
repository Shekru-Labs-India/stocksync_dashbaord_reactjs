import React, { useEffect, useState ,useRef} from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import Footer from "../component/Footer";
import Header from "../component/Header";
import SubHeader from "../component/SubHeader";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Modal } from "react-bootstrap"; 
import { ProgressSpinner } from "primereact/progressspinner";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import axios from "axios";
import config from "../../app3/config";
import { Tooltip } from 'primereact/tooltip';
import { Toast } from "primereact/toast";
import { classNames } from 'primereact/utils';
const ManageStudent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);
  const [backClicked, setBackClicked] = useState(false);

  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false); // Track if file has been uploaded
  const [successCount, setSuccessCount] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [errorDetails, setErrorDetails] = useState([]);
  const [studentIdToUpdate, setStudentIdToUpdate] = useState(null); // State to hold the student ID to update

  const [isLoading, setIsLoading] = useState(false); // Track loading status
  const toast = useRef(null);
  // Get teacher ID from localStorage
  const userId = localStorage.getItem('userId');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const allowedTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

    if (selectedFile) {
      const fileType = selectedFile.name.split('.').pop(); // Get file extension
      if (!allowedTypes.includes(selectedFile.type) && !(fileType === 'csv' || fileType === 'xlsx')) {
        setError('Please select a CSV or Excel file.');
        setFile(null);
        setFileName('');
      } else {
        setFile(selectedFile);
        setFileName(selectedFile.name);
        setError(null);
      }
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

    setIsLoading(true); // Set loading to true

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
    } finally {
      setIsLoading(false); // Set loading to false
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
        setStudentIdToUpdate(studentId); // Set student ID to update after successful toggle
        setMessage('Student status updated successfully');
        setShowModal(true);
      } else {
        setMessage(responseData.msg || 'Failed to update student status');
        setShowModal(true);
      }
    } catch (error) {
      console.error('Network error', error);
      setMessage('Network error');
      setShowModal(true);
    }
  };
  
  const closeModal = (updateStatus = false) => {
    setShowModal(false);
    // Perform the update only if "OK" is clicked
    if (updateStatus && studentIdToUpdate) {
      const updatedStudents = students.map(student => {
        if (student.student_id === studentIdToUpdate) {
          return {
            ...student,
            active_status: !student.active_status
          };
        }
        return student;
      });
  
      setStudents(updatedStudents);
      // Reset studentIdToUpdate state
      setStudentIdToUpdate(null);
    }
    
    navigate("/teacher/manage_student") // Use React Router's history for better integration in a full React application
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
        
      } else {
        
      }
    } catch (error) {
      console.error("Network error", error);
      
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

  const handleRefresh = async () => {
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
      if (response.ok) {
        if (data.st === 1) {
          setStudents(data.data);
          toast.current.show({
            severity: "success",
            summary: "Success",
            detail: data.msg || "Data refreshed successfully",
            life: 3000,
          });
        } else if (data.st === 2) {
          toast.current.show({
            severity: "warn",
            summary: "Warning",
            detail: data.msg || "Warning: Data may not be refreshed",
            life: 3000,
          });
        } else if (data.st === 3) {
          toast.current.show({
            severity: "error",
            summary: "Error",
            detail: data.msg || "Failed to fetch data",
            life: 3000,
          });
        } else if (data.st === 4) {
          toast.current.show({
            severity: "error",
            summary: "Error",
            detail: data.msg || "Method not allowed",
            life: 3000,
          });
        }
      } else {
        throw new Error(data.msg || 'Failed to fetch data');
      }
    } catch (error) {
      console.error('Network error', error);
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Network error: Failed to fetch data",
        life: 3000,
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleEdit = (rowData) => {
    navigate(`/teacher/manage_student/update_student/${rowData.student_id}`, { state: rowData });
  };
  const nameBodyTemplate = (rowData) => {
    return <span>{toTitleCase(rowData.name)}</span>;
  };
  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

// Custom render function for lot size limit
const lotSizeBodyTemplate = (rowData) => {
  return `${rowData.lot_size_limit} Lot`;
};

// Custom render function for commission
const commissionBodyTemplate = (rowData) => {
  return `${rowData.commission}%`;
};

const [showPopup, setShowPopup] = useState(false); // State for displaying the Popup component

 

useEffect(() => {
  const checkTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Check if it's 9:15 AM or 3:15 PM
    if ((hours === 9 && minutes === 15) || (hours === 15 && minutes === 15)) {
      setShowPopup(true);
    }
  };

  const interval = setInterval(() => {
    checkTime();
  }, 60000); // Every minute

  // Clear interval on component unmount
  return () => clearInterval(interval);
}, []);

const handleClosePopup = () => {
  setShowPopup(false);
};



if (error) {
  return <div>Error: {error}</div>;
}

// Helper function to determine modal button variant
const getButtonVariant = () => {
  const now = new Date();
  const hours = now.getHours();

  if (hours === 9) {
    return "success"; // Green color for 9:15 AM
  } else if (hours === 15) {
    return "danger"; // Red color for 3:15 PM
  }
  return "secondary"; // Default color
};

  return (
    <>
       <Toast ref={toast} />
      <Header />
      <SubHeader />
      <Modal
        show={showPopup}
        onHide={handleClosePopup}
        dialogClassName={getColorModalClass()}
      >
        <Modal.Header closeButton>
          <Modal.Title>{getModalTitle()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{getModalBody()}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={getButtonVariant()} onClick={handleClosePopup}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="container-xxl container-p-y" align="center">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-style1 text-secondary">
            <li className="breadcrumb-item">
              <Link to="/teacher/dashboard" className="text-secondary">
                <i className="ri-home-7-line ri-lg"></i>
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
      <Tooltip target=".btn-upload" /> 
      <Button
          type="button"
          className="btn btn-primary btn-upload me-2" 
          onClick={() => setModalOpen(true)}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-pr-tooltip="Student Bulk Upload" 
          data-pr-position="top" 
          icon="ri-folder-upload-fill"
        >
          
        </Button>
       

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
                  Bulk Student Upload
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
                        accept=".csv, .xls, .xlsx"
                      />
                      {error && <p className="text-danger me-2 mb-0">{error}</p>}
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={handleSubmit}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>
                        ) : (
                          <>
                            <i className="ri-checkbox-circle-line ri-lg me-1"></i>
                            Submit
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>

              {/* Table display */}
              {/* Table display */}
              {fileUploaded && (
                  <div className="modal-body mt-3">
                    <h5 className="text-start">Success Uploaded: {successCount}</h5>
                    <h5 className="text-start">Error Uploaded: {errorCount}</h5>
                    <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                      <table className="table table-sm table-bordered">
                        <thead>
                          <tr>
                          <th style={{ textTransform: 'capitalize' }}>Rows</th>
                          <th style={{ textTransform: 'capitalize' }}>Error</th>
                          </tr>
                        </thead>
                        <tbody>
                          {errorDetails.map((item, index) => (
                            <tr key={index}>
                              <td>{item.row}</td>
                              <td>{item.error}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {error && <div className="text-danger">{error}</div>}
                  </div>
                )}
              </div>
              <div className="modal-footer justify-content-start">
                <button type="button" className="btn btn-outline-secondary me-auto" data-bs-dismiss="modal">
                  <i className="ri-close-line me-1"></i>
                  Close
                </button>
              </div>
                </div>
                
          </div>
          </div>
        
      
        <Link to="/teacher/manage_student/create_student">
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
            rows={20}
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
              body={nameBodyTemplate}
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
              field="lot_size_limit"
              header="Lot Size Limit"
              body={lotSizeBodyTemplate}
            />
              <Column
              align={"center"}
              style={{ border: "1px solid #ddd" }}
              field="commission"
              header="Commission"
              body={commissionBodyTemplate}
            />

<Column
  align={"center"}
  style={{ border: "1px solid #ddd" }}
  header="Broker Conn. Status"
  body={(rowData) => (
    <div className={classNames({
      'text-success': rowData.broker_status,
      'text-danger': !rowData.broker_status
    })}>
      {rowData.broker_status ? (
        <>
          <i className="ri-shield-check-line"></i> Connected
        </>
      ) : (
        <>
          <i className="ri-close-large-line"></i> Disconnected
        </>
      )}
    </div>
  )}
/>
            
            {/* <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              header="Account Status"
              body={(rowData) => (
                <button
                  className={`btn rounded-pill  btn-xs ${rowData.active_status
                      ? "btn-outline-success"
                      : "btn-outline-danger"
                    } waves-effect`}
                  onClick={() => handleToggle(rowData.student_id)}
                >
                  {rowData.active_status ? "Active" : "Inactive"}
                </button>
              )}
            /> */}
           <Column
  align="center"
  style={{ border: "1px solid #ddd" }}
  header="Account Status"
  body={(rowData) => (
    <button
      className={`btn rounded-pill btn-xs ${rowData.active_status ? "btn-outline-success" : "btn-outline-danger"} waves-effect`}
      onClick={() => handleToggle(rowData.student_id)}
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
                    to={`/teacher/manage_student/view_student/${rowData.student_id}`}
                    state={{ teacherId: rowData.student_id }}
                  >
                    <button className="btn btn-primary me-3 custom-btn-action1">
                      <i className="ri-timeline-view ri-lg"></i>
                    </button>
                  </Link>

                  <Link
                    to={`/teacher/manage_student/update_student/${rowData.student_id}`}
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

          <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog">
  <div className="modal-dialog modal-dialog-top modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Message</h5>
        <button type="button" className="btn-close" onClick={() => closeModal(false)}></button>
      </div>
      <div className="modal-body">
        <p>{message}</p>
      </div>
      
      <div className="modal-footer d-flex justify-content-between">
        
        <button type="button" className="btn btn-primary " onClick={() => closeModal(true)}>OK</button>
        <button type="button" className="btn btn-secondary ms-auto" onClick={() => closeModal(false)}> <i className="ri-close-line ri-lg me-1"></i>Cancel</button>
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

export default ManageStudent;


const getColorModalClass = () => {
  const now = new Date();
  const hours = now.getHours();

  if (hours === 9 || hours === 15) {
    return hours === 9 ? "modal-green" : "modal-red"; // Apply custom modal background colors
  }
  return "";
};

const getModalTitle = () => {
  const now = new Date();
  const hours = now.getHours();

  if (hours === 9) {
    return "Market is Open!";
  } else if (hours === 15) {
    return "Market is Closed!";
  }
  return "";
};

const getModalBody = () => {
  const now = new Date();
  const hours = now.getHours();

  if (hours === 9) {
    return "Market is currently open. Take necessary actions.";
  } else if (hours === 15) {
    return "Market is currently closed. Come back tomorrow.";
  }
  return "";
};
















// import React, { useEffect, useState ,useRef} from "react";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { InputText } from "primereact/inputtext";
// import Footer from "../component/Footer";
// import Header from "../component/Header";
// import SubHeader from "../component/SubHeader";
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "primereact/button";
// import { Modal } from "react-bootstrap"; 
// import { ProgressSpinner } from "primereact/progressspinner";
// import { IconField } from "primereact/iconfield";
// import { InputIcon } from "primereact/inputicon";
// import axios from "axios";
// import config from "../../app3/config";
// import { Tooltip } from 'primereact/tooltip';
// import { Toast } from "primereact/toast";
// import { classNames } from 'primereact/utils';
// const ManageStudent = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [globalFilter, setGlobalFilter] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [students, setStudents] = useState([]);
//   const [backClicked, setBackClicked] = useState(false);

//   const [message, setMessage] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [file, setFile] = useState(null);
//   const [fileName, setFileName] = useState('');
//   const [error, setError] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [fileUploaded, setFileUploaded] = useState(false); // Track if file has been uploaded
//   const [successCount, setSuccessCount] = useState(0);
//   const [errorCount, setErrorCount] = useState(0);
//   const [errorDetails, setErrorDetails] = useState([]);
//   const [studentIdToUpdate, setStudentIdToUpdate] = useState(null); // State to hold the student ID to update
//   const [studentToDelete, setStudentToDelete] = useState(null); // State to hold the student ID to update

//   const [isLoading, setIsLoading] = useState(false); // Track loading status
//   const toast = useRef(null);
//   // Get teacher ID from localStorage
//   const userId = localStorage.getItem('userId');

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     const allowedTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

//     if (selectedFile) {
//       const fileType = selectedFile.name.split('.').pop(); // Get file extension
//       if (!allowedTypes.includes(selectedFile.type) && !(fileType === 'csv' || fileType === 'xlsx')) {
//         setError('Please select a CSV or Excel file.');
//         setFile(null);
//         setFileName('');
//       } else {
//         setFile(selectedFile);
//         setFileName(selectedFile.name);
//         setError(null);
//       }
//     } else {
//       setFile(null);
//       setFileName('');
//     }
//   };

//   const handleSubmit = async () => {
//     if (!file) {
//       setError('Please select a file.');
//       return;
//     }

//     setIsLoading(true); // Set loading to true

//     const formData = new FormData();
//     formData.append('teacher_id', userId);
//     formData.append('csv_file', file);

//     try {
//       const response = await fetch('https://ghanish.in/api/teacher/bulk_upload_students', {
//         method: 'POST',
//         body: formData,
//       });
//       const data = await response.json();

//       if (response.ok) {
//         setSuccessCount(data.success_count);
//         setErrorCount(data.error_count);
//         setErrorDetails(data.error_details);
//         setFileUploaded(true);
//       } else {
//         setError(data.msg || 'Failed to upload file.');
//       }
//     } catch (error) {
//       setError('Failed to upload file.');
//     } finally {
//       setIsLoading(false); // Set loading to false
//     }
//   };


  


//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`${config.apiDomain}/api/teacher/manage_students/listview`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ teacher_id: userId })
//       });
//       const data = await response.json();
//       if (response.ok && data.st === 1) {
//         setStudents(data.data);
//       } else {
//         console.error(data.message || 'Failed to fetch students');
//       }
//     } catch (error) {
//       console.error('Network error', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleToggle = async (studentId) => {
//     try {
//       const response = await fetch(`${config.apiDomain}/api/teacher/student_active_switch`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ student_id: studentId })
//       });
//       const responseData = await response.json();
  
//       if (response.ok && responseData.st === 1) {
//         setStudentIdToUpdate(studentId); // Set student ID to update after successful toggle
//         setMessage('Student status updated successfully');
//         setShowModal(true);
//       } else {
//         setMessage(responseData.msg || 'Failed to update student status');
//         setShowModal(true);
//       }
//     } catch (error) {
//       console.error('Network error', error);
//       setMessage('Network error');
//       setShowModal(true);
//     }
//   };
  
//   const closeModal = (updateStatus = false) => {
//     setShowModal(false);
//     // Perform the update only if "OK" is clicked
//     if (updateStatus && studentIdToUpdate) {
//       const updatedStudents = students.map(student => {
//         if (student.student_id === studentIdToUpdate) {
//           return {
//             ...student,
//             active_status: !student.active_status
//           };
//         }
//         return student;
//       });
  
//       setStudents(updatedStudents);
//       // Reset studentIdToUpdate state
//       setStudentIdToUpdate(null);
//     }
    
//     navigate("/teacher/manage_student") // Use React Router's history for better integration in a full React application
//   };
 


//   const handleDelete = (rowData) => {
//     setStudentToDelete(rowData.student_id);
//     setMessage('Are you sure you want to delete this student?');
//     setShowModal(true);
//   };
  
//   const confirmDelete = async () => {
//     try {
//       const response = await fetch(
//         `${config.apiDomain}/api/teacher/manage_students/delete`,
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ student_id: studentToDelete }),
//         }
//       );
//       const responseData = await response.json();
  
//       if (response.ok && responseData.st === 1) {
//         const updatedStudents = students.filter(
//           (student) => student.student_id !== studentToDelete
//         );
  
//         setStudents(updatedStudents);
//         setMessage('Student deleted successfully');
//       } else {
//         setMessage(responseData.msg || 'Failed to delete student');
//       }
//     } catch (error) {
//       console.error("Network error", error);
//       setMessage('Network error');
//     } finally {
//       setShowModal(true);
//     }
//   };
  
//   const closeModals = (confirm = false) => {
//     setShowModal(false);
//     if (confirm && message === 'Are you sure you want to delete this student?') {
//       confirmDelete();
//     }
//     setStudentToDelete(null);
//   };
  
 
//   useEffect(() => {
//     fetchData();
//   }, [userId]);

  
//   const handleBack = () => {
//     if (!backClicked) {
//       setBackClicked(true);
//       navigate(-1);
//     }
//   };

//   const handleRefresh = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`${config.apiDomain}/api/teacher/manage_students/listview`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ teacher_id: userId })
//       });
//       const data = await response.json();
//       if (response.ok) {
//         if (data.st === 1) {
//           setStudents(data.data);
//           toast.current.show({
//             severity: "success",
//             summary: "Success",
//             detail: data.msg || "Data refreshed successfully",
//             life: 3000,
//           });
//         } else if (data.st === 2) {
//           toast.current.show({
//             severity: "warn",
//             summary: "Warning",
//             detail: data.msg || "Warning: Data may not be refreshed",
//             life: 3000,
//           });
//         } else if (data.st === 3) {
//           toast.current.show({
//             severity: "error",
//             summary: "Error",
//             detail: data.msg || "Failed to fetch data",
//             life: 3000,
//           });
//         } else if (data.st === 4) {
//           toast.current.show({
//             severity: "error",
//             summary: "Error",
//             detail: data.msg || "Method not allowed",
//             life: 3000,
//           });
//         }
//       } else {
//         throw new Error(data.msg || 'Failed to fetch data');
//       }
//     } catch (error) {
//       console.error('Network error', error);
//       toast.current.show({
//         severity: "error",
//         summary: "Error",
//         detail: "Network error: Failed to fetch data",
//         life: 3000,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   const handleEdit = (rowData) => {
//     navigate(`/teacher/manage_student/update_student/${rowData.student_id}`, { state: rowData });
//   };
//   const nameBodyTemplate = (rowData) => {
//     return <span>{toTitleCase(rowData.name)}</span>;
//   };
//   const toTitleCase = (str) => {
//     return str.replace(/\w\S*/g, (txt) => {
//       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
//   };

// // Custom render function for lot size limit
// const lotSizeBodyTemplate = (rowData) => {
//   return `${rowData.lot_size_limit} Lot`;
// };

// // Custom render function for commission
// const commissionBodyTemplate = (rowData) => {
//   return `${rowData.commission}%`;
// };

// const [showPopup, setShowPopup] = useState(false); // State for displaying the Popup component

 

// useEffect(() => {
//   const checkTime = () => {
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();

//     // Check if it's 9:15 AM or 3:15 PM
//     if ((hours === 9 && minutes === 15) || (hours === 15 && minutes === 15)) {
//       setShowPopup(true);
//     }
//   };

//   const interval = setInterval(() => {
//     checkTime();
//   }, 60000); // Every minute

//   // Clear interval on component unmount
//   return () => clearInterval(interval);
// }, []);

// const handleClosePopup = () => {
//   setShowPopup(false);
// };



// if (error) {
//   return <div>Error: {error}</div>;
// }

// // Helper function to determine modal button variant
// const getButtonVariant = () => {
//   const now = new Date();
//   const hours = now.getHours();

//   if (hours === 9) {
//     return "success"; // Green color for 9:15 AM
//   } else if (hours === 15) {
//     return "danger"; // Red color for 3:15 PM
//   }
//   return "secondary"; // Default color
// };

//   return (
//     <>
//        <Toast ref={toast} />
//       <Header />
//       <SubHeader />
//       <Modal
//         show={showPopup}
//         onHide={handleClosePopup}
//         dialogClassName={getColorModalClass()}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{getModalTitle()}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>{getModalBody()}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant={getButtonVariant()} onClick={handleClosePopup}>
//             Ok
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       <div className="container-xxl container-p-y" align="center">
//         <nav aria-label="breadcrumb">
//           <ol className="breadcrumb breadcrumb-style1 text-secondary">
//             <li className="breadcrumb-item">
//               <Link to="/teacher/dashboard" className="text-secondary">
//                 <i className="ri-home-5-line ri-lg"></i>
//               </Link>
//             </li>
//             <li className="breadcrumb-item active text-secondary" aria-current="page">
//               Manage Student
//             </li>
//           </ol>
//         </nav>
//         <div className="card p-5">
//         <div className="row align-items-center">
//       <div className="col text-start mb-5">
//         <button
//           onClick={handleBack}
//           className="btn rounded-pill btn-outline-secondary btn-xs"
//         >
//           <i className="ri-arrow-left-circle-fill me-1 ri-md"></i> Back
//         </button>
//       </div>
//       <div className="col text-center mb-5">
//         <h5 className="mb-0">Manage Student</h5>
//       </div>
//       <div className="col text-end mb-5">
//       <Tooltip target=".btn-upload" /> 
//       <Button
//           type="button"
//           className="btn btn-primary btn-upload me-2" 
//           onClick={() => setModalOpen(true)}
//           data-bs-toggle="modal"
//           data-bs-target="#exampleModal"
//           data-pr-tooltip="Student Bulk Upload" 
//           data-pr-position="top" 
//           icon="ri-folder-upload-fill"
//         >
          
//         </Button>
       

//         <div
//           className="modal fade"
//           id="exampleModal"
//           tabIndex="-1"
//           aria-labelledby="exampleModalLabel"
//           aria-hidden="true"
//         >
//          <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="exampleModalLabel">
//                   Bulk Student Upload
//                 </h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                   onClick={() => {
//                     setFile(null);
//                     setFileName('');
//                     setError(null);
//                     setFileUploaded(false);
//                   }}
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <form>
//                   <div className="mb-3">
//                     <div className="d-flex align-items-center">
//                       <input
//                         type="file"
//                         className="form-control me-2"
//                         id="fileUpload"
//                         onChange={handleFileChange}
//                         accept=".csv, .xls, .xlsx"
//                       />
//                       {error && <p className="text-danger me-2 mb-0">{error}</p>}
//                       <button
//                         type="button"
//                         className="btn btn-success"
//                         onClick={handleSubmit}
//                         disabled={isLoading}
//                       >
//                         {isLoading ? (
//                           <span
//                             className="spinner-border spinner-border-sm"
//                             role="status"
//                             aria-hidden="true"
//                           ></span>
//                         ) : (
//                           <>
//                             <i className="ri-checkbox-circle-line ri-lg me-1"></i>
//                             Submit
//                           </>
//                         )}
//                       </button>
//                     </div>
//                   </div>
//                 </form>

//               {/* Table display */}
//               {/* Table display */}
//               {fileUploaded && (
//                   <div className="modal-body mt-3">
//                     <h5 className="text-start">Success Uploaded: {successCount}</h5>
//                     <h5 className="text-start">Error Uploaded: {errorCount}</h5>
//                     <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
//                       <table className="table table-sm table-bordered">
//                         <thead>
//                           <tr>
//                           <th style={{ textTransform: 'capitalize' }}>Rows</th>
//                           <th style={{ textTransform: 'capitalize' }}>Error</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {errorDetails.map((item, index) => (
//                             <tr key={index}>
//                               <td>{item.row}</td>
//                               <td>{item.error}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                     {error && <div className="text-danger">{error}</div>}
//                   </div>
//                 )}
//               </div>
//               <div className="modal-footer justify-content-start">
//                 <button type="button" className="btn btn-outline-secondary me-auto" data-bs-dismiss="modal">
//                   <i className="ri-close-line me-1"></i>
//                   Close
//                 </button>
//               </div>
//                 </div>
                
//           </div>
//           </div>
        
      
//         <Link to="/teacher/manage_student/create_student">
//           <button className="btn btn-success">
//             <i className="ri-add-circle-line ri-lg me-2"></i><span>Create Student</span>
//           </button>
//         </Link>
     
//         </div>
   
//     </div>
//           <div className="d-flex justify-content-end mb-3">
//             {loading ? (
//               <i className="custom-target-icon ri-loader-2-line ri-lg mt-4 me-3 p-text-secondary" />
//             ) : (
//               <div className="mt-4">
//                 <Tooltip target=".custom-target-icon" />
//                 <i
//                   className="custom-target-icon ri ri-refresh-line ri-lg me-3 p-text-secondary"
//                   data-pr-tooltip="Refresh"
//                   onClick={handleRefresh}
//                   data-pr-position="top"
//                   style={{ cursor: 'pointer' }}
//                 />
//               </div>
//             )}
//             <IconField iconPosition="left">
//               <InputIcon className="ri ri-search-line"></InputIcon>
//               <InputText
//                 type="search"
//                 placeholder="Search"
//                 value={globalFilter}
//                 onChange={(e) => setGlobalFilter(e.target.value)}
//                 className="rounded"
//               />
//             </IconField>
//           </div>
//           <DataTable
//             value={students}
//             paginator
//             rows={20}
//             showGridlines
//             loading={loading}
//             globalFilter={globalFilter}
//             emptyMessage="No records found"
//             style={{ border: "1px solid #ddd" }}
//           >
//             <Column
//               align={"center"}
//               style={{ border: "1px solid #ddd" }}
//               field="name"
//               header="Name"
//               body={nameBodyTemplate}
//             />
//             <Column
//               align={"center"}
//               style={{ border: "1px solid #ddd" }}
//               field="mobile"
//               header="Mobile"
//             />
              
           

           
//                <Column
//               align={"center"}
//               style={{ border: "1px solid #ddd" }}
//               field="lot_size_limit"
//               header="Lot Size Limit"
//               body={lotSizeBodyTemplate}
//             />
//               <Column
//               align={"center"}
//               style={{ border: "1px solid #ddd" }}
//               field="commission"
//               header="Commission"
//               body={commissionBodyTemplate}
//             />

// <Column
//   align={"center"}
//   style={{ border: "1px solid #ddd" }}
//   header="Broker Conn. Status"
//   body={(rowData) => (
//     <div className={classNames({
//       'text-success': rowData.broker_status,
//       'text-danger': !rowData.broker_status
//     })}>
//       {rowData.broker_status ? (
//         <>
//           <i className="ri-shield-check-line"></i> Connected
//         </>
//       ) : (
//         <>
//           <i className="ri-close-large-line"></i> Disconnected
//         </>
//       )}
//     </div>
//   )}
// />
            
//             {/* <Column
//               align="center"
//               style={{ border: "1px solid #ddd" }}
//               header="Account Status"
//               body={(rowData) => (
//                 <button
//                   className={`btn rounded-pill  btn-xs ${rowData.active_status
//                       ? "btn-outline-success"
//                       : "btn-outline-danger"
//                     } waves-effect`}
//                   onClick={() => handleToggle(rowData.student_id)}
//                 >
//                   {rowData.active_status ? "Active" : "Inactive"}
//                 </button>
//               )}
//             /> */}
//            <Column
//   align="center"
//   style={{ border: "1px solid #ddd" }}
//   header="Account Status"
//   body={(rowData) => (
//     <button
//       className={`btn rounded-pill btn-xs ${rowData.active_status ? "btn-outline-success" : "btn-outline-danger"} waves-effect`}
//       onClick={() => handleToggle(rowData.student_id)}
//     >
//       {rowData.active_status ? "Active" : "Inactive"}
//     </button>
//   )}
// />


      
      

//             <Column
//               align={"center"}
//               style={{ border: "1px solid #ddd" }}
//               header="Actions"
//               body={(rowData) => (
//                 <>
//                   <Link
//                     to={`/teacher/manage_student/view_student/${rowData.student_id}`}
//                     state={{ teacherId: rowData.student_id }}
//                   >
//                     <button className="btn btn-primary me-3 custom-btn-action1">
//                       <i className="ri-timeline-view ri-lg"></i>
//                     </button>
//                   </Link>

//                   <Link
//                     to={`/teacher/manage_student/update_student/${rowData.student_id}`}
//                     state={{ teacherId: rowData.student_id }}
//                   >
//                   <button
//                     className="btn btn-info me-3 custom-btn-action1"
                   
                    
//                   >
//                     <i className="ri-edit-line ri-lg"></i>
//                   </button>
//                   </Link>

            
//       <button
//         className="btn btn-danger active text-align custom-btn-action1"
//         onClick={() => handleDelete(rowData)}
//       >
//         <i className="ri-close-line ri-lg"></i>
//       </button>
//                 </>
//               )}
//             />
//           </DataTable>

//           <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog">
//   <div className="modal-dialog modal-dialog-top modal-dialog-centered" role="document">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title">Message</h5>
//         <button type="button" className="btn-close" onClick={() => closeModal(false)}></button>
//       </div>
//       <div className="modal-body">
//         <p>{message}</p>
//       </div>
      
//       <div className="modal-footer d-flex justify-content-between">
        
//         <button type="button" className="btn btn-primary " onClick={() => closeModal(true)}>OK</button>
//         <button type="button" className="btn btn-secondary ms-auto" onClick={() => closeModal(false)}> <i className="ri-close-line ri-lg me-1"></i>Cancel</button>
//       </div>

      
//     </div>
//   </div>
// </div>



// // Your modal component
// <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog">
//   <div className="modal-dialog modal-dialog-top modal-dialog-centered" role="document">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title">Message</h5>
//         <button type="button" className="btn-close" onClick={() => closeModals(false)}></button>
//       </div>
//       <div className="modal-body">
//         <p>{message}</p>
//       </div>
//       <div className="modal-footer d-flex justify-content-between">
//         <button type="button" className="btn btn-secondary" onClick={() => closeModals(false)}>Cancel</button>
//         <button type="button" className="btn btn-primary ms-auto" onClick={() => closeModals(true)}>OK</button>
//       </div>
//     </div>
//   </div>
// </div>
      
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ManageStudent;


// const getColorModalClass = () => {
//   const now = new Date();
//   const hours = now.getHours();

//   if (hours === 9 || hours === 15) {
//     return hours === 9 ? "modal-green" : "modal-red"; // Apply custom modal background colors
//   }
//   return "";
// };

// const getModalTitle = () => {
//   const now = new Date();
//   const hours = now.getHours();

//   if (hours === 9) {
//     return "Market is Open!";
//   } else if (hours === 15) {
//     return "Market is Closed!";
//   }
//   return "";
// };

// const getModalBody = () => {
//   const now = new Date();
//   const hours = now.getHours();

//   if (hours === 9) {
//     return "Market is currently open. Take necessary actions.";
//   } else if (hours === 15) {
//     return "Market is currently closed. Come back tomorrow.";
//   }
//   return "";
// };