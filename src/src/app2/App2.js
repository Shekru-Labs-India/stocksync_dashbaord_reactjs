import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import "./App.css";

// import UpdateStudent from "./screen/UpdateStudent";
// import StudentDetails from "./screen/StudentDetails";
import StudentProfile from "./Student/Student_profile";
import StudentMyReport from "./Student/StudentMyReport";
import StudentMyReportView from "./Student/StudentMyReportView";

// Import the new UserProfile component
import StudentDashboard from "./Student/Dashboard";
import StudentOrderDetails from "./Student/StudentOrderDetails";
import ProfileReports from "./Student/ProfileReport";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StudentDashboard />} />
        {/* <Route path="/StudentDashboard" element={<StudentDashboard />} /> */}

        <Route path="/app2/student_home" element={<StudentDashboard />} />
        <Route path="/app2/student_order_details" element={<StudentOrderDetails />} />
        <Route path="/app2/student_profile" element={<StudentProfile />} />
        <Route path="/app2/student_my_report" element={<StudentMyReport />} />
        <Route path="/app2/report_profile" element={<ProfileReports />} />
        <Route path="app2/student_report_view" element={<StudentMyReportView />} />
      </Routes>
    </div>
  );
}

export default App;
