const express = require('express');
const axios = require ("axios");
const infoMovie = express.Router();


const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const formatItem = (movie) => {
    return {
        id: movie.id,
        title: movie.title,
        description: movie.overview,
        popularity: movie.popularity,
        picture: IMGPATH + movie.poster_path,
        genre: movie.genres,
        release: movie.release_date,
        language: movie.original_language,
        vote: movie.vote_average,
      }

};


const getMovie = async (id) => {
    try {        
        const url = encodeURI(`https://api.themoviedb.org/3/movie/${id}?api_key=54ee8f74ad1b380bdcc9a41db956b38d&language=en-US`);
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        return ({
            status: error.response.status,
            message: error.response.data.message
        });
    }
};


infoMovie.get("/movie/:id", async (req, res) => {
  try {        
      const { id } = req.params;
      console.log (id);
      const movie= await getMovie(id);
      console.log(movie);
      if(movie.status === 404) return res.status(404).send({message: `Pelicula con Id ${id} no encontrado!`});
      const payload = formatItem(movie);
      console.log (payload);
      return res.status(200).send(payload);
  } catch (error) {
      console.log(error);
      return res.status(500).send({ message: error });
  }
});


module.exports = infoMovie;