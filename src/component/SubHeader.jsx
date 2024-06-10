// import { Link } from "react-router-dom";
// import React, { useState } from "react";

// const SubHeader = () => {
//   const [activeItem, setActiveItem] = useState("");
//   const [hoverItem, setHoverItem] = useState("");

//   const handleSetActive = (item) => {
//     if (activeItem !== item) {
//       setActiveItem(item);
//     }
//   };

//   const handleMouseEnter = (item) => {
//     setHoverItem(item);
//   };

//   const handleMouseLeave = () => {
//     setHoverItem("");
//   };

//   const getMenuItemStyle = (item) => {
//     const isActive = activeItem === item;
//     const isHovered = hoverItem === item;
//     const baseStyle = {
//       // padding: "10px",
//       // cursor: "pointer",
//       color: "black",
//       backgroundColor: isHovered ? "#8c57ff" : "transparent", // Change background color on hover
//     };
//     if (isActive) {
//       baseStyle.color = "#8c57ff";
//     }
//     if (isHovered) {
//       baseStyle.color = "white"; // Ensures text is visible on blue background
//     }
//     return baseStyle;
//   };

//   return (
//     <div>
//       <div className="layout-page">
//         <div className="content-wrapper">
//           <aside
//             id="layout-menu"
//             className="layout-menu-horizontal menu-horizontal menu bg-menu-theme flex-grow-0"
//           >
//             <div className="container-xxl d-flex h-100">
//               <ul className="menu-inner">
//                 <li
//                   className={`menu-item ${activeItem === "basket" ? "active" : ""}`}
//                   onMouseEnter={() => handleMouseEnter("basket")}
//                   onMouseLeave={handleMouseLeave}
//                   style={getMenuItemStyle("basket")}
//                 >
//                   <Link 
//                     to="/user_basket"
//                     className="menu-link"
//                     onClick={() => handleSetActive("basket")}
//                     style={{ textDecoration: 'none', color: 'inherit' }}
//                   >
//                     <i className="menu-icon tf-icons ri-shopping-basket-2-line"></i>
//                     <div>Basket</div>
//                   </Link>
//                 </li>
//                 <li
//                   className={`menu-item ${activeItem === "position" ? "active" : ""}`}
//                   onMouseEnter={() => handleMouseEnter("position")}
//                   onMouseLeave={handleMouseLeave}
//                   style={getMenuItemStyle("position")}
//                 >
//                   <Link 
//                     to="/trade_position"
//                     className="menu-link"
//                     onClick={() => handleSetActive("position")}
//                     style={{ textDecoration: 'none', color: 'inherit' }}
//                   >
//                     <i className="menu-icon tf-icons ri-logout-circle-r-line"></i>
//                     <div>Position</div>
//                   </Link>
//                 </li>
//                 <li
//                   className={`menu-item ${activeItem === "order_book" ? "active" : ""}`}
//                   onMouseEnter={() => handleMouseEnter("order_book")}
//                   onMouseLeave={handleMouseLeave}
//                   style={getMenuItemStyle("order_book")}
//                 >
//                   <Link 
//                     to="/order_book"
//                     className="menu-link"
//                     onClick={() => handleSetActive("order_book")}
//                     style={{ textDecoration: 'none', color: 'inherit' }}
//                   >
//                     <i className="menu-icon tf-icons ri-list-unordered"></i>
//                     <div>Order Book</div>
//                   </Link>
//                 </li>
//                 <li
//                   className={`menu-item ${activeItem === "trade_book" ? "active" : ""}`}
//                   onMouseEnter={() => handleMouseEnter("trade_book")}
//                   onMouseLeave={handleMouseLeave}
//                   style={getMenuItemStyle("trade_book")}
//                 >
//                   <Link 
//                     to="/trade_book"
//                     className="menu-link"
//                     onClick={() => handleSetActive("trade_book")}
//                     style={{ textDecoration: 'none', color: 'inherit' }}
//                   >
//                  <i className=" menu-icon ri-terminal-window-line"></i>
//                     <div>Trade Book</div>
//                   </Link>
//                 </li>
//                 <li
//                   className={`menu-item ${activeItem === "holding" ? "active" : ""}`}
//                   onMouseEnter={() => handleMouseEnter("holding")}
//                   onMouseLeave={handleMouseLeave}
//                   style={getMenuItemStyle("holding")}
//                 >
//                   <Link 
//                     to="/user_holding"
//                     className="menu-link"
//                     onClick={() => handleSetActive("holding")}
//                     style={{ textDecoration: 'none', color: 'inherit' }}
//                   >
//                     <i className=" menu-icon ri-file-list-2-line"></i>
//                     <div>Holding</div>
//                   </Link>
//                   </li>
//                   <li
//                   className={`menu-item ${activeItem === "manage_student" ? "active" : ""}`}
//                   onMouseEnter={() => handleMouseEnter("manage_student")}
//                   onMouseLeave={handleMouseLeave}
//                   style={getMenuItemStyle("manage_student")}
//                 >
//                   <Link 
//                     to="/manage_student"
//                     className="menu-link"
//                     onClick={() => handleSetActive("manage_student")}
//                     style={{ textDecoration: 'none', color: 'inherit' }}
//                   >
//                    <i className=" menu-icon ri-group-line"></i>
//                     <div>Manage Student</div>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubHeader;




