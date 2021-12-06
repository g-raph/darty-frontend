import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from 'reactstrap';
import { getGames } from '../redux/actions/gamesActions';

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
                        <th className="text-right">Players</th>
                      </tr>
                    </thead>
                    <tbody>
                      {games.map((item) => {
                        return (

                          <tr key={item.id}>
                            <td>
                              <NavLink to={'/admin/game/' + item.id}>
                                {new Date(item.name).toLocaleString()}
                              </NavLink>
                            </td>
                            <td className="text-right">0</td>
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