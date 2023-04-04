import { useState } from 'react';
import Image from './Components/Image';
import Text from './Components/Text';
import './App.css';
import CompUseEffect from './Components/UseEffect';

function App() {
  const [showImage,setShowImage] = useState(true)
  
   
  return (
    <div className="App">
       <CompUseEffect />
        
    </div>
  );
}

export default App;
