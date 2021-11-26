import React from 'react';
import { NavLink } from 'react-router-dom';
import { Table } from 'reactstrap';

const GameList = (props) => {
  const { games } = props;
  if (!games || games.length === 0) return <p>No games, sorry</p>;
  return (
    <Table responsive className='gamelist__table'>
      <thead className="text-primary">
        <tr>
          <th>Game</th>
          <th className="text-right">Players</th>
        </tr>
      </thead>
      <tbody>
        {games.map((item) => {
          return (
            <tr key={item.id}>
              <td>
                <NavLink to={'/admin/game/' + item.id}>
                  {new Date(item.name).toLocaleString()}
                </NavLink>
              </td>
              <td className="text-right">0</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default GameList;