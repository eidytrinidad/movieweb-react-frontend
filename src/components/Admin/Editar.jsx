import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { StartDelete, StartGetPeliculaById } from "../../actions/peliculas";
import { useForm } from "../../hooks/useForm";

const initialState = {
  titulo: "",
  genero: "",
  director: "",
  audio: "",
  elenco: "",
  imagen: "",
  plot: "",
  puntuacion: "",
  descarga: "",
  online: "",
  titulos: "",
  seccion: "",
};

export const Editar = () => {
  const { id } = useParams();

  const [idState] = useState(id);
  const dispatch = useDispatch();
  const { pelicula } = useSelector((state) => state.peliculas);

  const [formValues, setFormValues] = useState(initialState);
  let {titulo}=formValues

  useEffect(() => {
    
    dispatch(StartGetPeliculaById(idState));
  
  }, [dispatch,id]);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(formValues);
    e.preventDefault();
  };

  const handleDelete = () => {
    dispatch(StartDelete(idState));
  };

  return (
    <section className="AdminGrid">
      <article className="contenedor">
        <h3>Formulario Editar </h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="titulo">Titulo</label>
            <input
              type="text"
              name="titulo"
              value={titulo}
              onChange={handleInputChange}
            />
          </div>

          <button className="btnAgregar">Agregar</button>
        </form>

        <button onClick={handleDelete} className="btn btn-danger">
          Borrar
        </button>
      </article>
    </section>
  );
};
