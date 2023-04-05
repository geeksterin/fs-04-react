import logo from "./logo.svg";
import "./App.css";
// import A from "./Components/ContextAPI-1/A";
import { useContext } from "react";
import { AuthContext } from "./Components/Context-API-3/Context";
import A from "./Components/ContextAPI-2/A";
import Nav from "./Components/Context-API-3/nav";
import Login from "./Components/Context-API-3/login";
import Home from "./Components/Context-API-3/Home";

function App() {
  const { isloggedin } = useContext(AuthContext);
  return (
    <div className="App">
      {/* <Login></Login> */}

      {isloggedin ? (
        <div>
          <Nav />
          <Home />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
