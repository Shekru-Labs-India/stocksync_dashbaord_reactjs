import React from "react";

const VerifyOtp = () => {
  return (
    <div>
      <div class="positive-relative">
        <div class="authentication-wrapper authentication-basic">
          <div class="authentication-inner py-6 mx-4">
            <div class="card p-7">
              <div class="app-brand justify-content-center mt-5">
                <a href="index.html" class="app-brand-link gap-3">
                  <span class="app-brand-logo demo">
                    <span style={{ color: "#9055FD" }}>
                      <svg
                        width="30"
                        height="24"
                        viewBox="0 0 250 196"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.3002 1.25469L56.655 28.6432C59.0349 30.1128 60.4839 32.711 60.4839 35.5089V160.63C60.4839 163.468 58.9941 166.097 56.5603 167.553L12.2055 194.107C8.3836 196.395 3.43136 195.15 1.14435 191.327C0.395485 190.075 0 188.643 0 187.184V8.12039C0 3.66447 3.61061 0.0522461 8.06452 0.0522461C9.56056 0.0522461 11.0271 0.468577 12.3002 1.25469Z"
                          fill="currentColor"
                        />
                        <path
                          opacity="0.077704"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 65.2656L60.4839 99.9629V133.979L0 65.2656Z"
                          fill="black"
                        />
                        <path
                          opacity="0.077704"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 65.2656L60.4839 99.0795V119.859L0 65.2656Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M237.71 1.22393L193.355 28.5207C190.97 29.9889 189.516 32.5905 189.516 35.3927V160.631C189.516 163.469 191.006 166.098 193.44 167.555L237.794 194.108C241.616 196.396 246.569 195.151 248.856 191.328C249.605 190.076 250 188.644 250 187.185V8.09597C250 3.64006 246.389 0.027832 241.935 0.027832C240.444 0.027832 238.981 0.441882 237.71 1.22393Z"
                          fill="currentColor"
                        />
                        <path
                          opacity="0.077704"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M250 65.2656L189.516 99.8897V135.006L250 65.2656Z"
                          fill="black"
                        />
                        <path
                          opacity="0.077704"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M250 65.2656L189.516 99.0497V120.886L250 65.2656Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.2787 1.18923L125 70.3075V136.87L0 65.2465V8.06814C0 3.61223 3.61061 0 8.06452 0C9.552 0 11.0105 0.411583 12.2787 1.18923Z"
                          fill="currentColor"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.2787 1.18923L125 70.3075V136.87L0 65.2465V8.06814C0 3.61223 3.61061 0 8.06452 0C9.552 0 11.0105 0.411583 12.2787 1.18923Z"
                          fill="white"
                          fill-opacity="0.15"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M237.721 1.18923L125 70.3075V136.87L250 65.2465V8.06814C250 3.61223 246.389 0 241.935 0C240.448 0 238.99 0.411583 237.721 1.18923Z"
                          fill="currentColor"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M237.721 1.18923L125 70.3075V136.87L250 65.2465V8.06814C250 3.61223 246.389 0 241.935 0C240.448 0 238.99 0.411583 237.721 1.18923Z"
                          fill="white"
                          fill-opacity="0.3"
                        />
                      </svg>
                    </span>
                  </span>
                  <span class="app-brand-text demo text-heading fw-semibold">
                    Materio
                  </span>
                </a>
              </div>

              <div class="card-body mt-1">
                <h4 class="mb-1">Two Step Verification 💬</h4>
                <p class="text-start mb-5">
                  We sent a verification code to your mobile. Enter the code
                  from the mobile in the field below.
                  <span class="d-block mt-1 h6">******1234</span>
                </p>
                <p class="mb-0">Type your 6 digit security code</p>
                <form id="twoStepsForm" action="index.html" method="GET">
                  <div class="mb-5">
                    <div class="auth-input-wrapper d-flex align-items-center justify-content-between numeral-mask-wrapper">
                      <input
                        type="tel"
                        class="form-control auth-input text-center numeral-mask h-px-50 mx-sm-1 my-2"
                        maxlength="1"
                        autofocus
                      />
                      <input
                        type="tel"
                        class="form-control auth-input text-center numeral-mask h-px-50 mx-sm-1 my-2"
                        maxlength="1"
                      />
                      <input
                        type="tel"
                        class="form-control auth-input text-center numeral-mask h-px-50 mx-sm-1 my-2"
                        maxlength="1"
                      />
                      <input
                        type="tel"
                        class="form-control auth-input text-center numeral-mask h-px-50 mx-sm-1 my-2"
                        maxlength="1"
                      />
                     
                    </div>
                    {/* <!-- Create a hidden field which is combined by 3 fields above --> */}
                    <input type="hidden" name="otp" />
                  </div>
                  <button class="active btn btn-primary d-grid w-100 mb-5">
                    Verify my account
                  </button>
                  <div class="text-center">
                    Didn't get the code?
                    <a href="javascript:void(0);">Resend</a>
                  </div>
                </form>
              </div>
            </div>
            {/* <!-- / Two Steps Verification --> */}
            <img
              src="../../assets/img/illustrations/tree-3.png"
              alt="auth-tree"
              class="authentication-image-object-left d-none d-lg-block"
            />
            <img
              src="../../assets/img/illustrations/auth-basic-mask-light.png"
              class="authentication-image d-none d-lg-block scaleX-n1-rtl"
              height="172"
              alt="triangle-bg"
              data-app-light-img="illustrations/auth-basic-mask-light.png"
              data-app-dark-img="illustrations/auth-basic-mask-dark.png"
            />
            <img
              src="../../assets/img/illustrations/tree.png"
              alt="auth-tree"
              class="authentication-image-object-right d-none d-lg-block"
            />
          </div>
        </div>
      </div>

      {/* <!-- / Content --> */}

      <div class="buy-now">
        <a
          href="https://themeselection.com/item/materio-bootstrap-html-admin-template/"
          target="_blank"
          class="btn btn-danger btn-buy-now"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default VerifyOtp;
