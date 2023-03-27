import {useState,useEffect} from 'react';

function User(props) {
    const [state,setState] = useState([])

                useEffect(()=>{
                    getData()
                },[])
    const getData = async ()=>{
           
        var res=await   fetch("https://jsonplaceholder.typicode.com/users")
        var data = await res.json() 
           setState(data)
    }
    return (
        <div>
             <h2>Users Name</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam, qui, ullam provident sint aut ratione ipsa consectetur est eius eveniet? Assumenda molestias, quos aliquam consequatur dolorem molestiae blanditiis temporibus rerum neque saepe dicta doloribus aperiam labore harum fuga in illo error debitis, adipisci deserunt! Repellat doloribus dolore nisi non facere ipsam blanditiis illo eveniet assumenda eaque ipsa nobis veniam qui fugit placeat quaerat obcaecati, possimus totam corrupti officiis. Sunt possimus assumenda hic ut distinctio soluta perferendis, totam laboriosam culpa quis quo maiores rem deleniti ullam similique consectetur nisi neque quos non nesciunt molestias! Ducimus autem sapiente esse dolorum quo.</p>
             <button onClick={getData}>Get Users</button>
                  {
                    state.length > 0 ? <ol>
                         {
                            state.map((ele)=>{
                              return <li>{ele.name}</li>
                            })
                         }
                    </ol> : <h2 style={{color:"red"}}>No Users</h2>
                  }
        </div>
    );
}

export default User;