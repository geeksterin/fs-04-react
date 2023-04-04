import React from "react";
import "./Nav.css";

function Nav(props) {
  return (
    <div className="nav">
      <div id="title">
        <h2>React Context</h2>
      </div>
      <div id="menu">
        <a href="">Home</a>
        <a href="">Profile</a>
        <a href="">Products</a>
        <a href="">Support</a>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Nav;
