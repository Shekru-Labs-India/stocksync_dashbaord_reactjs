import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const SubHeaderS = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath.includes("student/dashboard")) {
      setActiveItem("student_home");
    } else if (currentPath.includes("app2/order_book")) {
      setActiveItem("order_book");
    } else if (currentPath.includes("app2/student_trade_book")) {
      setActiveItem("trade_book");
    } else {
      setActiveItem("");
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
                    to="/student/dashboard"
                    className="menu-link"
                    onClick={() => handleSetActive("student_home")}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <i className="menu-icon tf-icons ri-home-3-line"></i>
                    <div>Home</div>
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
                    to="/app2/order_book"
                    className="menu-link"
                    onClick={() => handleSetActive("order_book")}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <i className="menu-icon tf-icons ri-list-unordered"></i>
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
                    to="/app2/student_trade_book"
                    className="menu-link"
                    onClick={() => handleSetActive("trade_book")}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <i className=" menu-icon ri-terminal-window-line"></i>
                    <div>Trade Book</div>
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

export default SubHeaderS;

