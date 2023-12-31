import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  const itemList = (item) => {
    const itemPrice = item.price * item.quantity;
    return (
      <li
        className="list-group-item d-flex justify-content-between lh-sm"
        key={item.id}
      >
        <div>
          <span className="badge bg-dark rounded-pill mx-3 my-2">
            {item.quantity}
          </span>
        </div>
        <div>
          <h6 className="my-0">{item.title}</h6>
        </div>
        <span className="text-muted">${itemPrice}</span>
      </li>
    );
  };

  return (
    <>
    <Header />
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-5 order-md-last">
            <h4 className=" align-items-center mb-3">
              <span className="text-dark">Your cart</span>
              <span className="badge bg-dark rounded-pill mx-5">
                {getTotal().totalQuantity}
              </span>
            </h4>
            <ul className="list-group mb-3" style={{ width: "360px" }}>
              {cart.map(itemList)}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total</span>
                <strong>${getTotal().totalPrice}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
