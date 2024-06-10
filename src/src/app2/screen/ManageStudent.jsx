// import React, { useEffect, useState } from "react";
// import $ from "jquery";
// import "datatables.net";
// import { Link, useNavigate } from "react-router-dom";

// import Header from "../component/Header";
// import Footer from "../component/Footer";
// import SubHeader from "../component/SubHeader";

// const ManageStudent = () => {
//   const navigate = useNavigate();
//   const [selectedFileName, setSelectedFileName] = useState("No file chosen");
//   // Initial state with student data
//   const [students, setStudents] = useState([
//     { name: "Raj", mobile: "4607089809", brokerStatus: "Not Connected", activeStatus: "Active" },
//     { name: "Riya", mobile: "987890675", brokerStatus: "Not Connected", activeStatus: "Active" }
//   ]);

//   useEffect(() => {
//     $("#myDataTable").DataTable();
//   }, [students]);

//   const handleBack = () => {
//     navigate(-1);
//   };

//   const handleDelete = (index) => {
//     const newStudents = [...students];
//     newStudents.splice(index, 1);
//     setStudents(newStudents);
//   };

//   const handleChooseFile = () => {
//     // Trigger the input element to open file selection dialog
//     document.getElementById("fileInput").click();
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedFileName(file.name);
//       // Handle the file here if needed
//     } else {
//       setSelectedFileName("No file chosen");
//     }
//   };


//   return (
//     <div> <Header />
//     <SubHeader />
//     <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
//       <div className="layout-container">
       
//         <div className="Container">
//           <div className="container-xxl flex-grow-1 container-p-y">
//             <nav aria-label="breadcrumb">
//               <ol className="breadcrumb breadcrumb-style1">
//               <li className="breadcrumb-item">
//                     <Link to="/">Home</Link>
//                   </li>
//                 <li className="breadcrumb-item active" aria-current="page">Manage Student</li>
//               </ol>
//             </nav>
//             <div className="card">
//               <div className="d-flex justify-content-between align-items-center card-header">
//                 <button onClick={handleBack} className="btn btn-transparent">
//                   Back
//                 </button>
//                 <h5 className="text-center mb-0 flex-grow-1">Manage Student</h5>
//                 <Link to="/create_student">
                    
//                             <button className="btn btn-primary active text-align me-2">
//                               <i className="ri-add-line ri-lg me-2"></i>Add Student
//                             </button>
//                             </Link>
//                             <div>
//                   <button onClick={handleChooseFile}  className="btn btn-secondary text-align me-2">
//                  <button> Choose file</button>    <label id="fileInputLabel " className="ms-4">{selectedFileName}</label>
//                   </button>
//                   <input
//                     id="fileInput"
//                     type="file"
//                     style={{ display: "none" }}
//                     onChange={handleFileChange}
//                   />
                
//                 </div>
//                 <Link to="/my_report_view">
//                   <button className="btn btn-secondary text-align me-2">
//                     Upload CSV
//                   </button>
//                 </Link>
//               </div>
             
              
//               <div className="card-datatable table-responsive p-5">
//                 <div className="row text-center"></div>
//                 <table
//                   id="myDataTable"
//                   className="display text-center"
//                   style={{ width: "100%" }}
//                 >
//                   <thead>
//                     <tr>
//                       <th className="text-center">Name</th>
//                       <th className="text-center">Mobile</th>
//                       <th className="text-center">BROKER STATUS</th>
//                       <th className="text-center">ACTIVE STATUS</th>
//                       <th className="text-center">ACTIONS</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {students.map((student, index) => (
//                       <tr key={index}>
//                         <td className="text-center">{student.name}</td>
//                         <td className="text-center">{student.mobile}</td>
//                         <td className="text-center"><button className="btn btn-outline-danger">{student.brokerStatus}</button></td>
//                         <td className="text-center"><button className="btn btn-outline-success">{student.activeStatus}</button></td>
//                         <td className="text-center">
//                           <Link to="/student_details">
//                             <button className="btn btn-primary active text-align me-2">
//                               <i className="ri-timeline-view"></i>
//                             </button>
//                           </Link>
//                           <Link to="/update_student">
//                             <button className="btn btn-info active text-align me-2">
//                               <i className="ri-edit-line"></i>
//                             </button>
//                           </Link>
//                           <button 
//                             className="btn btn-danger active text-align"
//                             onClick={() => handleDelete(index)}
//                           >
//                             <i className="ri-close-line"></i>
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </div>
//     </div>
//   );
// };

