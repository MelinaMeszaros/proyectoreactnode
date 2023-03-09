import Logo from "../../Components/Logo/Logo";
import { Link } from "react-router-dom";
import { TbFaceIdError } from "react-icons/tb";
import ("../../Stylesheets/PaginaError.css");

const PageNotFound = () => {
  return (
    <main>
        <nav>
            <div className="nav-pagina-notfound">
                <Logo />
            </div>
        </nav>
        <div className="caja-pagina-notfound">
            <TbFaceIdError className="icon-pagina-notfound" data-testid="imagenerror"/>
            <h2 className="titulo-pagina-notfound">Parece que esta página no existe</h2>
            <Link className="link-pagina-notfound" data-testid="inicio" to='/'>Ir a la página principal</Link>
        </div>
    </main>
  )
}

export default PageNotFound