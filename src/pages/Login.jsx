import React from "react";
import "./Login.css";
import poster from "../assets/loginImage.png";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    mobile: "",
    terms: false,
  });

  const [error, setError] = useState({
    name: false,
    email: false,
    username: false,
    mobile: false,
    terms: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setError({
      name: false,
      email: false,
      username: false,
      mobile: false,
      terms: false,
    });

    //name error
    if (formData.name.trim().length === 0) {
      setError((error) => {
        return { ...error, name: true };
      });
    }

    //username error
    if (formData.username.trim().length === 0) {
      setError((error) => {
        return { ...error, username: true };
      });
    }

    //email error
    if (formData.email.trim().length === 0) {
      setError((error) => {
        return { ...error, email: true };
      });
    }

    //mobile error
    if (formData.mobile.trim().length === 0) {
      setError((error) => {
        return { ...error, mobile: true };
      });
    }

    //checkbox error
    if (!formData.terms) {
      setError((error) => {
        return { ...error, terms: true };
      });
    }

    localStorage.setItem("user", JSON.stringify(formData));

    console.log(formData);
  };

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
            <input
              style={{
                border: error.name ? "1px solid red" : "1px solid #72DB73",
              }}
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {error.name && (
              <p style={{ color: "red", fontSize: "0.8rem" }}>
                Name is required
              </p>
            )}
            <input
              style={{
                border: error.username ? "1px solid red" : "1px solid #72DB73",
              }}
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
            {error.username && (
              <p style={{ color: "red", fontSize: "0.8rem" }}>
                Username is required
              </p>
            )}
            <input
              style={{
                border: error.email ? "1px solid red" : "1px solid #72DB73",
              }}
              type="text"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {error.email && (
              <p style={{ color: "red", fontSize: "0.8rem" }}>
                Email is required
              </p>
            )}
            <input
              style={{
                border: error.mobile ? "1px solid red" : "1px solid #72DB73",
              }}
              type="text"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
            />
            {error.mobile && (
              <p style={{ color: "red", fontSize: "0.8rem" }}>
                Mobile is required
              </p>
            )}
            <div className="terms-conditions">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                value={formData.terms}
                onChange={(e) =>
                  setFormData({ ...formData, terms: e.target.checked })
                }
              />

              <label htmlFor="terms">
                I agree to the{" "}
                <span style={{ color: "#72DB73" }}>Terms of Service</span> and{" "}
                <span style={{ color: "#72DB73" }}>Privacy Policy</span>
              </label>
            </div>

            {error.terms && (
              <p style={{ color: "red", fontSize: "0.8rem" }}>
                Ensure to check the terms
              </p>
            )}

            <button type="button" onClick={handleSubmit}>
              SIGN UP
            </button>
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
