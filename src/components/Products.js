import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
// import DATA from "../Data";

const Product = () => {
  const [item, setItem] = useState([]);

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

  const cardItem = (item) => {
    return (
      <div class="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
        <img src={item.image} class="card-img-top" alt={item.title} height='300px' />
        <div class="card-body text-center">
          <h5 class="card-title">{item.title}</h5>
          <p className="lead">${item.price}</p>
          <Link to={`/products/${item.id}`} class="btn btn-outline-dark">
            Buy Now
          </Link>
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
