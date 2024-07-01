import React from 'react';
import { Link } from 'react-router-dom';
import openposition from '../assets/assets/img/Open Postion.jpg';
import hero from '../assets/assets/img/front-pages/backgrounds/hero-bg-light.png';
import heroelement from '../assets/assets/img/front-pages/landing-page/hero-elements-light.png';

const LandingHero = () => {
  return (
    <div data-bs-spy="scroll" className="scrollspy-example">
      {/* Hero: Start */}
      <section id="landingHero" className="section-py landing-hero position-relative">
        <img
          src={hero}
          alt="hero background"
          className="position-absolute top-0 start-0 w-100 h-100 z-n1"
          data-speed="1"
          data-app-light-img="../../assets/img/front-pages/backgrounds/hero-bg-light.png"
          data-app-dark-img="../../assets/img/front-pages/backgrounds/hero-bg-light.png"
        />
        <div className="container">
          <div className="hero-text-box text-center">
            <h2 className="text-primary hero-title mb-4">Quantbot</h2>
            <h2 className="h6 mb-4 lh-md">
              <span style={{ fontSize: 'larger', fontWeight: '700' }}>Account Management</span>
              <br />
              Explore the best copy trading platforms in India, supporting major Indian brokers like Zerodha, Angel Broking, Fyers, Finvasia, and Alice Blue across NSE, BSE, and MCX exchanges.
            </h2>
            <Link to="/login" className="btn btn-lg btn-primary mb-3">
              <span className="tf-icons ri-user-line me-md-1"></span> Login
            </Link>
          </div>
          <div className="position-relative hero-animation-img mt-6">
            <a href="#" target="_self">
              <div className="hero-dashboard-img text-center">
                <img
                  src={openposition}
                  alt="hero dashboard"
                  className="animation-img"
                  data-speed="2"
                  data-app-light-img="../../assets/img/Open Postion.jpg"
                  data-app-dark-img="../../assets/img/Open Postion.jpg"
                />
              </div>
              <div className="position-absolute hero-elements-img">
                <img
                  src={heroelement}
                  alt="hero elements"
                  className="animation-img"
                  data-speed="4"
                  data-app-light-img="../../assets/img/front-pages/landing-page/hero-elements-light.png"
                  data-app-dark-img="../../assets/img/front-pages/landing-page/hero-elements-light.png"
                />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingHero;
