





import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const SubHeader = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath.includes("/teacher/dashboard")) {
      setActiveItem("student_home");
    } else if (currentPath.includes("/user_basket")) {
      setActiveItem("user_basket");
    } else if (currentPath.includes("/trade_book")) {
      setActiveItem("trade_book");
    } else if (currentPath.includes("/order_book")) {
      setActiveItem("order_book");
    } else if (currentPath.includes("/trade_position")) {
      setActiveItem("trade_position");
    } else if (currentPath.includes("/user_holding")) {
      setActiveItem("user_holding");
    } else if (currentPath.includes("/teacher/manage_student")) {
      setActiveItem("manage_student");
    } else {
      setActiveItem(""); // Default case
    }
  }, [location.pathname]);

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
    const isActive = activeItem === item;
    const isHovered = hoverItem === item;
    const baseStyle = {
      color: "black",
      backgroundColor: isHovered ? "#8c57ff" : "transparent", // Change background color on hover
    };
    if (isActive) {
      baseStyle.color = "#8c57ff";
    }
    if (isHovered) {
      baseStyle.color = "white"; // Ensures text is visible on blue background
    }
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
                  className={`menu-item ${
                    activeItem === "student_home" ? "active" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter("student_home")}
                  onMouseLeave={handleMouseLeave}
                  style={getMenuItemStyle("student_home")}
                >
                  <Link
                    to="/teacher/dashboard"
                    className="menu-link"
                    onClick={() => handleSetActive("student_home")}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <i className="menu-icon tf-icons ri-home-7-line"></i>
                    <div>Home</div>
                  </Link>
                </li>
                <li
                  className={`menu-item ${
                    activeItem === "user_basket" ? "active" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter("user_basket")}
                  onMouseLeave={handleMouseLeave}
                  style={getMenuItemStyle("user_basket")}
                >
                  <Link
                    to="/user_basket"
                    className="menu-link"
                    onClick={() => handleSetActive("user_basket")}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <i className="menu-icon  ri-shopping-basket-2-line"></i>
                    <div>Basket</div>
                  </Link>
                </li>
                <li
                  className={`menu-item ${
                    activeItem === "order_book" ? "active" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter("order_book")}
                  onMouseLeave={handleMouseLeave}
                  style={getMenuItemStyle("order_book")}
                >
                  <Link
                    to="/order_book"
                    className="menu-link"
                    onClick={() => handleSetActive("order_book")}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <i className=" menu-icon ri-book-marked-line"></i>
                    <div>Order Book</div>
                  </Link>
                </li>
                <li
                  className={`menu-item ${
                    activeItem === "trade_book" ? "active" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter("trade_book")}
                  onMouseLeave={handleMouseLeave}
                  style={getMenuItemStyle("trade_book")}
                >
                  <Link
                    to="/trade_book"
                    className="menu-link"
                    onClick={() => handleSetActive("trade_book")}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <i className=" menu-icon ri-swap-2-line"></i>
                    <div>Trade Book</div>
                  </Link>
                </li>
                <li
                  className={`menu-item ${
                    activeItem === "trade_position" ? "active" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter("trade_position")}
                  onMouseLeave={handleMouseLeave}
                  style={getMenuItemStyle("trade_position")}
                >
                  <Link
                    to="/trade_position"
                    className="menu-link"
                    onClick={() => handleSetActive("trade_position")}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <i className=" menu-icon ri-stock-line"></i>
                    <div>Position</div>
                  </Link>
                </li>
                <li
                  className={`menu-item ${
                    activeItem === "user_holding" ? "active" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter("user_holding")}
                  onMouseLeave={handleMouseLeave}
                  style={getMenuItemStyle("user_holding")}
                >
                  <Link
                    to="/user_holding"
                    className="menu-link"
                    onClick={() => handleSetActive("user_holding")}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <i className="menu-icon ri-refund-2-line"></i>
                    <div>Holding</div>
                  </Link>
                </li>
               
                <li 
                  className={`menu-item  ${
                    activeItem === "manage_student" ? "active" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter("manage_student")}
                  onMouseLeave={handleMouseLeave}
                  style={getMenuItemStyle("manage_student")}
                >
                  <Link
                    to="/teacher/manage_student"
                    className="menu-link"
                    onClick={() => handleSetActive("manage_student")}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <i className="menu-icon ri-group-3-line"></i>
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


