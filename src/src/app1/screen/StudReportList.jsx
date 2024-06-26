// import React, { useState } from "react";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { InputText } from "primereact/inputtext";
// // import AdminHeader from "./AdminHeader";
// // import Footer from "../component/Footer";
// // import AdminSubHeader from "./AdminSubHeader";
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "primereact/button";
// import { ProgressSpinner } from "primereact/progressspinner";
// import { IconField } from "primereact/iconfield";
// import { InputIcon } from "primereact/inputicon";

// const StudReportList = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([
//     { teacher_id: 1, name: "John Doe", student_count: 25 },
//     { teacher_id: 2, name: "Jane Smith", student_count: 30 },
//     { teacher_id: 3, name: "Bob Johnson", student_count: 20 },
//     { teacher_id: 4, name: "Alice Brown", student_count: 28 },
//     { teacher_id: 5, name: "Eve Green", student_count: 22 },
//   ]);
//   const [globalFilter, setGlobalFilter] = useState(null);
//   const [loading, setLoading] = useState(false); // Set to false for hardcoded data
//   const [error, setError] = useState(null);

//   const handleBack = () => {
//     navigate(-1);
//   };

//   const fetchData = () => {
//     // Simulating loading state
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//   };

//   const openTeacherReport = (teacherId) => {
//     navigate(`/admin/teacher_report_details/${teacherId}`);
//   };

//   return (
//     <>
     

//       <div className="container-xxl container-p-y">
//         <nav aria-label="breadcrumb">
//           <ol className="breadcrumb breadcrumb-style1 text-secondary">
//             <li className="breadcrumb-item">
//               <Link to="/admin/dashboard" className="text-secondary">
//                 <i className="ri-home-line ri-lg"></i>
//               </Link>
//             </li>
//             <li className="breadcrumb-item">
//               <Link to="/admin/profile" className="text-secondary"></Link>
//               profile
//             </li>

//             <li
//               className="breadcrumb-item active text-secondary"
//               aria-current="page"
//             >
//               Teacher List
//             </li>
//           </ol>
//         </nav>
//         <div className="card p-5">
//           <div className="row align-items-center">
//             <div className="col text-start mb-5 ">
//               <Button
//                 onClick={handleBack}
//                 className="btn btn-transparent p-button-text small-button"
//                 style={{
//                   color: "A9A9A9",
//                   borderColor: "A9A9A9",
//                   borderStyle: "solid",
//                   width: "72px",
//                 }}
//               >
//                 <i className="ri-arrow-left-circle-line me-1 ri-md"></i> Back
//               </Button>
//             </div>
//             <div className="col text-start mb-5">
//               <h5 className="mb-0">Teacher Report</h5>
//             </div>
//           </div>

//           <div className="d-flex justify-content-end mb-3">
//             {loading ? (
//               <ProgressSpinner
//                 style={{
//                   width: "30px",
//                   height: "30px",
//                   marginRight: "10px",
//                 }}
//                 strokeWidth="5"
//                 fill="var(--surface-ground)"
//                 animationDuration=".5s"
//               />
//             ) : (
//               <Button type="button" icon="pi pi-refresh" text onClick={fetchData} />
//             )}
//             <IconField iconPosition="left">
//               <InputIcon className="pi pi-search"> </InputIcon>
//               <InputText
//                 type="search"
//                 placeholder="Search"
//                 value={globalFilter}
//                 onChange={(e) => setGlobalFilter(e.target.value)}
//               />
//             </IconField>
//           </div>
//           <DataTable
//             style={{
//               border: "1px solid #ddd",
//             }}
//             align="center"
//             value={data}
//             paginator
//             rows={5}
//             showGridlines
//             loading={loading}
//             globalFilter={globalFilter}
//             emptyMessage="No records found"
//           >
//             <Column
//               align="center"
//               style={{ border: "1px solid #ddd" }}
//               field="name"
//               header="Name"
//               sortable
//             ></Column>
//             <Column
//               align="center"
//               style={{ border: "1px solid #ddd" }}
//               field="student_count"
//               header="Student Count"
//             ></Column>
//             <Column
//               align="center"
//               style={{ border: "1px solid #ddd" }}
//               header="Actions"
//               body={(rowData) => (
//                 <Link to={`/admin/teacher_report/${rowData.teacher_id}`}>
//                   <button className="btn btn-info active custom-btn-action1">
//                     <i className="ri-timeline-view"></i>
//                   </button>
//                 </Link>
//               )}
//             ></Column>
//           </DataTable>
//         </div>
//       </div>

    
//     </>
//   );
// };

// export default StudReportList;

import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Link, useNavigate ,useParams} from "react-router-dom";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import axios from "axios";
import config from "../../app3/config";
import Header from "../component/Header";
import SubHeader from "../component/SubHeader";
import Footer from "../component/Footer";
import { Tooltip } from 'primereact/tooltip';
import { Modal } from "react-bootstrap"; 
const StudReportList = ({  }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [loading, setLoading] = useState(true); // Initially set to true to indicate loading
  const [error, setError] = useState(null);
  const { userId, month_name } = useParams();
  const fetchData = async () => {
    setLoading(true); // Start loading indicator
    setError(null); // Clear any previous error

    try {
      const response = await axios.post(
        `${config.apiDomain}/api/teacher/student_list`,
        {
          sell_month: month_name,
          teacher_id: userId,
        }
      );

      if (response.data && response.data.st === 1) {
        setData(response.data.user_list);
      } else {
        setError(new Error("No data found"));
      }
    } catch (error) {
      setError(new Error(error.message || "Failed to fetch data"));
    } finally {
      setLoading(false); // Always stop loading indicator, whether success or error
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data on component mount or whenever userId or monthName changes
  }, [userId, month_name]);

  const handleBack = () => {
    navigate(-1); // Navigate back to previous page
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


  const usernameBodyTemplate = (rowData) => {
    return <span>{toTitleCase(rowData.username)}</span>;
  };
  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  return (
    <>
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
      <div className="container-xxl container-p-y">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-style1 text-secondary">
            <li className="breadcrumb-item">
              <Link to="/teacher/dashboard" className="text-secondary">
                <i className="ri-home-7-line ri-lg"></i>
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/teacher/user_profile" className="text-secondary">Profile</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/teacher/student_report" className="text-secondary">Student Report</Link>
            </li>
            <li className="breadcrumb-item active text-secondary" aria-current="page">
              Student List
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
              <h5 className="mb-0">Student List</h5>
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
              <div className="mt-4">
                <Tooltip target=".custom-target-icon" />
                <i
                  className="custom-target-icon ri ri-refresh-line ri-lg me-3 p-text-secondary"
                  data-pr-tooltip="Refresh"
                  onClick={fetchData}
                  data-pr-position="top"
                  style={{ cursor: "pointer" }}
                ></i>
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
              field="username"
              header="Name"
              body={usernameBodyTemplate}
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="total_pandl"
              header="Profit and Loss"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="total_commission"
              header="Commission"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              header="Actions"
              body={(rowData) => (
                <Link
                 
                  to={`/teacher/student_report_details/${rowData.user_id}`}
                >
                  
                  <Button className="btn btn-info active custom-btn-action1">
                    <i className="ri-timeline-view"></i>
                  </Button>
                </Link>
              )}
            ></Column>
          </DataTable>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default StudReportList;

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