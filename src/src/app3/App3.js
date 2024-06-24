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
import ViewTeacher from "./Admin/ViewTeacher";
import Reports from "./Admin/Reports";
import AdminHeader from "./Admin/AdminHeader";
import AdminSubHeader from "./Admin/AdminSubHeader";

function App() {
  return (
    <div>
      {/* <Routes> */}
        {/* <Route path="/" element={<StudentDashboard />} />

        <Route path="/app2/student_home" element={<StudentDashboard />} />
        <Route path="/app2/student_profile" element={<StudentProfile />} />
        <Route path="/app2/student_report" element={<StudentMyReport />} />
        <Route path="/student_report_view" element={<StudentMyReportView />} /> */}
        {/* <Route path="/admin/update_teacher/:userId" element={<UpdateTeacher />} /> */}
        {/* <Route path="/admin/update_teacher/" element={<UpdateTeacher />} />
        <Route path="/admin/view_teacher/:id" element={<ViewTeacher />} />
        <Route path="/admin/report" element={<Reports />} />
      </Routes> */}
      {/* <AdminHeader></AdminHeader>
      <AdminSubHeader></AdminSubHeader> */}
    </div>
  );
}

export default App;
