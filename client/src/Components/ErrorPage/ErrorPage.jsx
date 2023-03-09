import { Link } from "react-router-dom";
import { TbFaceIdError } from "react-icons/tb";
//import ("../../hojasdeestilo/PaginasConError.css")


const ErrorPage = () => {
  return (
    <main title="error">
        <div className="caja-pagina-notfound">
            <TbFaceIdError className="icon-pagina-notfound" data-testid="imagen-error" />
            <h2 className="titulo-pagina-notfound">Ocurrió un error.</h2>
            <Link className="link-pagina-notfound" to='/'>Por favor vuelva a intentarlo.</Link>
        </div>
    </main>
  )
}

export default ErrorPage;
