import logo from "./logo.svg";
import "./App.css";
// import A from "./Components/ContextAPI-1/A";
import { useContext } from "react";
import { AuthContext } from "./Components/Context-API-3/Context";
import A from "./Components/ContextAPI-2/A";
import Nav from "./Components/Context-API-3/nav";
import Login from "./Components/Context-API-3/login";
import Home from "./Components/Context-API-3/Home";
import Profile from "./Components/Routing/Profile";
import { Route, Routes } from "react-router-dom";
import Products from "./Components/Routing/Products";
import Contact from "./Components/Routing/Contact";
import ProductDetails from "./Components/Routing/ProductDetails";
import PageNotFound from "./Components/Routing/PageNotFound";

function App() {
  const { isloggedin } = useContext(AuthContext);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
