import React, {useState} from "react";
import Guess from "./Guess";
import {useEffect} from "react";

function Game({setScore, setGameOver}){
    const [message, setMessage] = useState("");
    const [guess, setGuess] = useState(["", "", "", ""]);
    const [bulls, setBulls] = useState(0);
    const [cows, setCows] = useState(0);
    const [target, setTarget] = useState([]);

    useEffect(() => {
        // This function will only run once, at the beginning of the program
        setTarget(generateRandomNumbers());
    }, []);

    function generateRandomNumbers() {
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