// export default ManageStudent;


// import React, { useEffect, useState } from "react";
// import $ from "jquery";
// import "datatables.net";
// import { Link, useNavigate } from "react-router-dom";
// import Header from "../component/Header";
// import Footer from "../component/Footer";
// import SubHeader from "../component/SubHeader";

// const ManageStudent = () => {
//   const navigate = useNavigate();
//   const [selectedFileName, setSelectedFileName] = useState("No file chosen");
//   const [students, setStudents] = useState([]);
//   const [editingStudent, setEditingStudent] = useState(null);
//   const [formData, setFormData] = useState({
//     email: '',
//     mobile: '',
//     name: '',
//     aadhar_number: '',
//     pancard_number: '',
//     commission: ''
//   });

//   useEffect(() => {
//     const fetchStudents = async () => {
//       const userId = localStorage.getItem('user_id');
//       try {
//         const response = await fetch('http://192.46.212.210/api/teacher/manage_students/listview', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ teacher_id: userId })
//         });
//         const data = await response.json();
//         if (response.ok && data.st === 1) {
//           setStudents(data.data);
//         } else {
//           console.error(data.message || 'Failed to fetch students');
//         }
//       } catch (error) {
//         console.error('Network error', error);
//       }
//     };

//     fetchStudents();
//   }, []);

//   useEffect(() => {
//     const initializeDataTable = () => {
//       if ($.fn.DataTable.isDataTable("#myDataTable")) {
//         $("#myDataTable").DataTable().destroy();
//       }
//       $("#myDataTable").DataTable();
//     };

//     if (students.length > 0) {
//       initializeDataTable();
//     }
//   }, [students]);

//   const handleBack = () => {
//     navigate(-1);
//   };

//   const handleDelete = (index) => {
//     const newStudents = [...students];
//     newStudents.splice(index, 1);
//     setStudents(newStudents);
//   };

//   const handleChooseFile = () => {
//     document.getElementById("fileInput").click();
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedFileName(file.name);
//       // Handle the file here if needed
//     } else {
//       setSelectedFileName("No file chosen");
//     }
//   };

