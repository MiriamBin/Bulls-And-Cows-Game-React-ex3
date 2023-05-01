import React, {useState} from "react";
import Guess from "./Guess";


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

function Game({setScore, setGameOver}){
    const [message, setMessage] = useState("");

    const [guess, setGuess] = useState(["", "", "", ""]);
    const [bulls, setBulls] = useState(0);
    const [cows, setCows] = useState(0);

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
                   setGameOver = {setGameOver}
                   setScore = {setScore}
            />
    );
}
export default Game;


