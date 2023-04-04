import { useState } from "react";
import Image from "./Components/Image";
import Text from "./Components/Text";
import "./App.css";
import CompUseEffect from "./Components/UseEffect";
import Counter from "./Components/Counter";
import User from "./Components/User";

function App() {
  const [showImage, setShowImage] = useState(true);

  return (
    <div className="App">
      {/* <CompUseEffect /> */}
      <User />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
