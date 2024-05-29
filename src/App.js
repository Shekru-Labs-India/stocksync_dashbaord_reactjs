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
import Login from './screen/Login';
import VerifyOtp from './screen/VerifyOtp';
import Home from './screen/Home';
import Basket from './screen/Basket';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Basket" element={<Basket />} />
            <Route path="/verifyOtp" element={<VerifyOtp />} />
          </Routes>
        </div>
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
