import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Card, CardBody, CardHeader, CardTitle } from 'reactstrap';

function GameAddForm(props) {
  const history = useHistory();
  const allPlayers = props.players ? props.players : [];
  const [form, setState] = useState({
    startScore: 501,
    selectedPlayers: []
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('form', form);
    const gameStartValue = form.startScore;
    const selectedPlayers = form.selectedPlayers;
    const gameObj = {
      name: new Date(),
      startScore: gameStartValue,
      players: selectedPlayers
    };
    axios
      .post('http://localhost:1337/games', gameObj)
      .then(response => response.data)
      .then(data => {
        history.push('/admin/game/' + data.id);
      });      
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Setup new game</CardTitle>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit}>
          <label>
            Start score: 
            <input type="number" value={form.startScore} onChange={e => setState({startScore: e.target.value, selectedPlayers: form.selectedPlayers})} />
          </label>
          {allPlayers.map(item => {
            return (
              <label key={item.id}>
                {item.Name}
                <input type="checkbox" value={item} onChange={() => form.selectedPlayers.push(item)} />
              </label>
            );
          })}
          <input type="submit" value="Let's play!" />
        </form>
      </CardBody>
    </Card>
  );
};
export default GameAddForm;