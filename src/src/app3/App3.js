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

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StudentDashboard />} />

        <Route path="/app2/student_home" element={<StudentDashboard />} />
        <Route path="/app2/student_profile" element={<StudentProfile />} />
        <Route path="/app2/student_report" element={<StudentMyReport />} />
        <Route path="/student_report_view" element={<StudentMyReportView />} />
      </Routes>
    </div>
  );
}

export default App;
