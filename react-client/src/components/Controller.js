import generateRandomNumbers from "./Game";
import Game from "./Game";
import Card from "react-bootstrap/Card";
import {Container, Row} from "react-bootstrap";
import Menu from "./Menu";
import Guess from "./Guess";
import React from "react";

function Controller(){
    /**/
    return (
        <Card style={{ backgroundColor: '#fdfef4', maxWidth: '75%', margin: 'auto' }}>
            <Card.Img variant="top" src="/logo.png" />
            <Card.Body style={{ display: 'flex', alignItems: 'center' }}>
                <Container>
                    <Row>
                        <Menu/>
                    </Row>
                    <Row>
                        <Game/>
                    </Row>
                </Container>
            </Card.Body>
        </Card>

    );
}

export default Controller;