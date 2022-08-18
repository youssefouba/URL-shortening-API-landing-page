import React from "react";

const Advancstat = () => {
  return (
    <div className="Advanced">
      <div className="container">
        <div className="headandPra">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <hr className="lineB"/>
        <div className="addetails">
          <div className="advbox">
            <div className="boxicon">
            <img src="../images/icon-brand-recognition.svg" alt="Brand Recognition"/>
            </div>
            <h3>Brand Recognition</h3>
            <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
          </div>
      
          <div className="advbox box2">
            <div className="boxicon">
            <img src="../images/icon-Detailed-Records.svg" alt="Brand Recognition"/>
            </div>
            <h3>Detailed Records</h3>
            <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions..</p>
          </div>
          <div className="advbox box3">
            <div className="boxicon">
            <img src="../images/icon-Fully-Customizable.svg" alt="Brand Recognition"/>
            </div>
            <h3>Fully Customizable</h3>
            <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
          </div>
        </div>
        
          
        
        
      </div>
    </div>
  );
};

export default Advancstat;
