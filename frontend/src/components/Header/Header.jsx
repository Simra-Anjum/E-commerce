import React from "react";
import { assets } from "../../assets/assets";
 import './Header.css'


const Header = () => {
  return (
    <div className="header-container">
        <div className="header-1"></div>
        <div className="header-2"></div>
        <div className="header-3"></div>
        <div className="header-4"></div>
      <div className="content"><p>Join the #OversizedTribe — because clothes should never define you, they should empower you.
Oversized isn’t just a trend, it’s a lifestyle for dreamers, creators, and free spirits."</p><button className="btn">Explore</button></div>
    </div>
  );
};

export default Header;
