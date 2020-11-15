
export const FetchGetData=async()=>{

    const resp = await fetch("https://movieweb-react.herokuapp.com/peliculas")
    const data = await resp.json()

    return data.peliculas
}