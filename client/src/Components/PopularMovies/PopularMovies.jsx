import { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../MovieList/MovieList";
import ("./PopularMovie.css")

const PopularMovies = () => {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/popular')
        .then(({ data }) => {
            setPopular(data);   
        }) 
        .catch((error) => {
           console.log(error);
        });

    }, []);

    console.log(popular);
 
    return (
        <section className="box-main" >
        <MovieList movies={popular} />
        </section>
    )
};

export default PopularMovies;