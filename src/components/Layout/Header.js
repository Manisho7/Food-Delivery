import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/indian-food.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ZingZing</h1>
        <HeaderCartButton onClick={props.showCart} />
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
