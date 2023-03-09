import Searchbar from '../Searchbar/Seachbar';
import Logo from '../Logo/Logo';
import ("./Navbar.css")

const Navbar = () => {
  return(
    <>
    <nav className="navbar">
      <Logo />
      <Searchbar />
    </nav>
    </>
  )
};

export default Navbar;