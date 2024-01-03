import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../redux/slices/addToCartSlice";
import Header from "./Header";

const Cart = () => {

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  const { cart } = useSelector((state) => state.cart);
  // console.log("state of cart items", cart);
  const dispatch = useDispatch();

  const cartItems = (cartItem) => {
    const itemPrice = cartItem.price * cartItem.quantity;
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
          <div className="container py-4">
            <button
              onClick={() => dispatch(removeItem(cartItem.id))}
              className="btn-close float-end"
              aria-label="Close"
            ></button>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={cartItem.image}
                  alt={cartItem.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h4>{cartItem.title}</h4>
                <p className="lead fw-bold">${itemPrice}</p>
                <button
                  onClick={() => dispatch(incrementQuantity(cartItem.id))}
                  className="fa fa-plus"
                ></button>
                <p className="lead fw-bold">{cartItem.quantity}</p>
                <button
                  onClick={() => dispatch(decrementQuantity(cartItem.id))}
                  className="fa fa-minus"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const emptyCart = () => {
    return (
      <>
        {/* <Header /> */}
        <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
            <div className="row">
              <h3>Your Cart is Empty</h3>
            </div>
          </div>
        </div>
      </>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <Link
            to="/checkout"
            className="btn btn-outline-dark mb-5 w-25 mx-auto"
          >
            Proceed To checkout
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      {cart?.length === 0 && emptyCart()}
      {cart?.length !== 0 && cart?.map(cartItems)}
      {cart?.length !== 0 && button()}
    </>
  );
};

export default Cart;
