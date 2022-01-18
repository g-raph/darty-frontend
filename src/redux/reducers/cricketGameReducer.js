import {GET_CRICKET_GAME} from '../types'

const initialState = {
    game: undefined,
    currentPlayerIndex: 0,
    loading: true,
    playerScores: []
}

export default function cricketGameFunction(state = initialState, action){
    switch(action.type){
        case GET_CRICKET_GAME:
        return {
            ...state,
            cricketGame: action.payload,
            currentPlayerIndex: state.currentPlayerIndex,
            loading: false
        }
        default: return state;
    }

}