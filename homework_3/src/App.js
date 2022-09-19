import React,{useState} from "react";

export function App () {

  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [age, setAge] = useState(0)
  const [showTable, setShowTable] = useState(false)



  return(
    <div id="app">
      <h2>Loggin Form</h2>
      <br/>
      <br/>

       <form>
      <input
        type="text" placeholder="Name" value={name} onChange={(event) =>{ setName(event.target.value)}}
      />
       <input
        type="text" placeholder="LastName" value={lastName} onChange={(event) =>{ setLastName(event.target.value)}}
      />
       <input
        type="email" placeholder="Email" value={email} onChange={(event) =>{ setEmail(event.target.value)}}
      />
       <input
        type="password" placeholder="Password" value={password} onChange={(event) =>{ setPassword(event.target.value)}}
      />
       <input
        type="number" placeholder="Age" value={age} onChange={(event) =>{ setAge(event.target.value)}}
      />
      </form>
      <br/>
        <button onClick={() => { setShowTable(!showTable)}}>{showTable ? "Hide Table" : "Show Table"}</button>
        <br/>
        <br/>
    {showTable && <table id="table" border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td style={{color:'yellow'}}>{lastName}</td>
          <td>{email}</td>
          <td style={{color:'yellow'}}>{password}</td>
          <td>{age}</td>
        </tr>
      </tbody>
    </table>}
    </div>
  )
} 




