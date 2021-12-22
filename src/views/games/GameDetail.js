import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from 'reactstrap';
import ScoreAddForm from './ScoreAddForm';
import { getGame } from '../../redux/actions/gamesActions';
// const nextPlayerIndex = 0;

class GameDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreArray: []
    };
  }
  
  componentDidMount() {
    const pageId = window.location.pathname.slice(12);
    this.props.getGame(pageId);
  }

  render() {
    const { game } = this.props.game;

    const arrangeScores = () => {
      if (game) {
        const players = game.players;
        const worpsArray = game.worps;
        const tempArray = [];
        players.forEach(player => {
          const worps = [];
          worpsArray.forEach(worp => {
            if (player.id === worp.player) {
              worps.push(worp);
            }
          });
          const obj = { ...player, worps: worps };
          tempArray.push(obj);
        });
        this.state = {
          scoreArray: tempArray
        };
      }
  
    }

    const arrangeNextPlayer = () => {
      let playerIndex = this.state.currPlayer;
      if (playerIndex < (game.players.length - 1)) {
        playerIndex = playerIndex + 1;
      } else {
        playerIndex = 0;
      }
      this.setState({currPlayer: playerIndex});
    }

    const setScoreAndSetNextPlayer = (score) => {
      const pageId = window.location.pathname.slice(12);
      this.props.getGame(pageId);
      arrangeScores();
      arrangeNextPlayer();
      console.log('STATE', this.state);
    }

    if (!game || game.length === 0) {
      return <p>No game, sorry</p>;
    } else {
      arrangeScores();
      console.log('STATE', this.state);
    }
    return (
      <>
      <div className="content">
        <Row>
          <Col md="12">
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Game {new Date(game.name).toLocaleString()}</CardTitle>
          <ScoreAddForm currentPlayerIndex={this.state.currPlayer} game={game} setScore={(score) => setScoreAndSetNextPlayer(score)} />
        </CardHeader>
        <CardBody>
          <div className="game-detail--left">bord hier</div>
          <div className="game-detail--right">
            <CardTitle tag="h4">Players</CardTitle>
            <div>{game.players[game.currentPlayerIndex].Name} is aan de beurt</div>
            <Table responsive>
              <thead className="text-primary">
                <tr>
                  {game.players.map((item) => {
                    return (
                      <th key={item.id}>{item.Name}</th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {this.state.scoreArray.map((item, index) => {
                    return (
                      <td key={index}>
                        <div>{game.startScore}</div>
                        {item.worps.map((score, index) => {
                          return <div key={index}>{score.newScore}</div>;
                        })}
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
      </Col>
        </Row>
      </div>
    </>
    )
  }
}
const mapStateToProps = (state) => {
  console.log('stateobj', state);
  return ({ game: state.game })
}

export default connect(mapStateToProps, { getGame })(GameDetail)