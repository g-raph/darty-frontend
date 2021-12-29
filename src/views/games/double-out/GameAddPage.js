import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { getPlayers } from "../../Api";
import GameAddForm from "./GameAddForm";
import ListLoading from "../../ListLoading";

// reactstrap components

function GameAddPage() {

  const GameAddFormLoading = ListLoading(GameAddForm);
  const [appState, setAppState] = useState({
    loading: false,
    players: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    getPlayers().then(res => {
      setAppState({ loading: false, players: res });
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