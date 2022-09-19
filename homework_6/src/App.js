import React, {useEffect, useState} from "react";
import {Routes,Route} from 'react-router-dom';
import { Posts } from "./components/Posts";
import { Comments } from "./components/Comments";
import { Nav } from "./components/Nav";

export function App(){

  const[posts,setPosts] = useState([]);

  useEffect(()=>{
    fetch("https:jsonplaceholder.typicode.com/posts")
    .then(result=> result.json())
    .then(json=> setPosts(json))
    .catch(err=>alert(err))
  },[])

  return(
    <div>
      <Nav/>
      <Routes>
        <Route path="/posts" element={<Posts postovi={posts}/>}/>
        <Route path="/comments" element={<Comments/>}/>
      </Routes>
    </div>
  )
}