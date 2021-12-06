import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from 'reactstrap';
import { getPlayer } from '../../redux/actions/playersActions';

class PlayerDetail extends Component {
  componentDidMount() {
    const pageId = window.location.pathname.slice(14);
    this.props.getPlayer(pageId);
  }
  render() {
    const { player } = this.props.player;
    console.log('props', this.props);
    if (!player || player.length === 0) return <p>No player, sorry</p>;
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">{player.Name}</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="player-detail--right">
                    <Table responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>Gespeelde games</th>
                        </tr>
                      </thead>
                      <tbody>
                        {player.games.map((item) => {
                          return (
                            <tr key={item.id}>
                              <td>
                                <NavLink to={'/admin/game/' + item.id}>
                                  {new Date(item.name).toLocaleString()}
                                </NavLink>
                              </td>
                            </tr>
                          );
                        })}
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
  return ({ player: state.player })
}

export default connect(mapStateToProps, { getPlayer })(PlayerDetail)