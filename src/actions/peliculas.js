import { FetchGetData } from "../helpers/fetch";

const {
    types
} = require("../types/types");

export const StartGetAllMovies = () => {

    return async (dispatch) => {
        try {
            const resp = await fetch("https://movieweb-react.herokuapp.com/peliculas")
            const data = await resp.json()
            // console.log(data.peliculas)
            const peliculas=data.peliculas
            dispatch(getAllMovies(peliculas))
        } catch (error) {
            console.log(error)
        }
    }

}

const getAllMovies = (peliculas) => ({
    type: types.getAllMovies,
    payload: peliculas
})

export const StartGetProximas=()=>{

    return async(dispatch)=>{
        const data=await FetchGetData()
        const proximas=data.filter(pelicula=>pelicula.seccion==="proximas")
        dispatch(getProximas(proximas))
    }
}

const getProximas =(peliculas)=>({
    type:types.getProximas,
    payload:peliculas
})

export const StartGetAnimes=()=>{

    return async(dispatch)=>{
        const data=await FetchGetData()
        const anime=data.filter(pelicula=>pelicula.seccion==="anime")
        dispatch(getAnime(anime))
    }
}

const getAnime =(peliculas)=>({
    type:types.getAnimes,
    payload:peliculas
})

export const StartGetSeries=()=>{

    return async(dispatch)=>{
        const data=await FetchGetData()
        const series = data.filter(pelicula=>pelicula.seccion==="series")
        dispatch(getSeries(series))
    }
}

const getSeries=(series)=>({
    type:types.getSeries,
    payload:series
})

export const StartGetNuevas=()=>{

    return async(dispatch)=>{
        const data=await FetchGetData()
        const peliculas= data.filter(pelicula=>pelicula.seccion==="nuevas")
        dispatch(getNuevas(peliculas))
    }
}

const getNuevas=(peliculas)=>({
    type:types.getNuevas,
    payload:peliculas
})

export const StartGetMas=()=>{

    return async(dispatch)=>{
        const data=await FetchGetData()
        const peliculas= data.filter(pelicula=>pelicula.seccion==="mas")
        dispatch(getMas(peliculas))
    }
}

const getMas=(peliculas)=>({
    type:types.getSeries,
    payload:peliculas
})

export const StartGetTrailers=()=>{
    return async(dispatch)=>{
        
       try {
        
        const data=await FetchGetData()
        const trailers = data.filter(trailers=>trailers.trailerId)

        // console.log(trailers)
        dispatch(getTrailers(trailers))


       } catch (error) {
           console.log(error)
       }
    }
}

const getTrailers =(trailers)=>({
    type:types.getTrailers,
    payload:trailers
})

export const StartGetPeliculaById=(id)=>{
    return async (dispatch)=>{
        const resp= await fetch(`https://movieweb-react.herokuapp.com/peliculas/${id}`)
        const data = await resp.json()
        const pelicula=data.pelicula
  
        dispatch(getPeliculaById(pelicula))
    }
}

const getPeliculaById =(pelicula)=>({
    type:types.getOneMovie,
    payload:pelicula
})

export const StartGetBannerMovie=()=>
{
    return async(dispatch)=>{
        try {
            const data = await FetchGetData()
            const pelicula = data.filter(pelicula=>pelicula.seccion==="banner")
           
            dispatch(getBannerMovie(pelicula))
        } catch (error) {
            console.log(error)
        }
    }
}

const getBannerMovie=(bannerMovie)=>({
    type:types.getBanner,
    payload:bannerMovie
})

export const StartCreateMovie=(data)=>{

    return async(dispatch)=>{

        try {
            const resp = await fetch('http://movieweb-react.herokuapp.com/peliculas/nueva',{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            })

            const body= await resp.json()
            dispatch(createMovie(data))
            console.log(body.msg)
            
        } catch (error) {
            console.log(error)
        }
    }
}

const createMovie=(data)=>({
        type:types.createMovie,
      

    })