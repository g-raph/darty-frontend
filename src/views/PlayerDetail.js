import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardTitle, Table } from 'reactstrap';

const PlayerDetail = (props) => {
  const { player } = props;
  if (!player || player.length === 0) return <p>No player, sorry</p>;
  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">{player.Name}</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="player-detail--right">
          <Table responsive>
            <thead className="text-primary">
              <tr>
                <th>Gespeelde games</th>
              </tr>
            </thead>
            <tbody>
                {player.games.map((item) => {
                  return (
                    <tr>
                      <td key={item.id}>
                      <NavLink to={'/admin/game/' + item.id}>
                        {new Date(item.name).toLocaleString()}
                      </NavLink>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};
export default PlayerDetail;