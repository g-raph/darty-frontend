import axios from "axios";
import React, { useEffect, useState } from "react";

import { Col, Row } from "reactstrap";
import GameDetail from "./GameDetail";
import ListLoading from "./ListLoading";

function GameDetailPage() {

  const GameDetailLoading = ListLoading(GameDetail);
  const [appState, setAppState] = useState({
    loading: false,
    page: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const pageId = window.location.pathname.slice(12);
    const apiUrl = `http://localhost:1337/games/${pageId}`;
    axios.get(apiUrl).then((games) => {
      const gamePage = games.data;
      setAppState({ loading: false, page: gamePage });
    });
  }, [setAppState]);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <GameDetailLoading isLoading={appState.loading} game={appState.page} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default GameDetailPage;