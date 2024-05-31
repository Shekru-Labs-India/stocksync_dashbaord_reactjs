import { Link } from "react-router-dom";
import React, { useState } from "react";


const SubHeader = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleSetActive = (item) => {
    if (activeItem !== item) {
      setActiveItem(item);
    }
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
                  className={`menu-item ${activeItem === "basket" ? "active" : ""}`}
                >
                  <Link 
                    to="/user_basket"
                    className="menu-link"
                    onClick={() => handleSetActive("basket")}
                  >
                    <i className="menu-icon tf-icons ri-shopping-basket-2-line"></i>
                    <div>Basket</div>
                  </Link>
                </li>
                <li
                  className={`menu-item ${activeItem === "position" ? "active" : ""}`}
                >
                  <Link to="/trade_position"
                
                    className="menu-link"
                    onClick={() => handleSetActive("position")}
                  >
                    <i className="menu-icon tf-icons ri-logout-circle-r-line"></i>
                    <div>Position</div>
                  </Link>
                </li>
                <li
                  className={`menu-item ${activeItem === "order_book" ? "active" : ""}`}
                >
                  <Link 
                    to="/order_book"
                    className="menu-link"
                    onClick={() => handleSetActive("order_book")}
                  >
                    <i className="menu-icon tf-icons ri-list-unordered"></i>
                    <div>Order Book</div>
                  </Link>
                </li>
                <li
                  className={`menu-item ${activeItem === "trade_book" ? "active" : ""}`}
                >
                  <Link 
                    to="/trade_book"
                    className="menu-link"
                    onClick={() => handleSetActive("trade_book")}
                  >
                    <i className="menu-icon tf-icons ri-draggable"></i>
                    <div>Trade Book</div>
                  </Link>
                </li>
                <li
                  className={`menu-item ${activeItem === "holding" ? "active" : ""}`}
                >
                  <Link 
                    to="/user_holding"
                    className="menu-link"
                    onClick={() => handleSetActive("holding")}
                  >
                    <i className="menu-icon tf-icons ri-draggable"></i>
                    <div>Holding</div>
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
