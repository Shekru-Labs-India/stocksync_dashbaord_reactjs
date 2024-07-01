import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../src/src/app2/assets/vendor/css/rtl/core.css";
import "../src/src/app2/assets/vendor/css/rtl/theme-default.css";

import "../src/src/app2/assets/vendor/css/pages/front-page.css";
import { HashRouter, BrowserRouter } from "react-router-dom";
import "../src/src/app2/assets/vendor/css/pages/page-profile.css";
import "../src/src/app2/assets/assets/vendor/libs/swiper/swiper.css"
import "../src/src/app2/assets/assets/vendor/libs/swiper/swiper.js"
import "../src/src/app2/assets/vendor/css/pages/page-auth.css";
import "../src/src/app2/assets/js/front-page-landing.js"
import "../src/src/app2/assets/assets/vendor/css/pages/front-page-landing.css"
import "../src/src/app2/assets/assets/vendor/css/pages/front-page.css"
import "../src/src/app2/assets/assets/vendor/css/pages/front-page-pricing.css"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

reportWebVitals();
