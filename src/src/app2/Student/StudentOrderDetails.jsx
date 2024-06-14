import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import StudentHeader from "./StudentHeader";
import Footer from "../component/Footer";
import SubHeaderS from "./SubHeaderS";
import { Link, useNavigate } from "react-router-dom";
import { ProgressSpinner } from "primereact/progressspinner";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import axios from "axios";
import config from "../config";
const StudentOrderDetails = () => {
  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    const userId = localStorage.getItem("userId"); // Fetch the user ID from local storage

    if (!userId) {
      setError(new Error("User ID not found"));
      setLoading(false);
      return;
    }

    setLoading(true);

    await axios
      .post(`${config.apiDomain}/api/student/student_order_book`, {
        student_id: userId,
      })
      .then((response) => {
        if (response.data.data) {
          setData(response.data.data);
        } else {
          setError(new Error("No data found"));
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(new Error(error.message || "Failed to fetch data"));
        setLoading(false);
      });
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleRefresh = () => {
    fetchData();
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <>
      <StudentHeader />
      <SubHeaderS />

      <div className="container-xxl container-p-y">
        <div className="card p-5">
          <h5 className="card-header text-center">Order Book Details</h5>
          <div className="d-flex justify-content-end mb-3">
            {loading ? (
              <ProgressSpinner
                style={{
                  width: "30px",
                  height: "30px",
                  marginRight: "10px",
                }}
                strokeWidth="5"
                fill="var(--surface-ground)"
                animationDuration=".5s"
              />
            ) : (
              <Button
                type="button"
                icon="pi pi-refresh"
                text
                onClick={handleRefresh}
              />
            )}
            <IconField iconPosition="left">
              <InputIcon className="pi pi-search"></InputIcon>
              <InputText
                type="search"
                placeholder="Search"
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
              />
            </IconField>
          </div>
          <DataTable
            className="text-center"
            style={{ border: "1px solid #ddd" }}
            value={data}
            paginator
            rows={5}
            showGridlines
            loading={loading}
            globalFilter={globalFilter}
            emptyMessage="No records found"
          >
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="tradingsymbol"
              header="Variety"
              sortable
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="transactiontype"
              header="Order Type"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="exchange"
              header="Product Type"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="instrumenttype"
              header="Quantity"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="strikeprice"
              header="Lot Size"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="optiontype"
              header="Symbols"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="orderstatus"
              header="Transaction Type"
            ></Column>
            
          
          </DataTable>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default StudentOrderDetails;
