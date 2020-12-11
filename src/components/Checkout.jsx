import React from "react";
import "./checkout.css";
import { useStateValue } from "../StateProvider";
import CheckedProduct from "./CheckedProduct";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  const checkPrice = (basket) => {
    let number = basket?.reduce((acc, item) => item?.price + acc, 0);
    return numberWithCommas(number);
  };
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="checkout__page">
      <div className="checkout">
        <div className="checkout__inner">
          {basket?.length === 0 ? (
            <div>
              <h1>Shopping Cart Is Empty</h1>
              <p>
                You have no item in your basket please to add item in your
                basket click <strong>"Add to basket"</strong>next to the item
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <h1>Your Shopping Cart</h1>
              <div className="checked__product">
                {basket.map((item) => (
                  <CheckedProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="subtotal">
        <div className="subtotal__box">
          <p
            style={{
              wordSpacing: ".1rem",
            }}
          >
            Total ( {basket?.length} item ) :
            <strong>
              {" "}
              {checkPrice(basket)}
              <small> ₹</small>
            </strong>
          </p>
          <small
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <input type="checkbox" />
            The product contains a gift
          </small>
          <button className="btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
