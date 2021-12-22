import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from 'reactstrap';
import ScoreAddForm from './ScoreAddForm';
import { getGame } from '../../redux/actions/gamesActions';
import { Line } from 'react-chartjs-2';
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
          console.log(player);
          const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
          const datasetObject = {
            data: player.worps.length > 0 ? player.worps.map(item => item.arrowTotal) : 0,
            fill: true,
            borderColor: randomColor,
            backgroundColor: "transparent",
            pointBorderColor: randomColor,
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
          labels: this.state.scoreArray[0].worps.map((item, index) => index + 1),
          datasets: datasetsArray,
        };
      },
      options: {
        plugins: {
          legend: { display: true },
        },
      },
    };

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
          <ScoreAddForm parentState={this.state.scoreArray} game={game} setScore={(score) => setScoreAndSetNextPlayer(score)} />
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
                  height={150}
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
  console.log('stateobj', state);
  return ({ game: state.game })
}

export default connect(mapStateToProps, { getGame })(GameDetail)