import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from 'reactstrap';
import { getGames, getCricketGames } from '../../redux/actions/gamesActions';

class GameList extends Component {
  componentDidMount() {
    this.props.getGames()
    this.props.getCricketGames()
  }
  render() {
    const { games } = this.props.games;
    const { cricketGames } = this.props.cricketGames;
    console.log('propzzz', this.props);
    if (!games || games.length === 0) return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardBody><p>Geen games gevonden</p></CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Double-out Games</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive className='gamelist__table'>
                    <thead className="text-primary">
                      <tr>
                        <th>Game</th>
                        <th>Startscore</th>
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
                            <td>{item.startScore}</td>
                            <td>{item.players.map(player => player.Name + '-')}</td>
                            <td>{item.finished ? <Badge color="secondary">Finished</Badge> : <Badge color="primary">Open</Badge>}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Cricket Games</CardTitle>
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
                      {cricketGames.map((item) => {
                        return (
                          <tr key={item.id}>
                            <td>
                              <NavLink to={'/admin/cricket-game/' + item.id}>
                                Game {item.id} <small>({new Date(item.name).toLocaleString()})</small>
                              </NavLink>
                            </td>
                            <td>{item.players.map(player => player.Name + '-')}</td>
                            <td>{item.finished ? <Badge color="secondary">Finished</Badge> : <Badge color="primary">Open</Badge>}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({ games: state.games, cricketGames: state.cricketGames })

export default connect(mapStateToProps, { getGames, getCricketGames })(GameList)