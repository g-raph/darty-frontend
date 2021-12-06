import {GET_GAMES, GAMES_ERROR} from '../types'
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