//   const handleEdit = (student) => {
//     setEditingStudent(student);
//     setFormData({
//       email: student.email,
//       mobile: student.mobile,
//       name: student.name,
//       aadhar_number: student.aadhar_number || '',
//       pancard_number: student.pancard_number || '',
//       commission: student.commission || ''
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://192.46.212.210/api/teacher/manage_students/update', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           user_id: editingStudent.id,
//           ...formData
//         })
//       });
//       const data = await response.json();
//       if (response.ok && data.st === 1) {
//         // Update the student in the list
//         setStudents(prevStudents => prevStudents.map(student => 
//           student.id === editingStudent.id ? data.student : student
//         ));
//         setEditingStudent(null);
//         setFormData({
//           email: '',
//           mobile: '',
//           name: '',
//           aadhar_number: '',
//           pancard_number: '',
//           commission: ''
//         });
//       } else {
//         console.error(data.msg || 'Failed to update student');
//       }
//     } catch (error) {
//       console.error('Network error', error);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <SubHeader />
//       <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
//         <div className="layout-container">
//           <div className="Container">
//             <div className="container-xxl flex-grow-1 container-p-y">
//               <nav aria-label="breadcrumb">
//                 <ol className="breadcrumb breadcrumb-style1">
//                   <li className="breadcrumb-item">
//                     <Link to="/">Home</Link>
//                   </li>
//                   <li className="breadcrumb-item active" aria-current="page">Manage Student</li>
//                 </ol>
//               </nav>
//               <div className="card">
//                 <div className="d-flex justify-content-between align-items-center card-header">
//                   <button onClick={handleBack} className="btn btn-transparent">
//                     Back
//                   </button>
//                   <h5 className="text-center mb-0 flex-grow-1">Manage Student</h5>
//                   <Link to="/create_student">
//                     <button className="btn btn-primary active text-align me-2">
//                       <i className="ri-add-line ri-lg me-2"></i>Add Student
//                     </button>
//                   </Link>
//                   <div>
//                     <button onClick={handleChooseFile} className="btn btn-secondary text-align me-2">
//                       <button> Choose file</button>
//                       <label id="fileInputLabel" className="ms-4">{selectedFileName}</label>
//                     </button>
//                     <input
//                       id="fileInput"
//                       type="file"
//                       style={{ display: "none" }}
//                       onChange={handleFileChange}
//                     />
//                   </div>
//                   <Link to="/my_report_view">
//                     <button className="btn btn-secondary text-align me-2">
//                       Upload CSV
//                     </button>
//                   </Link>
//                 </div>
//                 <div className="card-datatable table-responsive p-5">
//                   <div className="row text-center"></div>
//                   <table id="myDataTable" className="display text-center" style={{ width: "100%" }}>
//                     <thead>
//                       <tr>
//                         <th className="text-center">Name</th>
//                         <th className="text-center">Mobile</th>
//                         <th className="text-center">BROKER STATUS</th>
//                         <th className="text-center">ACTIVE STATUS</th>
//                         <th className="text-center">ACTIONS</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {students.map((student, index) => (
//                         <tr key={index}>
//                           <td className="text-center">{student.name}</td>
//                           <td className="text-center">{student.mobile}</td>
//                           <td className="text-center">
//                             <button className="btn btn-outline-danger">{student.broker_status ? 'Connected' : 'Not Connected'}</button>
//                           </td>
//                           <td className="text-center">
//                             <button className="btn btn-outline-success">{student.active_status ? 'Active' : 'Inactive'}</button>
//                           </td>
//                           <td className="text-center">
//                             <Link to="/student_details">
//                               <button className="btn btn-primary active text-align me-2">
//                                 <i className="ri-timeline-view"></i>
//                               </button>
//                             </Link>
//                             <button 
//                               className="btn btn-info active text-align me-2"
//                               onClick={() => handleEdit(student)}
//                             >
//                               <i className="ri-edit-line"></i>
//                             </button>
//                             <button 
//                               className="btn btn-danger active text-align"
//                               onClick={() => handleDelete(index)}
//                             >
//                               <i className="ri-close-line"></i>
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Footer />
//         </div>
//       </div>

//       {editingStudent && (
//         <div className="modal show" tabIndex="-1" style={{ display: 'block' }}>
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Edit Student</h5>
//                 <button type="button" className="btn-close" onClick={() => setEditingStudent(null)}></button>
//               </div>
//               <div className="modal-body">
//                 <form onSubmit={handleFormSubmit}>
//                   <div className="mb-3">
//                     <label htmlFor="name" className="form-label">Name</label>
//                     <input 
//                       type="text" 
//                       className="form-control" 
//                       id="name" 
//                       name="name"
//                       value={formData.name} 
//                       onChange={handleInputChange} 
//                       required 
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email</label>
//                     <input 
//                       type="email" 
//                       className="form-control" 
//                       id="email" 
//                       name="email"
//                       value={formData.email} 
//                       onChange={handleInputChange} 
//                       required 
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="mobile" className="form-label">Mobile</label>
//                     <input 
//                       type="text" 
//                       className="form-control" 
//                       id="mobile" 
//                       name="mobile"
//                       value={formData.mobile} 
//                       onChange={handleInputChange} 
//                       required 
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="aadhar_number" className="form-label">Aadhar Number</label>
//                     <input 
//                       type="text" 
//                       className="form-control" 
//                       id="aadhar_number" 
//                       name="aadhar_number"
//                       value={formData.aadhar_number} 
//                       onChange={handleInputChange} 
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="pancard_number" className="form-label">Pancard Number</label>
//                     <input 
//                       type="text" 
//                       className="form-control" 
//                       id="pancard_number" 
//                       name="pancard_number"
//                       value={formData.pancard_number} 
//                       onChange={handleInputChange} 
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="commission" className="form-label">Commission</label>
//                     <input 
//                       type="text" 
//                       className="form-control" 
//                       id="commission" 
//                       name="commission"
//                       value={formData.commission} 
//                       onChange={handleInputChange} 
//                     />
//                   </div>
//                   <button type="submit" className="btn btn-primary">Save changes</button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageStudent;

