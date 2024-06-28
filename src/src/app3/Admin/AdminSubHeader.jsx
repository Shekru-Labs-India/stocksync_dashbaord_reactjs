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
    switch (true) {
      case location.pathname.startsWith("/admin/dashboard"):
        setActiveItem("student_home");
        break;
      case location.pathname.startsWith("/admin/manage_teacher"):
        setActiveItem("manage_teacher");
        break;
      case location.pathname.startsWith("/admin/holding"):
        setActiveItem("holding");
        break;
      case location.pathname.startsWith("/admin/trade_book"):
        setActiveItem("trade_book");
        break;
      case location.pathname.startsWith("/admin/order_book"):
        setActiveItem("order_book");
        break;
      default:
        setActiveItem("");
        break;
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
                    to="/admin/dashboard"
                    className="menu-link"
                    onClick={() => handleSetActive("student_home")}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <i className="menu-icon tf-icons ri-home-5-line"></i>
                    <div>Home</div>
                  </Link>
                </li>
                <li
                  className={`menu-item ${
                    location.pathname.startsWith("/admin/manage_teacher") ? "active" : ""
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

                <li
                  className={`menu-item ${
                    activeItem === "holding" ? "active" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter("holding")}
                  onMouseLeave={handleMouseLeave}
                  style={getMenuItemStyle("holding")}
                >
                  <Link
                    to="/admin/holding"
                    className="menu-link"
                    onClick={() => handleSetActive("holding")}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <i className="menu-icon tf-icons ri-group-line"></i>
                    <div>Holding</div>
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
                    to="/admin/trade_book"
                    className="menu-link"
                    onClick={() => handleSetActive("trade_book")}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <i className="menu-icon tf-icons ri-group-line"></i>
                    <div>Trade Book</div>
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
                    to="/admin/order_book"
                    className="menu-link"
                    onClick={() => handleSetActive("order_book")}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <i className="menu-icon tf-icons ri-group-line"></i>
                    <div>Order Book</div>
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
