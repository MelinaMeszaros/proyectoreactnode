
import Navbar from "../../Components/Navbar/Navbar";
import PopularMovies from "../../Components/PopularMovies/PopularMovies";
//import ("./Home.css")

const Home = () => {
  return(
    <>
    <main className="main">
      <Navbar />
      <PopularMovies />
    </main>
    </>
  )
};

export default Home;