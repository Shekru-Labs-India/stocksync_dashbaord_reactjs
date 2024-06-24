// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Header from "../component/Header";
// import Footer from "../component/Footer";
// import SubHeader from "../component/SubHeader";
// import config from "../../app3/config";
// const home = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await axios.get(
//           `${config.apiDomain}/api/teacher/teacher_home`
//         );
//         setData(response.data);
//       } catch (error) {
//         setError(error.message || "Failed to fetch data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <Header />
//       <SubHeader />
//       <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
//         <div className="layout-container">
//         <div class="container-xxl flex-grow-1 container-p-y">
            
            
//             <div class="row g-6">
           
            

//         <div className="col-sm-6 col-lg-3">
//     <div className="card card-border-shadow-primary h-100">
//       <div className="card-body">
//         <div className="d-flex align-items-center mb-2">
//           <div className="avatar me-4">
//             <span className="avatar-initial rounded bg-label-primary"><i className="ri-car-line ri-24px"></i></span>
//           </div>
//           <h4 className="mb-0">42</h4>
//         </div>
//         <h6 className="mb-0 fw-normal">On route vehicles</h6>
//         <p className="mb-0">
//           <span className="me-1 fw-medium">+18.2%</span>
//           <small className="text-muted">than last week</small>
//         </p>
//       </div>
//     </div>
//   </div>
//   <div className="col-sm-6 col-lg-3">
//     <div className="card card-border-shadow-warning h-100">
//       <div className="card-body">
//         <div className="d-flex align-items-center mb-2">
//           <div className="avatar me-4">
//             <span className="avatar-initial rounded bg-label-warning"><i className='ri-alert-line ri-24px'></i></span>
//           </div>
//           <h4 className="mb-0">8</h4>
//         </div>
//         <h6 className="mb-0 fw-normal">Vehicles with errors</h6>
//         <p className="mb-0">
//           <span className="me-1 fw-medium">-8.7%</span>
//           <small className="text-muted">than last week</small>
//         </p>
//       </div>
//     </div>
//   </div>
//   <div className="col-sm-6 col-lg-3">
//     <div className="card card-border-shadow-danger h-100">
//       <div className="card-body">
//         <div className="d-flex align-items-center mb-2">
//           <div className="avatar me-4">
//             <span className="avatar-initial rounded bg-label-danger"><i className='ri-route-line ri-24px'></i></span>
//           </div>
//           <h4 className="mb-0">27</h4>
//         </div>
//         <h6 className="mb-0 fw-normal">Deviated from route</h6>
//         <p className="mb-0">
//           <span className="me-1 fw-medium">+4.3%</span>
//           <small className="text-muted">than last week</small>
//         </p>
//       </div>
//     </div>
//   </div>
//   <div className="col-sm-6 col-lg-3">
//     <div className="card card-border-shadow-info h-100">
//       <div className="card-body">
//         <div className="d-flex align-items-center mb-2">
//           <div className="avatar me-4">
//             <span className="avatar-initial rounded bg-label-info"><i className='ri-time-line ri-24px'></i></span>
//           </div>
//           <h4 className="mb-0">13</h4>
//         </div>
//         <h6 className="mb-0 fw-normal">Late vehicles</h6>
//         <p className="mb-0">
//           <span className="me-1 fw-medium">-2.5%</span>
//           <small className="text-muted">than last week</small>
//         </p>
//       </div>
//     </div>
//   </div>
//       </div>
//       </div>
//       </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default home;




import React, { useState } from 'react';
import Header from '../component/Header';
import SubHeader from '../component/SubHeader';

const Home = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false); // Track if file has been uploaded
  const [successCount, setSuccessCount] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [errorDetails, setErrorDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Track loading status

  const teacherId = localStorage.getItem('teacherId'); // Get teacher ID from localStorage
  const userId = localStorage.getItem('userId');

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

  return (
    <div>
      <Header />
      <SubHeader />
      <div className="mt-5 ms-5">
        <button
          type="button"
          className="btn btn-primary"
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
                      <button
                        type="button"
                        className="btn btn-primary"
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
                          'Submit'
                        )}
                      </button>
                    </div>
                  </div>
                </form>

                {/* Table display */}
                {fileUploaded && (
                  <div className="modal-body mt-3">
                    <h5>Success Uploaded: {successCount}</h5>
                    <h5>Error Uploaded: {errorCount}</h5>
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
      </div>
    </div>
  );
};

export default Home;
