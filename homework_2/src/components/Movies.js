import React from "react";

export function Movies (props){
    console.log(props);
    return(
        <div>
            <ul>
                {props.filmovi.map((film,i)=>{
                    return(
                        <li key={i}>
                          {film.name}-{film.date}, {film.genre}- 
                          <a target="_blank" rel="noreferrer"  href={film.link.imdb}>Imdb Link</a>
                          <img src={film.images} alt="img" width="130" height="100"/>
                          </li>
                    )
                })}
            </ul>
        </div>
    )
}
