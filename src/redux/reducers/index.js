import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import playersReducer from './playersReducer';
import playerReducer from './playerReducer';

export default combineReducers({
  players: playersReducer,
  player: playerReducer,
  games: gamesReducer
});