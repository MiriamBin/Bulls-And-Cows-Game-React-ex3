import React, {useState, useEffect} from "react";
import Guess from "./Guess";
import GuessTable from "./GuessTable";
import {Col, Container, Row} from "react-bootstrap";
/**
 * This component is responsible for the game logic and holds the guess form and the table of guesses.
 * @returns {JSX.Element} - the game logic
 * @param props  - the props of the component
 */
function Game(props) {
    const [message, setMessage] = useState("");           // the message to the user
    const [guess, setGuess] = useState(["", "", "", ""]); // the current user's guess

    /**
     * This function will run only once, at the beginning of the program.
     */
    useEffect(() => {
        props.setTarget(props.generateRandomNumbers());
    }, []);

    return (
        <Container>
            <Row className="justify-content-center">
                <Col>
                    <Guess numbers={guess}
                           setNumbers={setGuess}
                           message={message}
                           setMessage={setMessage}
                           target={props.target}
                           setGameOver={props.setGameOver}
                           setScore={props.setScore}
                           setGuessesArr={props.setGuessesArr}
                           guessesArr={props.guessesArr}/>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs= "11">
                    <GuessTable guessesArr={props.guessesArr}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Game;