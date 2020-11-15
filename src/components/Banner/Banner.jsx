import React from "react";
import { Header } from "./Header";
import { MovieInfo } from "./MovieInfo";

export const Banner = () => {


  return (
    <section className="banner">
      <div className="contenedor">
        <Header />
        <MovieInfo  />
      </div>
    </section>
  );
};
