import React from "react";
//import ("./DescripcionProducto.css");

const DescripcionMovie = ({infoMovie}) =>{
  const { picture, title, genre, release, language, vote, description } = infoMovie;
  console.log(infoMovie);

  return (
    <section className="caja-producto">
      <div className="caja-productoinfo">
        <div className="caja-img">
          <img className="img-descripcion-producto" src={picture} alt={title} />
        </div>
        <div className="caja-datos">
          <h2 className="producto-titulo">
            {title}
          </h2>
          <p className="producto-precio">
              {release}
          </p>
          <p>
            {genre?.name}
          </p>
          <p>
            {language}
          </p>
        </div>
        <div>
            <span>{vote}</span>
        </div>
      </div>
      <div className="caja-descripcion">
        <h3>Descripción del producto</h3>
        <p>{description}</p>
      </div>
    </section>
  )
}

export default DescripcionMovie;