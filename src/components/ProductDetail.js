import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/action/index";

const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const [data, setData] = useState(null); // Use null as the initial state

  const proid = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${proid.id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
      });
  }, [proid.id]);

  const dispatch = useDispatch();

  const handleCart = () => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(data));
      setCartBtn("Remove from Cart");
    } else if (data) {
      dispatch(delItem(data));
      setCartBtn("Add to Cart");
    }
  };

  return (
    <>
      <div className="container my-5 py-3">
        {data && (
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto product">
              <img src={data.image} alt={data.title} height="400px" />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h1 className="display-5 fw-bold">{data.title}</h1>
              <hr />
              <h2 className="my-4">${data.price}</h2>
              <p className="lead">{data.description}</p>
              <button
                onClick={handleCart}
                className="btn btn-outline-dark my-5"
              >
                {cartBtn}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
