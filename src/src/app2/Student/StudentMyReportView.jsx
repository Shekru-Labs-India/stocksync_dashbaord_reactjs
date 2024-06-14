// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate, Link } from "react-router-dom";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { InputText } from "primereact/inputtext";
// import SubHeaderS from "./SubHeaderS";
// import StudentHeader from "./StudentHeader";
// import Footer from "../component/Footer";
// import { Button } from "primereact/button";
// import { ProgressSpinner } from "primereact/progressspinner";
// import { IconField } from "primereact/iconfield";
// import { InputIcon } from "primereact/inputicon";
// import axios from "axios";
// import "primereact/resources/themes/saga-blue/theme.css";  // Make sure these CSS files are imported
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";

// const StudentMyReportView = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { userId, month } = location.state; // Extract userId and month from state
//   const [data, setData] = useState([]);
//   const [globalFilter, setGlobalFilter] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [summary, setSummary] = useState({
//     total_trades_count: 0,
//     total_profitable_trades: 0,
//     total_losing_trades: 0,
//     total_commission: 0.0,
//   });

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.post(
//         "https://ghanish.in/api/common/trade_details",
//         {
//           user_id: userId,
//           sell_month: month,
//         }
//       );

//       if (response.data) {
//         setData(response.data.trades);
//         setSummary(response.data.completed_trades_aggregate);
//       } else {
//         setError(new Error("No data found"));
//       }
//     } catch (error) {
//       setError(new Error(error.message || "Failed to fetch data"));
//     } finally {
//       setLoading(false);
//     }
//   };

  // const handleBack = () => {
  //   navigate(-1);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

//   const rowClassName = (rowData, rowIndex) => {
//     return rowIndex % 2 === 0 ? "even-row" : "odd-row";
//   };

//   return (
//     <>
//       <StudentHeader />
//       <SubHeaderS />
//       <div className="container-xxl container-p-y">
//         <nav aria-label="breadcrumb">
//           <ol className="breadcrumb breadcrumb-style1">
//             <li className="breadcrumb-item">
//               <Link to="/">Home</Link>
//             </li>
//             <li className="breadcrumb-item">
//               <Link to="/admin/profile">Profile</Link>
//             </li>
//             <li className="breadcrumb-item">
//               <Link to="/admin/my_report">My Report</Link>
//             </li>
//             <li className="breadcrumb-item active" aria-current="page">
//               My Report Details
//             </li>
//           </ol>
//         </nav>
//         <div className="card p-5">
//           <div className="row align-items-center">
//             <div className="col text-start mb-5">
//               <button onClick={handleBack} className="btn btn-transparent">
//                 Back
//               </button>
//             </div>
//             <div className="col text-start mb-5">
//               <h5 className="mb-0">My Report Details</h5>
//             </div>
//           </div>
//           <div className="row text-center">
//             <div className="col-md-3">
//               <h4>{summary.total_trades_count}</h4>
//               <p>Total Trades</p>
//             </div>
//             <div className="col-md-3">
//               <h4>{summary.total_profitable_trades}</h4>
//               <p>Profitable Trades</p>
//             </div>
//             <div className="col-md-3">
//               <h4>{summary.total_losing_trades}</h4>
//               <p>Losing Trades</p>
//             </div>
//             <div className="col-md-3">
//               <h4>{summary.total_commission} Rs.</h4>
//               <p>Commission</p>
//             </div>
//           </div>

//           <div className="d-flex justify-content-end mb-3">
//             {loading ? (
//               <ProgressSpinner
//                 style={{
//                   width: "30px",
//                   height: "30px",
//                   marginRight: "10px",
//                 }}
//                 strokeWidth="5"
//                 fill="var(--surface-ground)"
//                 animationDuration=".5s"
//               />
//             ) : (
//               <Button
//                 type="button"
//                 icon="pi pi-refresh"
//                 text
//                 onClick={fetchData}
//               />
//             )}
//             <IconField iconPosition="left">
//               <InputIcon className="pi pi-search"></InputIcon>
//               <InputText
//                 type="search"
//                 placeholder="Search"
//                 value={globalFilter}
//                 onChange={(e) => setGlobalFilter(e.target.value)}
//               />
//             </IconField>
//           </div>
//           <DataTable
//             style={{ border: "1px solid #ddd" }}
//             value={data}
//             paginator
//             rows={10}
//             showGridlines
//             loading={loading}
//             globalFilter={globalFilter}
//             emptyMessage="No records found"
//             rowClassName={rowClassName}
//             responsiveLayout="scroll"
//           >
            // <Column
            //   align="center"
            //   style={{ border: "1px solid #ddd" }}
            //   field="buy_price"
            //   header="Buy Price"
            //   sortable
            // />
            // <Column
            //   align="center"
            //   style={{ border: "1px solid #ddd" }}
            //   field="buy_lotsize"
            //   header="Buy Lot Size"
            // />
            // <Column
            //   align="center"
            //   style={{ border: "1px solid #ddd" }}
            //   field="buy_stock_quantity"
            //   header="Buy Quantity"
            // />
            // <Column
            //   align="center"
            //   style={{ border: "1px solid #ddd" }}
            //   field="buy_datetime"
            //   header="Buy Time"
            // />
            // <Column
            //   align="center"
            //   style={{ border: "1px solid #ddd" }}
            //   field="buy_orderid"
            //   header="Buy Order ID"
            // />
            // <Column
            //   align="center"
            //   style={{ border: "1px solid #ddd" }}
            //   field="sell_price"
            //   header="Sell Price"
            // />
            // <Column
            //   align="center"
            //   style={{ border: "1px solid #ddd" }}
            //   field="sell_lotsize"
            //   header="Sell Lot Size"
            // />
            // <Column
            //   align="center"
            //   style={{ border: "1px solid #ddd" }}
            //   field="sell_stock_quantity"
            //   header="Sell Quantity"
            // />
            // <Column
            //   align="center"
            //   style={{ border: "1px solid #ddd" }}
            //   field="sell_datetime"
            //   header="Sell Time"
            // />
            // <Column
            //   align="center"
            //   style={{ border: "1px solid #ddd" }}
            //   field="sell_orderid"
            //   header="Sell Order ID"
            // />
            // <Column
            //   align="center"
            //   style={{ border: "1px solid #ddd" }}
            //   field="pandl"
            //   header="P&L"
            // />
            // <Column
            //   align="center"
            //   style={{ border: "1px solid #ddd" }}
            //   field="pandl_total"
            //   header="P&L Total"
            // />
            // <Column
            //   align="center"
            //   style={{ border: "1px solid #ddd" }}
            //   field="pandl_percent"
            //   header="P&L Percent"
            // />
            // <Column
            //   align="center"
            //   style={{ border: "1px solid #ddd" }}
            //   field="commission"
            //   header="Commission (%)"
            // />
//           </DataTable>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default StudentMyReportView;


import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import SubHeaderS from "./SubHeaderS";
import StudentHeader from "./StudentHeader";
import Footer from "../component/Footer";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import axios from "axios";
import "primereact/resources/themes/saga-blue/theme.css";  // Make sure these CSS files are imported
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import config from "../config";
const StudentMyReportView = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if location.state exists and set default values if not
  const userId = location.state?.userId || null;
  const month = location.state?.month || null;

  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [summary, setSummary] = useState({
    total_trades_count: 0,
    total_profitable_trades: 0,
    total_losing_trades: 0,
    total_commission: 0.0,
  });

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    if (!userId || !month) {
      setError(new Error("User ID or Month not provided"));
      setLoading(false);
      return;
    }

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

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const rowClassName = (rowData, rowIndex) => {
    return rowIndex % 2 === 0 ? "even-row" : "odd-row";
  };

  return (
    <>
      <StudentHeader />
      <SubHeaderS />
      <div className="container-xxl container-p-y">
      <nav aria-label="breadcrumb">
  <ol className="breadcrumb breadcrumb-style1 text-secondary">
    <li className="breadcrumb-item">
      <Link to="/student/dashboard" className="text-secondary">
        <i className="ri-home-line ri-lg"></i>
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
            <div className="col text-start mb-5">
              <Button
                onClick={handleBack}
                className="btn btn-transparent"
                style={{ color: "A9A9A9", borderColor: "A9A9A9", borderStyle: "solid",width:'72px', }}              >
                <i className="ri-arrow-left-circle-line me-3 ri-md"></i>Back
              </Button>
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
                onClick={fetchData}
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
            style={{ border: "1px solid #ddd" }}
            value={data}
            paginator
            rows={10}
            showGridlines
            loading={loading}
            globalFilter={globalFilter}
            emptyMessage="No records found"
            rowClassName={rowClassName}
            responsiveLayout="scroll"
          >
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="buy_price"
              header="Buy Price"
              sortable
            />
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="buy_lotsize"
              header="Buy Lot Size"
            />
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="buy_stock_quantity"
              header="Buy Quantity"
            />
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="buy_datetime"
              header="Buy Time"
            />
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="buy_orderid"
              header="Buy Order ID"
            />
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="sell_price"
              header="Sell Price"
            />
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="sell_lotsize"
              header="Sell Lot Size"
            />
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="sell_stock_quantity"
              header="Sell Quantity"
            />
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="sell_datetime"
              header="Sell Time"
            />
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="sell_orderid"
              header="Sell Order ID"
            />
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="pandl"
              header="P&L"
            />
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="pandl_total"
              header="P&L Total"
            />
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="pandl_percent"
              header="P&L Percent"
            />
            <Column
              align="center"
              style={{ border: "1px solid #ddd" }}
              field="commission"
              header="Commission (%)"
            />
          </DataTable>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentMyReportView;
