import React from "react";

export const Training = ({listOfThings, deleteUser}) =>{
    return(
        <div>
        <table border="1px">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Year</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {listOfThings.map((item,i)=>{
                    return(
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.lastName}</td>
                            <td>{item.year}</td>
                            <td><button onClick={()=>{deleteUser(item.id)}}>Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}