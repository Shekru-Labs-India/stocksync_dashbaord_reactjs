// import React from "react";

// const Login = () => {
    
//   return (
//     <div>
//       <div class="position-relative">
//         <div class="authentication-wrapper authentication-basic container-p-y">
//           <div class="authentication-inner py-6 mx-4">
//             <div class="card p-7">
//               <div class="app-brand justify-content-center mt-5">
//                 <a href="index.html" class="app-brand-link gap-3">
//                   <span class="app-brand-logo demo">
//                     <span style={{ color: "#9055FD" }}>
//                       <svg
//                         width="30"
//                         height="24"
//                         viewBox="0 0 250 196"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           fill-rule="evenodd"
//                           clip-rule="evenodd"
//                           d="M12.3002 1.25469L56.655 28.6432C59.0349 30.1128 60.4839 32.711 60.4839 35.5089V160.63C60.4839 163.468 58.9941 166.097 56.5603 167.553L12.2055 194.107C8.3836 196.395 3.43136 195.15 1.14435 191.327C0.395485 190.075 0 188.643 0 187.184V8.12039C0 3.66447 3.61061 0.0522461 8.06452 0.0522461C9.56056 0.0522461 11.0271 0.468577 12.3002 1.25469Z"
//                           fill="currentColor"
//                         />
//                         <path
//                           opacity="0.077704"
//                           fill-rule="evenodd"
//                           clip-rule="evenodd"
//                           d="M0 65.2656L60.4839 99.9629V133.979L0 65.2656Z"
//                           fill="black"
//                         />
//                         <path
//                           opacity="0.077704"
//                           fill-rule="evenodd"
//                           clip-rule="evenodd"
//                           d="M0 65.2656L60.4839 99.0795V119.859L0 65.2656Z"
//                           fill="black"
//                         />
//                         <path
//                           fill-rule="evenodd"
//                           clip-rule="evenodd"
//                           d="M237.71 1.22393L193.355 28.5207C190.97 29.9889 189.516 32.5905 189.516 35.3927V160.631C189.516 163.469 191.006 166.098 193.44 167.555L237.794 194.108C241.616 196.396 246.569 195.151 248.856 191.328C249.605 190.076 250 188.644 250 187.185V8.09597C250 3.64006 246.389 0.027832 241.935 0.027832C240.444 0.027832 238.981 0.441882 237.71 1.22393Z"
//                           fill="currentColor"
//                         />
//                         <path
//                           opacity="0.077704"
//                           fill-rule="evenodd"
//                           clip-rule="evenodd"
//                           d="M250 65.2656L189.516 99.8897V135.006L250 65.2656Z"
//                           fill="black"
//                         />
//                         <path
//                           opacity="0.077704"
//                           fill-rule="evenodd"
//                           clip-rule="evenodd"
//                           d="M250 65.2656L189.516 99.0497V120.886L250 65.2656Z"
//                           fill="black"
//                         />
//                         <path
//                           fill-rule="evenodd"
//                           clip-rule="evenodd"
//                           d="M12.2787 1.18923L125 70.3075V136.87L0 65.2465V8.06814C0 3.61223 3.61061 0 8.06452 0C9.552 0 11.0105 0.411583 12.2787 1.18923Z"
//                           fill="currentColor"
//                         />
//                         <path
//                           fill-rule="evenodd"
//                           clip-rule="evenodd"
//                           d="M12.2787 1.18923L125 70.3075V136.87L0 65.2465V8.06814C0 3.61223 3.61061 0 8.06452 0C9.552 0 11.0105 0.411583 12.2787 1.18923Z"
//                           fill="white"
//                           fill-opacity="0.15"
//                         />
//                         <path
//                           fill-rule="evenodd"
//                           clip-rule="evenodd"
//                           d="M237.721 1.18923L125 70.3075V136.87L250 65.2465V8.06814C250 3.61223 246.389 0 241.935 0C240.448 0 238.99 0.411583 237.721 1.18923Z"
//                           fill="currentColor"
//                         />
//                         <path
//                           fill-rule="evenodd"
//                           clip-rule="evenodd"
//                           d="M237.721 1.18923L125 70.3075V136.87L250 65.2465V8.06814C250 3.61223 246.389 0 241.935 0C240.448 0 238.99 0.411583 237.721 1.18923Z"
//                           fill="white"
//                           fill-opacity="0.3"
//                         />
//                       </svg>
//                     </span>
//                   </span>
//                   <span class="app-brand-text demo text-heading fw-semibold">
//                     Materio
//                   </span>
//                 </a>
//               </div>

