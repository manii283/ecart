import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/action/index";
// import DATA from "../Data";

const Product = () => {
  const [item, setItem] = useState([]);
  const [cartBtn, setCartBtn] = useState("Add to Cart");

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((result) => {
        setItem(result);
      })
  }, []);

  
  const dispatch = useDispatch();

  const handleCart = (item) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(item));
    } 
  };

  const cardItem = (item) => {
    return (
      <div class="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
        <img src={item.image} class="card-img-top" alt={item.title} height='300px' />
        <div class="card-body text-center">
          <h5 class="card-title">{item.title}</h5>
          <p className="lead mr-3">${item.price}</p>
          <Link to={`/products/${item.id}`} class="btn btn-outline-dark">
            Buy Now
          </Link>
          <button
              onClick={() => handleCart(item)}
              className="btn btn-outline-dark my-5"
            >
              {cartBtn}
            </button>
        </div>
      </div>
    );
  };

  return (
    <div>
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
