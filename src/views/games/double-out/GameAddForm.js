import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Card, CardBody, CardHeader, CardTitle, FormGroup, Input, Label } from 'reactstrap';

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
      .post('https://darty-backend.herokuapp.com/games', gameObj)
      .then(response => response.data)
      .then(data => {
        history.push('/admin/game/' + data.id);
      });      
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Maak een nieuwe Double-Out game aan.</CardTitle>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="Startscore">
              Start score
            </Label>
            <Input
              value={form.startScore}
              name="Startscore"
              onChange={e => setState({startScore: e.target.value, selectedPlayers: form.selectedPlayers})}
              type="number"
            />
          </FormGroup>
          <FormGroup style={{marginLeft: '1.5rem'}}>
            {allPlayers.map(item => {
              return (
                <div key={item.id}>
                  <Input
                    id={"check" + item.id}
                    name="check"
                    type="checkbox"
                    value={item}
                    onChange={() => form.selectedPlayers.push(item)}
                  />
                  <Label
                    check
                    for={"check" + item.id}
                  >
                    {item.Name}
                  </Label>
                </div>
              );
            })}
          </FormGroup>
          {/* {allPlayers.map(item => {
            return (
              <label key={item.id}>
                {item.Name}
                <input type="checkbox" value={item} onChange={() => form.selectedPlayers.push(item)} />
              </label>
            );
          })} */}
          <Button type="submit">
            Let's play!
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};
export default GameAddForm;