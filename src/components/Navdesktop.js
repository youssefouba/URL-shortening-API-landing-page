import React from "react";

const Navdesktop = () => {
  return (
    <div className="navbar desktop container">
      <div className="logo">
        <img src="images/logo.svg" alt="logo Shortly" />
      </div>
      <div className="navdesktop">
        <div className="nav1">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>
        <div className="nav2">
          <a href="#">Login</a>
          <button className="mainbtn">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navdesktop;
