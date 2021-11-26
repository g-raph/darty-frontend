import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import GameList from "./GameList";
import ListLoading from "./ListLoading";


function Games() {

  const GameListLoading = ListLoading(GameList);
  const [appState, setAppState] = useState({
    loading: false,
    games: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://localhost:1337/games?_sort=created_at:DESC`;
    axios.get(apiUrl).then((games) => {
      const allGames = games.data;
      setAppState({ loading: false, games: allGames });
    });
  }, [setAppState]);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Games</CardTitle>
              </CardHeader>
              <CardBody>
                <GameListLoading isLoading={appState.loading} games={appState.games} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Games;
