import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  console.log({ email, pass })
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPass(e.target.value)
  }

  const navigate = useNavigate();
  const handleApi = () => {
    console.log({ email, pass })
    axios.post('https://reqres.in/api/login', {
      email: email,
      password: pass
    }).then(result => {
      console.log(result.data)
      alert('success')
      localStorage.setItem('token', result.data.token);
      navigate('/home')
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
  }
  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      {/* <p>
                        {error !== "" ? (
                          <div style={{ color: "#842029" }}>
                            <b>{error}</b>
                          </div>
                        ) : (
                          <div style={{ color: "green" }}>
                            <b>{msg}</b>
                          </div>
                        )}
                      </p> */}
                      <div className="d-flex align-items-center">
                        <span className="h5 fw-bold text-center">
                          ABC Shopping Site
                        </span>
                      </div>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <span className="h2 fw-bold mb-0">Login Form</span>
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: 1 }}
                      >
                        Sign into your account
                      </h5>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="username">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control form-control-lg"
                          value={email}
                          onChange={handleEmail}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="pass">
                          Password
                        </label>
                        <input
                          type="password"
                          name="pass"
                          id="pass"
                          className="form-control form-control-lg"
                          value={pass}
                          onChange={handlePassword}
                        />
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          type="submit"
                          defaultValue="Login"
                          className="btn btn-outline-dark"
                          onClick={handleApi}
                        >
                          Login
                        </button>
                      </div>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <Link to="/" className="fw-bold text-body">
                          <u> Register here</u>
                        </Link>
                      </p>
                      <a href="#!" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
