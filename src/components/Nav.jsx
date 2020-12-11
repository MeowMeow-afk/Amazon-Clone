import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
function Nav() {
  const [{ basket, user }] = useStateValue();
  const [borderLink1, setBorderLink1] = useState(false);
  const [borderLink2, setBorderLink2] = useState(false);
  const [borderLink3, setBorderLink3] = useState(false);
  const [borderBasket, setBorderBasket] = useState(false);
  const HandleUser = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="Nav">
      <MenuRoundedIcon className="Menu__icon" />
      <Link to="/">
        <img
          className="amazon__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
        />
      </Link>

      <div className="nav__searchbox">
        <input type="text" className="nav__search" placeholder="" />
        <SearchIcon className="nav__searchIcon" />
      </div>

      <div className="links">
        <Link className="navbar__links" to={user ? "/" : "/login"}>
          <div
            onClick={() => HandleUser()}
            onMouseEnter={() => setBorderLink1(true)}
            onMouseLeave={() => setBorderLink1(false)}
            className={`nav__links ${borderLink1 ? "addBorder" : null}`}
          >
            <span className="first__span">Hello</span>
            <span className="second__span">
              {user ? `Sign Out` : `Sign in`}
            </span>
          </div>
        </Link>
        <Link className="navbar__links">
          <div
            onMouseEnter={() => setBorderLink2(true)}
            onMouseLeave={() => setBorderLink2(false)}
            className={`nav__links ${borderLink2 ? "addBorder" : null}`}
          >
            <span className="first__span">Returns</span>
            <span className="second__span">& Orders</span>
          </div>
        </Link>
        <Link className="navbar__links">
          <div
            onMouseEnter={() => setBorderLink3(true)}
            onMouseLeave={() => setBorderLink3(false)}
            className={`nav__links ${borderLink3 ? "addBorder" : null}`}
          >
            <span className="first__span">Your</span>
            <span className="second__span">Prime</span>
            <a href="top"></a>
          </div>
        </Link>
      </div>
      <Link to="/checkout">
        <div
          onMouseEnter={() => setBorderBasket(true)}
          onMouseLeave={() => setBorderBasket(false)}
          className={`basket ${borderBasket ? "addBorder" : null}`}
        >
          <ShoppingBasketIcon className="Basket__icon" />
          <span>{basket?.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Nav;
