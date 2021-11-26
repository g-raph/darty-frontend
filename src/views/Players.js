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
import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap';
import axios from 'axios';
import ListLoading from './ListLoading';
import PlayerList from './PlayerList';

function Players() {

  const PlayerListLoading = ListLoading(PlayerList);
  const [appState, setAppState] = useState({
    loading: false,
    players: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://localhost:1337/players`;
    axios.get(apiUrl).then((players) => {
      const allPlayers = players.data;
      setAppState({ loading: false, players: allPlayers });
    });
  }, [setAppState]);

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: null,
  //     isLoaded: false,
  //     items: [],
  //     formValue: ''
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // componentDidMount() {
  //   fetch('http://localhost:1337/players')
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           items: result
  //         });
  //       },
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )
  // }

  // handleChange(event) {
  //   this.setState({formValue: event.target.value});
  // }

  // handleSubmit(event) {
  //   const playerName = this.state.formValue;
  //   const playerSlug = playerName.toLowerCase();
  //   const playerObj = {
  //     Name: playerName,
  //     slug: playerSlug
  //   };
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(playerObj)
  //   };
  //   fetch('http://localhost:1337/players', requestOptions)
  //       .then(response => response.json())
  //       .then(data => {
  //         this.state.items.concat([data]);
  //       });
  //   fetch("http://localhost:1337/players")
  //       .then(res => res.json())
  //       .then(
  //         (result) => {
  //           this.setState({
  //             isLoaded: true,
  //             items: result
  //           });
  //         },
  //         (error) => {
  //           this.setState({
  //             isLoaded: true,
  //             error
  //           });
  //         }
  //       );
  //   this.setState({
  //     formValue: ''
  //   })
  //   event.preventDefault();
  // }
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Spelers</CardTitle>
                {/* <form onSubmit={this.handleSubmit}>
                  <label>
                    New player:
                    <input type="text" value={this.state.formValue} onChange={this.handleChange} />
                  </label>
                  <input type="submit" value="Add" />
                </form> */}
              </CardHeader>
              <CardBody>
                <PlayerListLoading isLoading={appState.loading} players={appState.players} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Players;
