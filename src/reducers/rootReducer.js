import {combineReducers} from 'redux'
import { peliculasReducer } from './peliculasReducer'

export const rootReducer=combineReducers({
    peliculas:peliculasReducer
})