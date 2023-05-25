import React from "react";
import './homepage.css';
import icon from '../Images/icon.png';
import iuri from '../Images/iuri.png';

function HomePage({ logBox, email, logout, circle, }) {
    const icon = require('../Images/icon.png');
  return (
    <div className="log-box">
      <h1 className="hello">{email}</h1>
      <div className="circle">{circle}
        <img src={icon} alt="icon" />
      </div>
      <img className="iuri" src={iuri}/>
      <button className="btn" onClick={logout}>LOG OUT</button>
    </div>
  );
};

export default HomePage;
