// import { useContext } from "react";
// import mySecondContext from "./context";

// function D(props) {
//   const { data } = useContext(mySecondContext);
//   return (
//     <div>
//       <h2>D Component</h2>
//       <p style={{ color: "red" }}>{data}</p>
//     </div>
//   );
// }

// export default D;

import { useContext, useState } from "react";
import mySecondContext from "./context";

function D(props) {
  const { setState } = useContext(mySecondContext);
  const [dvalue, setDvalue] = useState();
  return (
    <div>
      <h2>D Component</h2>
      <input
        type="text"
        onChange={(e) => {
          setDvalue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setState(dvalue);
        }}
      >
        Send Data to Parent
      </button>
    </div>
  );
}

export default D;
