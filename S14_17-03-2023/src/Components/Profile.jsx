

function Profile(props) {   //props = {id:{id:100},image:"",name:"",gender:""}
     var cardStyle = {
         width:"300px",
         padding:"10px",
         boxShadow:"0 0 10px black",
         textAlign:"center"
     }
    return (
        <div style={cardStyle}>
            <img src={props.image} width="300" height="300"/>
            <h3>{props.id.id}</h3>
            <h2>{props.name[0]} {props.name[1]}</h2>
            <p>{props.gender}</p>
        </div>
    );
}

export default Profile;