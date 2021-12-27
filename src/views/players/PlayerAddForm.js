import axios from 'axios';
import React, { useState } from 'react';
import { CirclePicker } from 'react-color';

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
        <label>
        Name: 
        <input type="text" value={form.Name} onChange={e => setState({Name: e.target.value})} />
        </label>
        Color: <CirclePicker
          color={ form.color }
          onChangeComplete={ handleChangeComplete }
        />
        <input type="submit" value="Toevoegen" />
    </form>
  );
};
export default PlayerAddForm;