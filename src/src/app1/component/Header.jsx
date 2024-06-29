import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mirrorLogo from "../assets/mirrortrade.jpg";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.clear();
    // Optionally, redirect to login page or perform other actions after logout
  };

  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("userName");
  const userRole = localStorage.getItem("userRole");

  const toTitleCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formatTime = (date) => {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
    };
    return date.toLocaleString("en-US", options);
  };
 

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const formatTimee = (date) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleString("en-US", options);
  };

  const getTimeIcon = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const dayOfWeek = date.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6

    if (dayOfWeek === 0 || dayOfWeek === 6) {
      // Display this icon for Saturday and Sunday
      return <i className="ri-checkbox-indeterminate-line text-secondary"></i>;
    } else if (hours === 9 && minutes === 15) {
      // Display this icon for 9:15 AM on weekdays
      return <i className="ri-checkbox-line text-success"></i>;
    } else if (hours === 15 && minutes === 30) {
      // Display this icon for 3:30 PM on weekdays
      return <i className="ri-checkbox-indeterminate-line text-secondary"></i>;
    }
    return null; // Return null if none of the conditions match
  };
  return (
    <div>
      <nav
        className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme"
        id="layout-navbar"
      >
        <div className="container-xxl d-flex justify-content-between align-items-center">
          {/* Left Section: Logo and TradeMirror */}
          <div className="d-flex align-items-center">
            <div className="avatar me-2">
              <img
                src={mirrorLogo}
                alt="TradeMirror Logo"
                className="w-px-40 h-auto rounded-circle"
              />
            </div>
            <span className="app-brand-text demo menu-text fw-semibold">
              TradeMirror
            </span>
          </div>

          {/* Center Section: Current Time */}
          <div className="d-none d-xl-block">
            <span className="text-secondary">{formatTime(currentTime)}</span>
            <br></br>
           
           <span className="fs-4 text-secondary">{getTimeIcon(currentTime)}</span>  <strong className="fs-4">{formatTimee(currentTime)}</strong>
     
    </div>
          
          {/* Right Section: User Info and Profile Menu */}
          <div className="d-flex align-items-center">
            <div className="text-end me-3">
              <h6 className="mb-0" style={{ fontSize: "16px" }}>
                {toTitleCase(userName)}
              </h6>
              {/* <div className="text-center"> */}
              {/* Inline style for badge */}
              <span className="badge bg-primary" style={{ fontSize: "14px" }}>
                {toTitleCase(userRole)}
              </span>
              {/* </div> */}
            </div>
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              <li className="nav-item navbar-dropdown dropdown-user dropdown">
                <a
                  className="nav-link dropdown-toggle hide-arrow p-0"
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                >
                  <div className="w-px-40 h-auto rounded-circle position-relative">
                    <div
                      className="d-flex justify-content-center align-items-center border border-primary border-3 rounded-circle"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i
                        className="ri-user-line"
                        style={{ fontSize: "20px" }}
                      ></i>
                    </div>
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end mt-3 py-2">
                  {/* <li>
                    <a className="dropdown-item" href="pages-account-settings-account.html">
                      <div className="d-flex align-items-center">
                        <div className="avatar me-2">
                          <img src={mirrorLogo} alt="Profile" className="w-px-40 h-auto rounded-circle" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 small">{toTitleCase(userName)}</h6>
                          <small className="text-muted">{toTitleCase(userRole)}</small>
                        </div>
                      </div>
                    </a>
                  </li> */}
                  {/* <li>
                    <div className="dropdown-divider"></div>
                  </li> */}
                  <li>
                    <Link to="/teacher/user_profile" className="dropdown-item">
                      <i className="ri-user-line ri-22px me-2"></i>
                      <span className="align-middle"> Profile</span>
                    </Link>
                  </li>
                  <li>
                    <div className="dropdown-divider"></div>
                  </li>
                  <li>
                    <div className="d-grid px-4 pt-2 pb-1">
                      <Link
                        to="/"
                        onClick={handleLogout}
                        className="dropdown-item btn btn-danger d-flex align-items-center"
                      >
                        <i className="ri-logout-box-r-line ri-lg me-1"></i>{" "}
                        <span className="align-middle">Logout</span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
