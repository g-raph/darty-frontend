import axios from 'axios';
import React, { useState } from 'react';
import NotificationAlert from "react-notification-alert";

function ScoreAddForm(props) {
  const notificationAlert = React.useRef();
  const {game, parentState} = props;
  const [form, setState] = useState({
    pijl1: 0,
    pijl2: 0,
    pijl3: 0,
  });

  console.log('parentState', parentState);

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...form,
      [evt.target.name]: value
    });
  };

  const notify = (place, text, type) => {
    let options = {};
    options = {
      place: place,
      message: (
        <div>
          <p>
            {text}
          </p>
        </div>
      ),
      type: type,
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7,
    };
    notificationAlert.current.notificationAlert(options);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (game) {
      const prevScore = parentState[game.currentPlayerIndex].worps.length > 0 ? 
                          parentState[game.currentPlayerIndex].worps[parentState[game.currentPlayerIndex].worps.length - 1].newScore : 
                          game.startScore;
      const totalScore = parseInt(form.pijl1) + parseInt(form.pijl2) + parseInt(form.pijl3);
      const nextScore = prevScore - totalScore;
      if (totalScore <= 180) {
        const scoreObj = {
          previousScore: prevScore,
          arrow1: form.pijl1,
          arrow2: form.pijl2,
          arrow3: form.pijl3,
          arrowTotal: totalScore,
          newScore: nextScore >= 0 ? nextScore : prevScore,
          player: parentState[game.currentPlayerIndex],
          game: game
        };
        axios
        .post('http://localhost:1337/worps', scoreObj)
        .then(response => response.data)
        .then(data => {
          props.setScore(data);
        });
        if (nextScore === 0) {
          console.log("we have a winner!", game.players[game.currentPlayerIndex]);
          
          const updateGameObject = {
            winner: game.players[game.currentPlayerIndex],
            finished: true
          };
          axios
          .put('http://localhost:1337/games/' + game.id, updateGameObject)
          .then(response => response.data)
          .then(data => {
            props.setScore(data);
            notify('tc', 'Game finished! Winner = ' + updateGameObject.winner.Name, 'success');
          });
          
          
          
          
          
          
          
          
          
          
        } else {
          const nextPlayerObject = {
            currentPlayerIndex: (game.currentPlayerIndex < (game.players.length - 1)) ? game.currentPlayerIndex + 1 : 0
          };
          axios
          .put('http://localhost:1337/games/' + game.id, nextPlayerObject)
          .then(response => response.data)
          .then(data => {
            props.setScore(data);
            notify('tc', 'Volgende speler: ' + game.players[nextPlayerObject.currentPlayerIndex].Name, 'success');
          });
        }
      } else {
        notify('tc', 'Score kan niet hoger dan 180 zijn...!!', 'danger');
      }
    }
  }

  return (
    <div className='scoreform'>
      <NotificationAlert ref={notificationAlert} />
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
    </div>
  );
};
export default ScoreAddForm;