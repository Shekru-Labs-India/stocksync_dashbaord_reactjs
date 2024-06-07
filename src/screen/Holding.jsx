import React from "react";

import $ from "jquery";
import "datatables.net"; // Import DataTables library
// import "datatables.net-bs5"; // Import DataTables Bootstrap 5 styling
import Footer from "../component/Footer";
import Header from "../component/Header";
import SubHeader from "../component/SubHeader";

const Holding = () => {
  return (
    <div><Header />
    <SubHeader />
    <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
      <div className="layout-container">
        <div className="Container">
          
          <div className="container-xxl flex-grow-1 container-p-y">
            <div class="card">
              <h5 class="card-header text-start">Holding </h5>
              <div
                class="card-datatable table-responsive text-start"
                id="DataTables_Table_0_wrapper"
              >
                <table class="dt-responsive table table-bordered">
                  <thead className="DataTables_Table_3">
                    <tr>
                      <th class="control sorting_disabled dtr-hidden">Name</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Post</th>
                      <th>City</th>
                      <th>Date</th>
                      <th>Salary</th>
                      <th>Age</th>
                      <th>Experience</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Post</th>
                      <th>City</th>
                      <th>Date</th>
                      <th>Salary</th>
                      <th>Age</th>
                      <th>Experience</th>
                      <th>Status</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      </div>
    </div>
  );
};

export default Holding;