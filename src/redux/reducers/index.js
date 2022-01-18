import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import cricketGamesReducer from './cricketGamesReducer';
import cricketGameReducer from './cricketGameReducer';
import gameReducer from './gameReducer';
import playersReducer from './playersReducer';
import playerReducer from './playerReducer';

export default combineReducers({
  players: playersReducer,
  player: playerReducer,
  games: gamesReducer,
  cricketGames: cricketGamesReducer,
  game: gameReducer,
  cricketGame: cricketGameReducer
});