import React, { useState, useEffect, useRef } from "react";
import { useNavigate ,Link} from "react-router-dom";
import img from "../assets/img/illustrations/tree-3.png";
import background from "../assets/img/illustrations/auth-basic-mask-light.png";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import config from "../src/app3/config";
import mirrorLogo from "../assets/mirrortrade.jpg"
const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("authToken") ? true : false
  );
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [countdown, setCountdown] = useState(30);
  const [isOtpComplete, setIsOtpComplete] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const toast = useRef(null);
  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const navigate = useNavigate();
 
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (!isAuthenticated) {
      window.history.pushState(null, "", "/login");
      window.addEventListener("popstate", () => {
        if (!isAuthenticated) {
          window.history.pushState(null, "", "/login");
        }
      });
    }
  }, [isAuthenticated]);

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
      const response = await fetch(`${config.apiDomain}/api/common/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        setStep(2);
        setCountdown(30);
      } else {
        setError(data.message || "Failed to send OTP");
      }
    } catch (error) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${config.apiDomain}/api/common/verify_otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ otp: otp.join(""), email }),
        }
      );
      const data = await response.json();
      if (response.ok && data.st === 1) {
        localStorage.setItem("authToken", data.token); // Set authentication token
        localStorage.setItem("userId", data.user_data.id); // Set user ID
        localStorage.setItem("userName", data.user_data.name); // Set user name
        localStorage.setItem("userRole", data.user_data.role); // Set user role
      
        setIsAuthenticated(true); // Set authentication state
        const { role } = data.user_data;
        switch (role) {
          case "teacher":
            navigate("/teacher/dashboard"); // Example path for teacher dashboard
            break;
          case "student":
            navigate("/student/dashboard"); // Example path for student dashboard
            break;
          case "admin":
            navigate("/admin/dashboard"); // Example path for admin dashboard
            break;
          default:
            navigate("/");
            break;
        }
  
        const errorMsg = data.msg || "Success";
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: toTitleCase(errorMsg),
          life: 3000,
        });
      } else if (response.ok && (data.st === 2 || data.st === 3 || data.st === 4)) {
        const errorMsg = data.msg || "Warning";
        setError(new Error(errorMsg));
        toast.current.show({
          severity: "warn",
          summary: "Warning",
          detail: toTitleCase(errorMsg),
          life: 4000,
        });
      } 
    } catch (error) {
      setError("Network error");
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Network error",
        life: 3000,
      });
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
    alert("OTP resent!");
  };

  return (
    <div>
         <Toast ref={toast} />
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
              <div className="text-center mb-4">
        <div className="d-flex align-items-center justify-content-center">
          <div className="avatar">
            <img src={mirrorLogo} alt="" className="w-40 h-auto rounded-circle" />
          </div>
          <span className="app-brand-text demo menu-text fw-semibold ms-1">
            TradeMirror
          </span>
        </div>
      </div>
              <div className="card-body mt-1">
              
             
                <h4 className="mb-1">Welcome to Trade Mirror! 👋🏻</h4>
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
                        autoComplete="off"

                      />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="mb-5">
                      <button
                        className="active btn btn-primary d-grid w-100"
                        type="submit"
                        disabled={!isEmailValid || loading}
                      >
                        {loading ? "Sending OTP..." : "Login"}
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
                        autoComplete="off"
                        disabled={!isEmailValid ||  step === 2}

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
                            onChange={(e) =>
                              handleOtpChange(index, e.target.value)
                            }
                            id={`otp-${index}`}
                            autoFocus={index === 0}
                            autoComplete="off"
                          />
                        ))}
                      </div>
                      <input type="hidden" name="otp" value={otp.join("")} />
                    </div>
                    {countdown > 0 ? (
                      <p className="float-end">
                        Resend OTP in {countdown} seconds
                      </p>
                    ) : (
                      <p className="float-end">
                        Didn't receive the OTP?{" "}
                        <div
                          className="btn-link p-0 text-primary"
                          onClick={handleResendOtp}
                          style={{ cursor: 'pointer' }}
                        >
                          Resend now
                        </div>
                      </p>
                    )}
                    <div className="mb-5">
                 
                      <Button
                                     

                        className={`active btn d-grid w-100  ${
                          isOtpComplete ? "btn-success" : "btn-primary"
                        }`}
                        type="submit"
                        disabled={!isOtpComplete || loading}
                      >
                        {loading ? "Verifying..." : "Verify OTP"}
                      </Button>
                 
       
                    </div>
                    {error && <p className="text-danger">{error}</p>}

             
                  </form>

                  
                )}
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

export default Login;
