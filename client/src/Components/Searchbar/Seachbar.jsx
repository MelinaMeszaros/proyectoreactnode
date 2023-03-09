import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from  "react-icons/ai";
import ("./Searchbar.css");

function Searchbar() {

  const [query, setQuery] = useState('');
  const navigate= useNavigate();

  const manejarCambio = e =>{
    setQuery(e.target.value); 
  };
 

  const manejarEnvio = (e) => {
    e.preventDefault();
      if (query) {
        navigate(`/movie?query=${query}`);
    }
  }; 
  console.log(query);
  
  return (
    <form className="searchbar" data-testid="formulario" onSubmit={manejarEnvio}>
      <div className="input-box">
      <input
        type='text'
        id='search-input'
        placeholder='Busca una película...'
        value={query}
        onChange={manejarCambio}
      />
      <button className="button-search">
        <AiOutlineSearch className="search-icono" data-testid="icono"/>
      </button>
      </div>
    </form>
  );
};

export default Searchbar;