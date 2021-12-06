import {ADD_PLAYER, GET_PLAYER, GET_PLAYERS, PLAYERS_ERROR} from '../types'
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

export const addPlayer = (name) => async dispatch => {
    try{
        const playereObj = {
            Name: name,
        };
        const res = await axios.post('http://localhost:1337/players', playereObj);
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