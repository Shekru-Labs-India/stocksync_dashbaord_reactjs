// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import config from "../../app3/config";
// import mirrorLogo from "../assets/mirrortrade.jpg";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [otp, setOtp] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   const validateName = (name) => {
//     return name.trim().length > 0;
//   };

//   const validateMobile = (mobile) => {
//     const re = /^[0-9]{10}$/;
//     return re.test(mobile);
//   };

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleMobileChange = (e) => {
//     setMobile(e.target.value);
//   };

//   const handleOtpChange = (e) => {
//     setOtp(e.target.value);
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.post(
//         `${config.apiDomain}/api/teacher/teacher_signup`,
//         {
//           name,
//           mobile,
//           email,
//           otp,
//         }
//       );

//       if (response.data.success && response.data.st === 1) {
//         console.log("Signup successful");
//         navigate("/admin/dashboard"); // Redirect to login after successful signup
//       } else {
//         setError("Signup failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error signing up:", error);
//       setError("Network error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="position-relative">
//       <div className="authentication-wrapper authentication-basic container-p-y">
//         <div className="authentication-inner py-6 mx-4">
//           <div className="card p-7">
//             <div className="app-brand justify-content-center mt-5">
//               <a href="index.html" className="app-brand-link gap-3">
//                 <span className="app-brand-logo demo">
//                   <span style={{ color: "#9055FD" }}>
//                     <svg
//                       width="30"
//                       height="24"
//                       viewBox="0 0 250 196"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       {/* SVG paths omitted for brevity */}
//                     </svg>
//                   </span>
//                 </span>
//               </a>
//             </div>
//             <div className="text-center mb-4">
//               <div className="d-flex align-items-center justify-content-center">
//                 <div className="avatar">
//                   <img
//                     src={mirrorLogo}
//                     alt=""
//                     className="w-40 h-auto rounded-circle"
//                   />
//                 </div>
//                 <span className="app-brand-text demo menu-text fw-semibold ms-1">
//                   Trade Mirror
//                 </span>
//               </div>
//             </div>
//             <div className="card-body mt-1">
//               <h4 className="mb-1">Welcome to Trade Mirror! 👋🏻</h4>
//               <p className="mb-5">
//                 Please sign-up to your account and start the adventure
//               </p>
//               <form
//                 id="formAuthentication"
//                 className="mb-5"
//                 onSubmit={handleSignup}
//               >
//                 <div className="form-floating form-floating-outline mb-5">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="name"
//                     name="name"
//                     placeholder="Enter your name"
//                     value={name}
//                     onChange={handleNameChange}
//                     required
//                     autoFocus
//                     autoComplete="off"
//                   />
//                   <label htmlFor="name">Name</label>
//                 </div>
//                 <div className="form-floating form-floating-outline mb-5">
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     name="email"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={handleEmailChange}
//                     required
//                     autoComplete="off"
//                   />
//                   <label htmlFor="email">Email</label>
//                 </div>
//                 <div className="form-floating form-floating-outline mb-5">
//                   <input
//                     type="tel"
//                     className="form-control"
//                     id="mobile"
//                     name="mobile"
//                     placeholder="Enter your mobile number"
//                     value={mobile}
//                     onChange={handleMobileChange}
//                     required
//                     autoComplete="off"
//                   />
//                   <label htmlFor="mobile">Mobile</label>
//                 </div>
//                 <div className="form-floating form-floating-outline mb-5">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="otp"
//                     name="otp"
//                     placeholder="Enter OTP"
//                     value={otp}
//                     onChange={handleOtpChange}
//                     required
//                     autoComplete="off"
//                   />
//                   <label htmlFor="otp">OTP</label>
//                 </div>
//                 <div className="mb-5">
//                   <button
//                     className="active btn btn-primary d-grid w-100"
//                     type="submit"
//                     disabled={
//                       !validateName(name) ||
//                       !validateEmail(email) ||
//                       !validateMobile(mobile) ||
//                       loading
//                     }
//                   >
//                   <span>signup</span>
//                   </button>
//                 </div>
              
//                 <p className="text-center mb-5">
//                   <span>Already have an account?</span>
//                   <Link to="/">Sign in</Link>
//                 </p>
//               </form>
//             </div>
//           </div>
//           <p className="text-center mt-5">
//             Power by{" "}
//             <a href="https://www.shekruweb.com" target="_blank" rel="noopener noreferrer">
//               Shekru Labs India Pvt. Ltd.
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/img/illustrations/tree-3.png";
import background from "../assets/img/illustrations/auth-basic-mask-light.png";

const Signup = () => {
  const [step, setStep] = useState(1); // 1 for signup, 2 for OTP input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [serverOtp, setServerOtp] = useState(null); // To store OTP from server
  const [countdown, setCountdown] = useState(30);
  const [isOtpComplete, setIsOtpComplete] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (step === 2 && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [step, countdown]);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateMobile = (mobile) => {
    const re = /^[0-9]{10}$/;
    return re.test(String(mobile));
  };
  const validateName = (name) => {
    const re = /^[0-9]{10}$/;
    return re.test(String(name));
  };

  useEffect(() => {
    setIsFormValid(validateEmail(email) && validateMobile(mobile) && name.trim().length > 0);
  }, [name, email, mobile]);

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const requestData = {
      name,
      mobile,
      email,
    };

    try {
      const response = await fetch("https://ghanish.in/api/teacher/teacher_signup_verify_otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();

      if (!response.ok || data.st !== 1) {
        throw new Error(data.msg || "Failed to sign up");
      }

      setServerOtp(data.otp.toString()); // Store OTP received from server
      setStep(2); // Move to the OTP step
      setCountdown(30); // Reset countdown
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const otpCode = otp.join("");

    if (otpCode !== serverOtp) {
      setError("OTP does not match");
      setLoading(false);
      return;
    }

    const requestData = {
      name,
      mobile,
      email,
      otp: otpCode
    };

    try {
      const response = await fetch("https://ghanish.in/api/teacher/teacher_signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("Failed to verify OTP");
      }

      alert("OTP Verified!"); // Example action on OTP verification
      navigate("/"); // Navigate to the Login screen
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    setIsOtpComplete(newOtp.every((digit) => digit !== ""));

    if (index < otp.length - 1 && value !== "") {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleResendOtp = () => {
    setCountdown(30);
    alert("OTP resent!"); // Example action on OTP resend
  };

  return (
    <div>
      <div className="position-relative">
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner py-6 mx-4">
            <div className="card p-7">
              <div className="app-brand justify-content-center mt-5">
                <div className="app-brand-link gap-3">
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
                </div>
              </div>
              <div className="card-body mt-1">
                <span className="app-brand-text demo text-heading fw-semibold">
                  Materio
                </span>
                <h4 className="mb-1">Welcome to Materio! 👋🏻</h4>
                <p className="mb-5">
                  Please sign-up to your account and start the adventure
                </p>

                {step === 1 && (
                  <form
                    id="formAuthentication"
                    className="mb-5"
                    onSubmit={handleSignupSubmit}
                  >
                    <div className="form-floating form-floating-outline mb-5">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        autoFocus
                      />
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating form-floating-outline mb-5">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating form-floating-outline mb-5">
                      <input
                        type="tel"
                        className="form-control"
                        id="mobile"
                        name="mobile"
                        placeholder="Enter your mobile number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                      />
                      <label htmlFor="mobile">Mobile</label>
                    </div>
                    <div className="mb-5">
                      <button
                        className="active btn btn-primary d-grid w-100"
                        type="submit"
                        disabled={!isFormValid || loading}
                      >
                        {loading ? "Signing up..." : "Sign Up"}
                      </button>
                    </div>
                    {error && <p className="text-danger">{error}</p>}
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
        type="text"
        className="form-control"
        id="name"
        name="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        autoFocus
        readOnly
        disabled={!isFormValid || step === 2}
      />
      <label htmlFor="name">Name</label>
    </div>
    <div className="form-floating form-floating-outline mb-5">
      <input
        type="tel"
        className="form-control"
        id="mobile"
        name="mobile"
        placeholder="Enter your mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        required
        autoFocus
        readOnly
        disabled={!isFormValid || step === 2}
      />
      <label htmlFor="mobile">Mobile</label>
    </div>
    <div className="form-floating form-floating-outline mb-5">
      <input
        type="email"
        className="form-control"
        id="email"
        name="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoFocus
        readOnly
        disabled={!isFormValid || step === 2}
      />
      <label htmlFor="email">Email</label>
    </div>
    <div className="mb-5">
      <div className="auth-input-wrapper d-flex align-items-center justify-content-between numeral-mask-wrapper">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            id={`otp-${index}`}
            maxLength="1"
            className="form-control auth-input text-center numeral-mask h-px-50 mx-sm-1 my-2"
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
          />
        ))}
      </div>
    </div>
    <div className="mb-5">
      <button
        className="active btn btn-primary d-grid w-100"
        type="submit"
        disabled={!isOtpComplete || loading}
      >
        {loading ? "Verifying OTP..." : "Verify OTP"}
      </button>
    </div>
    <div className="mb-5 text-center">
      <span className="mb-2">
        Didn’t get the code?
        {countdown > 0 ? (
          <span>Resend OTP in {countdown}s</span>
        ) : (
          <a href="#!" onClick={handleResendOtp}>
            Resend OTP
          </a>
        )}
      </span>
    </div>
    {error && <p className="text-danger">{error}</p>}
  </form>
)}

                <p className="text-center">
                  <span>Already have an account?</span>
                  <a href="/">
                    <span>Sign in</span>
                  </a>
                </p>
              </div>
            </div>
            <p className="text-center mt-5">Powered by <a href="https://www.shekruweb.com" target="_blank">Shekru Labs India Pvt. Ltd.</a></p>

<img
  src={img}
  alt="auth-tree"
  className="authentication-image-object-left d-none d-lg-block"
/>
<img
  src={background}
  className="authentication-image d-none d-lg-block scaleX-n1-rtl"
  height="172"
  alt="triangle-bg"
  data-app-light-img="illustrations/auth-basic-mask-light.png"
  data-app-dark-img="illustrations/auth-basic-mask-dark.png"
/>
<img
  src={img}
  alt="auth-tree"
  className="authentication-image-object-right d-none d-lg-block"
/>
</div>
</div>
      </div>
    </div>
  );
};

export default Signup;
