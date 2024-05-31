// import logo from './logo.svg';
// import './App.css';
// import Header from './component/Header';
// import Profile from './screen/Profile';
// import Footer from './component/Footer';
// import Login from './screen/Login';
// import VerifyOtp from './screen/VerifyOtp';
// import Home from './screen/Home';

// function App() {
//   return (
//     <div className="App">
//       <Home></Home>
//       {/* <Header></Header> */}
//       <Profile></Profile>
//       {/* <Footer></Footer> */}
//       <Login></Login>
//       <VerifyOtp></VerifyOtp>
//     </div>
//   );
// }

// export default App;


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Profile from './screen/Profile';
import Footer from './component/Footer';
import VerifyOtp from './screen/VerifyOtp';
import Home from './screen/Home';
import Basket from './screen/Basket';
import BasicTable from './screen/BasicTable';
import Login from './screen/Login';
import TradeBook from './screen/Tradebook';
import OrderBook from './screen/OrderBook';
import Holding from './screen/Holding';
import LandingHomeScreen from './landing/LandingHomeScreen';
import StudentReport from './screen/StudentReport';
import MyReport from './screen/MyReport';
import MyReportView from './screen/MyReportView';
import StudReportList from './screen/StudReportList';
import StudReportView from './screen/StudReportView';
import TimeLine from './screen/TimeLine';
import Position from './screen/Position';
 // Import the new UserProfile component

function App() {
  return (
    <Router>
      <div className="App">
        {/* Uncomment if you want Header and Footer to be always visible */}
        {/* <Header /> */}
        <div className="content">
          <Routes>
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
            <Route path="/landing_home_page" element={<LandingHomeScreen />} />
          </Routes>
        </div>
        {/* Uncomment if you want Header and Footer to be always visible */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;




// import React, { useState } from 'react';
// import './App.css';
// import Header from './component/Header';
// import Profile from './screen/Profile';
// import Footer from './component/Footer';
// import Login from './screen/Login';
// import VerifyOtp from './screen/VerifyOtp';
// import Home from './screen/Home';

// function App() {
//   const [activeScreen, setActiveScreen] = useState('home'); // Initially set to 'home'

//   // Function to switch between screens
//   const switchScreen = (screen) => {
//     setActiveScreen(screen);
//   };

//   return (
//     <div className="App">
//       <Header />
//       <div className="content">
//         {/* Render different screens based on activeScreen state */}
//         {activeScreen === 'home' && <Home />}
//         {activeScreen === 'profile' && <Profile />}
//         {activeScreen === 'login' && <Login />}
//         {activeScreen === 'verifyOtp' && <VerifyOtp />}
//       </div>
//       <Footer />
//       {/* Navigation buttons to switch between screens */}
//       <div className="navigation">
//         <button onClick={() => switchScreen('home')}>Home</button>
//         <button onClick={() => switchScreen('profile')}>Profile</button>
//         <button onClick={() => switchScreen('login')}>Login</button>
//         <button onClick={() => switchScreen('verifyOtp')}>Verify OTP</button>
//       </div>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import './App.css';
// import Header from './component/Header';
// import Profile from './screen/Profile';
// import Footer from './component/Footer';
// import Login from './screen/Login';
// import VerifyOtp from './screen/VerifyOtp';
// import Home from './screen/Home';

// function App() {
//   const [activeScreen, setActiveScreen] = useState('home'); // Initially set to 'home'

//   // Function to switch between screens
//   const switchScreen = (screen) => {
//     setActiveScreen(screen);
//   };

//   return (
//     <div className="App">
//       <Header />
//       <div className="content">
//         {/* Render different screens based on activeScreen state */}
//         {activeScreen === 'home' &&<Login switchScreen={switchScreen} />}
//         {activeScreen === 'profile' && <Profile switchScreen={switchScreen} />}
//         {activeScreen === 'header' && <Header switchScreen={switchScreen} />}
//         {activeScreen === 'login' && <Login switchScreen={switchScreen} />}
//         {activeScreen === 'verifyOtp' && <VerifyOtp />}
//       </div>
//       <Footer />
//       {/* Navigation buttons to switch between screens */}
//       <div className="navigation">
//         <button onClick={() => switchScreen('home')}>Home</button>
//         <button onClick={() => switchScreen('profile')}>Profile</button>
//         {/* <button onClick={() => switchScreen('login')}>Login</button> */}
//         {/* Remove button for Verify OTP as it's shown based on condition */}
//       </div>
//     </div>
//   );
// }

// export default App;
