import React from "react";
import Products from "./Products";
import HOMEIMAGE from '../assets/bbb.jpg'

const Home = () => {

  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          // src="/assets/bbb.jpg"
          src={HOMEIMAGE}
          className="card-img"
          alt="Background"
          height="600px"
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
      <Products />
    </div>
  );
};

export default Home;