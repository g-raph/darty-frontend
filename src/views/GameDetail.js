import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, Table } from 'reactstrap';

const GameDetail = (props) => {
  const { game } = props;
  if (!game || game.length === 0) return <p>No game, sorry</p>;
  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Game {new Date(game.name).toLocaleString()}</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="game-detail--left">bord hier</div>
        <div className="game-detail--right">
          <CardTitle tag="h4">Players</CardTitle>
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
                {game.players.map((item) => {
                  return (
                    <td key={item.id}>{game.startScore}</td>
                  );
                })}
              </tr>
              <tr>
                {game.players.map((item) => {
                  return (
                    <td key={item.id}>{item.Name}</td>
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