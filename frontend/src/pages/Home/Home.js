//import { createRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {


  return (
    <>
      <div className="hunter">
        <div className="container">
          <div className="row">
            <div className="right-box">
              <h1 className="hunter-title">
                Hamster <span>WARS</span>
              </h1>
            </div>

            <div className="left-box">
              <p className="hunter-text">
                Push the <span className="color_red">RED</span> button to
                START...
              </p>
              <Link to="/battle" className="link">
                battle
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
