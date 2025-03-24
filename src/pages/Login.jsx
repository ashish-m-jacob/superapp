import React from "react";
import "./Login.css";
import poster from "../assets/loginImage.png";

const Login = () => {
  return (
    <>
      <div className="login-page">
        <div className="image-section">
          <img src={poster} alt="poster-img" />
          <h1>Discover new things on SuperApp</h1>
        </div>
        <div className="form-section">
          <h1>Super App</h1>
          <h2>Create your new account</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Mobile" />

            <div className="terms-conditions">
              <input type="checkbox" name="terms" id="terms" />
              <label htmlFor="terms">
                I agree to the{" "}
                <span style={{ color: "#72DB73" }}>Terms of Service</span> and{" "}
                <span style={{ color: "#72DB73" }}>Privacy Policy</span>
              </label>
            </div>

            <button type="button">SIGN UP</button>
            <p style={{ fontSize: "0.8rem", color: "grey", marginTop: "1vh" }}>
              By clicking on Sign up, you agree to the SuperApp{" "}
              <span style={{ color: "#72DB73" }}>Terms and Conditions</span> of
              Use.
            </p>

            <p style={{ fontSize: "0.8rem", color: "grey", marginTop: "1vh" }}>
              To learn more about how SuperApp collects, uses, shares and
              protects your personal data, please read the{" "}
              <span style={{ color: "#72DB73" }}>Privacy Policy</span>.
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
