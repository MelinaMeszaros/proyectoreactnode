import { Link } from "react-router-dom";
import { MdSearchOff } from "react-icons/md";
//import ("./ProductoNoEncontrado.css"); 

const MovieNotFound = () => {
    return(
        <main className="contenedor-caja-producto-no-encontrado" titulo="no-encontrado">
            <div className="caja-producto-no-encontrado">
                <div className="caja-icono-producto-no-encontrado">
                    <MdSearchOff className="icono-producto-no-encontrado" data-testid="noencontrado"/>
                 </div>
                <div className="texto-producto-no-encontrado">
                    <h2 className="titulo-producto-no-encontrado">No hay publicaciones que coincidan con tu búsqueda.</h2>
                    <ul className="lista-producto-no-encontrado" title="listanoencontrado">
                        <li>Revisá la ortografía de la palabra.</li>
                        <li className="item-lista-producto-no-encontrado">Utilizá palabras más genéricas o menos palabras.</li>
                        <li><Link className="link-producto-no-encontrado"to="/">Volver al inicio</Link></li>
                    </ul>
                </div>
            </div>
        </main>
    )    
};

export default MovieNotFound;