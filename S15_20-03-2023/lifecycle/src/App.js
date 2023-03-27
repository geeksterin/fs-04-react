import { useState } from 'react';
import Image from './Components/Image';
import Text from './Components/Text';
import './App.css';

function App() {
  const [showImage,setShowImage] = useState(true)
  
   
  return (
    <div className="App">
       <button onClick={()=>{setShowImage(true)}}>Show Image</button>&nbsp;&nbsp;&nbsp;
       <button onClick={()=>{setShowImage(false)}}>Show Text</button> <br/>
         {
            showImage ? <Image /> : <Text />
         }
        
    </div>
  );
}

export default App;
