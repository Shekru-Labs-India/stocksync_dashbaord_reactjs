// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import AdminHeader from "./AdminHeader";
// import Footer from "../component/Footer";
// import AdminSubHeader from "./AdminSubHeader";
// import { Link, useNavigate } from "react-router-dom";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// // Custom Plugin for Rounded Bar Tops
// const roundedBarPlugin = {
//   id: "roundedBar",
//   beforeDatasetsDraw(chart) {
//     const {
//       ctx,
//       chartArea: { top, bottom, left, right, width, height },
//     } = chart;

//     chart.getDatasetMeta(0).data.forEach((bar) => {
//       const { x, y, base, width: barWidth } = bar;
//       const radius = Math.min(10, (base - y) / 2); // Dynamic radius to avoid overflow

//       ctx.save();
//       ctx.beginPath();
//       ctx.moveTo(x - barWidth / 2, base);
//       ctx.lineTo(x - barWidth / 2, y + radius);
//       ctx.quadraticCurveTo(x - barWidth / 2, y, x - barWidth / 2 + radius, y);
//       ctx.lineTo(x + barWidth / 2 - radius, y);
//       ctx.quadraticCurveTo(x + barWidth / 2, y, x + barWidth / 2, y + radius);
//       ctx.lineTo(x + barWidth / 2, base);
//       ctx.closePath();
//       ctx.fillStyle = bar.options.backgroundColor;
//       ctx.fill();
//       ctx.restore();
//     });
//   },
// };

// ChartJS.register(roundedBarPlugin);

// const ViewTeacher = () => {
//   const navigate = useNavigate();

//   const handleBack = () => {
//     navigate(-1);
//   };

//   const data = {
//     labels: [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ],
//     datasets: [
//       {
//         label: "Commission",
//         data: [
//           12000, 16000, 8000, 4000, 45000, 30500, 29000, 6500, 7000, 5000, 8000,
//           5000,
//         ],
//         backgroundColor: "rgb(255, 196, 57)",
//         borderColor: "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//         barThickness: 20,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false, // Ensure the aspect ratio is not maintained
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Monthly Commission",
//       },
//       roundedBar: true, // Enable the custom plugin
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         suggestedMin: 0,
//         suggestedMax: 50000,
//       },
//     },
//   };

//   return (
//     <>
//       <AdminHeader />
//       <AdminSubHeader />

//       <div className="container-xxl container-p-y">
//         <nav aria-label="breadcrumb">
//           <ol className="breadcrumb breadcrumb-style1">
//             <li className="breadcrumb-item">
//               <Link to="/">Home</Link>
//             </li>
//             <li className="breadcrumb-item">
//               <Link to="/admin/manage_teacher">Manage Teacher</Link>
//             </li>
//             <li className="breadcrumb-item active" aria-current="page">
//               View Teacher
//             </li>
//           </ol>
//         </nav>
//         <div className="card p-5">
//           <div className="row align-items-center mb-5">
//             <div className="col-5 text-start">
//               <button onClick={handleBack} className="btn btn-transparent mt-3">
//                 Back
//               </button>
//             </div>
//             <div className="col-6 text-start">
//               <h5 className="mb-0">View Teacher</h5>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-12">
//               <div className="row mt-1">
//                 <div className="col-3">
//                   <span className="text-black">
//                     <strong>Viraj Hole</strong>
//                   </span>
//                   <div>Name</div>
//                 </div>
//                 <div className="col-3">
//                   <span className="text-black">
//                     <strong>7774829155</strong>
//                   </span>
//                   <div>Mobile</div>
//                 </div>
//                 <div className="col-3">
//                   <span className="text-black">
//                     <strong>virajhole7774@gmail.com</strong>
//                   </span>
//                   <div>Email</div>
//                 </div>
                
//               </div>
//             </div>
//             <div className="col-12 mt-5 mb-5">
//               <div className="row mt-1">
//                 <div className="col-3">
//                   <span className="text-black">
//                     <strong>BAEPH3656F</strong>
//                   </span>
//                   <div>Pancard Number</div>
//                 </div>
//                 <div className="col-3">
//                   <span className="text-black">
//                     <strong>Not Connected</strong>
//                   </span>
//                   <div>Broker Status</div>
//                 </div>
//                 <div className="col-3">
//                   <span className="text-black">
//                     <strong>--</strong>
//                   </span>
//                   <div>Balance</div>
//                 </div>
//               </div>
//             </div>

//             <hr />

