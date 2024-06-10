import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter,BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactQueryClientProvider from './ReactQueryClient';
import './assets/css/demo.css'
import 'primereact/resources/themes/saga-blue/theme.css';  // Choose the theme you like
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


import './assets/vendor/css/rtl/core.css'
// import '../assets/vendor/css/rtl/core-dark.css'
//  import '../assets/vendor/css/rtl/theme-bordered.css'
 import './assets/vendor/css/pages/front-page.css'
//  import './assets/vendor/libs/nouislider/nouislider.css'
// import'./assets/vendor/libs/swiper/swiper.css'
import './assets/vendor/css/pages/page-profile.css'
import './assets/vendor/css/pages/front-page-landing.css'
import './assets/img/favicon/favicon.ico'
import './assets/vendor/css/pages/page-auth.css'
import './assets/vendor/libs/animate-css/animate.css'
import './assets/vendor/css/rtl/theme-default.css'
// import './assets/vendor/css/rtl/core-dark.css'

// import './assets/vendor/libs/apex-charts/apex-charts.css'
import './assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css'
import './assets/vendor/libs/typeahead-js/typeahead.css'
// import './assets/img/favicon/favicon.ico'
import './assets/vendor/libs/@form-validation/form-validation.css'
import './assets/vendor/libs/apex-charts/apex-charts.css'
import './assets/vendor/libs/node-waves/node-waves.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        
<App></App>

    </HashRouter>

 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
