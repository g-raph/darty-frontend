import axios from "axios";

export function getPlayers() {
  const apiUrl = `http://localhost:1337/players`;
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
  const apiUrl = `http://localhost:1337/players/${playerId}`;
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
  const apiUrl = `http://localhost:1337/games?_sort=created_at:DESC`;
  const getGamesRequest = async () => {
    try {
        const resp = await axios.get(apiUrl);
        return resp.data
    } catch (err) {
        console.error('ASYNC DATA ERROR', err);
    }
  };
  return getGamesRequest();
}

export function getGame(gameId) {
  const apiUrl = `http://localhost:1337/games/${gameId}`;
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