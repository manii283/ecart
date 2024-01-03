import React, { useEffect } from "react";
import HOMEIMAGE from "../assets/bbb.jpg";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Header />
      <div className="hero">
        <div className="card bg-dark text-white border-0">
          <img
            src={HOMEIMAGE}
            className="card-img"
            alt="Background"
            height="670px"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title fw-bolder display-3">
                NEW SEASON ARRIVALS
              </h5>
              <p className="card-text fs-2">CHECK OUT ALL THE TRENDS</p>
              <p className="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
