import {useState} from 'react'

function Counter(){
      let [state,setState] = useState(0)   //setState("Ram")
          let [name,setName] =  useState("Kabir")

          let [image,setImage] = useState("https://images.unsplash.com/photo-1568316674077-d72ee56de61c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80")
let counterStyle = {
    width:"300px",
    boxShadow:"0 0 10px black",
    padding:"30px",
    margin:"100px auto",
    textAlign:"center"
}
var countValue = 0

//   const increaseCount = ()=>{
//       console.log("Before Update",countValue)
//       countValue = countValue + 1
//       console.log("After Update",countValue)
//   }

const increaseCount = ()=>{
       setState(state+1) // it update state value and then it will re-render Component
       setName("Geekster")
       setImage("https://media.istockphoto.com/id/1208414307/photo/happy-male-executive-in-office.jpg?s=612x612&w=0&k=20&c=3krD8gIdPmHFVwbcHGyQDXUGlcyzmcWQNyRMRp_93P8=")
}

    return <div style={counterStyle}>
        <img src={image} width="300" height="300" />
         <h2>{name} changed Count Value to {state} </h2>
         <button onClick={increaseCount}>Inc Count {state}</button>
    </div>
}
export default Counter