//             <div className="col-12 mt-5">
//               <div className="row mt-5">
//                 <div className="col-12 text-center">
//                   <span className="text-black">
//                     <h1>
//                       <strong>10</strong>
//                     </h1>
//                   </span>
//                   <div>Total Student</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <hr />
//         <div className="col-xl-12 col-12 mb-6">
//           <div className="card">
//             <div className="card-header header-elements">
//               <h5 className="card-title mb-0">Latest Statistics</h5>
//               <div className="card-action-element ms-auto py-0">
//                 <div className="card-header-elements ms-auto py-0 d-none d-sm-block">
//                   <div
//                     className="btn-group"
//                     role="group"
//                     aria-label="radio toggle button group"
//                   >
//                     <input
//                       type="radio"
//                       className="btn-check"
//                       name="btnradio"
//                       id="dailyRadio"
//                       checked
//                     />
//                     <label
//                       className="btn btn-outline-secondary"
//                       htmlFor="dailyRadio"
//                     >
//                       Daily
//                     </label>
//                     <input
//                       type="radio"
//                       className="btn-check"
//                       name="btnradio"
//                       id="weeklyRadio"
//                     />
//                     <label
//                       className="btn btn-outline-secondary"
//                       htmlFor="weeklyRadio"
//                     >
//                       Weekly
//                     </label>
//                     <input
//                       type="radio"
//                       className="btn-check"
//                       name="btnradio"
//                       id="monthlyRadio"
//                     />
//                     <label
//                       className="btn btn-outline-secondary"
//                       htmlFor="monthlyRadio"
//                     >
//                       Monthly
//                     </label>
//                     <input
//                       type="radio"
//                       className="btn-check"
//                       name="btnradio"
//                       id="yearlyRadio"
//                     />
//                     <label
//                       className="btn btn-outline-secondary"
//                       htmlFor="yearlyRadio"
//                     >
//                       Yearly
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="card-body" style={{ height: "400px" }}>
//               {" "}
//               {/* Adjust the height as needed */}
//               <Bar data={data} options={options} />
//             </div>
//           </div>
//         </div>
//       </div>
//       <hr />

//       <Footer />
//     </>
//   );
// };

// export default ViewTeacher;


import { Bar } from "react-chartjs-2";
import config from "../config";
import { Button } from "primereact/button";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import AdminHeader from "./AdminHeader";
import Footer from "../component/Footer";
import AdminSubHeader from "./AdminSubHeader";
import { Link, useNavigate,useLocation } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

  
// Custom Plugin for Rounded Bar Tops
const roundedBarPlugin = {
  id: "roundedBar",
  beforeDatasetsDraw(chart) {
    const {
      ctx,
      chartArea: { top, bottom, left, right, width, height },
    } = chart;

    chart.getDatasetMeta(0).data.forEach((bar) => {
      const { x, y, base, width: barWidth } = bar;
      const radius = Math.min(10, (base - y) / 2); // Dynamic radius to avoid overflow

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x - barWidth / 2, base);
      ctx.lineTo(x - barWidth / 2, y + radius);
      ctx.quadraticCurveTo(x - barWidth / 2, y, x - barWidth / 2 + radius, y);
      ctx.lineTo(x + barWidth / 2 - radius, y);
      ctx.quadraticCurveTo(x + barWidth / 2, y, x + barWidth / 2, y + radius);
      ctx.lineTo(x + barWidth / 2, base);
      ctx.closePath();
      ctx.fillStyle = bar.options.backgroundColor;
      ctx.fill();
      ctx.restore();
    });
  },
};

ChartJS.register(roundedBarPlugin);

