import {GET_PLAYER} from '../types'

const initialState = {
    player: undefined,
    loading: true
}

export default function playerFunction(state = initialState, action){
    console.log('action', action);
    switch(action.type){
        case GET_PLAYER:
        return {
            ...state,
            player: action.payload,
            loading: false
        }
        default: return state;
    }

}