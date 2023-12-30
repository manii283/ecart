import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    let login = localStorage.getItem("login");
    // if(login){
    //     naviget("/");
    // }
    let loginStatus = localStorage.getItem("loginStatus");
    if (loginStatus) {
      setError(loginStatus);
      setTimeout(function () {
        localStorage.clear();
        window.location.reload();
      }, 3000);
    }
    setTimeout(function () {
      setMsg("");
    }, 5000);
  }, [msg]);

  const handleInputChange = (e, type) => {
    switch (type) {
      case "user":
        setError("");
        setUser(e.target.value);
        if (e.target.value === "") {
          setError("Username has left blank");
        }
        break;
      case "pass":
        setError("");
        setPass(e.target.value);
        if (e.target.value === "") {
          setError("Password has left blank");
        }
        break;
      default:
    }
  };

  const loginSubmit = () => {
    if (user !== "" && pass !== "") {
      let url = "http://localhost:8080/react_con/login.php";
      let headers = {
        Accept: "application/json",
        "Content-type": "application/json",
      };
      let Data = {
        user: user,
        pass: pass,
      };
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          if (
            response[0].result === "Invalid username!" ||
            response[0].result === "Invalid password!"
          ) {
            setError(response[0].result);
          } else {
            setMsg(response[0].result);
            setTimeout(function () {
              localStorage.setItem("login", true);
              localStorage.setItem("user", user);
              navigate("/products"); //navigate loging to product page
            }, 5000);
          }
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });
    } else {
      setError("All field are required!");
    }
  };

  return (
    <>
      <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card mb-5" style={{ borderRadius: 15 }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Login Form
                    </h2>
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
                    <div className="form-outline mb-3">
                      <label className="form-label">User Name</label>
                      <input
                        type="text"
                        name="user"
                        id="user"
                        className="form-control form-control-lg"
                        value={user}
                        onChange={(e) => handleInputChange(e, "user")}
                      />
                    </div>
                    <div className="form-outline mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        name="pass"
                        id="pass"
                        className="form-control form-control-lg"
                        value={pass}
                        onChange={(e) => handleInputChange(e, "pass")}
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        defaultValue="Login"
                        className="btn btn-outline-dark"
                        onClick={loginSubmit}
                      >
                        Login
                      </button>
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
