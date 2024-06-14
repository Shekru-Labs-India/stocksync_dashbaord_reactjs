import React from "react";
import ReactDOM from "react-dom/client";
import "../src/src/app2/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../src/src/app2/assets/vendor/css/rtl/core.css";
import "../src/src/app2/assets/vendor/css/rtl/theme-default.css";
import "primereact/resources/themes/saga-blue/theme.css"; // Choose a theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons

import "../src/src/app2/assets/vendor/css/pages/front-page.css";

import "../src/src/app2/assets/vendor/css/pages/page-profile.css";
import "../src/src/app2/assets/vendor/css/pages/front-page-landing.css";
import "../src/src/app2/assets/img/favicon/favicon.ico";
import "../src/src/app2/assets/vendor/css/pages/page-auth.css";
// import "../src/src/app2/assets/vendor/libs/animate-css/animate.css";

// import "../src/src/app2/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
// import "../src/src/app2/assets/vendor/libs/typeahead-js/typeahead.css";

// import "../src/src/app2/assets/vendor/libs/@form-validation/form-validation.css";
// import "../src/src/app2/assets/vendor/libs/apex-charts/apex-charts.css";
// import "../src/src/app2/assets/vendor/libs/node-waves/node-waves.css";

//datatable in react

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
