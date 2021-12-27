import axios from "axios";

export function getPlayers() {
  const apiUrl = `https://darty-backend.herokuapp.com/players`;
  const getPlayersRequest = async () => {
    try {
        const resp = await axios.get(apiUrl);
        console.log(resp.data);
        return resp.data
    } catch (err) {
        console.error('ASYNC DATA ERROR', err);
    }
  };
  return getPlayersRequest();
}

export function getPlayer(playerId) {
  const apiUrl = `https://darty-backend.herokuapp.com/players/${playerId}`;
  const getPlayerRequest = async () => {
    try {
        const resp = await axios.get(apiUrl);
        return resp.data
    } catch (err) {
        console.error('ASYNC DATA ERROR', err);
    }
  };
  return getPlayerRequest();
}

export function getGames() {
  const apiUrl = `https://darty-backend.herokuapp.com/games?_sort=id:DESC`;
  const getGamesRequest = async () => {
    try {
        const resp = await axios.get(apiUrl);
        console.log('RESPDATA: ', resp.data);
        return resp.data
    } catch (err) {
        console.error('ASYNC DATA ERROR', err);
    }
  };
  return getGamesRequest();
}

export function getGame(gameId) {
  const apiUrl = `https://darty-backend.herokuapp.com/games/${gameId}`;
  const getGameRequest = async () => {
    try {
        const resp = await axios.get(apiUrl);
        return resp.data
    } catch (err) {
        console.error('ASYNC DATA ERROR', err);
    }
  };
  return getGameRequest();
}