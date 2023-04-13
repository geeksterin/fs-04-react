import { useContext } from "react";
import myContext from "./context";

import C from "./C";

function B(props) {
  let mydata = useContext(myContext);
  return (
    <div>
      <h2>
        B Component :<span style={{ color: "red" }}>{mydata}</span>
      </h2>
      <C />
    </div>
  );
}

export default B;
