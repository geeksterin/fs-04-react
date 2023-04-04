import {useState,useEffect} from 'react';

function Counter(props) {
    const [state,setState] = useState(0)
     useEffect(()=>{

        document.title = `count value is ${state}`
     })
     
    return (
        <div>
             <h2>Count Value is {state}</h2>
             <button onClick={()=>{
                setState(state + 1)

            }}>Increase Count</button>
        </div>
    );
}

export default Counter;