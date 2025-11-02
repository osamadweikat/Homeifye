import { useState } from "react";
import { Link } from "react-router-dom";
import useInViewObserver from "../../hooks/useInViewObserver";
import "./register-form.css";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useInViewObserver(".fade-item", {}, true, []);

  return (
    <div className="login-section">
      <div className="login-container">
        <div className="login-content">
          <h2 className="login-title fade-item">
            Join Us Today <SentimentSatisfiedAltOutlinedIcon />
          </h2>
          <p className="login-subtitle fade-item">
            Please <span>Register</span> to create your account
          </p>
          <form className="login-form">
            <div className="input-group fade-item">
              <label htmlFor="name">Full Name</label>
              <div className="input-wrapper">
                <PersonOutlineIcon className="input-icon" />
                <input type="text" id="name" required />
              </div>
            </div>
            <div className="input-group fade-item">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <EmailOutlinedIcon className="input-icon" />
                <input type="email" id="email" required />
              </div>
            </div>
            <div className="input-group fade-item">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <LockOutlinedIcon className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  required
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <VisibilityOutlinedIcon />
                  ) : (
                    <VisibilityOffOutlinedIcon />
                  )}
                </span>
              </div>
            </div>
            <div className="input-group fade-item">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-wrapper">
                <LockOutlinedIcon className="input-icon" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  required
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <VisibilityOutlinedIcon />
                  ) : (
                    <VisibilityOffOutlinedIcon />
                  )}
                </span>
              </div>
            </div>
            <div className="login-options fade-item">
              <label className="remember-me">
                <input type="checkbox" /> I agree to the Terms & Conditions
              </label>
            </div>
            <button type="submit" className="login-btn fade-item">
              Register
            </button>
            <p className="signup-text fade-item">
              Already have an account? <Link to="/login"><span>Login Now</span></Link> 
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
