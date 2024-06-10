import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import StudentHeader from "./StudentHeader";
import Footer from "../component/Footer";
import SubHeaderS from "./SubHeaderS";
import { Link, useNavigate } from "react-router-dom";
import "primereact/resources/themes/saga-blue/theme.css"; // Choose a theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons

const Demo = () => {
  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = "44";

    if (!userId) {
      setError(new Error("User ID not found in localStorage"));
      setLoading(false);
      return;
    }

    fetch("http://192.46.212.210/api/student/student_order_book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: userId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.st === 1 && data.data) {
          setData(data.data);
        } else {
          setError(new Error("No data found"));
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(new Error(error.message || "Failed to fetch data"));
        setLoading(false);
      });
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <StudentHeader />
      <SubHeaderS />
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div className="layout-container">
          <div className="container-fulid">
            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="card">
                <h5 className="card-header text-center">Order Book</h5>
                <div className="card-datatable table-responsive text-center p-5">
                  <div className="p-grid p-align-center p-justify-end">
                    <div className="p-col-3">
                      <span className="p-input-icon-left w-100">
                        <i className="pi pi-search" />
                        <InputText
                          type="search"
                          value={globalFilter}
                          onChange={(e) => setGlobalFilter(e.target.value)}
                          placeholder="Global Search"
                          style={{ width: "100%" }}
                        />
                      </span>
                    </div>
                  </div>
                  <DataTable
                    value={data}
                    paginator
                    rows={10}
                    loading={loading}
                    globalFilter={globalFilter}
                    emptyMessage="No records found"
                  >
                    <Column field="tradingsymbol" header="Symbols" sortable />
                    <Column
                      field="transactiontype"
                      header="Transaction Type"
                      sortable
                    />
                    <Column field="exchange" header="Exchange" sortable />
                    <Column
                      field="instrumenttype"
                      header="Instrument Type"
                      sortable
                    />
                    <Column
                      field="strikeprice"
                      header="Strike Price"
                      sortable
                    />
                    <Column field="optiontype" header="Option Type" sortable />
                    <Column
                      field="orderstatus"
                      header="Order Status"
                      sortable
                    />
                    <Column
                      header="Actions"
                      body={(rowData) => (
                        <Link to="/my_report_view">
                          <button className="btn btn-primary active">
                            <i className="ri-timeline-view"></i>
                          </button>
                        </Link>
                      )}
                    />
                  </DataTable>
                  {/* {error && <div>Error: {error.message}</div>} */}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Demo;
