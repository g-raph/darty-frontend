import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from 'reactstrap';
import ScoreAddForm from './ScoreAddForm';
import { getGame } from '../../../redux/actions/gamesActions';
import { Line } from 'react-chartjs-2';

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

    const setScoreAndSetNextPlayer = (score) => {
      const pageId = window.location.pathname.slice(12);
      this.props.getGame(pageId);
      arrangeScores();
      console.log('STATE', this.state);
    }

    const playerStats = {
      data: (canvas) => {
        const datasetsArray = [];
        this.state.scoreArray.forEach(player => {
          const datasetObject = {
            data: player.worps.length > 0 ? player.worps.map(item => item.arrowTotal) : 0,
            fill: true,
            borderColor: player.color,
            backgroundColor: "transparent",
            pointBorderColor: player.color,
            pointRadius: 4,
            pointHoverRadius: 4,
            pointBorderWidth: 8,
            tension: 0.4,
            label: player.Name
          }
          datasetsArray.push(datasetObject);
        });
        console.log('datasetsArray', datasetsArray);
        return {
          labels: this.state.scoreArray[0].worps.map((item, index) => 'worp ' + (index + 1)),
          datasets: datasetsArray,
        };
      },
      options: {
        plugins: {
          legend: { display: true },
        },
      },
    };

    const handleOpenOrFinish = () => {
      if(game.finished) {
        return (
          <Alert color="success">
            <span>Deze game is afgelopen. De winnaar is {game.winner.Name}</span>
          </Alert>
        );
      }
      return (<ScoreAddForm parentState={this.state.scoreArray} game={game} setScore={(score) => setScoreAndSetNextPlayer(score)} />);
    };

    if (!game || game.length === 0) {
      return <p>No game, sorry</p>;
    } else {
      arrangeScores();
      console.log('GAMESTATE', this.state);
    }
    return (
      <>
      <div className="content">
        <Row>
          <Col md="12">
      <Card>
        <CardHeader>
          <CardTitle tag="h2">Game {game.id} <small>({new Date(game.name).toLocaleString()})</small></CardTitle>
          {handleOpenOrFinish()}
        </CardHeader>
        <CardBody>
          {/* <div className="game-detail--left">bord hier</div> */}
          <div className="game-detail--right">
            <CardTitle tag="h3">{game.players[game.currentPlayerIndex].Name} is aan de beurt</CardTitle>
            <Table responsive>
              <thead className="text-primary">
                <tr>
                  {game.players.map((item) => {
                    return (
                      <th key={item.id} style={{color: item.color}}>{item.Name}</th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {this.state.scoreArray.map((item, index) => {
                    return (
                      <td key={index} style={{verticalAlign: 'top'}}>
                        <h5>{game.startScore}</h5>
                        {item.worps.map((score, index) => {
                          return (
                            <div key={index}>
                              <small>{score.arrow1} + {score.arrow2} + {score.arrow3} = <strong>{score.arrowTotal}</strong></small>
                              <h5>{score.newScore}</h5>
                            </div>
                          );
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
        <Row>
            <Col md="12">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">Worp statistieken</CardTitle>
                <p className="card-category">Een overzicht van alle worpen</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={playerStats.data}
                  options={playerStats.options}
                  width={400}
                  height={100}
                />
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
  return ({ game: state.game })
}

export default connect(mapStateToProps, { getGame })(GameDetail)