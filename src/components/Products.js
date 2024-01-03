import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/addToCartSlice";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Product = () => {

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  const [item, setItem] = useState([]);
  const cartBtn = "Add to Cart";

  useEffect(() => {
    fetch("http://localhost:3004/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        setItem(result);
      });
  }, []);

  const dispatch = useDispatch();

  const handleCart = (item) => {
    if (cartBtn) {
      dispatch(addToCart(item));
    }
  };

  const cardItem = (item) => {
    return (
      <div className="card my-3 py-2" key={item.id} style={{ width: "18rem" }}>
        <img
          src={item.image}
          className="card-img-top"
          alt={item.title}
          height="250px"
        />
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead mr-3">${item.price}</p>
          <div className="justify-content-start">
            <Link
              to={`/products/${item.id}`}
              className="btn btn-outline-dark me-2"
            >
              Buy Now
            </Link>
            <button
              onClick={() => handleCart(item)}
              className="btn btn-outline-dark"
            >
              {cartBtn}                                   {/* add to cart button */}
            </button>                                    
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header/>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>COLLECTIONS</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">{item.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Product;