const ViewTeacher = () => {
  const [backClicked, setBackClicked] = useState(false);
  const navigate = useNavigate();
  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });}
    const handleBack = () => {
      if (!backClicked) {
        setBackClicked(true);
        navigate(-1);
      }
    };

  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Commission",
        data: [
          12000, 16000, 8000, 4000, 45000, 30500, 29000, 6500, 7000, 5000, 8000,
          5000,
        ],
        backgroundColor: "rgb(255, 196, 57)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensure the aspect ratio is not maintained
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Commission",
      },
      roundedBar: true, // Enable the custom plugin
    },
    scales: {
      y: {
        beginAtZero: true,
        suggestedMin: 0,
        suggestedMax: 50000,
      },
    },
  };

  const location = useLocation();
  const teacher_id = location.state ? location.state.teacher_id : null;
  const { teacherId } = location.state;
  const [teacherData, setTeacherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.post(
           `${config.apiDomain}/api/admin/manage_teachers/view`,
          {
            teacher_id: teacherId,
          }
        );

        if (response.data && response.data.st === 1) {
          setTeacherData(response.data.data);
        } else {
          setError(new Error(response.data.msg || "Failed to fetch data"));
        }
      } catch (error) {
        setError(new Error(error.message || "Failed to fetch data"));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [teacherId]);
 

  return (
    <>
      <AdminHeader />
      <AdminSubHeader />

      <div className="container-xxl container-p-y">
      <nav aria-label="breadcrumb">
  <ol className="breadcrumb breadcrumb-style1 text-secondary">
    <li className="breadcrumb-item">
      <Link to="/admin/dashboard" className="text-secondary">
      <i class="ri-home-7-line ri-lg"></i>      </Link>
    </li>
    <li className="breadcrumb-item">
      <Link to="/admin/manage_teacher" className="text-secondary">
      Manage Teacher
      </Link>
    </li>
    <li className="breadcrumb-item active text-secondary" aria-current="page">
   View Teacher
    </li>
  </ol>
</nav>
        <div className="card p-5">
          <div className="row align-items-center mb-5">
            <div className="col-5 text-start">
            <button
                onClick={handleBack}
                className="btn rounded-pill btn-outline-secondary btn-xs"
              >
                <i className="ri-arrow-left-circle-fill me-1 ri-md"></i> Back
              </button>
            </div>
            <div className="col-6 text-start">
              <h5 className="mb-0">View Teacher</h5>
            </div>
          </div>   
          {teacherData && (
          <div className="row">
            <div className="col-12">
              <div className="row mt-1">
              <h4>                                      <i className="ri-user-line ri-ms me-1 "></i>
              Personal Information</h4>
                <div className="col-3">
                <span className="text-black">
                    <strong>{toTitleCase(teacherData.name)}</strong>
                  </span>
                  <div>Name</div>
                </div>
                <div className="col-3">
                  <span className="text-black">
                    <strong>{teacherData.mobile}</strong>
                  </span>
                  <div>Mobile</div>
                </div>
                <div className="col-3">
                  <span className="text-black">
                    <strong>{teacherData.email}</strong>
                  </span>
                  <div>Email</div>
                </div>
                <div className="col-3">
      <span className={` ${teacherData.broker_status ? 'text-success' : 'text-danger'}`}>
      {teacherData.broker_status ? (
          <i className="ri-shield-check-line" style={{ marginRight: '5px' }}></i>
        ) : (
          <i className="ri-close-large-line" style={{ marginRight: '5px' }}></i>
        )}
        <strong>{teacherData.broker_status ? 'Connected' : 'Disconnected'}</strong>
        
      </span>
      <div>Broker Status</div>
    </div>
              </div>
            </div>
            <div className="col-12 mt-5 mb-5">
              <div className="row mt-1">
                
                
                <div className="col-3">
                  <span className="text-black">
                   
                  <strong>{(teacherData.amount || 0).toFixed(2)} Rs.</strong>
                  </span>
                  <div>Broker Acc. Balance</div>
                </div>

                <div className="col-3">
                    <span className="text-black">
                      <strong>{teacherData.lot_size_limit} Lot</strong>
                    </span>
                    <div>Lot Size Limit</div>
                  </div>

                <div className="col-3">
                  <span className="text-black">
                   
                  <strong>{teacherData.commission}%</strong>
                  </span>
                  <div>Commission</div>
                </div>
              </div>
            </div>

            <hr />
            <h4>                                  <i className="ri-group-line ri-ms me-2"></i>
              Broker Information</h4>
            <div className="col-12 mt-5 mb-5">
  <div className="row mt-1">
   

    <div className="col-3">
      <span className="text-black">
        <strong>{teacherData.broker_api_key}</strong>
      </span>
      <div>Broker API Key</div>
    </div>

    <div className="col-3">
      <span className="text-black">
        <strong>{teacherData.broker_client_id}</strong>
      </span>
      <div>Broker Client ID</div>
    </div>

    <div className="col-3">
      <span className="text-black">
        <strong>{teacherData.broker_password}</strong>
      </span>
      <div>Broker Password</div>
    </div>

    <div className="col-3 ">
      <span className="text-black">
        <strong>{teacherData.broker_qr_totp_token}</strong>
      </span>
      <div>Broker QR TOTP Token</div>
      </div>
      </div>
      </div>
      <hr></hr>

            <div className="col-12 mt-5">
              <div className="row mt-5">
                <div className="col-12 text-center">
                  <span className="text-black">
                    <h1>
                      <strong>{teacherData.student_count||0}</strong>
                    </h1>
                  </span>
                  <div>Total Student</div>
                </div>
              </div>
            </div>
          </div>
             )}
        </div>
        <hr />
        {/* <div className="col-xl-12 col-12 mb-6">
          <div className="card">
            <div className="card-header header-elements">
              <h5 className="card-title mb-0">Latest Statistics</h5>
              <div className="card-action-element ms-auto py-0">
                <div className="card-header-elements ms-auto py-0 d-none d-sm-block">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="radio toggle button group"
                  >
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="dailyRadio"
                      checked
                    />
                    <label
                      className="btn btn-outline-secondary"
                      htmlFor="dailyRadio"
                    >
                      Daily
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="weeklyRadio"
                    />
                    <label
                      className="btn btn-outline-secondary"
                      htmlFor="weeklyRadio"
                    >
                      Weekly
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="monthlyRadio"
                    />
                    <label
                      className="btn btn-outline-secondary"
                      htmlFor="monthlyRadio"
                    >
                      Monthly
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="yearlyRadio"
                    />
                    <label
                      className="btn btn-outline-secondary"
                      htmlFor="yearlyRadio"
                    >
                      Yearly
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body" style={{ height: "400px" }}>
              {" "}
              {/* Adjust the height as needed */}
              {/* <Bar data={data} options={options} />
            </div>
          </div>
        </div> */} 
      </div>
      <hr />

      <Footer />
    </>
  );
};

export default ViewTeacher;