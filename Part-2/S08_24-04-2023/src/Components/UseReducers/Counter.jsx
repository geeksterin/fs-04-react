import { useReducer } from "react";

const reducerFn = (state, action) => {
  if (action.type === "inc") {
    //
    return {
      count: 0,
      products: [],
      users: [],

      count: state.count + action.countValue,
    };
  } else if (action.type === "dec") {
    return {
      ...state, // {count:3,p:[],u:[]}
      count: state.count - action.countValue,
    };
  } else if (action.type === "reset") {
    return {
      ...state,
      count: action.payload,
    };
  }
  return state;
};

function Counter() {
  const [state, dispatch] = useReducer(reducerFn, {
    count: 0,
    products: [],
    users: [],
  });

  //   const [state, dispatch] = useReducer(
  //     (state, action) => {
  //       return state;
  //     },
  //     { count: 0 }
  //   );

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Count Value is {state.count}</h1>
      <button
        onClick={() => {
          dispatch({
            type: "inc",
            countValue: 5,
          });
        }}
      >
        Inc Count
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({
            type: "dec",
            countValue: 2,
          });
        }}
      >
        Dec Count
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({
            type: "reset",
            payload: 0,
          });
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
