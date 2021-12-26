import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from 'reactstrap'
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
                  <PlayerAddForm onSubmit={(player) => this.addPlayerToList(player)}/>
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
                            <td><NavLink to={'/admin/player/' + item.id}>{item.Name}</NavLink></td>
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