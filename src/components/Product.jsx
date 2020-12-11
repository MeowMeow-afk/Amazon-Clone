import React from "react";
import "./product.css";
import { useStateValue } from "../StateProvider";
function Product({ id, title, rating, price, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // Add item to basket
    dispatch({
      //action type
      type: "ADD_TO_BASKET",
      // adding payload to basket variable
      item: {
        id: id,
        title: title,
        rating: rating,
        price: price,
        image: image,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div>
          {Array(rating)
            .fill()
            .map((_) => (
              <p style={{ display: "inline" }}>⭐</p>
            ))}
        </div>
      </div>
      <div className="product__image__and__button">
        <img src={image} alt="" />
        <button onClick={addToBasket} className="btn">
          Add to basket
        </button>
      </div>
    </div>
  );
}

export default Product;
