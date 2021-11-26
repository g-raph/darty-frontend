import React from 'react';
import { Table } from 'reactstrap';

const PlayerList = (props) => {
  const { players } = props;
  if (!players || players.length === 0) return <p>No players, sorry</p>;
  return (
      <Table responsive className='playerlist__table'>
        <thead className="text-primary">
          <tr>
            <th>Naam</th>
            <th className="text-right">Wins</th>
          </tr>
        </thead>
        <tbody>
          {players.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.Name}</td>
                <td className="text-right">0</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
  );
};
export default PlayerList;