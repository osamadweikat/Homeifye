import { useState } from "react";
import useInViewObserver from "../../hooks/useInViewObserver"; 
import "./login-form.css";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  useInViewObserver(".fade-item", {}, true, []);

  return (
    <div className="login-section">
      <div className="login-container">
        <div className="login-content">
          <h2 className="login-title fade-item">
            Glad to See You <SentimentSatisfiedAltOutlinedIcon />
          </h2>
          <p className="login-subtitle fade-item">
            Please <span>Login</span> to continue
          </p>
          <form className="login-form">
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
            <div className="login-options fade-item">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <span className="forgot-password">Forgot password?</span>
            </div>
            <button type="submit" className="login-btn fade-item">
              Login
            </button>
            <p className="signup-text fade-item">
              Don’t have an account? <span>Register Now</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
