import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails(props) {
  const { id } = useParams(); // { id:5}
  const [state, setState] = useState({
    id: 0,
    title: "",
    description: "",
    image: "",
    price: 0,
    category: "",
  });
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data);
      });
  }, []);
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>{state.category}</h2>
      <img src={state.image} width={300} height={300} />
    </div>
  );
}

export default ProductDetails;
