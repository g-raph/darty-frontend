import {GET_GAMES, GAMES_ERROR, GET_GAME, GET_CRICKET_GAMES, GET_CRICKET_GAME} from '../types'
import axios from 'axios'

export const getGames = () => async dispatch => {
    
    try{
        const res = await axios.get(`https://darty-backend.herokuapp.com/games?_sort=id:DESC`)
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
        const res = await axios.get(`https://darty-backend.herokuapp.com/games/${id}`);
        console.log(res.data);
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

export const getCricketGames = () => async dispatch => {
    
    try{
        const res = await axios.get(`https://darty-backend.herokuapp.com/cricket-games?_sort=id:DESC`)
        dispatch( {
            type: GET_CRICKET_GAMES,
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

export const getCricketGame = (id) => async dispatch => {
    try{
        const res = await axios.get(`https://darty-backend.herokuapp.com/cricket-games/${id}`);
        console.log(res.data);
        dispatch( {
            type: GET_CRICKET_GAME,
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