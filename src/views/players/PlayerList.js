import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Collapse, Row, Table } from 'reactstrap'
import { getPlayers } from '../../redux/actions/playersActions'
import PlayerAddForm from './PlayerAddForm'

class PlayerList extends Component {

  componentDidMount() {
    this.props.getPlayers()
  }
  // componentDidUpdate() {
  //   this.props.getPlayers()
  // }

  addPlayerToList(player) {
    this.props.getPlayers()
  }

  render() {
    const { players } = this.props.players
    const colorCirlcleStyle = (color) => {
      return ({
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        marginRight: '0.5rem',
        background: color
      });
    };
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Spelers</CardTitle>
                </CardHeader>
                <CardBody>
                <div>
                  <Button
                    color="primary"
                    onClick={function noRefCheck(){}}
                    style={{
                      marginBottom: '1rem'
                    }}
                  >
                    Toggle
                  </Button>
                  <Collapse>
                    <PlayerAddForm onSubmit={(player) => this.addPlayerToList(player)}/>
                  </Collapse>
                </div>
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
              </Card>
            </Col>
          </Row>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({ players: state.players })

export default connect(mapStateToProps, { getPlayers })(PlayerList)