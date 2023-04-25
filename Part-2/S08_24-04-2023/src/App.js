import logo from "./logo.svg";
import "./App.css";
// import A from "./Components/ContextAPI-1/A";
import { useContext } from "react";
import { AuthContext } from "./Components/Context-API-3/Context";
import InputComp from "./Components/ReduxComponents/InputComp";
import A from "./Components/ContextAPI-2/A";
import Nav from "./Components/Context-API-3/nav";
import Login from "./Components/Context-API-3/login";
import Home from "./Components/Context-API-3/Home";
import Profile from "./Components/Routing/Profile";
import { Navigate, Route, Routes } from "react-router-dom";
import Products from "./Components/Routing/Products";
import Contact from "./Components/Routing/Contact";
import ProductDetails from "./Components/Routing/ProductDetails";
import PageNotFound from "./Components/Routing/PageNotFound";
import Technologies from "./Components/Routing/Technologies";
import Html from "./Components/Routing/Html";
import CSS from "./Components/Routing/Css";
import Protect from "./Components/Routing/Protect";
import TextComp from "./Components/ReduxComponents/TextComp";
import Counter from "./Components/UseReducers/Counter";
import Timer from "./Components/useRef/Timer";

function App() {
  const { isloggedin } = useContext(AuthContext);
  return (
    <div className="App">
      {isloggedin ? <Nav /> : null}
      <Routes>
        <Route path="/" element={isloggedin ? <Home /> : <Login />} />
        <Route path="/ur" element={isloggedin ? <Counter /> : <Login />} />
        <Route path="/uf" element={isloggedin ? <Timer /> : <Login />} />
        <Route
          path="/redux"
          element={
            <div>
              <InputComp /> <br />
              <TextComp />
            </div>
          }
        />

        <Route
          path="/tech"
          element={
            <Protect>
              <Technologies />
            </Protect>
          }
        >
          <Route path="" element={<Navigate to="html" />} />
          <Route path="html" element={<Html />} />
          <Route path="css" element={<CSS />} />
        </Route>

        {/* <Route path="/html" element={<Html />} />    Invalid*/}
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/products"
          element={
            <Protect>
              <Products />
            </Protect>
          }
        />
        <Route
          path="/contact"
          element={isloggedin ? <Contact /> : <Navigate to="/" />}
        />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
