// import React from "react";
// import { Link } from "react-router-dom";
// import mirrorLogo from '../assets/mirrortrade.jpg';

// const Header = () => {
//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     localStorage.clear();
//     // Optionally, redirect to login page or perform other actions after logout
//   };

//   const userId = localStorage.getItem("userId");
//   const userName = localStorage.getItem("userName");
//   const userRole = localStorage.getItem("userRole");

//   const toTitleCase = (str) => {
//     return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
//   };

//   // Function to format the date and time
//   const getCurrentDateTime = () => {
//     const options = {
//       weekday: 'long', // 'short', 'long'
//       // year: 'numeric',
//       month: 'long', // 'short', 'long'
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit',
//       second: '2-digit',
//     };
//     const currentDateTime = new Date().toLocaleString('en-US', options);
//     return currentDateTime;
//   };

//   return (
//     <div>
//       <nav className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme" id="layout-navbar">
//         <div className="container-xxl d-flex justify-content-between align-items-center">
//           {/* Left Section: Logo and TradeMirror */}
//           <div className="d-flex align-items-center">
//             <div className="avatar me-2">
//               <img src={mirrorLogo} alt="TradeMirror Logo" className="w-px-40 h-auto rounded-circle" />
//             </div>
//             <span className="app-brand-text demo menu-text fw-semibold">
//               TradeMirror
//             </span>
//           </div>

//           {/* Center Section: Current Date */}
//           <div className="d-none d-xl-block">
//             <span>{getCurrentDateTime()}</span>
//           </div>

//           {/* Right Section: User Info and Profile Menu */}
//           <div className="d-flex align-items-center">
//             <div className="text-end me-3">
//               <h6 className="mb-0 small">{toTitleCase(userName)}</h6>
//               <small className="text-muted">{toTitleCase(userRole)}</small>
//             </div>
//             <ul className="navbar-nav flex-row align-items-center ms-auto">
//               <li className="nav-item navbar-dropdown dropdown-user dropdown">
//                 <a className="nav-link dropdown-toggle hide-arrow p-0" href="javascript:void(0);" data-bs-toggle="dropdown">
//                   <div className="avatar">
//                     <img src={mirrorLogo} alt="Profile" className="w-px-40 h-auto rounded-circle" />
//                   </div>
//                 </a>
//                 <ul className="dropdown-menu dropdown-menu-end mt-3 py-2">
//                   <li>
//                     <a className="dropdown-item" href="pages-account-settings-account.html">
//                       <div className="d-flex align-items-center">
//                         <div className="avatar me-2">
//                           <img src={mirrorLogo} alt="Profile" className="w-px-40 h-auto rounded-circle" />
//                         </div>
//                         <div className="flex-grow-1">
//                           <h6 className="mb-0 small">{toTitleCase(userName)}</h6>
//                           <small className="text-muted">{toTitleCase(userRole)}</small>
//                         </div>
//                       </div>
//                     </a>
//                   </li>
//                   <li>
//                     <div className="dropdown-divider"></div>
//                   </li>
//                   <li>
//                     <Link to="/teacher/user_profile" className="dropdown-item">
//                       <i className="ri-user-3-line ri-22px me-2"></i>
//                       <span className="align-middle"> Profile</span>
//                     </Link>
//                   </li>
//                   <li>
//                     <div className="dropdown-divider"></div>
//                   </li>
//                   <li>
//                     <div className="d-grid px-4 pt-2 pb-1">
//                       <Link to="/" onClick={handleLogout} className="dropdown-item btn btn-danger d-flex align-items-center">
//                         <span className="align-middle">Logout</span>
//                       </Link>
//                     </div>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mirrorLogo from '../assets/mirrortrade.jpg';

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
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const formatTime = (date) => {
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    };
    return date.toLocaleString('en-US', options);
  };
  const formatTimee = (date) => {
    const options = {
     
      hour: '2-digit',
      minute: '2-digit',
      
    };
    return date.toLocaleString('en-US', options);
  };
  return (
    <div>
      <nav className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme" id="layout-navbar">
        <div className="container-xxl d-flex justify-content-between align-items-center">
          {/* Left Section: Logo and TradeMirror */}
          <div className="d-flex align-items-center">
            <div className="avatar me-2">
              <img src={mirrorLogo} alt="TradeMirror Logo" className="w-px-40 h-auto rounded-circle" />
            </div>
            <span className="app-brand-text demo menu-text fw-semibold">
              TradeMirror
            </span>
          </div>

          {/* Center Section: Current Time */}
          <div className="d-none d-xl-block">
            <span>{formatTime(currentTime)}</span>
       <br></br>
       <div className="text-center ">
            <strong className="fs-5">{formatTimee(currentTime)}</strong>
            </div>
          </div>
          {/* Right Section: User Info and Profile Menu */}
          <div className="d-flex align-items-center">
          <div className="text-end me-3">
  <h6 className="mb-0" style={{ fontSize: '15px' }}>{toTitleCase(userName)}</h6>
  <div className="text-center">
    {/* Inline style for badge */}
    <span className="badge bg-primary" style={{ fontSize: '10px' }}>{toTitleCase(userRole)}</span>
  </div>
</div>
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              <li className="nav-item navbar-dropdown dropdown-user dropdown">
                <a className="nav-link dropdown-toggle hide-arrow p-0" href="javascript:void(0);" data-bs-toggle="dropdown">
                  <div className="avatar">
                    <img src={mirrorLogo} alt="Profile" className="w-px-40 h-auto rounded-circle" />
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end mt-3 py-2">
                  <li>
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
                  </li>
                  <li>
                    <div className="dropdown-divider"></div>
                  </li>
                  <li>
                    <Link to="/teacher/user_profile" className="dropdown-item">
                      <i className="ri-user-3-line ri-22px me-2"></i>
                      <span className="align-middle"> Profile</span>
                    </Link>
                  </li>
                  <li>
                    <div className="dropdown-divider"></div>
                  </li>
                  <li>
                    <div className="d-grid px-4 pt-2 pb-1">
                      <Link to="/" onClick={handleLogout} className="dropdown-item btn btn-danger d-flex align-items-center">
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
