import React, { useState, useEffect } from "react";
import AdminSubHeader from "./AdminSubHeader";
import Footer from "../component/Footer";
import AdminHeader from "./AdminHeader";
// import StudentHeader from "./StudentHeader";

const AdminDashboard = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://192.46.212.210/api/student/student_home"
  //       );
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       setMessage(data.msg);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <AdminHeader />
      <AdminSubHeader />
      <div className="container-fulid h-100 text-center">
        <h1>
          {/* {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && <p>{message}</p>} */}
          Admin Dashboard
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
