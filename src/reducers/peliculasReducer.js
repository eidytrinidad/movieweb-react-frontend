import { types } from "../types/types";

export const peliculasReducer = (state = {}, action) => {
  switch (action.type) {
    case types.getAllMovies:
      return {
        ...state,
        peliculas: action.payload,
      };

    case types.getProximas:
      return {
        ...state,
        peliculas: action.payload,
      };
    case types.getAnimes:
      return {
        ...state,
        peliculas: action.payload,
      };
    case types.getSeries:
      return {
        ...state,
        peliculas: action.payload,
      };
    case types.getNuevas:
      return {
        ...state,
        peliculas: action.payload,
      };
    case types.getMas:
      return {
        ...state,
        peliculas: action.payload,
      };
    case types.getTrailers:
      return {
        ...state,
        trailers: action.payload,
      };

    case types.getBanner:
      return {
        ...state,
        banner: action.payload,
      };
    case types.createMovie:
      return {
        ...state,
      };
    case types.getOneMovie:
      return {
        pelicula: action.payload,
      };
    case types.deleteMovie:
      return {
        ...state,
      };
      case types.updateMovie:
        return{
        ...state,

      }
    default:
      return state;
  }
};
