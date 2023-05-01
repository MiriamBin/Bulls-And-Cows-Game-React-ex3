import React, {useState} from "react";
import {Container, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Game from "./Game";
import Menu from "./Menu";
import WinPage from "./WinPage";
import GameRule from "./GameRule";

/**
 * This component is the controller of the game. It holds the state of the game.
 * @returns {JSX.Element} - the controller of the game
 * @constructor - the controller of the game
 */

function Controller() {

    const [gameOver, setGameOver] = useState(false); // state to check if the game is over
    const [score, setScore] = useState(0);           // state to hold the score of the user
    const [target, setTarget] = useState([]);        // state to hold the target numbers
    const [guessesArr, setGuessesArr] = useState([]);
    const [showRules, setShowRules] = useState(false);

    const generateRandomNumbers = () => {
        const arr = [];
        while (arr.length < 4) {
            const randomNum = Math.floor(Math.random() * 10).toString();
            if (!arr.includes(randomNum)) {
                arr.push(randomNum);
            }
        }
        console.log(arr);
        return arr;
    }

    return (
        <Card style={{ backgroundColor: 'rgba(249,254,238,0.95)', maxWidth: '75%', margin: 'auto'}}>
            <Card.Img variant="top" src="/logo.png"/>
            <Card.Body style={{ display: 'flex', alignItems: 'center'}}>
                <Container>
                    <Row>
                        <Menu setGuessesArr={setGuessesArr}
                              setTarget={setTarget}
                              setGameOver={setGameOver}
                              generateRandomNumbers = {generateRandomNumbers}
                              setShowRules={setShowRules}/>
                    </Row>
                    <Row>
                        {gameOver ? <WinPage score = {score}/> : <Game generateRandomNumbers = {generateRandomNumbers} guessesArr={guessesArr} setGuessesArr={setGuessesArr} setTarget={setTarget} target={target} setScore={setScore} setGameOver={setGameOver}/>}
                    </Row>
                </Container>
                <GameRule show={showRules} onHide={() => setShowRules(false)}/>
            </Card.Body>
        </Card>
    );
}

export default Controller;