import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StartGetBannerMovie } from "../../actions/peliculas";

export const MovieInfo = () => {
  const { banner } = useSelector((state) => state.peliculas);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(StartGetBannerMovie());
  }, [dispatch]);


  return (
    
  <>
  {
    banner&&
    
    <section className="movieInfo">
    <h2>{banner[0].titulo}</h2>
    <p className="detalle">
    {banner[0].plot}
    </p>

    <article className="btnBox">
      <button
        className="btnBanner"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        <i className="fas fa-play"></i>
        Reproducir
      </button>

      <Link to={`/pelicula/${banner[0]._id}`} className="btnBanner btnInfo" >
        <img src="img/infoIcon.png" alt="" />
        Mas informacion
      </Link>
    </article>
  </section>
  }
  </>
  );
};
