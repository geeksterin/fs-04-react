import React from 'react';

function UsersInfo({userdata}) {
    return (
        <div>
              <table cellPadding={10} style={{width:"70%",boxShadow:"0 0 10px black",margin:"50px auto"}}>
                  <thead>
                      <tr style={{background:"black",color:"white"}}>
                          <th>NAME</th>
                          <th>EMAIL</th>
                          <th>CITY</th>
                      </tr>
                  </thead>
                  <tbody align="center">
                 {
                     userdata.map((ele)=>{
                       return <tr>
                         <td>{ele.name}</td>
                         <td>{ele.email}</td>
                         <td>{ele.address.city}</td>
                       </tr>
                     })
                 }
                  </tbody>
              </table>
          </div>
    );
}

export default UsersInfo;