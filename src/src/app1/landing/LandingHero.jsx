import React from 'react'

const LandingHero = () => {
  return (
    <div>

  {/* <!-- Hero: Start --> */}
  <section id="landingHero" class="section-py landing-hero position-relative">
    <img src="../../assets/img/front-pages/backgrounds/hero-bg-light.png" alt="hero background" class="position-absolute top-0 start-0 w-100 h-100 z-n1" data-speed="1" data-app-light-img="front-pages/backgrounds/hero-bg-light.png" data-app-dark-img="front-pages/backgrounds/hero-bg-dark.png" />
    <div class="container">
      <div class="hero-text-box text-center">
        <h2 class="text-primary hero-title mb-4">All in one sass application for your business</h2>
        <h2 class="h6 mb-8 lh-md">
          No coding required to make customisations.<br />The live customiser has everything your marketing need.
        </h2>
        <a href="#landingPricing" class="btn btn-lg btn-primary active">Get early access</a>
      </div>
      <div class="position-relative hero-animation-img">
        <a href="../vertical-menu-template/dashboards-crm.html" target="_blank">
          <div class="hero-dashboard-img text-center">
            <img src="../../assets/img/front-pages/landing-page/hero-dashboard-light.png" alt="hero dashboard" class="animation-img" data-speed="2" data-app-light-img="front-pages/landing-page/hero-dashboard-light.png" data-app-dark-img="front-pages/landing-page/hero-dashboard-dark.png" />
          </div>
          <div class="position-absolute hero-elements-img">
            <img src="../../assets/img/front-pages/landing-page/hero-elements-light.png" alt="hero elements" class="animation-img" data-speed="4" data-app-light-img="front-pages/landing-page/hero-elements-light.png" data-app-dark-img="front-pages/landing-page/hero-elements-dark.png" />
          </div>
        </a>
      </div>
    </div>
  </section>

  <section id="landingFeatures" class="section-py landing-features">
    <div class="container">
      <h6 class="text-center d-flex justify-content-center align-items-center mb-6">
        <img src="../../assets/img/front-pages/icons/section-tilte-icon.png" alt="section title icon" class="me-2" height="19" />
        <span class="text-uppercase">Useful features</span>
      </h6>
      <h5 class="text-center mb-2"><span class="h4 fw-bold">Everything you need</span> to start your next project</h5>
      <p class="text-center fw-medium mb-4 mb-md-12">
        Not just a set of tools, the package includes ready-to-deploy conceptual application.
      </p>
      <div class="features-icon-wrapper row gx-0 gy-12 gx-sm-6">
        <div class="col-lg-4 col-sm-6 text-center features-icon-box">
          <div class="features-icon mb-4">
            <img src="../../assets/img/front-pages/icons/laptop-charging.png" alt="laptop charging" />
          </div>
          <h5 class="mb-2">Quality Code</h5>
          <p class="features-icon-description">
            Code structure that all developers will easily understand and fall in love with.
          </p>
        </div>
        <div class="col-lg-4 col-sm-6 text-center features-icon-box">
          <div class="features-icon mb-4">
            <img src="../../assets/img/front-pages/icons/transition-up.png" alt="transition up" />
          </div>
          <h5 class="mb-2">Continuous Updates</h5>
          <p class="features-icon-description">
            Free updates for the next 12 months, including new demos and features.
          </p>
        </div>
        <div class="col-lg-4 col-sm-6 text-center features-icon-box">
          <div class="features-icon mb-4">
            <img src="../../assets/img/front-pages/icons/edit.png" alt="edit" />
          </div>
          <h5 class="mb-2">Stater-Kit</h5>
          <p class="features-icon-description">
            Start your project quickly without having to remove unnecessary features.
          </p>
        </div>
        <div class="col-lg-4 col-sm-6 text-center features-icon-box">
          <div class="features-icon mb-4">
            <img src="../../assets/img/front-pages/icons/3d-select-solid.png" alt="3d select solid" />
          </div>
          <h5 class="mb-2">API Ready</h5>
          <p class="features-icon-description">
            Just change the endpoint and see your own data loaded within seconds.
          </p>
        </div>
        <div class="col-lg-4 col-sm-6 text-center features-icon-box">
          <div class="features-icon mb-4">
            <img src="../../assets/img/front-pages/icons/lifebelt.png" alt="lifebelt" />
          </div>
          <h5 class="mb-2">Excellent Support</h5>
          <p class="features-icon-description">An easy-to-follow doc with lots of references and code examples.</p>
        </div>
        <div class="col-lg-4 col-sm-6 text-center features-icon-box">
          <div class="features-icon mb-4">
            <img src="../../assets/img/front-pages/icons/google-docs.png" alt="google docs" />
          </div>
          <h5 class="mb-2">Well Documented</h5>
          <p class="features-icon-description">An easy-to-follow doc with lots of references and code examples.</p>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- Useful features: End --> */}

  </div>
  
  )
}

export default LandingHero
