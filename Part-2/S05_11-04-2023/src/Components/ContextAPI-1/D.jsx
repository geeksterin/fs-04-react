import { useContext } from "react";
import myContext from "./context";

function D(props) {
  const contextData = useContext(myContext);
  return (
    <div>
      <h2>D Component</h2>
      <p style={{ color: "red" }}>A Component Data : {contextData}</p>
    </div>
  );
}

export default D;
