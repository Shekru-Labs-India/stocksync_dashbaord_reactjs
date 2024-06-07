



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import img from '../assets/img/illustrations/tree-3.png';
// import background from '../assets/img/illustrations/auth-basic-mask-light.png';

// const Login = () => {
//   const [step, setStep] = useState(1); // 1 for email input, 2 for OTP input
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState(['', '', '', '']);
//   const [countdown, setCountdown] = useState(30);
//   const [isOtpComplete, setIsOtpComplete] = useState(false);
//   const [isEmailValid, setIsEmailValid] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate(); // Get the navigate function

//   useEffect(() => {
//     if (step === 2 && countdown > 0) {
//       const timer = setTimeout(() => {
//         setCountdown(countdown - 1);
//       }, 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [step, countdown]);

//   const validateEmail = (email) => {
//     // Basic email validation regex
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   const handleEmailChange = (e) => {
//     const emailValue = e.target.value;
//     setEmail(emailValue);
//     setIsEmailValid(validateEmail(emailValue));
//   };

//   const handleEmailSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch('http://192.46.212.210/api/common/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email })
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setStep(2); // Move to the OTP step
//         setCountdown(30); // Reset countdown
//       } else {
//         setError(data.message || 'Failed to send OTP');
//       }
//     } catch (error) {
//       setError('Network error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOtpSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch('http://192.46.212.210/api/common/verify_otp', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ otp: otp.join(''), email })
//       });
//       const data = await response.json();
//       if (response.ok) {
//         alert('OTP Verified!'); // Example action on OTP verification
//         navigate('/'); // Navigate to the Home screen
//       } else {
//         setError(data.message || 'Failed to verify OTP');
//       }
//     } catch (error) {
//       setError('Network error');
//     } finally {
//       setLoading(false);
//     }
//   };


//   const handleOtpChange = (index, value) => {
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     // Check if all OTP fields are filled
//     setIsOtpComplete(newOtp.every(digit => digit !== ''));

//     // Move focus to the next input field if not the last one
//     if (index < otp.length - 1 && value !== '') {
//       const nextInput = document.getElementById(`otp-${index + 1}`);
//       if (nextInput) {
//         nextInput.focus();
//       }
//     }
//   };

//   const handleResendOtp = () => {
//     setCountdown(30); // Reset countdown timer
//     // Logic to resend OTP goes here
//     alert('OTP resent!'); // Example action on OTP resend
//   };

//   return (
//     <div>
//       <div className="position-relative">
//         <div className="authentication-wrapper authentication-basic container-p-y">
//           <div className="authentication-inner py-6 mx-4">
//             <div className="card p-7">
//               <div className="app-brand justify-content-center mt-5">
//                 <a href="index.html" className="app-brand-link gap-3">
//                   <span className="app-brand-logo demo">
//                     <span style={{ color: "#9055FD" }}>
//                       <svg
//                         width="30"
//                         height="24"
//                         viewBox="0 0 250 196"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         {/* SVG paths omitted for brevity */}
//                       </svg>
//                     </span>
//                   </span>
//                 </a>
//               </div>
//               <div className="card-body mt-1">
//                 <span className="app-brand-text demo text-heading fw-semibold">Materio</span>
//                 <h4 className="mb-1">Welcome to Materio! 👋🏻</h4>
//                 <p className="mb-5">
//                   Please sign-in to your account and start the adventure
//                 </p>

//                 {step === 1 && (
//                   <form
//                     id="formAuthentication"
//                     className="mb-5"
//                     onSubmit={handleEmailSubmit}
//                   >
//                     <div className="form-floating form-floating-outline mb-5">
//                       <input
//                         type="email"
//                         className="form-control"
//                         id="email"
//                         name="email-username"
//                         placeholder="Enter your email"
//                         value={email}
//                         onChange={handleEmailChange}
//                         required
//                         autoFocus
//                       />
//                       <label htmlFor="email">Email</label>
//                     </div>
//                     <div className="mb-5">
//                       <button
//                         className="active btn btn-primary d-grid w-100"
//                         type="submit"
//                         disabled={!isEmailValid || loading}
//                       >
//                         {loading ? 'Sending OTP...' : 'Login'}
//                       </button>
//                     </div>
//                     {error && <p className="text-danger">{error}</p>}
//                   </form>
//                 )}

//                 {step === 2 && (
//                   <form
//                     id="formAuthentication"
//                     className="mb-5"
//                     onSubmit={handleOtpSubmit}
//                   >
//                     <div className="form-floating form-floating-outline mb-5">
//                       <input
//                         type="email"
//                         className="form-control"
//                         id="email"
//                         name="email-username"
//                         placeholder="Enter your email"
//                         value={email}
//                         onChange={handleEmailChange}
//                         required
//                         autoFocus
//                       />
//                       <label htmlFor="email">Email</label>
//                     </div>
//                     <div className="mb-5">
//                       <div className="auth-input-wrapper d-flex align-items-center justify-content-between numeral-mask-wrapper">
//                         {otp.map((digit, index) => (
//                           <input
//                             key={index}
//                             type="tel"
//                             className="form-control auth-input text-center numeral-mask h-px-50 mx-sm-1 my-2"
//                             maxLength="1"
//                             value={digit}
//                             onChange={(e) => handleOtpChange(index, e.target.value)}
//                             id={`otp-${index}`} // Add ID here
//                             autoFocus={index === 0}
//                           />
//                         ))}
//                       </div>
//                       <input type="hidden" name="otp" value={otp.join('')} />
//                     </div>
//                     {countdown > 0 ? (
//                       <p className="float-end">Resend OTP in {countdown} seconds</p>
//                     ) : (
//                       <p className="float-end">
//                         Didn't receive the OTP?{' '}
//                         <div className="btn btn-link p-0" onClick={handleResendOtp}>
//                           Resend now
//                         </div>
//                       </p>
//                     )}
//                     <div className="mb-5">
//                       <button
//                         className={`active btn d-grid w-100 ${isOtpComplete ? 'btn-success' : 'btn-primary'}`}
//                         type="submit"
//                         disabled={!isOtpComplete || loading}
//                       >
//                         {loading ? 'Verifying...' : 'Verify OTP'}
//                       </button>
//                     </div>
//                     {error && <p className="text-danger">{error}</p>}
//                   </form>
//                 )}
//               </div>
//             </div>

//             <img
//               src={img}
//               alt="auth-tree"
//               className="authentication-image-object-left d-none d-lg-block"
//             />
//             <img
//               src={background}
//               className="authentication-image d-none d-lg-block scaleX-n1-rtl"
//               height="172"
//               alt="triangle-bg"
//               data-app-light-img="illustrations/auth-basic-mask-light.png"
//               data-app-dark-img="illustrations/auth-basic-mask-dark.png"
//             />
//             <img
//               src={img}
//               alt="auth-tree"
//               className="authentication-image-object-right d-none d-lg-block"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="buy-now">
//         <a
//           href="https://themeselection.com/item/materio-bootstrap-html-admin-template/"
//           target="_blank"
//           className="btn btn-danger btn-buy-now"
//         >
//           Buy Now
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from '../assets/img/illustrations/tree-3.png';
import background from '../assets/img/illustrations/auth-basic-mask-light.png';

const Login = () => {
  const [step, setStep] = useState(1); // 1 for email input, 2 for OTP input
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [countdown, setCountdown] = useState(30);
  const [isOtpComplete, setIsOtpComplete] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Get the navigate function

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

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://192.46.212.210/api/common/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      if (response.ok) {
        setStep(2); // Move to the OTP step
        setCountdown(30); // Reset countdown
      } else {
        setError(data.message || 'Failed to send OTP');
      }
    } catch (error) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://192.46.212.210/api/common/verify_otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ otp: otp.join(''), email })
      });
      const data = await response.json();
      if (response.ok && data.st === 1) {
        localStorage.setItem('user_id', data.user_id); // Save user_id to localStorage
        alert('OTP Verified!'); // Example action on OTP verification
        navigate('/'); // Navigate to the Home screen
      } else {
        setError(data.message || 'Failed to verify OTP');
      }
    } catch (error) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

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
                <span className="app-brand-text demo text-heading fw-semibold">Materio</span>
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
                        disabled={!isEmailValid || loading}
                      >
                        {loading ? 'Sending OTP...' : 'Login'}
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
                      <p className="float-end">
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
                        disabled={!isOtpComplete || loading}
                      >
                        {loading ? 'Verifying...' : 'Verify OTP'}
                      </button>
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                  </form>
                )}
              </div>
            </div>

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
