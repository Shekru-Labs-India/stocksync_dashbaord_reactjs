import React from 'react'
import section from "../assets/assets/img/front-pages/icons/section-tilte-icon.png"
import rocket from "../assets/assets/img/Rocket-PNG-Image.png"
const PricingPlan = () => {
  return (
    <div>
        <div data-bs-spy="scroll" class="scrollspy-example">
        {/* <!-- Pricing Plans --> */}
    <section id="landingPricing" class="section-py bg-body landing-pricing">
      <div class="container bg-icon-left position-relative">
        {/* <!-- <section class="section-py first-section-pt">
        <div class="container"> --> */}
          <h6 class="text-center d-flex justify-content-center align-items-center mb-3">
            <img src= {section}alt="section title icon" class="me-2" height="19" />
            <span class="text-uppercase">pricing plans</span>
          </h6>
          <h5 class="text-center h3"><span class="fw-bold">The right plan for
            your business</span></h5>
          <p class="text-center fw-medium pb-lg-4">
            Choose the perfect plan for your needs. Always flexible to grow
          </p>
        <div class="d-flex align-items-center justify-content-center flex-wrap gap-2 py-5 mb-0 mb-md-4">
          <label class="switch switch-sm switch-primary ms-sm-12 ps-sm-12 me-0 mt-lg-3">
            <span class="switch-label text-body">Monthly</span>
            <input type="checkbox" class="switch-input price-duration-toggler" />
            <span class="switch-toggle-slider">
              <span class="switch-on"></span>
              <span class="switch-off"></span>
            </span>
            <span class="switch-label text-body">Annually</span>
          </label>

        </div>

        <div class="pricing-plans row mx-0 gap-6">
          {/* <!-- Basic --> */}
          <div class="col-lg mb-md-0 mb-6 px-0">
            <div class="card border rounded shadow-none">
              <div class="card-body pt-12">
                <h4 class="card-title text-start text-capitalize mb-5">PROFESSIONAL</h4>
                <div class="text-start">
                  <div class="d-flex justify-content-start">
                    <h1 class="price-toggle price-monthly h3 text-primary mb-0">1499 <small><del>1799</del></small></h1>
                    <h1 class="price-toggle price-yearly h3 text-primary mb-0 d-none">17988 <small><del>1799</del></small></h1>
                  </div>
                  <small>+18% GST applicable</small>
                </div>

                <ul class="list-group my-5 pt-4 price-toggle price-monthly text-primary mb-0" style={{listStyle: "none"}}>
                  <li class="mb-3"><i class="ri-check-line"></i> Auto Login</li>
                  <li class="mb-3"><i class="ri-check-line"></i> 30 Days</li>
                  <li class="mb-3"><i class="ri-check-line"></i> Copy Trading upto 9 Accounts</li>
                  <li class="mb-3"><i class="ri-check-line"></i> 1 Master Account</li>
                </ul>
                
                <ul class="list-group my-5 pt-4 price-toggle price-yearly text-primary mb-0 d-none" style={{listStyle: "none"}}>
                  <li class="mb-3"><i class="ri-check-line"></i> Auto Login</li>
                  <li class="mb-3"><i class="ri-check-line"></i> 365 Days</li>
                  <li class="mb-3"><i class="ri-check-line"></i> Copy Trading upto 9 Accounts</li>
                  <li class="mb-3"><i class="ri-check-line"></i> 1 Master Account</li>
                </ul>
                <a href="" class="btn btn-primary mt-2 d-grid w-100">Subscribe</a>
              </div>
            </div>
          </div>
    
          <div class="col-lg mb-md-0 mb-6 px-0">
            <div class="card border-primary border rounded shadow-none">
              <div class="card-body pt-12">
                <h4 class="card-title text-start text-capitalize mb-5">ENTERPRISE</h4>
                <div class="text-start">
                  <div class="d-flex justify-content-start">
                    <h1 class="price-toggle price-monthly h3 text-primary mb-0">2499 <small><del>2999</del></small></h1>
                    <h1 class="price-toggle price-yearly h3 text-primary mb-0 d-none">29988 <small><del>35988</del></small></h1>
                  </div>
                  <small>+18% GST applicable</small>
                </div>

                <ul class="list-group my-5 pt-4 price-toggle price-monthly text-primary mb-0" style={{listStyle: "none"}}>
                  <li class="mb-3"><i class="ri-check-line"></i> Auto Login</li>
                  <li class="mb-3"><i class="ri-check-line"></i> 30 Days</li>
                  <li class="mb-3"><i class="ri-check-line"></i> Copy Trading upto 24 Accounts</li>
                  <li class="mb-3"><i class="ri-check-line"></i>Upto 2 Master Account</li>
                </ul>
                
                <ul class="list-group my-5 pt-4 price-toggle price-yearly text-primary mb-0 d-none" style={{listStyle: "none"}}>
                  <li class="mb-3"><i class="ri-check-line"></i> Auto Login</li>
                  <li class="mb-3"><i class="ri-check-line"></i> 365 Days</li>
                  <li class="mb-3"><i class="ri-check-line"></i> Copy Trading upto 24 Accounts</li>
                  <li class="mb-3"><i class="ri-check-line"></i> Upto 2 Master Account</li>
                </ul>
                <a href="" class="btn btn-primary mt-2 d-grid w-100">Subscribe</a>
              </div>
            </div>
          </div>
          <div class="col-lg mb-md-0 mb-6 px-0" style={{borderRadius:" 15px"}}>
            <div class="card border rounded shadow-none">
              <div class="card-body pt-11">
                <h4 class="card-title text-start text-capitalize mb-5">CUSTOM</h4>
                <div class="text-start">
                  <div class="d-flex justify-content-start">
                    <h1 class="price-toggle price-monthly h3 text-primary mb-0">675</h1>
                    <h1 class="price-toggle price-yearly h3 text-primary mb-0 d-none">675</h1>
                    {/* <!-- <h1 class="price-toggle price-yearly h3 text-primary mb-0 d-none">17988 <small><del>1799</del></small></h1> --> */}
                  </div>
                  <small>+18% GST applicable</small>
                </div>

                <div class="my-2 pt-2 m-0">
                  <div class="form-floating mb-2">
                    <input type="text" class="form-control" id="masterAccounts" value="1"/ >
                    <label for="masterAccounts">No of Master Accounts</label>
                  </div>
                  
                  <div class="form-floating mb-2">
                    <input type="text" class="form-control" id="childAccounts" value="1"/>
                    <label for="childAccounts">No of Child Accounts</label>
                  </div>
                  
                  <div class="form-floating mb-2">
                    <input type="text" class="form-control" id="validity" value="30"/>
                    <label for="validity">Validity (in Days)</label>
                  </div>
                </div>
                
                
                <a href="" class="btn btn-primary mt-2 d-grid w-100">Subscribe</a>
              </div>
            </div>
          </div>



        </div>
      </div>
    </section>
    {/* <!-- Pricing plans: End --> */}


    {/* <!-- Fun facts: Start --> */}
    <section id="landingFunFacts" class="section-py bg-white landing-fun-facts py-12 my-4">
      <div class="container d-flex flex-column align-items-center justify-content-center text-center mx-auto">
        <h2 class="h4">Still have questions?</h2>
        <p>
          Please describe your case to receive the most accurate advice.
        </p>
        <a href="../front-pages/contact-us.html" target="_self" class="btn btn-dark">Contact us</a>
      </div>
    </section>
    {/* <!-- Fun facts: End --> */}

    <section id="landingFAQ" class="section-py bg-body landing-faq">
      <div class="container bg-icon-right">
        <div class="row mx-1 gy-5 bg-success text-center rounded">
          <div class="col-lg-6">
            <div class="text-center">
              <img src={rocket} width="60" height="250" class="faq-image scaleX-n1-rtl" />
            </div>
          </div>
          <div class="col-lg-6 text-start p-5">
            <h2 class="h2">
              Get started with<br /> Quantbot today
            </h2>
            <a href="#" class="btn btn-primary p-3">Dashboard</a>
            
          </div>
        </div>
      </div>
    </section>

    
  </div>
    </div>
  )
}

export default PricingPlan
