import React, { useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle, Table } from 'reactstrap';
import ScoreAddForm from './ScoreAddForm';

// const nextPlayerIndex = 0;

const GameDetail = (props) => {
  const { game } = props;
  console.log('game', game);

  const [gameState, setGameState] = useState({
    scores: [],
    currentPlayerIndex: 0,
    playerArray: []
  });

  let gs = gameState;

  // const setPlayerArray = () => {
  //   const playerArray = [];
  //   game.players.forEach(player => {
  //     const worps = [];
  //     game.worps.forEach(worp => {
  //       if (player.id === worp.player) {
  //         worps.push(worp);
  //       }
  //     });
  //     const obj = {...player, worps: worps};
  //     playerArray.push(obj);
  //   });
  //   setGameState(
  //     {playerArray: playerArray},
  //   );
  // };
  // setTimeout(() => {setPlayerArray()}, 2000);
  
  const setScoreAndSetNextPlayer = (score) => {
    const prevScores = gs.scores;
    const newScoreArray = [...prevScores, score];
    const currentPlayerIndex = gs.currentPlayerIndex;
    const nextPlayerIndex = (currentPlayerIndex >= game.players.length - 1) ? 0 : currentPlayerIndex + 1;

    const playerArray = [];
    game.players.forEach(player => {
      const worps = [];
      game.worps.forEach(worp => {
        if (player.id === worp.player) {
          worps.push(worp);
        }
      });
      const obj = {...player, worps: worps};
      playerArray.push(obj);
    });
    setGameState(
      {scores: newScoreArray, currentPlayerIndex: nextPlayerIndex, playerArray: playerArray},
    );
    setTimeout(() => {console.log(gs.playerArray)}, 1000);
  }
  
  if (!game || game.length === 0) return <p>No game, sorry</p>;
  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Game {new Date(game.name).toLocaleString()}</CardTitle>
        <ScoreAddForm currentPlayerIndex={gameState.currentPlayerIndex} game={game} setScore={(score) => setScoreAndSetNextPlayer(score)}/>
      </CardHeader>
      <CardBody>
        <div className="game-detail--left">bord hier</div>
        <div className="game-detail--right">
          <CardTitle tag="h4">Players</CardTitle>
          <div>Active player = {game.players[gameState.currentPlayerIndex].Name}</div>
          <Table responsive>
            <thead className="text-primary">
              <tr>
                {game.players.map((item) => {
                  return (
                    <th key={item.id}>{item.Name}</th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                {gs.playerArray.map((item) => {
                  return (
                    <td key={item.id}>
                      <div>{game.startScore}</div>
                      {item.worps.map((score) => {
                        return <div key={score.id}>{score.newScore}</div>;
                      })}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};
export default GameDetail;