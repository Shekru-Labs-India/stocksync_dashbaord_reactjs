import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
    <footer className="content-footer footer bg-footer-theme">
  <div className="container-xxl">

    <div className="text-body mb-2 mb-md-0 d-flex justify-content-between align-items-center footer-container py-4 flex-md-row ">
      <div >&copy; Copyright TradeMirror All Rights Reserved</div>
      <div>Powered by <a href="https://www.shekruweb.com/ " target='_blank'>Shekru Labs India Pvt. Ltd.</a></div>
    </div>
      <div className="d-none d-lg-inline-block">
        
       
        {/* <Link to="/landing_home_page">Website</Link> */}
      </div>
    </div>
  
</footer>



          
         
    </div>
  )
}

export default Footer
