import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
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

    const dashboardNASDAQChart = {
      data: (canvas) => {
        return {
          labels: player.worps.map((item, index) => 'worp ' + (index + 1)),
          datasets: [
            {
              data: player.worps.map(item => item.arrowTotal),
              fill: false,
              borderColor: player.color,
              backgroundColor: "transparent",
              pointBorderColor: player.color,
              pointRadius: 4,
              pointHoverRadius: 4,
              pointBorderWidth: 6,
              tension: 0.4,
            }
          ],
        };
      },
      options: {
        plugins: {
          legend: { display: false },
        },
      },
    };

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
          <Row>
            <Col md="12">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">Worp statistieken</CardTitle>
                <p className="card-category">Een overzicht van alle worpen</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboardNASDAQChart.data}
                  options={dashboardNASDAQChart.options}
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
  return ({ player: state.player })
}

export default connect(mapStateToProps, { getPlayer })(PlayerDetail)