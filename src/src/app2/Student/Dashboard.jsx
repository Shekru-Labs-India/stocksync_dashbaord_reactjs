import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SubHeaderS from "./SubHeaderS";
import StudentHeader from "./StudentHeader";
import config from "../config";
const Dashboard = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${config.apiDomain}/api/student/student_home`);
       
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMessage(data.msg);
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
      <StudentHeader />
      <SubHeaderS />
      <div className="container-fulid h-100 text-center">
        <h1>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && <p>{message}</p>}
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;



