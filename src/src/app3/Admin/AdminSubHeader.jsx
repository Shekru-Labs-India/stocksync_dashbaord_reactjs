import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const AdminSubHeader = () => {
  const [activeItem, setActiveItem] = useState("");
  const [hoverItem, setHoverItem] = useState("");
  const location = useLocation();

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
      backgroundColor: isHovered ? "#8c57ff" : "transparent",
    };
    if (isActive) {
      baseStyle.color = "#8c57ff";
    }
    if (isHovered) {
      baseStyle.color = "white";
    }
    return baseStyle;
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveItem("student_home");
    } else if (location.pathname === "/admin/manage_teacher") {
      setActiveItem("manage_teacher");
    }
  }, [location.pathname]);

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
                    to="/"
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
                    activeItem === "manage_teacher" ? "active" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter("manage_teacher")}
                  onMouseLeave={handleMouseLeave}
                  style={getMenuItemStyle("manage_teacher")}
                >
                  <Link
                    to="/admin/manage_teacher"
                    className="menu-link"
                    onClick={() => handleSetActive("manage_teacher")}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <i className="menu-icon tf-icons ri-group-line"></i>
                    <div>Manage Teachers</div>
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

export default AdminSubHeader;