import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
const SubHeader = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const path = location.pathname;
    const item = path.split("/")[1]; // Assuming the path is like '/user_basket' or '/manage_student'
    setActiveItem(item);
  }, [location]);

  const [hoverItem, setHoverItem] = useState("");

  const handleSetActive = (item) => {
    if (activeItem !== item) {
      setActiveItem(item);
    }
  };

  const handleMouseEnter = (item) => {
    setHoverItem(item);
  };

  const handleMouseLeave = () => {
    setHoverItem("");
  };

  const getMenuItemStyle = (item) => {
    const isHovered = hoverItem === item;
    const baseStyle = {
      color: isHovered ? "white" : "black",
      backgroundColor: isHovered ? "#8c57ff" : "transparent",
    };
    return baseStyle;
  };

  return (
    <div>
      <div className="layout-page">
        <div className="content-wrapper">
          <aside
            id="layout-menu"
            className="layout-menu-horizontal menu-horizontal menu bg-menu-theme flex-grow-0"
          >
            <div className="container-xxl d-flex h-100">
              <ul className="menu-inner">
                <li
                  className={`menu-item ${activeItem === "user_basket" ? "active" : ""}`}
                  onMouseEnter={() => handleMouseEnter("user_basket")}
                  onMouseLeave={handleMouseLeave}
                  style={getMenuItemStyle("user_basket")}
                >
                  <Link 
                    to="/user_basket"
                    className="menu-link"
                    onClick={() => handleSetActive("user_basket")}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <i className="menu-icon tf-icons ri-shopping-basket-2-line"></i>
                    <div>Basket</div>
                  </Link>
                </li>
                <li
                  className={`menu-item ${activeItem === "trade_position" ? "active" : ""}`}
                  onMouseEnter={() => handleMouseEnter("trade_position")}
                  onMouseLeave={handleMouseLeave}
                  style={getMenuItemStyle("trade_position")}
                >
                  <Link 
                    to="/trade_position"
                    className="menu-link"
                    onClick={() => handleSetActive("trade_position")}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <i className="menu-icon tf-icons ri-logout-circle-r-line"></i>
                    <div>Position</div>
                  </Link>
                </li>
                <li
                  className={`menu-item ${activeItem === "order_book" ? "active" : ""}`}
                  onMouseEnter={() => handleMouseEnter("order_book")}
                  onMouseLeave={handleMouseLeave}
                  style={getMenuItemStyle("order_book")}
                >
                  <Link 
                    to="/order_book"
                    className="menu-link"
                    onClick={() => handleSetActive("order_book")}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <i className="menu-icon tf-icons ri-list-unordered"></i>
                    <div>Order Book</div>
                  </Link>
                </li>
                <li
                  className={`menu-item ${activeItem === "trade_book" ? "active" : ""}`}
                  onMouseEnter={() => handleMouseEnter("trade_book")}
                  onMouseLeave={handleMouseLeave}
                  style={getMenuItemStyle("trade_book")}
                >
                  <Link 
                    to="/trade_book"
                    className="menu-link"
                    onClick={() => handleSetActive("trade_book")}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <i className=" menu-icon ri-terminal-window-line"></i>
                    <div>Trade Book</div>
                  </Link>
                </li>
                <li
                  className={`menu-item ${activeItem === "user_holding" ? "active" : ""}`}
                  onMouseEnter={() => handleMouseEnter("user_holding")}
                  onMouseLeave={handleMouseLeave}
                  style={getMenuItemStyle("user_holding")}
                >
                  <Link 
                    to="/user_holding"
                    className="menu-link"
                    onClick={() => handleSetActive("user_holding")}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <i className=" menu-icon ri-file-list-2-line"></i>
                    <div>Holding</div>
                  </Link>
                </li>
                <li
                  className={`menu-item ${activeItem === "manage_student" ? "active" : ""}`}
                  onMouseEnter={() => handleMouseEnter("manage_student")}
                  onMouseLeave={handleMouseLeave}
                  style={getMenuItemStyle("manage_student")}
                >
                  <Link 
                    to="/manage_student"
                    className="menu-link"
                    onClick={() => handleSetActive("manage_student")}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <i className=" menu-icon ri-group-line"></i>
                    <div>Manage Student</div>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
