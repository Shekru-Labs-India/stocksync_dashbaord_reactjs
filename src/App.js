import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App1 from "./src/app1/App1";
import App2 from "./src/app2/App2";
import Login from "./component/Login";
// import MyReport from "./src/app1/screen/MyReport";
import StudentMyReport from "./src/app2/Student/StudentMyReport";
import StudentMyReportView from "./src/app2/Student/StudentMyReportView";
import StudentProfile from "./src/app2/Student/Student_profile";
import Dashboard from "./src/app2/Student/Dashboard";
import StudentOrderBook from "./src/app2/Student/StudentOrderBook";
import StudentTradeBook from "./src/app2/Student/StudentTradeBook";
import Demo from "./src/app2/Student/Demo";
import AdminDashboard from "./src/app3/Admin/AdminDashboard";
import ManageTeacher from "./src/app3/Admin/ManageTeacher";
import CreateTeacher from "./src/app3/Admin/CreateTeacher";
import UpdateTeacher from "./src/app3/Admin/UpdateTeacher";
import ViewTeacher from "./src/app3/Admin/ViewTeacher";
import AdminProfile from "./src/app3/Admin/AdminProfile";
import AdminMyReport from "./src/app3/Admin/AdminMyReport";
import AdminMyReportDetails from "./src/app3/Admin/AdminMyReportDetails";
import TeacherList from "./src/app3/Admin/TeacherList";
import TeacherReport from "./src/app3/Admin/TeacherReport";
import TeacherReportDetails from "./src/app3/Admin/TeacherReportDetails";
import Profile from "./src/app2/Student/Profile";
import Header from "./component/Header";
// import Profile from "./screen/Profile";
import Footer from "./component/Footer";
import VerifyOtp from "../src/src/app2/screen/VerifyOtp";
import Home from "../src/src/app2/screen/Home";
import Basket from "../src/src/app2/screen/Basket";
import BasicTable from "../src/src/app2/screen/BasicTable";
// import Login from "./screen/Login";
import TradeBook from "../src/src/app2/screen/Tradebook";
import OrderBook from "../src/src/app2/screen/OrderBook";
import Holding from "../src/src/app2/screen/Holding";
import LandingHomeScreen from "../src/src/app2/landing/LandingHomeScreen";
import StudentReport from "../src/src/app2/screen/StudentReport";
import MyReport from "../src/src/app2/screen/MyReport";
import MyReportView from "../src/src/app2/screen/MyReportView";
import StudReportList from "../src/src/app2/screen/StudReportList";
import StudReportView from "../src/src/app2/screen/StudReportView";
import TimeLine from "../src/src/app2/screen/TimeLine";
import Position from "../src/src/app2/screen/Position";
import ManageStudent from "../src/src/app2/screen/ManageStudent";
import CreateStudent from "../src/src/app2/screen/CreateStudent";
import UpdateStudent from "../src/src/app2/screen/UpdateStudent";
import StudentDetails from "../src/src/app2/screen/StudentDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/app1/*" element={<App1 />} />
        <Route path="/app2/*" element={<App2 />} />
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage_teacher" element={<ManageTeacher />} />
        <Route path="/admin/create_teacher" element={<CreateTeacher />} />
        <Route path="/admin/update_teacher" element={<UpdateTeacher />} />
        <Route path="/admin/view_teacher" element={<ViewTeacher />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/my_report" element={<AdminMyReport />} />
        <Route
          path="/admin/report_details"
          element={<AdminMyReportDetails />}
        />
        <Route path="/admin/teacher_list" element={<TeacherList />} />
        <Route path="/admin/teacher_report" element={<TeacherReport />} />
        <Route
          path="/admin/teacher_report_details"
          element={<TeacherReportDetails />}
        />

        <Route path="/app2/student_report" element={<StudentMyReport />} />
        <Route path="/app2/student_profile" element={<StudentProfile />} />
        <Route
          path="/app2/student_report_view"
          element={<StudentMyReportView />}
        />
        <Route path="/app2/order_book" element={<StudentOrderBook />} />
        <Route path="/app2/student_trade_book" element={<StudentTradeBook />} />

        {/* Teacher dashboard */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user_profile" element={<Profile />} />
        <Route path="/user_login" element={<Login />} />
        <Route path="/user_basket" element={<Basket />} />
        <Route path="/trade_book" element={<TradeBook />} />
        <Route path="/trade_position" element={<Position />} />
        <Route path="/order_book" element={<OrderBook />} />
        <Route path="/basic_table" element={<BasicTable />} />
        <Route path="/verify_otp" element={<VerifyOtp />} />
        <Route path="/user_holding" element={<Holding />} />
        <Route path="/my_report" element={<MyReport />} />
        <Route path="/my_report_view" element={<MyReportView />} />
        <Route path="/student_report" element={<StudentReport />} />
        <Route path="/student_report_list" element={<StudReportList />} />
        <Route path="/student_report_view" element={<StudReportView />} />
        <Route path="/time_line" element={<TimeLine />} />
        <Route path="/manage_student" element={<ManageStudent />} />
        <Route path="/create_student" element={<CreateStudent />} />
        <Route path="/update_student/:id" element={<UpdateStudent />} />
        <Route path="/student_details" element={<StudentDetails />} />
        <Route path="/landing_home_page" element={<LandingHomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
