import React from "react";
import ("./DescriptionMovie.css");

const DescripcionMovie = ({infoMovie}) =>{
  const { picture, poster, title, genre, release, description } = infoMovie;
  console.log(infoMovie);

  return (
    <section >
      <div className="box-background-img" 
      style={{ backgroundImage: `url(${poster})`, objectFit: 'cover', width: '100%'}}>
      </div> 
      <div className="box-info-movie">
        <div className="img-box">
          <img className="img-info-movie" src={picture} alt={title} />
        </div>
        <div className="caja-datos">
          <h2 className="title-info-movie">
           {title}
          </h2>
          <p className="release-info-movie">
            {release}
          </p>
          <p>
            {genre?.name}
          </p>
          <div className="descrip-info-movie">
            <h3>Descripción del producto</h3>
            <p>{description}</p>
          </div>
        </div>
      </div> 
    </section>
  )
}

export default DescripcionMovie;