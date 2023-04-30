import React, {useState} from "react";
import {Card, Container, Row} from "react-bootstrap";
import Game from "./Game";
import Menu from "./Menu";
import WinPage from "./WinPage";

function Controller() {

    const [gameOver, setGameOver] = useState(false);
    const [newGame, setNewGame] = useState(true); // TODO: add this to menu and use it to reset the game
    const [score, setScore] = useState(0);

    const handleNewGame = () => {
        setNewGame(false);
        setGameOver(false);
        setScore(0);
    };

    return (
        <Card style={{ backgroundColor: '#fdfef4', maxWidth: '75%', margin: 'auto'}}>
            <Card.Img variant="top" src="/logo.png"/>
            <Card.Body style={{ display: 'flex', alignItems: 'center'}}>
                <Container>
                    <Row>
                        <Menu handleNewGame={handleNewGame}/>
                    </Row>
                    <Row>
                        {gameOver ? <WinPage score = {score}/> : <Game setScore={setScore} setGameOver={setGameOver} newGame={newGame} setNewGame={setNewGame}/>}
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}
export default Controller;