//               <div class="card-body mt-1">
//                 <h4 class="mb-1">Welcome to Materio! 👋🏻</h4>
//                 <p class="mb-5">
//                   Please sign-in to your account and start the adventure
//                 </p>

//                 <form
//                   id="formAuthentication"
//                   class="mb-5"
//                   action="index.html"
//                   method="GET"
//                 >
//                   <div class="form-floating form-floating-outline mb-5">
//                     <input
//                       type="text"
//                       class="form-control"
//                       id="email"
//                       name="email-username"
//                       placeholder="Enter your email "
//                       autofocus
//                     />
//                     <label for="email">Email </label>
//                   </div>
//                   <div class="mb-5">
//                     <div class="auth-input-wrapper d-flex align-items-center justify-content-between numeral-mask-wrapper">
//                       <input
//                         type="tel"
//                         class="form-control auth-input text-center numeral-mask h-px-50 mx-sm-1 my-2"
//                         maxlength="1"
//                         autofocus
//                       />
//                       <input
//                         type="tel"
//                         class="form-control auth-input text-center numeral-mask h-px-50 mx-sm-1 my-2"
//                         maxlength="1"
//                       />
//                       <input
//                         type="tel"
//                         class="form-control auth-input text-center numeral-mask h-px-50 mx-sm-1 my-2"
//                         maxlength="1"
//                       />
//                       <input
//                         type="tel"
//                         class="form-control auth-input text-center numeral-mask h-px-50 mx-sm-1 my-2"
//                         maxlength="1"
//                       />
                     
//                     </div>
//                     {/* <!-- Create a hidden field which is combined by 3 fields above --> */}
//                     <input type="hidden" name="otp" />
//                   </div>
                        
//                   <div class="mb-5 pb-2 d-flex justify-content-between pt-2 align-items-center">
//                     <div class="form-check mb-0">
                     
                     
                //     </div>
                    // <a
                    //   href="auth-forgot-password-basic.html"
                    //   class="float-end mb-1"
                    // >
                    //   <span>Forgot Password?</span>
                    // </a>
                //   </div>
//                   <div class="mb-5">
//                     <button 
//                       class="active btn btn-primary d-grid w-100"
//                       type="submit"
//                     >
//                       login
//                     </button>
                    
//                   </div>
//                   <button 
//                       class="active btn btn-primary d-grid w-100"
//                       type="submit"
//                     >
//                       Verify Otp
//                     </button>
//                 </form>

                

               

               
//               </div>
//             </div>

//             <img
//               src="../../assets/img/illustrations/tree-3.png"
//               alt="auth-tree"
//               class="authentication-image-object-left d-none d-lg-block"
//             />
//             <img
//               src="../../assets/img/illustrations/auth-basic-mask-light.png"
//               class="authentication-image d-none d-lg-block scaleX-n1-rtl"
//               height="172"
//               alt="triangle-bg"
//               data-app-light-img="illustrations/auth-basic-mask-light.png"
//               data-app-dark-img="illustrations/auth-basic-mask-dark.png"
//             />
//             <img
//               src="../../assets/img/illustrations/tree.png"
//               alt="auth-tree"
//               class="authentication-image-object-right d-none d-lg-block"
//             />
//           </div>
//         </div>
//       </div>

//       <div class="buy-now">
//         <a
//           href="https://themeselection.com/item/materio-bootstrap-html-admin-template/"
//           target="_blank"
//           class="btn btn-danger btn-buy-now"
//         >
//           Buy Now
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect } from "react";

