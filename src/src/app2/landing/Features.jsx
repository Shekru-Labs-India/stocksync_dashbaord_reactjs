import React from 'react'
import section from "../assets/assets/img/front-pages/icons/section-tilte-icon.png"
import transation from "../assets/assets/img/front-pages/icons/transition-up.png"
import edit from "../assets/assets/img/front-pages/icons/edit.png"
import laptop from "../assets/assets/img/front-pages/icons/laptop-charging.png"
import faq from "../assets/assets/img/character_7.png"
           
const Features = () => {
  return (
    <div>
        {/* <!-- Useful features: Start --> */}
    <section id="landingReviews"  class="section-py bg-body landing-reviews">
      <div class="container">
        <h6 class="text-center d-flex justify-content-center align-items-center mb-6">
          <img src={section} alt="section title icon" class="me-2" height="19" />
          <span class="text-uppercase">WHAT QUANTBOT HELPS YOU?</span>
        </h6>

        <div class="features-icon-wrapper row gx-0 mt-6 gy-12 gx-sm-6">
          <div class="col-lg-4 col-sm-6 text-center features-icon-box">
            <div class="features-icon mb-6 mt-6">
              <img src={transation} alt="transition up" />
            </div>
            <h5 class="mb-3">Cloud Based</h5>
            <p class="features-icon-description">
              Fully cloud based automated system with simple automation and easy to use algorithmic trading system.
            </p>
          </div>
          <div class="col-lg-4 col-sm-6 text-center bg-body card shadow-lg features-icon-box">
            <div class="card-body">
              <div class="features-icon mb-6 mt-6">
                <img src={edit} alt="edit" />
              </div>
              <h5 class="mb-3">Multiple Accounts</h5>
              <p class="features-icon-description">
                Automate trading in multiple accounts with no software installation and VPS requirement.
              </p>
            </div>
            
          </div>
          <div class="col-lg-4 col-sm-6 text-center features-icon-box">
            <div class="features-icon mb-6 mt-6">
              <img src={laptop} alt="laptop charging" />
            </div>
            <h5 class="mb-6">Rapid Scale up in cloud</h5>
            <p class="features-icon-description">
              Add as many accounts as you want with custom plans with practical features.
            </p>
          </div>
      </div>
      </div>
    </section>
    {/* <!-- Useful features: End --> */}

{/* 
    <!-- FAQ: Start --> */}
    <section id="landingFAQ" class="section-py bg-body landing-faq">
      <div class="container bg-icon-right">
        <div class="row gy-5">
          <div class="col-lg-7">
            <div class="text-center">
              <img src={faq}alt="sitting girl with laptop" class="faq-image scaleX-n1-rtl" />
            </div>
          </div>
          <div class="col-lg-5">
            <h2 class="text-start h3 p-2">
              Join the trading revolution with QuantBot
            </h2>
            <p class="p-2">
              At QuantBot you will get the tools used by BIG PLAYERS at your fingertip, come and join the revolution at lowest possible cost
              <p class="my-2">                
                <i class="ri-check-double-line"></i>&nbsp; Highly secured cloud infrastructure <br />
                <i class="ri-check-double-line"></i>&nbsp; Fast trade execution in multiple brokers <br />
                <i class="ri-check-double-line"></i>&nbsp; Simultaneous trade execution in multiple Brokers and Multiple accounts 
              </p>
              Our mission is to create an easy to use algotrading platform mainly for retail traders and make them get the best out of it. Technology is out primary edge and the market is dominated by algorithmic trading, take the fast movers advantage.
            </p>
            
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Features
