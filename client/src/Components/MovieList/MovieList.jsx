import { Link } from 'react-router-dom';
import ("./MovieList.css");


function classVote(vote) {
    if (vote >= 8) {
        return "skyblue";
    }
    else if (vote >= 5) {
        return "orange";
    }
    else {
        return "red";
    }
}

const MovieList = ({movies}) => {
    console.log(movies);

  return(
    <section className="box-movie">
      {movies.map((movie) => (
        <div key={movie.id} className="box-card" data-testid="box-card">
          <div className="box-picture">
            <img className="movie-picture" src={movie.picture} alt={movie.title}/>
          </div>
          <div className="box-info">
            <h2 className="title">
                <Link to={`/movie/${movie.id}`} className="title-link">
                  {movie.title}
                </Link>
            </h2>
            <p className='release-date'>
              {movie.release}
            </p>
            <span className={classVote(movie.vote)}>
              {movie.vote.toFixed(1)}
            </span>
          </div>
        </div>
      ))}
    </section>
  );  
};


export default MovieList;