import {useEffect,useState} from 'react';

function CompUseEffect(props) {
    const [state,setState] = useState("Geekster")
        
                useEffect(()=>{
                    console.log("useEffect hook callback is called")
                    //sideEffect like fetching the data from server or working DOM or BOM
                  //  or any other Library
                },[])

                useEffect(()=>{
                    console.log("Second useEffect")
                 })

                // console.log("React Component")
    return (
        <div>
         
            <h2>UseEffect Concept with {state}</h2>
            <button onClick={()=>{setState("Kabir")}}>Click Me</button>
        </div>
    );
}

export default CompUseEffect;