// import React, { useEffect, useState } from "react";
// import $ from "jquery";
// import "datatables.net";
// import { Link, useNavigate } from "react-router-dom";
// import Header from "../component/Header";
// import Footer from "../component/Footer";
// import SubHeader from "../component/SubHeader";

// const ManageStudent = () => {
//   const navigate = useNavigate();
//   const [selectedFileName, setSelectedFileName] = useState("No file chosen");
//   const [students, setStudents] = useState([]);
//   const userId = localStorage.getItem('user_id');

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await fetch('http://192.46.212.210/api/teacher/manage_students/listview', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ teacher_id: userId })
//         });
//         const data = await response.json();
//         if (response.ok && data.st === 1) {
//           setStudents(data.data);
//         } else {
//           console.error(data.message || 'Failed to fetch students');
//         }
//       } catch (error) {
//         console.error('Network error', error);
//       }
//     };

//     fetchStudents();
//   }, [userId]);

//   useEffect(() => {
//     const initializeDataTable = () => {
//       if ($.fn.DataTable.isDataTable("#myDataTable")) {
//         $("#myDataTable").DataTable().destroy();
//       }
//       $("#myDataTable").DataTable();
//     };

//     if (students.length > 0) {
//       initializeDataTable();
//     }
//   }, [students]);

//   const handleBack = () => {
//     navigate(-1);
//   };

//   const handleChooseFile = () => {
//     document.getElementById("fileInput").click();
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedFileName(file.name);
//       // Handle the file here if needed
//     } else {
//       setSelectedFileName("No file chosen");
//     }
//   };

//   const handleEdit = (student) => {
//     navigate(`/update_student/${student.id}`, { state: { student } });
//   };

//   const handleDelete = async (index, userId) => {
//     try {
//       const response = await fetch('http://192.46.212.210/api/teacher/manage_students/delete', {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ user_id: userId }) // Send user_id to delete the student
//       });
//       const data = await response.json();
      
