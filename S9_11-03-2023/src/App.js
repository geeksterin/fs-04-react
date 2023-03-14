

import Header from "./Components/Header"
import Main from './Components/Main';
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="App">
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
      <Profile 
      id={{id:100}}
      image="https://media.istockphoto.com/id/1201437847/photo/good-looking-male-business-professional-in-studio.jpg?s=170667a&w=0&k=20&c=q5Jfx85LpLr4GEPH4DsTpk3bbf3lXsmLVOW84GT_07w=" 
      name={["raj","sinha"]}
      gender="male"
       />
     <Profile
       id={{id:101}}
       image="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg"
       name={["Ayushi","Patil"]}
       gender="female"
     />
     <Profile
       id={{id:101}}
       image="https://thumbs.dreamstime.com/b/portrait-successful-mature-businesswoman-arms-crossed-confident-business-professional-female-smiling-smart-suit-business-180283728.jpg"
       name={["Riya","sinha"]}
       gender="female"
     />
      </div>

     {/* <Header/>
     <Main /> */}
  
    </div>
  );
}

export default App;
