/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import GameAddForm from "./GameAddForm";
import ListLoading from "./ListLoading";

// reactstrap components

function GameAddPage() {

  const GameAddFormLoading = ListLoading(GameAddForm);
  const [appState, setAppState] = useState({
    loading: false,
    players: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://localhost:1337/players`;
    axios
      .get(apiUrl).then((players) => {
        const allPlayers = players.data;
        console.log('!!!', allPlayers);
        setAppState({ loading: false, players: allPlayers });
      });
  }, [setAppState]);

  
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <GameAddFormLoading isLoading={appState.loading} players={appState.players} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default GameAddPage;

// constructor(props) {
//   super(props);
//   this.state = {
//     formGameValue: 501,
//     allPlayers: [],
//     selectedPlayers: []
//   };
//   this.handleGameValueChange = this.handleGameValueChange.bind(this);
//   this.handleSelectedPlayersChange = this.handleSelectedPlayersChange.bind(this);
//   this.handleSubmit = this.handleSubmit.bind(this);
// }

// componentDidMount() {
//   fetch("http://localhost:1337/players")
//     .then(res => res.json())
//     .then(
//       (result) => {
//         this.setState({
//           allPlayers: result
//         });
//       },
//       (error) => {
//         this.setState({
//           error
//         });
//       }
//     )
// }

// handleGameValueChange(event) {
//   console.log(event);
//   this.setState({ formGameValue: event.target.value });
// }

// handleSelectedPlayersChange(item, event) {
//   const selectedPlayers = this.state.selectedPlayers;
//   selectedPlayers.push(item);
//   this.setState({ selectedPlayers: selectedPlayers });
//   console.log(this.state);
// }

// handleSubmit() {
//   const gameStartValue = this.state.formGameValue;
//   const selectedPlayers = this.state.selectedPlayers;
//   const gameObj = {
//     name: new Date(),
//     startScore: gameStartValue,
//     players: selectedPlayers
//   };
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(gameObj)
//   };
//   fetch('http://localhost:1337/games', requestOptions)
//     .then(response => response.json())
//     .then(data => {
//       NavigateTo('/game/' + data.id);
//     });
// }