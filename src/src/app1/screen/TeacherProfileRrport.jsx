
import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../app3/config";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SubHeader from "../component/SubHeader";
import { Modal, Button } from "react-bootstrap"; 
import { Link, useNavigate } from "react-router-dom";

import back from "../assets/img/icons/misc/triangle-light.png"


import img from "../../app2/assets/img/avatars/1.png";
import background from "../../app2/assets/img/backgrounds/sharemarket.jpg";
import image  from "../../app2/assets/img/illustrations/illustration-upgrade-account-2.png"


const TeacherProfileReport = () => {
    const [userData, setUserData] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
    useEffect(() => {
      const fetchUserProfile = async () => {
        try {
          const userId = localStorage.getItem("userId");
  
          if (!userId) {
            console.error("User ID not found in localStorage");
            return;
          }
  
          const response = await fetch(
`${config.apiDomain}/api/common/get_profile_details`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ user_id: userId }),
            }
          );
          const data = await response.json();
          if (response.ok && data.st === 1) {
            setUserData(data.user);
          } else {
            console.error("Failed to fetch user profile:", data.message);
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      };
  
      fetchUserProfile();
    }, []); // Ensure the dependency array is empty
  
    
  
    
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
    <div>
      <div>
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
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div className="layout-container">
          <div className="layout-page">
            <div className="content-wrapper">
              <div className="container flex-grow-1 container-p-y">
              <nav aria-label="breadcrumb">
  <ol className="breadcrumb breadcrumb-style1 text-secondary">
    <li className="breadcrumb-item">
      <Link to="/teacher/dashboard" className="text-secondary">
        <i className="ri-home-5-line ri-lg"></i>
      </Link>
    </li>
    <li className="breadcrumb-item active text-secondary" aria-current="page">
      Profile
    </li>
  </ol>
</nav>

                
                  <div className="row">
                    <div className="col-12">
                      <div className="card mb-6">
                        <div className="user-profile-header-banner">
                          <img
                            src={background}
                            alt="Banner image"
                            className="rounded-top"
                            style={{ maxWidth: "100%", height: "164px" }}
                          />
                        </div>
                        <div className="user-profile-header d-flex flex-column flex-lg-row text-sm-start text-center mb-4">
                          <div className="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
                            <img
                              src={img}
                              alt="user image"
                              className="d-block h-auto ms-0 ms-sm-5 rounded user-profile-img"
                            />
                          </div>
                          <div className="flex-grow-1 mt-3 mt-lg-5">
                            <div className="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-5 flex-md-row flex-column gap-4">
                              <div className="user-profile-info">
                                {userData ? (
                                  <>
                                     <h4 className="mb-2 mt-lg-6"> {capitalizeFirstLetter(userData.name)}</h4>
                                    <ul className="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-4">
                                      <li className="list-inline-item">
                                        <i className="ri-user-settings-line  ri-24px"></i>
                                        <span className="fw-medium"> {capitalizeFirstLetter (userData.role)}</span>
                                      </li>
                                      <li className="list-inline-item">
                                        <i className="ri-mobile-download-line  ri-24px"></i>
                                        <span className="fw-medium"> {userData.mobile}</span>
                                      </li>
                                      <li className="list-inline-item">
                                        <i className="ri-wallet-line  ri-24px"></i>
                                        <span className="fw-medium"> Commission: {userData.commission}%</span>
                                      </li>
                                    </ul>
                                  </>
                                ) : (
                                  <p>Loading...</p>
                                )}
                              </div>
                              <div className="ms-auto">
                             
                             {userData && (
                              <span
                              className={`badge bg-success ${userData.broker_conn_status ? "bg-success" : ""}`}
                              style={{ fontSize: '14px' }}
                            >
                              {userData.broker_conn_status && (
                                <>
                                  <i className="ri-shield-check-line me-1"></i>
                                  Connected
                                </>
                              )}
                            </span>
                            )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
             <div className="row">
              <div className="col-md-12">
                <div className="nav-align-top">
                  <ul className="nav nav-pills flex-column flex-sm-row mb-6 gap-2 gap-lg-0">
                    <li className="nav-item ">
                    <Link to="/teacher/user_profile" className="nav-link" >
                        <i className="ri-user-3-line me-1_5"></i>Profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/teacher/user_profile_report" className="nav-link active btn btn-primary" >
                        <i className="ri-team-line me-1_5"></i>Reports
                      </Link>
                    </li>
                    
                   
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
  <div className="col-lg-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title mb-5">My Reports</h5>
        <h4 className="text-light mb-0">2,2199</h4>
        <p className="mb-3">Profit This Month</p>
        <Link to="/teacher/my_report" className="btn btn-sm btn-primary"><i className="ri-user-follow-fill ri-md me-2"> </i> My Reports</Link>
      </div>
      <img src={back} className="scaleX-n1-rtl position-absolute bottom-0 end-0" width="166" alt="triangle background" data-app-light-img="icons/misc/triangle-light.png" data-app-dark-img="icons/misc/triangle-dark.png"/>
      <img src={image} className="scaleX-n1-rtl position-absolute bottom-0 end-0 me-5 mb-3" height="176" alt="Upgrade Account"/>
    </div>
  </div>
  
  <div className="col-lg-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title mb-5">Student Report</h5>
        <h4 className="text-light mb-0">2,2199</h4>
        <p className="mb-3">Profit This Month</p>
        <Link to="/teacher/student_report" className="btn btn-sm btn-primary"><i className="ri-user-follow-fill ri-md me-2"> </i> Student Report</Link>
      </div>
      <img src={back} className="scaleX-n1-rtl position-absolute bottom-0 end-0" width="166" alt="triangle background" data-app-light-img="icons/misc/triangle-light.png" data-app-dark-img="icons/misc/triangle-dark.png"/>
      <img src={image} className="scaleX-n1-rtl position-absolute bottom-0 end-0 me-5 mb-3" height="176" alt="Upgrade Account"/>
    </div>
  </div>
 
  {/* <div className="col-lg-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title mb-5">Timeline</h5>
        <h4 className="text-light mb-0">2,2199</h4>
        <p className="mb-3">Profit This Month</p>
        <Link to="/teacher/student_report" className="btn btn-sm btn-primary"><i className="ri-user-follow-fill ri-md"> Timeline</i></Link>
      </div>
      <img src={back} className="scaleX-n1-rtl position-absolute bottom-0 end-0" width="166" alt="triangle background" data-app-light-img="icons/misc/triangle-light.png" data-app-dark-img="icons/misc/triangle-dark.png"/>
      <img src={image} className="scaleX-n1-rtl position-absolute bottom-0 end-0 me-5 mb-3" height="176" alt="Upgrade Account"/>
    </div>
  </div> */}

</div>

                    
                    
                    </div></div>
                    
                    </div>
                    <Footer></Footer>
                    </div>
                    </div>
                    </div>
                    </div>

  )
}

export default TeacherProfileReport

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