//       if (response.ok && data.st === 1) {
//         // Update students state by removing the deleted student
//         const updatedStudents = students.filter((student, idx) => idx !== index);
//         setStudents(updatedStudents);
//         alert('Student deleted successfully');
//       } else {
//         alert(data.msg || 'Failed to delete student');
//       }
//     } catch (error) {
//       console.error('Network error', error);
//       alert('Network error');
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <SubHeader />
//       <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
//         <div className="layout-container">
//           <div className="Container">
//             <div className="container-xxl flex-grow-1 container-p-y">
//               <nav aria-label="breadcrumb">
//                 <ol className="breadcrumb breadcrumb-style1">
//                   <li className="breadcrumb-item">
//                     <Link to="/">Home</Link>
//                   </li>
//                   <li className="breadcrumb-item active" aria-current="page">Manage Student</li>
//                 </ol>
//               </nav>
//               <div className="card">
//                 <div className="d-flex justify-content-between align-items-center card-header">
//                   <button onClick={handleBack} className="btn btn-transparent">
//                     Back
//                   </button>
//                   <h5 className="text-center mb-0 flex-grow-1">Manage Student</h5>
//                   <Link to="/create_student">
//                     <button className="btn btn-primary active text-align me-2">
//                       <i className="ri-add-line ri-lg me-2"></i>Add Student
//                     </button>
//                   </Link>
//                   <div>
//                     <button onClick={handleChooseFile} className="btn btn-secondary text-align me-2">
//                       Choose file
//                       <label id="fileInputLabel" className="ms-4">{selectedFileName}</label>
//                     </button>
//                     <input
//                       id="fileInput"
//                       type="file"
//                       style={{ display: "none" }}
//                       onChange={handleFileChange}
//                     />
//                   </div>
//                   <Link to="/my_report_view">
//                     <button className="btn btn-secondary text-align me-2">
//                       Upload CSV
//                     </button>
//                   </Link>
//                 </div>
//                 <div className="card-datatable table-responsive p-5">
//                   <div className="row text-center"></div>
//                   <table id="myDataTable" className="display text-center" style={{ width: "100%" }}>
//                     <thead>
//                       <tr>
//                         <th className="text-center">Name</th>
//                         <th className="text-center">Mobile</th>
//                         <th className="text-center">BROKER STATUS</th>
//                         <th className="text-center">ACTIVE STATUS</th>
//                         <th className="text-center">ACTIONS</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {students.map((student, index) => (
//                         <tr key={index}>
//                           <td className="text-center">{student.name}</td>
//                           <td className="text-center">{student.mobile}</td>
//                           <td className="text-center">
//                             <button className="btn btn-outline-danger">{student.broker_status ? 'Connected' : 'Not Connected'}</button>
//                           </td>
//                           <td className="text-center">
//                             <button className="btn btn-outline-success">{student.active_status ? 'Active' : 'Inactive'}</button>
//                           </td>
//                           <td className="text-center">
//                             <Link to="/student_details">
//                               <button className="btn btn-primary active text-align me-2">
//                                 <i className="ri-timeline-view"></i>
//                               </button>
//                             </Link>
//                             <button 
//                               className="btn btn-info active text-align me-2"
//                               onClick={() => handleEdit(student)}
//                             >
//                               <i className="ri-edit-line"></i>
//                             </button>
//                             <button 
//                               className="btn btn-danger active text-align"
//                               onClick={() => handleDelete(index, student.user_id)} // Pass user_id to handleDelete
//                             >
//                               <i className="ri-close-line"></i>
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageStudent;


