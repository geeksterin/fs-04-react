// import { useState } from "react";
// import B from "./B";
// import mySecondContext from "./context";

// function A(props) {
//   const [state, setState] = useState("");
//   const [data, setData] = useState("");
//   return (
//     <div>
//       <h2>A Component</h2>
//       <input
//         type="text"
//         placeholder="Enter Some Text"
//         onChange={(e) => {
//           setState(e.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           setData(state);
//         }}
//       >
//         Send Data
//       </button>
//       <hr />
//       <mySecondContext.Provider value={{ data }}>
//         <B />
//       </mySecondContext.Provider>
//     </div>
//   );
// }

// export default A;

import { useState } from "react";
import B from "./B";
import mySecondContext from "./context";

function A(props) {
  const [state, setState] = useState("");
  return (
    <div>
      <h2>A Component</h2>
      <p>D Comp : {state} </p>
      <hr />
      <mySecondContext.Provider value={{ setState }}>
        <B />
      </mySecondContext.Provider>
    </div>
  );
}

export default A;
