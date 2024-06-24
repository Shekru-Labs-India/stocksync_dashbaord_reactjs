import React, { useEffect, useState ,useRef} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import { IconField } from "primereact/iconfield";
import { InputText } from "primereact/inputtext";
import { InputIcon } from "primereact/inputicon";
import config from "../../app3/config";
import Footer from "../component/Footer";
import SubHeaderS from "./SubHeaderS";
import StudentHeader from "./StudentHeader";
import { Toast } from "primereact/toast";
const StudentMyReportView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const toast = useRef(null);
  const [backClicked, setBackClicked] = useState(false);
  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  const [summary, setSummary] = useState({
    total_trades_count: 0,
    total_profitable_trades: 0,
    total_losing_trades: 0,
    total_commission: 0.0,
  });

  useEffect(() => {
    const { state } = location;

    // Check if required data is present in location state
    if (!state || !state.userId || !state.month) {
      // Handle the case where location state is not properly set
      // You can navigate back or handle it based on your application flow
      navigate(-1); // Navigate back
      return;
    }

    fetchData(state.userId, state.month);
  }, [location, navigate]);

  const  fetchData = async (userId, month) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${config.apiDomain}/api/common/trade_details`,
        {
          user_id: userId,
          sell_month: month,
        }
      );

      if (response.data) {
        setData(response.data.trades);
        setSummary(response.data.completed_trades_aggregate);
      } else {
        setError(new Error("No data found"));
      }
    } catch (error) {
      setError(new Error(error.message || "Failed to fetch data"));
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async (userId, month) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${config.apiDomain}/api/common/trade_details`,
        {
          user_id: userId,
          sell_month: month,
        }
      );

      if (response.data) {
        setData(response.data.trades);
        setSummary(response.data.completed_trades_aggregate);
        const errorMsg = response.data.msg || "Success";
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: toTitleCase(errorMsg),
          life: 3000,
        });
     
       } else if (response.data && response.data.st === 2) {
          const errorMsg = response.data.msg || "Warning";
          setError(new Error(errorMsg));
          toast.current.show({
            severity: "warn",
            summary: "Warning",
            detail: toTitleCase(errorMsg),
            life: 3000,
          });
        } else if (response.data && (response.data.st === 3 || response.data.st === 4)) {
          const errorMsg = response.data.msg || "Danger: Server Error";
          setError(new Error(errorMsg));
          toast.current.show({
            severity: "error",
            summary: "Error",
            detail: toTitleCase(errorMsg),
            life: 3000,
          });
        } else {
          const errorMsg = response.data.msg || "Failed to fetch data";
          setError(new Error(errorMsg));
          toast.current.show({
            severity: "error",
            summary: "Error",
            detail: toTitleCase(errorMsg),
            life: 3000,
          });
        }
      
      } catch (error) {
        const errorMsg = error.response ? error.response.data.msg || "Failed to fetch data" : error.message || "Failed to fetch data";
        setError(new Error(errorMsg));
        toast.current.show({
          severity: "error",
          summary: "Error",
          detail: toTitleCase(errorMsg),
          life: 3000,
        });
      }  finally {
        setLoading(false);
      }
    };


    const handleBack = () => {
      if (!backClicked) {
        setBackClicked(true);
        navigate(-1);
      }
    };

  return (
    <>
      <Toast ref={toast} />
  <StudentHeader />
  <SubHeaderS />
      <div className="container-xxl container-p-y">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-style1 text-secondary">
            <li className="breadcrumb-item">
              <Link to="/student/dashboard" className="text-secondary">
                <i className="ri-home-5-line ri-lg"></i>
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/app2/student_profile" className="text-secondary">
                Profile
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/app2/student_my_report" className="text-secondary">
                My Report
              </Link>
            </li>
            <li className="breadcrumb-item active text-secondary" aria-current="page">
              My Report Details
            </li>
          </ol>
        </nav>
        <div className="card p-5">
          <div className="row align-items-center">
            <div className="col text-start mb-5 ">
            <button
                onClick={handleBack}
                className="btn rounded-pill btn-outline-secondary btn-xs"
              >
                <i className="ri-arrow-left-circle-fill me-1 ri-md"></i> Back
              </button>
            </div>
            <div className="col text-start mb-5">
              <h5 className="mb-0">My Report Details</h5>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-3">
              <h4>{summary.total_trades_count}</h4>
              <p>Total Trades</p>
            </div>
            <div className="col-md-3">
              <h4>{summary.total_profitable_trades}</h4>
              <p>Profitable Trades</p>
            </div>
            <div className="col-md-3">
              <h4>{summary.total_losing_trades}</h4>
              <p>Losing Trades</p>
            </div>
            <div className="col-md-3">
              <h4>{summary.total_commission} Rs.</h4>
              <p>Commission</p>
            </div>
          </div>

          <div className="d-flex justify-content-end mb-3">
            {loading ? (
                                          <i className=" custom-target-icon ri-loader-2-line ri-lg mt-4 ms-e p-text-secondary"></i>

            ) : (
              <i
                 className=" ri ri-refresh-line ri-lg mt-4 me-3"
                onClick={() => handleRefresh(location.state.userId, location.state.month)}
              />
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
              field="buy_price"
              header="Buy Price"
              sortable
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="buy_lotsize"
              header="Buy Lot Size"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="buy_stock_quantity"
              header="Buy Quantity"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="buy_datetime"
              header="Buy Time"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="buy_orderid"
              header="Buy Order ID"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="sell_price"
              header="Sell Price"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="sell_lotsize"
              header="Sell Lot Size"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="sell_stock_quantity"
              header="Sell Quantity"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="sell_datetime"
              header="Sell Time"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="sell_orderid"
              header="Sell Order ID"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="pandl"
              header="P&L"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="pandl_total"
              header="P&L Total"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="pandl_percent"
              header="P&L Percent"
            ></Column>
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="commission"
              header="Commission (%)"
            ></Column>
          </DataTable>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentMyReportView;