import React, { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net";
import { Link, useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SubHeader from "../component/SubHeader";

const ManageStudent = () => {
  const navigate = useNavigate();
  const [selectedFileName, setSelectedFileName] = useState("No file chosen");
  const [students, setStudents] = useState([]);
  const userId = localStorage.getItem('user_id');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://192.46.212.210/api/teacher/manage_students/listview', {
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
      }
    };

    fetchStudents();
  }, [userId]);

  useEffect(() => {
    const initializeDataTable = () => {
      if ($.fn.DataTable.isDataTable("#myDataTable")) {
        $("#myDataTable").DataTable().destroy();
      }
      $("#myDataTable").DataTable();
    };

    if (students.length > 0) {
      initializeDataTable();
    }
  }, [students]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleChooseFile = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
      // Handle the file here if needed
    } else {
      setSelectedFileName("No file chosen");
    }
  };

  const handleEdit = (student) => {
    navigate(`/update_student/${student.id}`, { state: { student } });
  };

  const handleDelete = async (index, userId) => {
  try {
    const response = await fetch('http://192.46.212.210/api/teacher/manage_students/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user_id: userId })
    });
    const data = await response.json();
    
    if (response.ok && data.st === 1) {
      // Update students state by removing the deleted student
      const updatedStudents = [...students];
      updatedStudents.splice(index, 1); // Remove the student at index
      setStudents(updatedStudents);
      alert('Student deleted successfully');
    } else {
      alert(data.msg || 'Failed to delete student');
    }
  } catch (error) {
    console.error('Network error', error);
    alert('Network error');
  }
};

  const handleTimelineView = async (userId) => {
    try {
      const response = await fetch('http://192.46.212.210/api/teacher/manage_students/view', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id: userId })
      });
      const data = await response.json();
      
      if (response.ok && data.st === 1) {
        // Navigate to student details screen with data
        navigate('/student_details', { state: { student: data.data } });
      } else {
        alert(data.msg || 'Failed to fetch student details');
      }
    } catch (error) {
      console.error('Network error', error);
      alert('Network error');
    }


   
  };
  const handleStatus = async (userId) => {
    try {
      const response = await fetch('http://192.46.212.210/api/teacher/student_active_switch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ student_id: userId })
      });
      const data = await response.json();

      if (response.ok && data.st === 1) {
        // Update the student's active status in the state
        const updatedStudents = students.map(student => {
          if (student.user_id === userId) {
            return {
              ...student,
              active_status: !student.active_status // Toggle the active status
            };
          }
          return student;
        });
        setStudents(updatedStudents);
        alert('Student status updated successfully');
      } else {
        alert(data.msg || 'Failed to update student status');
      }
    } catch (error) {
      console.error('Network error', error);
      alert('Network error');
    }
  };


  return (
    <div>
      <Header />
      <SubHeader />
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div className="layout-container">
          <div className="Container">
            <div className="container-xxl flex-grow-1 container-p-y">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-style1">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">Manage Student</li>
                </ol>
              </nav>
              <div className="card">
                <div className="d-flex justify-content-between align-items-center card-header">
                  <button onClick={handleBack} className="btn btn-transparent">
                    Back
                  </button>
                  <h5 className="text-center mb-0 flex-grow-1">Manage Student</h5>
                  <Link to="/create_student">
                    <button className="btn btn-primary active text-align me-2">
                      <i className="ri-add-line ri-lg me-2"></i>Add Student
                    </button>
                  </Link>
                  {/* <div>
                    <button onClick={handleChooseFile} className="btn btn-secondary text-align me-2">
                      Choose file
                      <label id="fileInputLabel" className="ms-4">{selectedFileName}</label>
                    </button>
                    <input
                      id="fileInput"
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                  </div> */}
                  {/* <Link to="/my_report_view">
                    <button className="btn btn-secondary text-align me-2">
                      Upload CSV
                    </button>
                  </Link> */}
                </div>
                <div className="card-datatable table-responsive p-5">
                  <div className="row text-center"></div>
                  <table id="myDataTable" className="display text-center" style={{ width: "100%" }}>
                    <thead>
                      <tr>
                        <th className="text-center">Name</th>
                        <th className="text-center">Mobile</th>
                        <th className="text-center">BROKER STATUS</th>
                        <th className="text-center">ACTIVE STATUS</th>
                        <th className="text-center">ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student, index) => (
                        <tr key={index}>
                          <td className="text-center">{student.name}</td>
                          <td className="text-center">{student.mobile}</td>
                          <td className="text-center">
                            <button className="btn btn-outline-danger">{student.broker_status ? 'Connected' : 'Not Connected'}</button>
                          </td>
                          <td className="text-center">
                            {/* <button className="btn btn-outline-success">{student.active_status ? 'Active' : 'Inactive'}</button> */}
                            <button
                              className={`btn btn-outline-${student.active_status ? 'success' : 'secondary'}`}
                              onClick={() => handleStatus(student.user_id)}
                            >
                              {student.active_status ? 'Active' : 'Inactive'}
                            </button>
                          </td>
                          <td className="text-center">
                            <button 
                              className="btn btn-primary active text-align me-2"
                              onClick={() => handleTimelineView(student.user_id)}
                            >
                              <i className="ri-timeline-view"></i>
                            </button>
                            <button 
                              className="btn btn-info active text-align me-2"
                              onClick={() => handleEdit(student)}
                            >
                              <i className="ri-edit-line"></i>
                            </button>
                            <button 
                              className="btn btn-danger active text-align"
                              onClick={() => handleDelete(index, student.user_id)}
                            >
                              <i className="ri-close-line"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ManageStudent;
