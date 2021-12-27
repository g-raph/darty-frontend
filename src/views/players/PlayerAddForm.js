import axios from 'axios';
import React, { useState } from 'react';
import { CirclePicker } from 'react-color';
import { Button, FormGroup, Input, Label } from 'reactstrap';

function PlayerAddForm(props) {

  const { onSubmit } = props;

  const [form, setState] = useState({
    Name: '',
    color: '#fff'
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const playereObj = {
      Name: form.Name,
      color: form.color
    };
    axios
      .post('https://darty-backend.herokuapp.com/players', playereObj)
      .then(response => response.data)
      .then(data => {
        onSubmit(data);
      });
  }

  const handleChangeComplete = (color) => {
    setState({ ...form, color: color.hex });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="Name">
          Naam
        </Label>
        <Input
          value={form.Name}
          name="Name"
          onChange={e => setState({ Name: e.target.value })}
          placeholder="Vul een naam in"
          type="text"
        />
      </FormGroup>
      <FormGroup>
        <Label for="Color">
          Kies een kleur
        </Label>
        <CirclePicker
          color={form.color}
          onChangeComplete={handleChangeComplete}
        />
      </FormGroup>
      <Button type="submit">
      Toevoegen
      </Button>
    </form>
  );
};
export default PlayerAddForm;