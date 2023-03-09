const express = require ('express');
const axios = require ('axios');
const popularRouter = express.Router();

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


popularRouter.get("/popular", async (req, res) => {
    
      try{
        const { data } = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=54ee8f74ad1b380bdcc9a41db956b38d&language=en-US&page=1');
        
        const payload = formatItems(data.results);
        

        console.log (payload);
        return res.status(200).json(payload);

        } catch (error) {
        return res.status(500).json("Ocurrió un error. Vuleva a intentarlo.")
    }

  }) 
  
  module.exports = popularRouter;