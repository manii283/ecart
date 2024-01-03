import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const handleInputChange = (e, type) => {
    switch (type) {
      case "user":
        // setError("");
        setUser(e.target.value);
        if (e.target.value === "") {
          setError("Username has left blank!");
        }
        break;
      case "email":
        // setError("");
        setEmail(e.target.value);
        if (e.target.value === "") {
          setError("Email has left blank!");
        }
        break;
      case "pass1":
        // setError("");
        setPass1(e.target.value);
        if (e.target.value === "") {
          setError("Password has left blank!");
        }
        break;
      default:
    }
  };

  const handleSubmit = () => {
    if (user !== "" && email !== "" && pass1 !== "") {
      let url = "http://localhost:8080/react_con/registration.php";
      let headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      let Data = {
        user: user,
        email: email,
        pass: pass1,
      };
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          setMsg(response[0].result);
          navigate("/login");
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });
      setUser("");
      setEmail("");
      setPass1("");
    } else {
      setError("All fields are required!");
    }
  };

  // const checkError = () => {
  //   let url = "http://localhost:8080/react_con/checkuser.php";
  //   let headers = {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   };
  //   let Data = {
  //     user: user,
  //     email: email,
  //     pass: pass1,
  //   };
  //   fetch(url, {
  //     method: "POST",
  //     headers: headers,
  //     body: JSON.stringify(Data),
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setError(response[0].result);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //       console.log(err);
  //     });
  //   if (pass1.length < 8) {
  //     setError("Password is less than 8 characters!");
  //   }
  // };

  // const checkPassword = () => {
  //     if(pass1.length < 8){
  //         setError("Password is less than 8 characters!")
  //     }
  // }

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
                      <p>
                        {error !== "" ? (
                          <div style={{ color: "#842029" }}>
                            <b>{error}</b>
                          </div>
                        ) : (
                          <div style={{ color: "green" }}>
                            <b>{msg}</b>
                          </div>
                        )}
                      </p>
                      <div className="d-flex align-items-center">
                        <span className="h5 fw-bold text-center my-3">
                          ABC Shopping Site
                        </span>
                      </div>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <span className="h2 fw-bold mb-0">
                          Registartion Form
                        </span>
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="username">
                          User Name
                        </label>
                        <input
                          type="text"
                          name="user"
                          className="form-control form-control-lg"
                          value={user}
                          onChange={(e) => handleInputChange(e, "user")}
                          // onBlur={checkError}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control form-control-lg"
                          value={email}
                          onChange={(e) => handleInputChange(e, "email")}
                          // onBlur={checkError}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="pass">
                          Password
                        </label>
                        <input
                          type="password"
                          name="pass1"
                          className="form-control form-control-lg"
                          value={pass1}
                          onChange={(e) => handleInputChange(e, "pass1")}
                          // onBlur={checkError}
                        />
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          type="submit"
                          defaultValue="Submit"
                          className="btn btn-outline-dark"
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>
                      </div>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Have already an account?
                        <Link to="/login" className="fw-bold text-body">
                          <u>Login here</u>
                        </Link>
                      </p>
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

export default SignUp;
