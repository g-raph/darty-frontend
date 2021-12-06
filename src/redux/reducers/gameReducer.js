import {GET_GAME} from '../types'

const initialState = {
    game: undefined,
    loading: true
}

export default function gameFunction(state = initialState, action){
    switch(action.type){
        case GET_GAME:
        return {
            ...state,
            game: action.payload,
            loading: false
        }
        default: return state;
    }

}