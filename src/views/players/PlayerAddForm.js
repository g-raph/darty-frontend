import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

function PlayerAddForm() {
  const history = useHistory();
  const [form, setState] = useState({
    Name: ''
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const playereObj = {
      Name: form.Name,
    };
    axios
      .post('http://localhost:1337/players', playereObj)
      .then(response => response.data)
      .then(data => {
          console.log(data);
        history.push('/admin/players');
      });      
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>
        Name: 
        <input type="text" value={form.Name} onChange={e => setState({Name: e.target.value})} />
        </label>
        <input type="submit" value="Toevoegen" />
    </form>
  );
};
export default PlayerAddForm;