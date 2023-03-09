const express = require ('express');
const axios = require ('axios');
const moviesRouter = express.Router();

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const formatItems = (items) => {
  return items.map((item) => {
      return {
          id: item.id,
          title: item.title,
          description: item.overview,
          popularity: item.popularity,
          picture: IMGPATH + item.poster_path,
          genre: item.genre_ids,
          release: item.release_date,
          language: item.original_language,
          vote: item.vote_average,
      }
  });
};



moviesRouter.get("/movie", async (req, res) => {
    const movieName = req.query.query;
    console.log(movieName);
      if (movieName === "") return res.status(400).json("No se ingresó un término a buscar.");
      try{
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=54ee8f74ad1b380bdcc9a41db956b38d&query=${movieName}`);
        
        const payload = {
          items: formatItems(data.results)
        }

        console.log (payload);

        if(!data.results.length) return res.status(404).json(`No se encontró ${movieName}.`);
        return res.status(200).json(payload);
        
      } catch (error) {
        return res.status(500).json("Ocurrió un error. Vuleva a intentarlo.")
    }
  }) 
  
  module.exports = moviesRouter;