import React from "react";
import { useSelector } from "react-redux";

function TextComp(props) {
  const data = useSelector((storedata) => {
    return storedata;
  });
  return (
    <div style={{ marginTop: "30px", textAlign: "center" }}>
      <h2>Text Component</h2>
      <p>{data.name}</p>
    </div>
  );
}

export default TextComp;
