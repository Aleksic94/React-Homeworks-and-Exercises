import React, {useState} from "react";
import { Training } from "./components/Training";
export function App (){

const [listOfThings, setListOfThings] = useState([
      {id:1,name:"Pero",lastName:"Perovski",year:1996},
      {id:2,name:"Ivan",lastName:"Ivanovski",year:1997},
      {id:3,name:"Stefan",lastName:"Stefanovski",year:1998}
])

  const [person, setPerson] = useState({name:"", lastName:"", year:""})

  function deleteUser(id){
    setListOfThings([
      ...listOfThings.filter(item=> item.id !== id)
    ]);
  }

  function addThings(){
    let newUser = {
      id: Math.floor(Math.random()*100),
      name:person.name,
      lastName:person.lastName,
      year:person.year
    }
    setListOfThings([...listOfThings,newUser]);
    setPerson({name:"", lastName:"", year:""});
  }

  return(
    <div id="app">
      <h2>Hello</h2>
      <input
      type="text"
      placeholder="Name"
      value={person.name}
      onChange={(e) =>{ setPerson({...person, name: e.target.value})}}
      />
      <br/>
      <input
      type="text"
      placeholder="Last Name"
      value={person.lastName}
      onChange={(e) =>{ setPerson({...person, lastName: e.target.value})}}
      />
      <br/>
      <input
      type="text"
      placeholder="Year"
      value={person.year}
      onChange={(e) =>{ setPerson({...person, year: e.target.value})}}
      />
      <br/>
      <button type="button" onClick={addThings}>Add</button>
      <br/>
      <Training listOfThings={listOfThings} deleteUser={deleteUser}/>
    </div>
  )
}
