import React from "react";
import "./checkedproduct.css";
import { useStateValue } from "../StateProvider";
function CheckedProduct({ id, title, price, image, rating }) {
  const [state, dispatch] = useStateValue();
  function removeFromBasket() {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  }
  return (
    <div className="my__checked__products">
      <div>
        <img className="checked__product__image" src={image} alt={title} />
      </div>
      <div className="checked__product__info">
        <h3>{title}</h3>
        <div className="price">
          <small>₹</small>
          <strong>{price}</strong>
        </div>
        <div>
          {Array(rating)
            .fill()
            .map((_) => (
              <p style={{ display: "inline" }}>⭐</p>
            ))}
        </div>
        <div>
          <button onClick={removeFromBasket} className="btn">
            Remove From Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckedProduct;
