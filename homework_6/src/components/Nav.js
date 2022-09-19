import React from "react";
import { Link } from "react-router-dom";

export function Nav(){
    return(
        <ul>
            <li><Link to="/home">Home Page</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/comments">Comments</Link></li>
        </ul>
    )
}