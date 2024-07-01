import React from 'react'
import { Link } from 'react-router-dom'
const LandingHeader = () => {
  return (
    <div>
     {/* <!-- Navbar: Start --> */}
  <nav  class="layout-navbar container shadow-none py-0">
    <div class="bg-success px-0 py-2 w-100">
      <p class="h5 text-center text-black mb-0">
        <strong>Sign up now! 7-day free trial</strong>
        <a href="../horizontal-menu-template/auth-register-cover.html" class="btn btn-primary mx-2">Claim Now</a>
        <strong>+91 1246527019</strong>
      </p>
    </div>

    <div class="navbar bg-white navbar-expand-lg landing-navbar border-top-0 px-4 px-md-8">
      {/* <!-- Menu logo wrapper: Start --> */}
      <div class="navbar-brand app-brand demo d-flex py-0 py-lg-2 me-6">
        {/* <!-- Mobile menu toggle: Start--> */}
        <button class="navbar-toggler border-0 px-0 me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="tf-icons ri-menu-fill ri-24px align-middle"></i>
        </button>
        {/* <!-- Mobile menu toggle: End--> */}
        <a href="landing-page.html" class="app-brand-link">
          <span class="app-brand-logo demo">
  <span style={{color:"#9055FD"}}>
    <svg width="30" height="24" viewBox="0 0 250 196" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3002 1.25469L56.655 28.6432C59.0349 30.1128 60.4839 32.711 60.4839 35.5089V160.63C60.4839 163.468 58.9941 166.097 56.5603 167.553L12.2055 194.107C8.3836 196.395 3.43136 195.15 1.14435 191.327C0.395485 190.075 0 188.643 0 187.184V8.12039C0 3.66447 3.61061 0.0522461 8.06452 0.0522461C9.56056 0.0522461 11.0271 0.468577 12.3002 1.25469Z" fill="currentColor" />
      <path opacity="0.077704" fill-rule="evenodd" clip-rule="evenodd" d="M0 65.2656L60.4839 99.9629V133.979L0 65.2656Z" fill="black" />
      <path opacity="0.077704" fill-rule="evenodd" clip-rule="evenodd" d="M0 65.2656L60.4839 99.0795V119.859L0 65.2656Z" fill="black" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M237.71 1.22393L193.355 28.5207C190.97 29.9889 189.516 32.5905 189.516 35.3927V160.631C189.516 163.469 191.006 166.098 193.44 167.555L237.794 194.108C241.616 196.396 246.569 195.151 248.856 191.328C249.605 190.076 250 188.644 250 187.185V8.09597C250 3.64006 246.389 0.027832 241.935 0.027832C240.444 0.027832 238.981 0.441882 237.71 1.22393Z" fill="currentColor" />
      <path opacity="0.077704" fill-rule="evenodd" clip-rule="evenodd" d="M250 65.2656L189.516 99.8897V135.006L250 65.2656Z" fill="black" />
      <path opacity="0.077704" fill-rule="evenodd" clip-rule="evenodd" d="M250 65.2656L189.516 99.0497V120.886L250 65.2656Z" fill="black" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2787 1.18923L125 70.3075V136.87L0 65.2465V8.06814C0 3.61223 3.61061 0 8.06452 0C9.552 0 11.0105 0.411583 12.2787 1.18923Z" fill="currentColor" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2787 1.18923L125 70.3075V136.87L0 65.2465V8.06814C0 3.61223 3.61061 0 8.06452 0C9.552 0 11.0105 0.411583 12.2787 1.18923Z" fill="white" fill-opacity="0.15" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M237.721 1.18923L125 70.3075V136.87L250 65.2465V8.06814C250 3.61223 246.389 0 241.935 0C240.448 0 238.99 0.411583 237.721 1.18923Z" fill="currentColor" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M237.721 1.18923L125 70.3075V136.87L250 65.2465V8.06814C250 3.61223 246.389 0 241.935 0C240.448 0 238.99 0.411583 237.721 1.18923Z" fill="white" fill-opacity="0.3" />
    </svg>
  </span>
  </span>
          <span class="app-brand-text demo menu-text fw-semibold ms-2 ps-1">Materio</span>
        </a>
      </div>
      {/* <!-- Menu logo wrapper: End -->
      <!-- Menu wrapper: Start --> */}
      <div class="collapse navbar-collapse landing-nav-menu" id="navbarSupportedContent">
        <button class="navbar-toggler border-0 text-heading position-absolute end-0 top-0 scaleX-n1-rtl" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="tf-icons ri-close-fill"></i>
        </button>
        <ul class="navbar-nav me-auto p-4 p-lg-0">
          <li class="nav-item">
            <a class="nav-link fw-medium" aria-current="page" href="landing-page.html#landingHero">Home</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link fw-medium" href="../front-pages/pricing-page.html">Plans</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-medium" href="../front-pages/tutorials.html">Tutorials</a>
          </li>
          
          <li class="nav-item dropdown">
            <a href="javascript:void(0);" class="nav-link dropdown-toggle fw-medium" aria-expanded="false" data-bs-toggle="dropdown" data-trigger="hover">
              <span data-i18n="Pages">Support</span>
            </a>
            <div class="dropdown-menu p-4 p-lg-6">

              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link dropdown-item d-flex align-items-center" href="../front-pages/whatsapp.html">
                    <i class='menu-icon tf-icons ri-circle-line me-2'></i>
                    <span data-i18n="Pricing">Whatsapp</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link dropdown-item d-flex align-items-center" href="../front-pages/telegram.html">
                    <i class='menu-icon tf-icons ri-circle-line me-2'></i>
                    <span data-i18n="Payment">Telegram Alert</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link dropdown-item d-flex align-items-center" href="../front-pages/call.html">
                    <i class='menu-icon tf-icons ri-circle-line me-2'></i>
                    <span data-i18n="Checkout">Call</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link dropdown-item d-flex align-items-center" href="../front-pages/email.html">
                    <i class='menu-icon tf-icons ri-circle-line me-2'></i>
                    <span data-i18n="Help Center">Email</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link dropdown-item d-flex align-items-center" href="#">
                    <i class='menu-icon tf-icons ri-circle-line me-2'></i>
                    <span data-i18n="Help Center">YouTube</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          
          <li class="nav-item">
            <a class="nav-link fw-medium text-nowrap" href="../front-pages/contact-us.html">Contact us</a>
          </li>
        </ul>
      </div>
      <div class="landing-menu-overlay d-lg-none"></div>
      {/* <!-- Menu wrapper: End --> */}
      {/* <!-- Toolbar: Start --> */}
      <ul class="navbar-nav flex-row align-items-center ms-auto">
        
        {/* <!-- Style Switcher --> */}
        <li class="nav-item dropdown-style-switcher dropdown me-2 me-xl-0">
          <a class="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow me-sm-4" href="javascript:void(0);" data-bs-toggle="dropdown">
            <i class='ri-24px text-heading'></i>
          </a>
          <ul class="dropdown-menu dropdown-menu-end dropdown-styles">
            <li>
              <a class="dropdown-item" href="javascript:void(0);" data-theme="light">
                <span class="align-middle"><i class='ri-sun-line ri-24px me-3'></i>Light</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:void(0);" data-theme="dark">
                <span class="align-middle"><i class="ri-moon-clear-line ri-24px me-3"></i>Dark</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:void(0);" data-theme="system">
                <span class="align-middle"><i class="ri-computer-line ri-24px me-3"></i>System</span>
              </a>
            </li>
          </ul>
        </li>
        {/* <!-- / Style Switcher--> */}
        

        {/* <!-- navbar button: Start --> */}
        <li>
          <Link to="/login" class="btn btn-primary px-2 px-sm-4 px-lg-2 px-xl-4" target="_self"><span class="tf-icons ri-user-line me-md-1"></span><span class="d-none d-md-block">Login</span></Link>
        </li>
        {/* <!-- navbar button: End --> */}
      </ul>
      {/* <!-- Toolbar: End --> */}
    </div>
  </nav>
  
    </div>
  )
}

export default LandingHeader
