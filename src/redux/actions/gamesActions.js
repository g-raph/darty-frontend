import {GET_GAMES, GAMES_ERROR, GET_GAME} from '../types'
import axios from 'axios'

export const getGames = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://localhost:1337/games`)
        dispatch( {
            type: GET_GAMES,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: GAMES_ERROR,
            payload: console.log(e),
        })
    }

}

export const getGame = (id) => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:1337/games/${id}`);
        dispatch( {
            type: GET_GAME,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: GAMES_ERROR,
            payload: console.log(e),
        })
    }
}