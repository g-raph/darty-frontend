import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { getPlayers } from '../../../redux/actions/playersActions'

class CricketGameAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPlayers: []
        };
    }

    componentDidMount() {
        this.props.getPlayers()
    }

    render() {
        const { players } = this.props.players
        console.log('PLAYERS', players);

        const handleSubmit = (evt) => {
            evt.preventDefault();
            const gameObj = {
                name: new Date(),
                players: this.state.selectedPlayers
            };
            console.log(gameObj);
            axios
                .post('https://darty-backend.herokuapp.com/cricket-games', gameObj)
                .then(response => response.data)
                .then(data => {
                    console.log('IT WORKS!', data);
                    // hier naar detail page navigeren
                });
        }


        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h4">Maak een nieuwe Cricket game aan.</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <form onSubmit={handleSubmit}>
                                        <Label for="Startscore">
                                            Wie speelt er mee?
                                        </Label>
                                        <FormGroup style={{ marginLeft: '1.5rem' }}>
                                            {players.map(item => {
                                                return (
                                                    <div key={item.id}>
                                                        <Input
                                                            id={"check" + item.id}
                                                            name="check"
                                                            type="checkbox"
                                                            value={item}
                                                            onChange={() => this.state.selectedPlayers.push(item)}
                                                        />
                                                        <Label
                                                            check
                                                            for={"check" + item.id}
                                                        >
                                                            {item.Name}
                                                        </Label>
                                                    </div>
                                                );
                                            })}
                                        </FormGroup>
                                        {/* {allPlayers.map(item => {
                return (
                  <label key={item.id}>
                    {item.Name}
                    <input type="checkbox" value={item} onChange={() => form.selectedPlayers.push(item)} />
                  </label>
                );
              })} */}
                                        <Button type="submit">
                                            Let's play!
                                        </Button>
                                    </form>
                                </CardBody>
                            </Card >
                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => ({ players: state.players })

export default connect(mapStateToProps, { getPlayers })(CricketGameAdd)