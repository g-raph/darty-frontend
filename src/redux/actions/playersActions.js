import {GET_PLAYER, GET_PLAYERS, PLAYERS_ERROR} from '../types'
import axios from 'axios'

export const getPlayers = () => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:1337/players`)
        dispatch( {
            type: GET_PLAYERS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: PLAYERS_ERROR,
            payload: console.log(e),
        })
    }
}

export const getPlayer = (id) => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:1337/players/${id}`);
        console.log('res', res);
        dispatch( {
            type: GET_PLAYER,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: PLAYERS_ERROR,
            payload: console.log(e),
        })
    }
}