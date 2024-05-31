import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
    <footer className="content-footer footer bg-footer-theme">
  <div className="container-xxl">
    <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
      <div className="text-body mb-2 mb-md-0">
        © <script>
        document.write(new Date().getFullYear())

        </script>, made with <span className="text-danger"><i className="tf-icons ri-heart-fill"></i></span> by <a href="https://themeselection.com" target="_blank" className="footer-link">ThemeSelection</a>
      </div>
      <div className="d-none d-lg-inline-block">
        
        {/* <a href="https://themeselection.com/license/" className="footer-link me-4" target="_blank">License</a>
        <a href="https://themeselection.com/" target="_blank" className="footer-link me-4">More Themes</a>
        
        <a href="https://demos.themeselection.com/materio-bootstrap-html-admin-template/documentation/" target="_blank" className="footer-link me-4">Documentation</a>
        
        
        <a href="https://themeselection.com/support/" target="_blank" className="footer-link d-none d-sm-inline-block">Support</a> */}
        <Link to="/landing_home_page">Website</Link>
      </div>
    </div>
  </div>
</footer>



          
         
    </div>
  )
}

export default Footer
