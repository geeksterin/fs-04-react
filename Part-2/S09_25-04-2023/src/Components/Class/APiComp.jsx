import { Component } from "react";
class APIComp extends Component {
  constructor(props) {
    //props = {heading :""}
    super(props); // super() will call the constructor of Component Class,super() should be the first line
    this.state = {
      data: [],
    };
  }

  getUserData = () => {
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => res.json())
      .then((info) => {
        console.log(info);
        this.setState({
          data: info.results,
        });
      });
  };

  render() {
    return (
      <div style={{ padding: "30px" }}>
        <h2>Users Information</h2>
        {/* <h3>{this.props.heading}</h3> */}
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
          officiis repellendus? Laborum, aliquid reiciendis odit illo explicabo
          perspiciatis nostrum cumque laudantium optio minus impedit quasi
          assumenda obcaecati hic architecto ipsum, sequi fugiat magnam. Hic
          quae necessitatibus vel quo voluptatum magni dolores asperiores. Vero
          iusto accusantium illum quaerat at, delectus architecto eligendi velit
          nemo corporis, similique doloremque enim perspiciatis! Esse sed modi
          suscipit architecto non optio laborum, quibusdam doloribus fugiat
          assumenda, alias similique facere tempora veniam velit vel odio
          possimus voluptatem quo ea aliquid, vero et. Voluptatibus, in beatae,
          illo amet ea rem architecto impedit odio natus nam recusandae vel
          reiciendis?
        </p>
        <button onClick={this.getUserData}>Get Users</button>

        {this.state.data.length > 0 ? (
          <div style={{ textAlign: "center" }}>
            <table style={{ width: "300px", margin: "auto" }}>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((user) => {
                  return (
                    <tr key={user.email}>
                      <td>
                        <img src={user.picture.medium} width={70} height={70} />
                      </td>
                      <td>
                        {user.name.first}
                        {user.name.last}
                      </td>
                      <td>{user.email}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
            <h2>No Data</h2>
          </div>
        )}
      </div>
    );
  }
}

export default APIComp;
