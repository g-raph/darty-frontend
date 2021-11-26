import React from 'react';
import { NavLink } from 'react-router-dom';
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
                <tr key={item.id} >
                  <td><NavLink to={'/admin/player/' + item.id}>{item.Name}</NavLink></td>
                  <td className="text-right">0</td>
                </tr>
            );
          })}
        </tbody>
      </Table>
  );
};
export default PlayerList;