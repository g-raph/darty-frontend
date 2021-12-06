import axios from 'axios';
import React, { useState } from 'react';

function ScoreAddForm(props) {
  const {game, currentPlayerIndex} = props;
  const [form, setState] = useState({
    pijl1: 0,
    pijl2: 0,
    pijl3: 0,
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...form,
      [evt.target.name]: value
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const prevScore = game.worps.length ? game.worps[game.worps.length - 1].newScore : game.startScore;
    const totalScore = parseInt(form.pijl1) + parseInt(form.pijl2) + parseInt(form.pijl3);
    const nextScore = prevScore - totalScore;

    const scoreObj = {
      previousScore: prevScore,
      arrow1: form.pijl1,
      arrow2: form.pijl2,
      arrow3: form.pijl3,
      arrowTotal: totalScore,
      newScore: nextScore >= 0 ? nextScore : prevScore,
      player: game.players[currentPlayerIndex],
      game: game
    };
    axios
      .post('http://localhost:1337/worps', scoreObj)
      .then(response => response.data)
      .then(data => {
        props.setScore(data);
      });      
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pijl 1: 
        <input type="number" name="pijl1" value={form.pijl1} onChange={handleChange} />
      </label>
      <label>
        Pijl 2: 
        <input type="number" name="pijl2" value={form.pijl2} onChange={handleChange} />
      </label>
      <label>
        Pijl 3: 
        <input type="number" name="pijl3" value={form.pijl3} onChange={handleChange} />
      </label>
      <input type="submit" value="Score toevoegen" />
    </form>
  );
};
export default ScoreAddForm;