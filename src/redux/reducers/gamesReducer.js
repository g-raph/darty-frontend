import {GET_GAMES} from '../types'

const initialState = {
    games:[],
    loading:true
}

export default function games(state = initialState, action){

    switch(action.type){

        case GET_GAMES:
        return {
            ...state,
            games: action.payload,
            loading: false

        }
        default: return state
    }

}