import React, {useState} from "react";
import {Container, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Game from "./Game";
import Menu from "./Menu";
import WinPage from "./WinPage";
import Messages from "./Messages";

function Controller() {

    const [gameOver, setGameOver] = useState(false);

    return (
        <Card style={{ backgroundColor: '#fdfef4', maxWidth: '75%', margin: 'auto'}}>
            <Card.Img variant="top" src="/logo.png"/>
            <Card.Body style={{ display: 'flex', alignItems: 'center'}}>
                <Container>
                    <Row>
                        <Menu/>
                    </Row>
                    <Row>
                        {!gameOver ? <WinPage/> : <Game gameOver={gameOver} setGameOver={setGameOver}/>}
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default Controller;