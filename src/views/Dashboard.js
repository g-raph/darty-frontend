import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Table,
} from "reactstrap";
import { getGames } from '../redux/actions/gamesActions';
import { getPlayers } from '../redux/actions/playersActions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getGames()
    this.props.getPlayers()
  }
  render() {
    const { games } = this.props.games;
    const { players } = this.props.players;
    const colorCirlcleStyle = (color) => {
      return ({
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        marginRight: '0.5rem',
        background: color
      });
    };
    console.log(players.map(player => player.wins));
    const winsPieChart = {
      data: (canvas) => {
        return {
          labels: players.map(player => player.Name),
          datasets: [
            {
              label: "Wins per speler",
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: players.map(player => player.color),
              borderWidth: 0,
              data: players.map(player => player.wins.length),
            },
          ],
        };
      },
      options: {
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true },
        },
        maintainAspectRatio: true,
        pieceLabel: {
          render: "percentage",
          fontColor: ["white"],
          precision: 2,
        },
        scales: {
          y: {
            ticks: {
              display: false,
            },
            grid: {
              drawBorder: false,
              display: false,
            },
          },
          x: {
            barPercentage: 1.6,
            grid: {
              drawBorder: false,
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        },
      },
    };
    if (!games || games.length === 0) return <p>No games, sorry</p>;
    return (
      <>
        <div className="content">
          <Row>
            <Col style={{ textAlign: 'center' }}>
              <h2>Hallo Gunter</h2>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Spelers</CardTitle>
                </CardHeader>
                <CardBody>
                <Table responsive className='playerlist__table'>
                    <thead className="text-primary">
                      <tr>
                        <th>Naam</th>
                        <th>Aantal games</th>
                        <th>Wins</th>
                        <th className="text-right">Win percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {players.map((item) => {
                        return (
                          <tr key={item.id} >
                            <td><NavLink style={{display: 'flex', alignItems: 'center'}} to={'/admin/player/' + item.id}><div className='color-circle' style={colorCirlcleStyle(item.color)}></div> {item.Name}</NavLink></td>
                            <td>{item.games.length}</td>
                            <td>{item.wins.length}</td>
                            <td className="text-right">{item.games.length > 0 ? ((item.wins.length / item.games.length) * 100).toFixed(0) + '%' : '-'}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter>
                <NavLink to={'/admin/players'}>
                    Naar de spelerslijst
                  </NavLink>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Games</CardTitle>
                </CardHeader>
                <CardBody>
                <Table responsive className='gamelist__table'>
                    <thead className="text-primary">
                      <tr>
                        <th>Game</th>
                        <th>Players</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {games.map((item) => {
                        return (

                          <tr key={item.id}>
                            <td>
                              <NavLink to={'/admin/game/' + item.id}>
                                Game {item.id} <small>({new Date(item.name).toLocaleString()})</small>
                              </NavLink>
                            </td>
                            <td>{item.players.length}</td>
                            <td>{item.finished ? 'Finished' : 'Open'}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter>
                  <NavLink to={'/admin/games'}>
                    Naar alle games
                  </NavLink>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Winner Statistics</CardTitle>
                  <p className="card-category">Who has the most wins?</p>
                </CardHeader>
                <CardBody style={{ height: "266px" }}>
                  <Pie
                    data={winsPieChart.data}
                    options={winsPieChart.options}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-bars" /> Percentage van wins per persoon
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ games: state.games, players: state.players })

export default connect(mapStateToProps, {getGames, getPlayers})(Dashboard)
