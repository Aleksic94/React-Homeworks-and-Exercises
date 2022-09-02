import React from "react";

export function UserList (props){
    console.log(props);
    return(
        <div>
            <h2>Players</h2>
            <ul>
            {props.igraci.map((igrac,i)=>{
        return(
            <li key={i}> Player {igrac.name} {igrac.lastName} has {igrac.age} years old</li>
        )
        })
        }         
            </ul>
                {/* {props.onlineStatus&& <p>The players are online</p>} */}
                {props.onlineStatus ? 
                <p>The players are online</p> : 
                <p>The players are offline</p>}
        </div>
    )
}     
