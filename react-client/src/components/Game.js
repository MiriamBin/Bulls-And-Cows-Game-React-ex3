import {Container} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import {useState} from "react";
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
    let guessesArr = [];
    console.log("target",target);
function Game(){

    const [guess, setGuess] = useState(["", "", "", ""]);
    const [message, setMessage] = useState("");
    const [bulls, setBulls] = useState(0);
    const [cows, setCows] = useState(0);


    return (
        <Card style={{ backgroundColor: '#fdfef4', maxWidth: '75%', margin: 'auto' }}>
            <Card.Img variant="top" src="/logo.png" />
            <Card.Body style={{ display: 'flex', alignItems: 'center' }}>
                <Container  >
                    <Menu />
                    <br/>
                    <Guess allGuesses = {guessesArr} numbers={guess} setNumbers={setGuess}
                           message = {message} setMessage = {setMessage} target = {target}
                           cows = {cows} setCows = {setCows} bulls = {bulls} setBulls = {setBulls}/>
                    <br/>
                    <Messages message = {message} />
                    <br/>
                    <GuessTable allGuesses = {guessesArr}/>
                </Container>
            </Card.Body>
        </Card>
    );
}
export default Game;