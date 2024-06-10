import React from 'react'

const LandingMain = () => {
  return (
    <div>
    <section id="landingFunFacts" class="section-py landing-fun-facts py-12 my-4">
    <div class="container">
      <div class="row gx-0 gy-5 gx-sm-6">
        <div class="col-md-3 col-sm-6 text-center">
          <span class="badge rounded-pill bg-label-hover-primary fun-facts-icon mb-6 p-5"><i class="tf-icons ri-layout-line ri-42px"></i></span>
          <h2 class="fw-bold mb-0 fun-facts-text">137+</h2>
          <h6 class="mb-0 text-body">Completed Sites</h6>
        </div>
        <div class="col-md-3 col-sm-6 text-center">
          <span class="badge rounded-pill bg-label-hover-success fun-facts-icon mb-6 p-5"><i class="tf-icons ri-time-line ri-42px"></i></span>
          <h2 class="fw-bold mb-0 fun-facts-text">1,100+</h2>
          <h6 class="mb-0 text-body">Working Hours</h6>
        </div>
        <div class="col-md-3 col-sm-6 text-center">
          <span class="badge rounded-pill bg-label-hover-warning fun-facts-icon mb-6 p-5"><i class="tf-icons ri-user-smile-line ri-42px"></i></span>
          <h2 class="fw-bold mb-0 fun-facts-text">137+</h2>
          <h6 class="mb-0 text-body">Happy Customers</h6>
        </div>
        <div class="col-md-3 col-sm-6 text-center">
          <span class="badge rounded-pill bg-label-hover-info fun-facts-icon mb-6 p-5"><i class="tf-icons ri-award-line ri-42px"></i></span>
          <h2 class="fw-bold mb-0 fun-facts-text">23+</h2>
          <h6 class="mb-0 text-body">Awards Winning</h6>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- Fun facts: End -->   */}


  {/* <!-- FAQ: Start --> */}
  <section id="landingFAQ" class="section-py bg-body landing-faq">
    <div class="container bg-icon-right">
      <img src="../../assets/img/front-pages/icons/bg-right-icon-light.png" alt="section icon" class="position-absolute top-0 end-0" data-speed="1" data-app-light-img="front-pages/icons/bg-right-icon-light.png" data-app-dark-img="front-pages/icons/bg-right-icon-dark.png" />
      <h6 class="text-center d-flex justify-content-center align-items-center mb-6">
        <img src="../../assets/img/front-pages/icons/section-tilte-icon.png" alt="section title icon" class="me-2" height="19" />
        <span class="text-uppercase">faq</span>
      </h6>
      <h5 class="text-center mb-2">Frequently asked<span class="h4 fw-bold"> questions</span></h5>
      <p class="text-center fw-medium mb-4 mb-md-12 pb-4">
        Browse through these FAQs to find answers to commonly asked questions.
      </p>
      <div class="row gy-5">
        <div class="col-lg-5">
          <div class="text-center">
            <img src="../../assets/img/front-pages/landing-page/sitting-girl-with-laptop.png
          " alt="sitting girl with laptop" class="faq-image scaleX-n1-rtl" />
          </div>
        </div>
        <div class="col-lg-7">
          <div class="accordion" id="accordionFront">
            <div class="accordion-item">
              <h2 class="accordion-header" id="head-One">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordionOne" aria-expanded="true" aria-controls="accordionOne">
                  Do you charge for each upgrade?
                </button>
              </h2>

              <div id="accordionOne" class="accordion-collapse collapse" data-bs-parent="#accordionFront" aria-labelledby="accordionOne">
                <div class="accordion-body">
                  Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing
                  marzipan gummi bears macaroon dragée danish caramels powder. Bear claw dragée pastry topping
                  soufflé. Wafer gummi bears marshmallow pastry pie.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="head-Two">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordionTwo" aria-expanded="false" aria-controls="accordionTwo">
                  Do I need to purchase a license for each website?
                </button>
              </h2>
              <div id="accordionTwo" class="accordion-collapse collapse" aria-labelledby="accordionTwo" data-bs-parent="#accordionFront">
                <div class="accordion-body">
                  Dessert ice cream donut oat cake jelly-o pie sugar plum cheesecake. Bear claw dragée oat cake
                  dragée ice cream halvah tootsie roll. Danish cake oat cake pie macaroon tart donut gummies. Jelly
                  beans candy canes carrot cake. Fruitcake chocolate chupa chups.
                </div>
              </div>
            </div>
            <div class="accordion-item active">
              <h2 class="accordion-header" id="head-Three">
                <button type="button" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#accordionThree" aria-expanded="true" aria-controls="accordionThree">
                  What is regular license?
                </button>
              </h2>
              <div id="accordionThree" class="accordion-collapse collapse show" aria-labelledby="accordionThree" data-bs-parent="#accordionFront">
                <div class="accordion-body">
                  Regular license can be used for end products that do not charge users for access or service(access
                  is free and there will be no monthly subscription fee). Single regular license can be used for
                  single end product and end product can be used by you or your client. If you want to sell end
                  product to multiple clients then you will need to purchase separate license for each client. The
                  same rule applies if you want to use the same end product on multiple domains(unique setup). For
                  more info on regular license you can check official description.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="head-Four">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordionFour" aria-expanded="false" aria-controls="accordionFour">
                  What is extended license?
                </button>
              </h2>
              <div id="accordionFour" class="accordion-collapse collapse" aria-labelledby="accordionFour" data-bs-parent="#accordionFront">
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et aliquid quaerat possimus maxime!
                  Mollitia reprehenderit neque repellat deleniti delectus architecto dolorum maxime, blanditiis
                  earum ea, incidunt quam possimus cumque.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="head-Five">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordionFive" aria-expanded="false" aria-controls="accordionFive">
                  Which license is applicable for SASS application?
                </button>
              </h2>
              <div id="accordionFive" class="accordion-collapse collapse" aria-labelledby="accordionFive" data-bs-parent="#accordionFront">
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi molestias exercitationem ab cum
                  nemo facere voluptates veritatis quia, eveniet veniam at et repudiandae mollitia ipsam quasi
                  labore enim architecto non!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- FAQ: End --> */}

  {/* <!-- CTA: Start --> */}
  <section id="landingCTA" class="section-py landing-cta p-lg-0 pb-0 position-relative">
    <img src="../../assets/img/front-pages/backgrounds/cta-bg.png" class="position-absolute bottom-0 end-0 scaleX-n1-rtl h-100 w-100 z-n1" alt="cta image" />
    <div class="container">
      <div class="row align-items-center gy-5 gy-lg-0">
        <div class="col-lg-6 text-center text-lg-start">
          <h2 class="display-5 text-primary fw-bold mb-0">Ready to Get Started?</h2>
          <p class="fw-medium mb-6 mb-md-8">Start your project with a 14-day free trial</p>
          <a href="payment-page.html" class="btn btn-primary active">Get Started<i class="ri-arrow-right-line ri-16px ms-2 scaleX-n1-rtl"></i></a>
        </div>
        <div class="col-lg-6 pt-lg-12">
          <img src="../../assets/img/front-pages/landing-page/cta-dashboard.png" alt="cta dashboard" class="img-fluid" />
        </div>
      </div>
    </div>
  </section>
  {/* <!-- CTA: End --> */}


  {/* <!-- Contact Us: Start --> */}
  <section id="landingContact" class="section-py bg-body landing-contact">
    <div class="container bg-icon-left position-relative">
      <img src="../../assets/img/front-pages/icons/bg-left-icon-light.png" alt="section icon" class="position-absolute top-0 start-0" data-speed="1" data-app-light-img="front-pages/icons/bg-left-icon-light.png" data-app-dark-img="front-pages/icons/bg-left-icon-dark.png" />
      <h6 class="text-center d-flex justify-content-center align-items-center mb-6">
        <img src="../../assets/img/front-pages/icons/section-tilte-icon.png" alt="section title icon" class="me-2" height="19" />
        <span class="text-uppercase">contact us</span>
      </h6>
      <h5 class="text-center mb-2"><span class="h4 fw-bold">Lets work</span> together</h5>
      <p class="text-center fw-medium mb-4 mb-md-12 pb-3">Any question or remark? just write us a message</p>
      <div class="row gy-4">
        <div class="col-lg-5">
          <div class="card h-100">
            <div class="bg-primary rounded text-white card-body p-lg-8">
              <p class="fw-medium mb-2 tagline">Let’s contact with us</p>
              <p class="display-6 mb-5 title">Share your ideas or requirement with our experts.</p>
              <img src="../../assets/img/front-pages/landing-page/let’s-contact.png
              " alt="let’s contact" class="w-100 mb-4 pb-1" />
              <p class="mb-0 description">
                Looking for more customisation, more features, and more anything? Don’t worry, We’ve provide you with
                an entire team of experienced professionals.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="card">
            <div class="card-body">
              <h5 class="mb-6">Share your ideas</h5>
              <form>
                <div class="row g-5">
                  <div class="col-md-6">
                    <div class="form-floating form-floating-outline">
                      <input type="text" class="form-control" id="basic-default-fullname" placeholder="John Doe" />
                      <label for="basic-default-fullname">Full name</label>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-floating form-floating-outline">
                      <input type="email" class="form-control" id="basic-default-email" placeholder="johndoe99@gmail.com" />
                      <label for="basic-default-email">Email address</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-floating form-floating-outline">
                      <textarea class="form-control h-px-200" placeholder="Message" aria-label="Message" id="basic-default-message"></textarea>
                      <label for="basic-default-message">Message</label>
                    </div>
                  </div>

                </div>
                <button type="submit" class="btn btn-primary active mt-5">Send inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- Contact Us: End --> */}
</div>
   
  )
}

export default LandingMain
