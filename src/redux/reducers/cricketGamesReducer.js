import {GET_CRICKET_GAMES} from '../types'

const initialState = {
    cricketGames:[],
    loading:true
}

export default function cricketGames(state = initialState, action){

    switch(action.type){

        case GET_CRICKET_GAMES:
        return {
            ...state,
            cricketGames: action.payload,
            loading: false

        }
        default: return state
    }

}