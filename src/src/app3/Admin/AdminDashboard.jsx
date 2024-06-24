import React, { useState, useEffect } from "react";
import AdminSubHeader from "./AdminSubHeader";
import Footer from "../component/Footer";
import AdminHeader from "./AdminHeader";

const AdminDashboard = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ghanish.in/api/admin/admin_home", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMessage(data.msg); // Assuming 'msg' is the key in the response
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <AdminHeader />
      <AdminSubHeader />
      <div className="container-fulid h-100 text-center">
        <h3>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && <p>{message}</p>}
         
        </h3>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;

