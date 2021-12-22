import {GET_GAME} from '../types'

const initialState = {
    game: undefined,
    currentPlayerIndex: 0,
    loading: true,
    playerScores: []
}

export default function gameFunction(state = initialState, action){
    switch(action.type){
        case GET_GAME:
        return {
            ...state,
            game: action.payload,
            currentPlayerIndex: state.currentPlayerIndex,
            loading: false
        }
        default: return state;
    }

}