import {useState} from 'react';
import UserInfo from "./UsersInfo"

function User(props) {
   const [user,setUser] = useState([])

   const removeUser = ()=>{
         setUser([])
   }
    const getUsers = ()=>{
              fetch("https://jsonplaceholder.typicode.com/users")
              .then((res)=>res.json())
              .then((data)=>{
                console.log(data) //array
                setUser(data)
              })
    }
    return (
        <div style={{padding:"30px"}}>
            <h2>Users Information</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestias et magni asperiores a ad consectetur excepturi sunt aspernatur odio maxime tempore, natus impedit quam mollitia id totam sed distinctio voluptatibus molestiae? Praesentium unde beatae itaque maxime eaque laudantium dolore! Rerum perferendis necessitatibus quae labore porro dolorem. Sint ullam libero a delectus, nam placeat aspernatur nobis sunt, fuga sed dignissimos excepturi enim deserunt, aperiam necessitatibus similique omnis impedit est nostrum harum nisi reiciendis eaque. Omnis odit quam distinctio totam quisquam exercitationem quia, iure assumenda consequuntur, nostrum nemo architecto perferendis neque temporibus, deleniti fugiat laborum nisi sit iusto voluptatum earum magni!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestias et magni asperiores a ad consectetur excepturi sunt aspernatur odio maxime tempore, natus impedit quam mollitia id totam sed distinctio voluptatibus molestiae? Praesentium unde beatae itaque maxime eaque laudantium dolore! Rerum perferendis necessitatibus quae labore porro dolorem. Sint ullam libero a delectus, nam placeat aspernatur nobis sunt, fuga sed dignissimos excepturi enim deserunt, aperiam necessitatibus similique omnis impedit est nostrum harum nisi reiciendis eaque. Omnis odit quam distinctio totam quisquam exercitationem quia, iure assumenda consequuntur, nostrum nemo architecto perferendis neque temporibus, deleniti fugiat laborum nisi sit iusto voluptatum earum magni!</p>
           <button onClick={getUsers}>Get Users</button>&nbsp;&nbsp;&nbsp;
           <button onClick={removeUser}>Remove Users</button>
           {
              user.length > 0 &&  <UserInfo userdata={user} />
           }

        </div>
    );
}

export default User;