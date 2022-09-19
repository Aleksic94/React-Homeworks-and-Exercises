import React, {useEffect, useState} from "react";

export function Comments(){
    const[comments,setComments] = useState([])
    useEffect(()=>{
        fetch("https:jsonplaceholder.typicode.com/posts/1/comments")
        .then(result=> result.json())
        .then(json=> setComments(json))
        .catch(err=> alert (err))
    },[])
    return(
        <div id="comments">
            {comments.length > 0 ?<table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map((komentar,i)=>{
                        return(
                            <tr key={komentar.id}>
                                <td>{komentar.id}</td>
                                <td>{komentar.name}</td>
                                <td>{komentar.email}</td>
                                <td>{komentar.body}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table> : <p>Loading Comments</p>}
        </div>
    )
}