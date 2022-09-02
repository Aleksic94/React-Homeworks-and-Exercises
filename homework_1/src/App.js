import React from "react";
import {UserList} from "./components/User";


let players = [
  {name:"Aleksandar", lastName:"Aleksic", age:27},
  {name:"Stefan", lastName:"Ilievski", age:24}
]

export function App() {
  return(
    <div id="app">
      <h1>Welcome to the list of players</h1>
      <UserList igraci={players} onlineStatus={true} />
      
    </div>
  )
}