const Login = () => {
  const [step, setStep] = useState(1); // 1 for email input, 2 for OTP input
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [countdown, setCountdown] = useState(30);
  const [isOtpComplete, setIsOtpComplete] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    if (step === 2 && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [step, countdown]);

  const validateEmail = (email) => {
    // Basic email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailValid(validateEmail(emailValue));
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Perform email validation or other logic here
    setStep(2); // Move to the OTP step
    setCountdown(30); // Reset countdown
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Perform OTP validation or other logic here
    alert('OTP Verified!'); // Example action on OTP verification
  };

  // const handleOtpChange = (index, value) => {
  //   const newOtp = [...otp];
  //   newOtp[index] = value;
  //   setOtp(newOtp);

  //   // Check if all OTP fields are filled
  //   setIsOtpComplete(newOtp.every(digit => digit !== ''));
  // };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  
    // Check if all OTP fields are filled
    setIsOtpComplete(newOtp.every(digit => digit !== ''));
  
    // Move focus to the next input field if not the last one
    if (index < otp.length - 1 && value !== '') {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };
  

  const handleResendOtp = () => {
    setCountdown(30); // Reset countdown timer
    // Logic to resend OTP goes here
    alert('OTP resent!'); // Example action on OTP resend
  };

  return (
    <div>
      <div className="position-relative">
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner py-6 mx-4">
            <div className="card p-7">
              <div className="app-brand justify-content-center mt-5">
                <a href="index.html" className="app-brand-link gap-3">
                  <span className="app-brand-logo demo">
                    <span style={{ color: "#9055FD" }}>
                      <svg
                        width="30"
                        height="24"
                        viewBox="0 0 250 196"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* SVG paths omitted for brevity */}
                      </svg>
                    </span>
                  </span>
                  
                </a>
              </div>
              <div className="card-body mt-1">
              <span class="app-brand-text demo text-heading fw-semibold">Materio</span>
                    <h4 className="mb-1">Welcome to Materio! 👋🏻</h4>
                    <p className="mb-5">
                      Please sign-in to your account and start the adventure
                    </p>
                
                {step === 1 && (
                  <form
                    id="formAuthentication"
                    className="mb-5"
                    onSubmit={handleEmailSubmit}
                  >
                    <div className="form-floating form-floating-outline mb-5">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email-username"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        autoFocus
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="mb-5">
                      <button
                        className="active btn btn-primary d-grid w-100"
                        type="submit"
                        disabled={!isEmailValid}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                )}

                {step === 2 && (
                  <form
                    id="formAuthentication"
                    className="mb-5"
                    onSubmit={handleOtpSubmit}
                  >
                     <div className="form-floating form-floating-outline mb-5">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email-username"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        autoFocus
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                   {/* <p class="mb-0">Enter your OTP</p> */}
                    <div className="mb-5">
                      <div className="auth-input-wrapper d-flex align-items-center justify-content-between numeral-mask-wrapper">
                      {otp.map((digit, index) => (
  <input
    key={index}
    type="tel"
    className="form-control auth-input text-center numeral-mask h-px-50 mx-sm-1 my-2"
    maxLength="1"
    value={digit}
    onChange={(e) => handleOtpChange(index, e.target.value)}
    id={`otp-${index}`} // Add ID here
    autoFocus={index === 0}
  />
))}

                      </div>
                      <input type="hidden" name="otp" value={otp.join('')} />
                    </div>
                    {countdown > 0 ? (
                      <p className="float-end">Resend OTP in {countdown} seconds</p>
                    ) : (
                      <p className="float-end ">
                        Didn't receive the OTP?{' '}
                        <div className="btn btn-link p-0" onClick={handleResendOtp}>
                          Resend now
                        </div>
                      </p>
                      
                    )}
                    <div className="mb-5">
                      <button
                        className={`active btn d-grid w-100 ${isOtpComplete ? 'btn-success' : 'btn-primary'}`}
                        type="submit"
                        disabled={!isOtpComplete}
                      >
                        Verify OTP
                      </button>
                    
                    </div>
                   
                  </form>
                )}
              </div>
            </div>

            <img
              src="../../assets/img/illustrations/tree-3.png"
              alt="auth-tree"
              className="authentication-image-object-left d-none d-lg-block"
            />
            <img
              src="../../assets/img/illustrations/auth-basic-mask-light.png"
              className="authentication-image d-none d-lg-block scaleX-n1-rtl"
              height="172"
              alt="triangle-bg"
              data-app-light-img="illustrations/auth-basic-mask-light.png"
              data-app-dark-img="illustrations/auth-basic-mask-dark.png"
            />
            <img
              src="../../assets/img/illustrations/tree.png"
              alt="auth-tree"
              className="authentication-image-object-right d-none d-lg-block"
            />
          </div>
        </div>
      </div>

      <div className="buy-now">
        <a
          href="https://themeselection.com/item/materio-bootstrap-html-admin-template/"
          target="_blank"
          className="btn btn-danger btn-buy-now"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default Login;

