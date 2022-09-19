import React from "react";

export function Posts({postovi}){
    console.log(postovi);
    return(
        <div id="posts">
            {postovi.length > 0 ?<table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {postovi.map((post,i)=>{
                        return(
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>{}
                            </tr>
                        )
                    })}
                </tbody>
            </table> : <p>Loading Posts</p>}
        </div>
    )
}