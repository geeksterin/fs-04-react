import React from "react";
var style = {
  width: "300px",
  boxShadow: "0 0 10px black",
  padding: "30px",
  margin: "150px auto",
  textAlign: "center",
};
function Login(props) {
  return (
    <div style={style}>
      <h3>Login Form</h3>
      <div>
        <input type="text" placeholder="User Name" />
      </div>
      <br />
      <div>
        <input type="password" placeholder="Password" />
      </div>
      <br />
      <div>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;
