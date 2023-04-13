import { useState } from "react";
import myStore from "../Redux/Store";

function InputComp(props) {
  const [state, setState] = useState("");

  const callDispatch = () => {
    myStore.dispatch({
      type: "name",
      username: state,
    });
  };
  return (
    <div style={{ marginTop: "100px", textAlign: "center" }}>
      <h2>Input Component</h2>
      <input
        type="text"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button onClick={callDispatch}>Submit</button>
    </div>
  );
}

export default InputComp;
