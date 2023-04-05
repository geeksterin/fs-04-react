import { useContext } from "react";
import { AuthContext } from "./Context";
import "./Nav.css";

function Nav(props) {
  const { setIsLoggedIn } = useContext(AuthContext);
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
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
        <span style={{ marginLeft: "30px", color: "yellow", fontSize: "22px" }}>
          <b></b>
        </span>
      </div>
    </div>
  );
}

export default Nav;
