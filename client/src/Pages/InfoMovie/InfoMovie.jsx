import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "../../Components/Spinner/Spinner";
import ProductoNoEncontrado from "../../Components/MovieNotFound/MovieNotFound";
import PaginaError from "../../Components/ErrorPage/ErrorPage";
import DescripcionMovie from "../../Components/DescriptionMovie/DescriptionMovie";
import Navbar from "../../Components/Navbar/Navbar";

const InfoMovie= () => {
    const { id } = useParams();
    console.log (id);
    const [infoMovie, setInfoMovie] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:8080/movie/${id}`)
        .then(({ data }) => {
            setInfoMovie(data);
            setLoading(false);
        }) 
        .catch((error) => {
            if (error.message.endsWith('404')) {
            setError(404);
            } else {
              setError(500)
            }
        });
    }, [id])
 
    console.log (infoMovie);

    if (error === 404) {
        return <ProductoNoEncontrado />;
    }
  
    if (error === 500) {
        return <PaginaError />;
    }

    if (loading) {
    return <Spinner />;
    }  


    return (
        <>
        <Navbar />
        <DescripcionMovie infoMovie={infoMovie} />
        </>
    )
};

export default InfoMovie;