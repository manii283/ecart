import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { cart } = useSelector((state) => state.cart);
  console.log("cart", cart);
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  const navigate = useNavigate();
  const logoutSubmit = () => {
    localStorage.removeItem("token")
    navigate("/login");
  }
  const user = localStorage.getItem("user"); 

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid py-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link className="navbar-brand mx-auto fw-bold" to="/home">
              ABC MART
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Product
                </Link> 
              </li>
            </ul>
            <Link to="/cart" className="btn btn-outline-dark ms-2">
              <span className="fa fa-shopping-cart me-1"></span> Cart
              {getTotalQuantity() || 0}
            </Link>
            {/* <Link to="" className="btn btn-outline-dark ms-2">
              <span className="fa fa-user-plus me-1"></span> Register
            </Link> */}
            {/* <Link to="/login" className="btn btn-outline-dark ms-2">
              <span className="fa fa-user-plus me-1"></span> Login
            </Link>*/}
            {/* <Link to="/register" className="btn btn-outline-dark ms-2">
              <span className="fa fa-shopping-cart me-1"></span> Logout
            </Link>  */}
            <button className="btn btn-outline-dark ms-2" type="submit" onClick={logoutSubmit}>
              Logout
            </button>
            <h4 className="ms-2">{user}</h4>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
