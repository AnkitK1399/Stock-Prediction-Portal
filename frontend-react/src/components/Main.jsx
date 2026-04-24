import React from "react";
import Button from "./Button";


const Main = () => {
  return (
    <>
   
    <div className="container">
        <div className="p-5 text-center bg-dark rounded-3">
            <h1 className="text-light">Welcome to Stock Prediction Portal</h1>
            <p className="text-light lead">Your one-stop destination for accurate stock market predictions. Stay ahead of the curve with our cutting-edge algorithms and real-time data analysis.</p>
            <Button className="btn-warning" text="Log in" url="/login"/>
        </div>



    </div>
   
    </>
  )
}
export default Main;