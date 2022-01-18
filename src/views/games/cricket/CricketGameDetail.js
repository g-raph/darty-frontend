import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from 'reactstrap';
// import ScoreAddForm from './ScoreAddForm';
import { getCricketGame } from '../../../redux/actions/gamesActions';
// import { Line } from 'react-chartjs-2';

class CricketGameDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreArray: []
    };
  }

  componentDidMount() {
    const pageId = window.location.pathname.slice(20);
    this.props.getCricketGame(pageId);
  }

  render() {
    const { cricketGame } = this.props.cricketGame;

    // const arrangeScores = () => {
    //   if (cricketGame) {
    //     const players = cricketGame.players;
    //     const cricketScoreArray = cricketGame.cricketScores;
    //     const tempArray = [];
    //     players.forEach(player => {
    //       const cricketScores = [];
    //       cricketScoreArray.forEach(score => {
    //         if (player.id === score.player) {
    //           cricketScores.push(score);
    //         }
    //       });
    //       const obj = { ...player, cricketScores: cricketScores };
    //       tempArray.push(obj);
    //     });
    //     this.state = {
    //       scoreArray: tempArray
    //     };
    //   }

    // }

    if (!cricketGame || cricketGame.length === 0) {
      return <p>No game, sorry</p>;
    } else {
      // arrangeScores();
      // console.log('STATE', this.state);
    }
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h2">Game {cricketGame.id} <small>({new Date(cricketGame.name).toLocaleString()})</small></CardTitle>
                  {/* {handleOpenOrFinish()} */}
                </CardHeader>
                <CardBody>
                  {/* <div className="game-detail--left">bord hier</div> */}
                  <div className="game-detail--right">
                    <CardTitle tag="h3">{cricketGame.players[cricketGame.currentPlayerIndex].Name} is aan de beurt</CardTitle>
                    <Table responsive>
                      <thead className="text-primary">
                        <tr>
                          <th></th>
                          {cricketGame.players.map((item) => {
                            return (
                              <th key={item.id} style={{ color: item.color }}>{item.Name}</th>
                            );
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>20</td>
                          {cricketGame.players.map((item) => {
                            return (
                              <th key={item.id} style={{ color: item.color }}>
                                <button onClick={() => this.setState({ count: 1 })}>
                                  Click me!
                                </button>
                              </th>
                            );
                          })}
                        </tr>
                        <tr>
                          <td>19</td>
                          {cricketGame.players.map((item) => {
                            return (
                              <th key={item.id} style={{ color: item.color }}>{item.Name}</th>
                            );
                          })}
                        </tr>
                        <tr>
                          <td>18</td>
                          {cricketGame.players.map((item) => {
                            return (
                              <th key={item.id} style={{ color: item.color }}>{item.Name}</th>
                            );
                          })}
                        </tr>
                        <tr>
                          <td>17</td>
                          {cricketGame.players.map((item) => {
                            return (
                              <th key={item.id} style={{ color: item.color }}>{item.Name}</th>
                            );
                          })}
                        </tr>
                        <tr>
                          <td>16</td>
                          {cricketGame.players.map((item) => {
                            return (
                              <th key={item.id} style={{ color: item.color }}>{item.Name}</th>
                            );
                          })}
                        </tr>
                        <tr>
                          <td>15</td>
                          {cricketGame.players.map((item) => {
                            return (
                              <th key={item.id} style={{ color: item.color }}>{item.Name}</th>
                            );
                          })}
                        </tr>
                        <tr>
                          <td>BULL</td>
                          {cricketGame.players.map((item) => {
                            return (
                              <th key={item.id} style={{ color: item.color }}>{item.Name}</th>
                            );
                          })}
                        </tr>

                        {/* {this.state.scoreArray.map((item, index) => {
                    return (
                      <td key={index} style={{verticalAlign: 'top'}}>
                          item.id
                        <h5>{cricketGame.startScore}</h5>
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
                  })} */}
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
  return ({ cricketGame: state.cricketGame })
}

export default connect(mapStateToProps, { getCricketGame })(CricketGameDetail)