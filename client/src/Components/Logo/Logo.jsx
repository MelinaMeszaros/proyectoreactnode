import { Link } from 'react-router-dom';
import { FcFilmReel } from  "react-icons/fc";
import ("./Logo.css");


const Logo = () => {
  return (
    <>
      <Link to='/' aria-label='Volver al inicio'>
        <FcFilmReel className="logo" data-testid="icono"/>
      </Link>
    </>
  );
};

export default Logo;