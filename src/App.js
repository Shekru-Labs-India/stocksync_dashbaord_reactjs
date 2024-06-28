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
import VerifyOtp from "../src/src/app1/screen/VerifyOtp";
import Home from "../src/src/app1/screen/Home";
import Basket from "../src/src/app1/screen/Basket";
import BasicTable from "../src/src/app1/screen/BasicTable";
// import Login from "./screen/Login";
import TradeBook from "../src/src/app1/screen/Tradebook";
import OrderBook from "../src/src/app1/screen/OrderBook";
import Holding from "../src/src/app1/screen/Holding";
import LandingHomeScreen from "../src/src/app1/landing/LandingHomeScreen";
import StudentReport from "../src/src/app1/screen/StudentReport";
import MyReport from "../src/src/app1/screen/MyReport";
import MyReportView from "../src/src/app1/screen/MyReportView";
import StudReportList from "../src/src/app1/screen/StudReportList";
import StudReportView from "../src/src/app1/screen/StudReportView";
import TimeLine from "../src/src/app1/screen/TimeLine";
import Position from "../src/src/app1/screen/Position";
import ManageStudent from "../src/src/app1/screen/ManageStudent";
import CreateStudent from "../src/src/app1/screen/CreateStudent";
import UpdateStudent from "../src/src/app1/screen/UpdateStudent";
import StudentDetails from "../src/src/app1/screen/StudentDetails";
import Reports from "./src/app3/Admin/Reports";
import ProfileReports from "./src/app2/Student/ProfileReport";
import TeacherProfile from "./src/app1/screen/Profile";
import TeacherProfileReport from "./src/app1/screen/TeacherProfileRrport";
import StudentReportDetails from "../src/src/app1/screen/StudentDetails";
import ViewStudent from "./src/app1/screen/ViewStudent";
import StudentHolding from "./src/app2/Student/StudentHolding";
import AdminHolding from "./src/app3/Admin/AdminHolding";
import OrderbookDetails from "./src/app1/screen/OrderbookDetails";
import StudentOrderDetails from "./src/app2/Student/StudentOrderDetails";
import AdminOrderBook from "./src/app3/Admin/AdminOrderBook";
import AdminOrderBookDetails from "./src/app3/Admin/AdminOrderBookDetails";
import AdminTradeBook from "./src/app3/Admin/AdminTradeBook";
import Signup from "./src/app1/screen/Signup";
// import StudentOrderDetails from "./src/app1/Student/StudentOrderDetails";

function App() {
  return (

      <Routes>
        {/* <Route path="/app1/*" element={<App1 />} />
        <Route path="/app2/*" element={<App2 />} /> */}

        <Route path="/" element={<Login />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/student/dashboard" element={<Dashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage_teacher" element={<ManageTeacher />} />
        <Route path="/admin/manage_teacher/create_teacher" element={<CreateTeacher />} />
        {/* <Route path="/admin/update_teacher" element={<UpdateTeacher />} /> */}
        {/* <Route path="/admin/view_teacher" element={<ViewTeacher />} /> */}
        <Route path="/admin/manage_teacher/view_teacher/:id" element={<ViewTeacher />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/report" element={<Reports />} />
        <Route path="/admin/my_report" element={<AdminMyReport />} />
        <Route path="/admin/holding" element={<AdminHolding />} />
        <Route path="/admin/order_book" element={<AdminOrderBook />} />
        <Route path="/admin/order_book/order_details" element={<AdminOrderBookDetails />} />
        <Route path="/admin/trade_book" element={<AdminTradeBook />} />

        <Route path="/admin/manage_teacher/update_teacher/:id" element={<UpdateTeacher />} />
        <Route
          path="/admin/report_details"
          element={<AdminMyReportDetails />}
        />
        <Route path="/admin/teacher_list" element={<TeacherList />} />
        {/* <Route path="/admin/teacher_report" element={<TeacherReport />} /> */}
        <Route path="/admin/teacher_report/:teacherId" element={<TeacherReport />} />

        {/* <Route
          path="/admin/teacher_report_details"
          element={<TeacherReportDetails />}
        /> */}
                <Route path="/admin/teacher_report_details/:teacherId/:sell_month" element={<TeacherReportDetails />} />

   {/* <Route path="/app2/student_order_details" element={<StudentOrderDetails />} /> */}
        <Route path="/app2/student_my_report" element={<StudentMyReport />} />
        <Route path="/app2/student_profile" element={<StudentProfile />} />
        <Route path="/student_holding" element={<StudentHolding />} />

        <Route
          path="/app2/student_report_view"
          element={<StudentMyReportView />}
        />
        <Route path="/app2/order_book" element={<StudentOrderBook />} />
        <Route path="/app2/student_trade_book" element={<StudentTradeBook />} />
        <Route path="/student/report" element={<ProfileReports />} />
        <Route path="/app2/student_order_details/:uniqueorderid" element={<StudentOrderDetails />} />
        {/* Teacher dashboard */}
         <Route path="/teacher/dashboard" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/user_profile" element={<Profile />} /> */}
        <Route path="/teacher/user_profile" element={<TeacherProfile />} />
        <Route path="/teacher/user_profile_report" element={<TeacherProfileReport />} />
        <Route path="/user_login" element={<Login />} />
        <Route path="/user_basket" element={<Basket />} />
        <Route path="/trade_book" element={<TradeBook />} />
        <Route path="/trade_position" element={<Position />} />
        <Route path="/order_book" element={<OrderBook />} />
        <Route path="/basic_table" element={<BasicTable />} />
        <Route path="/verify_otp" element={<VerifyOtp />} />
        <Route path="/user_holding" element={<Holding />} />
        <Route path="/order_book/orderbook_details/:uniqueorderid" element={<OrderbookDetails />} />

        <Route path="/teacher/my_report" element={<MyReport />} />
        <Route path="/teacher/my_report_view" element={<MyReportView />} />
        <Route path="/teacher/student_report" element={<StudentReport />} />
        {/* <Route path="/teacher/student_report_list" element={<StudReportList />} /> */}
        <Route path="/teacher/student_report_list/:userId/:month_name" element={<StudReportList />} />
        <Route path="/teacher/student_report_details" element={<StudentReportDetails />} />
        {/* <Route path="/teacher/student_report_details/:teacherId" element={<StudentReportDetails />} /> */}
        {/* <Route path="/teacher/student_report_details/:userId/:month_name" element={<StudentReportDetails />} /> */}
        <Route path="/teacher/student_report_details/:userId" element={<StudentReportDetails />} />

        <Route path="/student_report_view" element={<StudReportView />} />
        <Route path="/time_line" element={<TimeLine />} />
        <Route path="/teacher/manage_student" element={<ManageStudent />} />
        <Route path="/teacher/manage_student/create_student" element={<CreateStudent />} />
        <Route path="/teacher/manage_student/update_student/:id" element={<UpdateStudent />} />
        <Route path="/teacher/student_details" element={<StudentDetails />} />
        {/* <Route path="/teacher/view_student" element={<ViewStudent />} /> */}
        <Route path="/teacher/manage_student/view_student/:id" element={<ViewStudent />} />

        <Route path="/landing_home_page" element={<LandingHomeScreen />} /> 

        <Route path="/signup" element={<Signup />} /> 

      </Routes>
    
  );
}

export default App;
