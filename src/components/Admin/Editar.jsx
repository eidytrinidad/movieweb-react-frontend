import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { StartDelete, StartGetPeliculaById } from "../../actions/peliculas";
import { useForm } from "../../hooks/useForm";



const initialState={
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
}

export const Editar = () => {

  const {id}=useParams()

  const dispatch = useDispatch()
  const [idState] = useState(id)
  const [ActiveId, setActiveId] = useState("")
 
  
  const [ formValues, handleInputChange,reset] = useForm(initialState);
  const {pelicula}= useSelector(state => state.peliculas)

  if (pelicula!==undefined) {
      if (pelicula._id !==id) {
        console.log(pelicula);
      }
  }
  useEffect(() => {
    dispatch(StartGetPeliculaById(id))  
    
    
  }, [dispatch,id,ActiveId]);

  


  const {
    titulo,
    genero,
    director,
    audio,
    elenco,
    imagen,
    plot,
    puntuacion,
    descarga,
    online,
    titulos,
    seccion,
  } = formValues;


  const handleSubmit = (e) => {
    e.preventDefault();

    let {titulo}=pelicula
    console.log(titulo);
    console.log(formValues);
    
  };

  const handleDelete=()=>{
    dispatch(StartDelete(idState))
   
  }



  return (
    <section className="AdminGrid">
     
    
  <article className="contenedor">
       <h3>Formulario Editar </h3>
       

       <form onSubmit={handleSubmit}>
         <div className="form-group">
           <label htmlFor="titulo">Titulo</label>
           <input
             onChange={handleInputChange}
             type="text"
             name="titulo"
             value={titulo}
             className="form-control"
           />
          </div>
         {/*<div className="form-group">
           <label htmlFor="genero">Genero</label>
           <input
             onChange={handleInputChange}
             type="text"
             name="genero"
             value={genero}
             className="form-control"
           />
         </div>
         <div className="form-group">
           <label htmlFor="director">Director</label>
           <input
             onChange={handleInputChange}
             type="text"
             name="director"
             value={director}
             className="form-control"
           />
         </div>
         <div className="form-group">
           <label htmlFor="audio">Audio</label>
           <input
             onChange={handleInputChange}
             type="text"
             name="audio"
             value={audio}
             className="form-control"
           />
         </div>
         <div className="form-group">
           <label htmlFor="elenco">Elenco</label>
           <textarea
             onChange={handleInputChange}
             name="elenco"
             rows="5"
             className="form-control"
             value={elenco}
           >
             {elenco}
           </textarea>
         </div>
         <div className="form-group">
           <label htmlFor="imagen">Imagen</label>
           <input
             onChange={handleInputChange}
             type="file"
             name="imagen"
             value={imagen}
             className="form-control"
           />
         </div>
         <div className="form-group">
           <label htmlFor="plot">Plot</label>
           <textarea
             onChange={handleInputChange}
             name="plot"
             rows="5"
             className="form-control"
             value={plot}
           >
             
           </textarea>
         </div>
         <div className="form-group">
           <label htmlFor="puntuacion">Puntuacion</label>
           <input
             onChange={handleInputChange}
             type="text"
             name="puntuacion"
             value={puntuacion}
             className="form-control"
           />
         </div>
         <div className="form-group">
           <label htmlFor="titulos">Titulos Adicionales</label>
           <input
             onChange={handleInputChange}
             type="text"
             name="titulos"
             value={titulos}
             className="form-control"
           />
         </div>
         <div className="form-group">
           <label htmlFor="descarga">Link(Descarga)</label>
           <input
             onChange={handleInputChange}
             type="text"
             name="descarga"
             value={descarga}
             className="form-control"
           />
         </div>
         <div className="form-group">
           <label htmlFor="online">Link(Ver Online)</label>
           <input
             onChange={handleInputChange}
             type="text"
             name="online"
             value={online}
             className="form-control"
           />
         </div>
         <div className="form-group">
           <label htmlFor="seccion">Tabla donde Guardar</label>
           <select
             onChange={handleInputChange}
             name="seccion"
             className="form-control col-3"
             value={seccion}
           >
             <option value=""></option>
             <option value="banner">Banner</option>
             <option value="nuevas">Nuevas</option>
             <option value="proximas">Proximamente</option>
             <option value="series">Series</option>
             <option value="anime">Animes</option>
             <option value="mas">Mas</option>
           </select>
         </div> */}

         <button className="btnAgregar">Agregar</button>
       </form> 

       <button 
       onClick={handleDelete}
       className="btn btn-danger" >
         Borrar
       </button>
     </article>
      
     
    </section>
  );
};
