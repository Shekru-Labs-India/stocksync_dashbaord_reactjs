import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SubHeaderS from "./SubHeaderS";
import StudentHeader from "./StudentHeader";
const Dashboard = () => {
  return (
    <>
      <StudentHeader></StudentHeader>
      <SubHeaderS></SubHeaderS>
      <div className="container h-100 text-align-center">
        <h1>Student Dashboard</h1>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
