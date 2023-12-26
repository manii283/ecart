import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delItem } from "../redux/action/index";

const Checkout = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  let total = 0;
  const itemList = (item) => {
    total = total + item.price;
    return (
      <li className="list-group-item d-flex justify-content-between lh-sm" key={item.id}>
        <div>
          <h6 className="my-0">{item.title}</h6>
        </div>
        <span className="text-muted">${item.price}</span>
        <button
          onClick={() => handleClose(item)}
          className="btn-close float-end"
          aria-label="Close"
        ></button>
      </li>
    );
  };

  return (
    <>
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-dark">Your cart</span>
              <span className="badge bg-dark rounded-pill">{state.length}</span>
            </h4>
            <ul className="list-group mb-3">
              {state.map(itemList)}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total</span>
                <strong>${total}</strong>
              </li>
            </ul>
          </div>
          {/* form */}
        </div>
      </div>
    </>
  );
};

export default Checkout;
