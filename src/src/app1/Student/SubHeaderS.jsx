import { Link } from "react-router-dom";
import React, { useState } from "react";

const SubHeaderS = () => {
  const [activeItem, setActiveItem] = useState("");
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
      // padding: "10px",
      // cursor: "pointer",
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
                    to="/student_home"
                    className="menu-link"
                    onClick={() => handleSetActive("student_home")}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <i className="menu-icon tf-icons ri-shopping-basket-2-line"></i>
                    <div>Home</div>
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
