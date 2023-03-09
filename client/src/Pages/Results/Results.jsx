import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieList from '../../Components/MovieList/MovieList';
import Spinner from '../../Components/Spinner/Spinner';
import MovieNotFound from '../../Components/MovieNotFound/MovieNotFound';
import ErrorPage from '../../Components/ErrorPage/ErrorPage';
import Navbar from '../../Components/Navbar/Navbar';

function Results () {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const location = useLocation();
    console.log (location);
    const params = new URLSearchParams(location);
    console.log (params);
    const query = params.get('search');
    console.log (query);
    
    useEffect(() => {
      setLoading(true);
       axios.get(`http://localhost:8080/movie${query}`)
      .then(({ data }) => {
        setMovies(data.items);
        setLoading(false);
      })
      .catch((error) => {
        if (error.message.endsWith('404')) {
        setError(404);
        } else {
          setError(500)
        }
      });
    }, [query])

    if (error === 404) {
      return <MovieNotFound />;
    }

    if (error === 500) {
      return <ErrorPage />;
    }

    if (loading) {
      return <Spinner />;
    }

    
    return(
      <>
      <Navbar />
      <MovieList movies={movies} />
      </>
    )
}


export default Results;