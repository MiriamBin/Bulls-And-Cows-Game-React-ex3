import {Button, Col, Container, Row} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import React, {useState} from "react";
import Guess from "./Guess";
import Menu from "./Menu";
import Messages from "./Messages";
import GuessTable from "./GuessTable";

function generateRandomNumbers() {
    const arr = [];
    while (arr.length < 4) {
        const randomNum = Math.floor(Math.random() * 10).toString();
        if (!arr.includes(randomNum)) {
            arr.push(randomNum);
        }
    }
    return arr;
}

    let target = generateRandomNumbers();
    console.log("target", target);

function Game(){
    const [message, setMessage] = useState("");

    const [guess, setGuess] = useState(["", "", "", ""]);
    const [bulls, setBulls] = useState(0);
    const [cows, setCows] = useState(0);


    const [gameOver, setGameOver] = useState(false);

    if (gameOver) {
        return ( <>
                        <Messages message={message}/>
                        <Button variant="outline-primary" onClick={() => setGameOver(false) & setMessage("")}>New Game </Button>
                </>
        );
    }

    return (
                <Guess numbers={guess}
                       setNumbers={setGuess}
                       message = {message}
                       setMessage = {setMessage}
                       target = {target}
                       cows = {cows}
                       setCows = {setCows}
                       bulls = {bulls}
                       setBulls = {setBulls}

                       gameOver = {gameOver}
                       setGameOver = {setGameOver}/>
    );
}
export default Game;


