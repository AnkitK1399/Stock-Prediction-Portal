import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <>
    <nav className="navbar container pt-3 pb-3 align-items-start">
        <a className="navbar-brand logo-text" href="#">
            Stock Prediction Portal
        </a>
        <div>
            <Button text="Log in" className="btn-outline-info" />
            &nbsp;&nbsp;
            <Button text="Register" className="btn-info" />
        </div>
    </nav>
    </>
  )
}
export default Header;