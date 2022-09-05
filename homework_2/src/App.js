import React from "react";
import {Movies} from "./components/Movies";
import img1 from "./images/theAccountant.jpg";
import img2 from "./images/theHangover.jpg";
import img3 from "./images/kum.jpg";
import img4 from "./images/BeforeTheRain.jpg";
import img5 from "./images/MadMax.jpg";

let imdbLinks = [
    {imdb:"https://www.imdb.com/title/tt2140479/"},
    {imdb:"https://www.imdb.com/title/tt1119646/"},
    {imdb:"https://www.imdb.com/title/tt0068646/"},
    {imdb:"https://www.imdb.com/title/tt0110882/"},
    {imdb:"https://www.imdb.com/title/tt0079501/"}
]


 let movies = [
    {name:"The Accountant", date:2016, genre:"Action-Thriller", link: imdbLinks[0], images: img1},
    {name:"The Hangover", date:2009, genre:"Comedy", link: imdbLinks[1], images: img2},
    {name:"The Godfather", date:1972, genre:"Crime-Drama", link: imdbLinks[2], images: img3},
    {name:"Before the Rain", date:1994, genre:"Drama-Romace", link: imdbLinks[3], images: img4},
    {name:"Mad Max", date:1979, genre:"Action-Adventure", link: imdbLinks[4], images: img5}
]


export function App() {

    return(
        <div id="app">
            <h1>My List of Favorites Movies</h1>
            <Movies filmovi={movies}/>
        </div>
    )
}
