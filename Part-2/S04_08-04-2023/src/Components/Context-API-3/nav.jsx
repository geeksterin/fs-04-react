import { useContext } from "react";
import { AuthContext } from "./Context";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav(props) {
  const { setIsLoggedIn } = useContext(AuthContext);
  return (
    <div className="nav">
      <div id="title">
        <h2>React Context</h2>
      </div>
      <div id="menu">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">ContactUs</Link>
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
