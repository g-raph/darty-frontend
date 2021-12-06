import {GET_PLAYERS} from '../types'

const initialState = {
    players:[],
    loading: true
}

export default function players(state = initialState, action){

    switch(action.type){

        case GET_PLAYERS:
        return {
            ...state,
            players: action.payload,
            loading: false
        }
        default: return state;
    }

}