import { Component } from "react";
class BasicComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "This is state concept with Class Component",
    };
  }

  updateState = () => {
    this.setState({
      name: "Geekster is Platform to explore React",
    });
  };

  render() {
    return (
      <div style={{ padding: "50px" }}>
        <h2 style={{ color: "red" }}>Class Component at {this.props.name}</h2>
        <h4 style={{ color: "green" }}>{this.state.name}</h4>
        <button onClick={this.updateState}>Update state</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quos
          laborum soluta repellendus dolore impedit accusantium modi suscipit
          aut voluptates eum ipsam, est iste cupiditate voluptatum nam expedita
          deserunt esse. Odit minima omnis eos dolorem ex nam, voluptatum
          dignissimos ea tempora a perspiciatis hic nobis sunt veniam pariatur
          doloribus aspernatur corporis vel. Nobis repudiandae nemo dolorem fuga
          corporis ex facilis, sit beatae aliquam asperiores distinctio. Odio
          voluptate dolorum quis, blanditiis, laboriosam est nostrum,
          perspiciatis deleniti eius eveniet itaque soluta? Blanditiis repellat
          nemo eaque odio est eveniet laborum, perferendis voluptatibus omnis
          quidem nobis non optio eos dicta, eligendi iste. Voluptatibus fugiat
          ipsam accusantium voluptatem dolorum voluptatum. At illum impedit
          provident corporis quas repellendus sed nemo voluptatibus ducimus
          iusto alias ut velit mollitia, in blanditiis deserunt rem fuga. Harum
          assumenda excepturi vitae quidem, sint, ipsam quos perspiciatis
          repellat nam consectetur ipsa explicabo officiis cumque aliquam
          exercitationem fuga placeat quas, adipisci doloremque dignissimos.
          Modi repudiandae cumque, quidem, nam excepturi architecto ducimus
          reprehenderit aut voluptatem delectus nobis, quo illo maiores. Saepe
          accusantium possimus quisquam corporis temporibus illo asperiores,
          fuga tempora id nisi explicabo provident repellat quam, enim ducimus.
          Voluptatum, totam repudiandae asperiores natus non expedita voluptates
          esse laudantium rem. Quibusdam inventore temporibus ea ducimus,
          deleniti vel. A, nam voluptate inventore corrupti expedita natus et
          temporibus illo doloremque. Veniam natus cupiditate et ipsa sed
          asperiores in deleniti at alias. Quaerat vel autem necessitatibus
          aperiam numquam sint praesentium animi a quis laborum eius, asperiores
          mollitia, nam sit repellendus qui. Rerum consequatur facere hic
          exercitationem quam nesciunt, sunt odit, modi neque sed praesentium
          velit? Esse ab, maiores similique laudantium facilis quo beatae ea,
          veniam quis incidunt, deserunt expedita ipsam officia dolores quasi!
          Ipsum consequuntur facilis, obcaecati fugit voluptas atque dolores
          aliquam quis beatae ut sint, earum quod odio veniam iure, quo
          distinctio libero tempora placeat nam. Laborum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iusto,
          vel repellendus consequatur neque eum reiciendis quasi libero
          assumenda ratione ut, placeat natus ducimus? Nisi tenetur quibusdam
          impedit deleniti minus hic optio unde quasi ipsa aut nulla maiores,
          officiis error eius, eligendi voluptas corporis molestiae et
          necessitatibus. Ut ab vel ipsa odit obcaecati vitae et unde magni
          libero molestias nisi reprehenderit quas quos voluptatibus pariatur
          animi eveniet maxime, nulla accusantium deserunt eligendi impedit
          fugiat recusandae officia? Accusantium modi facere nesciunt obcaecati
          numquam maxime ipsa, sunt nisi itaque vero at quaerat saepe
          perferendis! Beatae labore vel omnis deleniti neque, molestiae
          voluptatibus.
        </p>
      </div>
    );
  }
}

export default BasicComp;
