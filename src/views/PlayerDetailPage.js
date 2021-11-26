import axios from "axios";
import React, { useEffect, useState } from "react";

import { Col, Row } from "reactstrap";
import ListLoading from "./ListLoading";
import PlayerDetail from "./PlayerDetail";

function PlayerDetailPage() {

  const PlayerDetailLoading = ListLoading(PlayerDetail);
  const [appState, setAppState] = useState({
    loading: false,
    page: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const pageId = window.location.pathname.slice(14);
    const apiUrl = `http://localhost:1337/players/${pageId}`;
    axios.get(apiUrl).then((res) => {
      const playerPage = res.data;
      setAppState({ loading: false, page: playerPage });
    });
  }, [setAppState]);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <PlayerDetailLoading isLoading={appState.loading} player={appState.page} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default PlayerDetailPage;