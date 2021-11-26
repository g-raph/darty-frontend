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