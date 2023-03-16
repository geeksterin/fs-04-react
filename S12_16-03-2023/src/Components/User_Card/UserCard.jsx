import {useState} from 'react';
import "./Usercard.css"
function UserCard() {
 
                 let [color,setColor] =  useState({
                            bgColor:"white",
                            textColor:"black",
                            title:"Check to Switch Dark Mode"
                          })
     let [user,setUser] = useState({
        name:"Kabir",
        gender:"male",
        email:"KabirS@gmail.com",
        image:"https://media.istockphoto.com/id/1201437847/photo/good-looking-male-business-professional-in-studio.jpg?s=170667a&w=0&k=20&c=q5Jfx85LpLr4GEPH4DsTpk3bbf3lXsmLVOW84GT_07w="
     })

     const changeTheme =()=>{
          if(color.textColor === "black"){
             setColor({
                bgColor:"black",
                textColor:"white",
                title:"Uncheck to switch Light Mode"

             })
          } else {
            setColor({
                bgColor:"white",
                textColor:"black",
                title:"Check to switch Dark Mode"
             })
          }
     }

     const changeToGeekster = ()=>{
        setUser({
            name:"Geekster",
            gender:"male",
            email:"Geekster@gmail.com",
            image:"https://images.yourstory.com/cs/images/companies/c35bc9859526-IMG08431-1633319245285.jpg"
        })
     }
    return (
        <>
        <div className='container' style={{backgroundColor:color.bgColor,color:color.textColor}}>
            <div className='col1'>
                <img src={user.image} width="100%" height="100%" />
            </div>
            <div className='col2'>
                 <dl>
                    <dt><b>NAME</b></dt>
                    <dd>{user.name}</dd>
                    <dt><b>EMAIL</b></dt>
                    <dd>{user.email}</dd>
                    <dt><b>GENDER</b></dt>
                    <dd>{user.gender}</dd>
                    <dt><b>Description</b></dt>
                    <dd><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, ratione suscipit ipsam incidunt deserunt cupiditate. Nobis beatae fugiat facere alias cupiditate optio</p></dd>
                 </dl>
                 <button>Profile</button><br/><br/>
                 <input type="checkbox" onChange={changeTheme} /> 
                 <label>{color.title}</label>
            </div>
            
        </div>
         <div style={{textAlign:"center"}}>
         <button>Kabir</button>&nbsp;&nbsp;&nbsp;
         <button onClick={changeToGeekster}>Geekster</button>
         </div>
         </>
    );
}

export default UserCard;