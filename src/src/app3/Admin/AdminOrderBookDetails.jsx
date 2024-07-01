import React, { useEffect, useState,useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import Footer from "../component/Footer";
import { Link, useNavigate ,useParams} from "react-router-dom";
import { ProgressSpinner } from "primereact/progressspinner";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import axios from "axios";
import { Tooltip } from "primereact/tooltip";
import { Toast } from "primereact/toast";
import config from "../config";
import AdminHeader from "./AdminHeader";
import AdminSubHeader from "./AdminSubHeader";
const AdminOrderBookDetails = () => {
  const {  uniqueorderid } = useParams();
  const [data, setData] = useState([]);
  const [backClicked, setBackClicked] = useState(false);
  const [globalFilter, setGlobalFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const fetchOrderDetails = async () => {
    setLoading(true);

    try {
      const response = await axios.post('https://ghanish.in/api/common/order_details', {
        user_id: userId,
        uniqueorderid: uniqueorderid,
      });

      if (response.data.st === 1 && response.data.data) {
        const orderDetails = response.data.data;
        setData([orderDetails]); // Set the order details data
      } else {
        setError(new Error("No data found"));
      }
    } catch (error) {
      setError(new Error(error.message || "Failed to fetch data"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderDetails();
  }, [ uniqueorderid]);

  const handleBack = () => {
    if (!backClicked) {
      setBackClicked(true);
      navigate(-1);
    }
  };

  const rowClassName = (rowData, rowIndex) => {
    return rowIndex % 2 === 0 ? 'even-row' : 'odd-row';
  };


  return (
    <>
     <AdminHeader></AdminHeader>
<AdminSubHeader></AdminSubHeader>
      <div className="container-xxl container-p-y">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-style1 text-secondary">
            <li className="breadcrumb-item">
              <Link to="/student/dashboard" className="text-secondary">
                <i className="ri-home-7-line ri-lg"></i>
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/app2/order_book" className="text-secondary">
                Order Book
              </Link>
            </li>
            <li className="breadcrumb-item active text-secondary" aria-current="page">
              Order Book Details
            </li>
          </ol>
        </nav>

        <div className="card p-5">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <button
              onClick={handleBack}
              className="btn rounded-pill btn-outline-secondary btn-xs"
            >
              <i className="ri-arrow-left-circle-fill me-1 ri-md"></i> Back
            </button>

            <h5 className="mb-0 mx-auto">Order Book Details</h5>
            <div></div>
          </div>
          <div className="d-flex justify-content-end mb-3">
            {loading ? (
                                   <i className=" custom-target-icon ri-loader-2-line ri-lg me-3 mt-4 p-text-secondary"

                strokeWidth="5"
                fill="var(--surface-ground)"
                animationDuration=".5s"
              />
            ) : (
              <div className="mt-4">
                <Tooltip target=".custom-target-icon" />
                <i className="custom-target-icon ri ri-refresh-line ri-lg me-3 p-text-secondary"
                   data-pr-tooltip="Refresh"
                   data-pr-position="top"
                   style={{ cursor: 'pointer' }}
                   onClick={fetchOrderDetails} // Adjust unique order ID dynamically if needed
                >
                </i>
              </div>
            )}
            <IconField iconPosition="left">
              <InputIcon className="ri ri-search-line"></InputIcon>
              <InputText
                type="search"
                placeholder="Search"
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
                className="rounded"
              />
            </IconField>
          </div>
          <DataTable
            className="text-center"
            style={{ border: "1px solid #ddd" }}
            value={data}
            paginator
            rows={20}
            showGridlines
            loading={loading}
            globalFilter={globalFilter}
            emptyMessage="No records found"
            rowClassName={rowClassName}
          >
            <Column align="center" style={{ border: "1px solid #ddd" }} field="variety" header="Variety" ></Column>
            <Column align="center" style={{ border: "1px solid #ddd" }} field="ordertype" header="Order Type"></Column>
            <Column align="center" style={{ border: "1px solid #ddd" }} field="producttype" header="Product Type"></Column>
            <Column align="center" style={{ border: "1px solid #ddd" }} field="quantity" header="Quantity"></Column>
            <Column align="center" style={{ border: "1px solid #ddd" }} field="lotsize" header="Lot Size"></Column>
            <Column align="center" style={{ border: "1px solid #ddd" }} field="tradingsymbol" header="Symbol"></Column>
            <Column align="center" style={{ border: "1px solid #ddd" }} field="transactiontype" header="Transaction Type"></Column>
            <Column align="center" style={{ border: "1px solid #ddd" }} field="exchange" header="Exchange"></Column>
            <Column align="center" style={{ border: "1px solid #ddd" }} field="instrumenttype" header="Instrument Type"></Column>
            <Column align="center" style={{ border: "1px solid #ddd" }} field="strikeprice" header="Strike Price"></Column>
            <Column align="center" style={{ border: "1px solid #ddd" }} field="optiontype" header="Option Type"></Column>
            <Column align="center" style={{ border: "1px solid #ddd" }} field="expirydate" header="Expiry Date"></Column>
            <Column align="center" style={{ border: "1px solid #ddd" }} field="orderstatus" header="Order Status"></Column>
          </DataTable>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default AdminOrderBookDetails;
