import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from 'reactstrap';
import { getGames } from '../../redux/actions/gamesActions';

class GameList extends Component {
  componentDidMount() {
    this.props.getGames()
  }
  render() {
    const { games } = this.props.games;
    if (!games || games.length === 0) return <p>No games, sorry</p>;
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

const mapStateToProps = (state) => ({ games: state.games })

export default connect(mapStateToProps, { getGames })(GameList)