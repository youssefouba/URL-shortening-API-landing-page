import React from "react";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Navmebile = () => {
  const navMobile = document.querySelector(".navmebile");
  const [menuTog,setMenu]=useState(true)
  const clickBtn = () => {
    setMenu(!menuTog);
  };
  return (
    <div className="mobile container">
      <div className="navbar">
        <div>
          <img src="images/logo.svg" alt="logo Shortly" />
        </div>
        <div className="humicon" onClick={clickBtn}>
          <FiMenu className="hum" />
        </div>
      </div>
      <div className={`navmebile ${menuTog?'':'displayBlock'}`}>
        <div className="nav">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
          <hr />
          <a href="#">Login</a>
          <button className="mainbtn">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navmebile;
