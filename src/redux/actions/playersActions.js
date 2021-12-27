import {ADD_PLAYER, GET_PLAYER, GET_PLAYERS, PLAYERS_ERROR} from '../types'
import axios from 'axios'

export const getPlayers = () => async dispatch => {
    try{
        const res = await axios.get(`https://darty-backend.herokuapp.com/players`)
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
        const res = await axios.get(`https://darty-backend.herokuapp.com/players/${id}`);
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

export const addPlayer = (name) => async dispatch => {
    try{
        const playereObj = {
            Name: name,
        };
        const res = await axios.post('https://darty-backend.herokuapp.com/players', playereObj);
        dispatch( {
            type: ADD_PLAYER,
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