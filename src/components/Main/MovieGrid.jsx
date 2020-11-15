import React from "react";
import { Link } from "react-router-dom";

export const MovieGrid = ({ peliculas }) => {

  return (
    <>
      {peliculas &&
        peliculas.map((pelicula) => (
          <div key={pelicula._id} className="movie" id="MovieGrid">
            <div className="imagen">
              <div className="overlay">
                <div className="info">
                  <p>{pelicula.titulo}</p>
                  {/* <a href="/pelicula.html" className="btnVerMas" > Ver Mas</a> */}
                  <Link
                    to={`/pelicula/${pelicula._id}`}
                    className="btnVerMas"
                    pelicula-id=""
                  >
                    VER MAS
                  </Link>
                </div>
              </div>
              <img src={pelicula.imagen} alt="Series" />
            </div>
            <div className="texto">
              <h4 className="titulo">{pelicula.titulo}</h4>
              <p className="genero">{pelicula.genero}</p>
              <div className="puntuacion">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <p>{pelicula.puntuacion}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
