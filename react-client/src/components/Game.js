import React, {useState} from "react";
import Guess from "./Guess";
import {useEffect} from "react";

/**
 * This component is responsible for the game logic.
 * @returns {JSX.Element} - the game logic
 * @constructor
 * @param props
 */
function Game(props){
    const [message, setMessage] = useState("");
    const [guess, setGuess] = useState(["", "", "", ""]);

    /**
     * This function will run only once, at the beginning of the program.
     */
    useEffect(() => {
        props.setTarget(props.generateRandomNumbers());
    }, []);

    /**
     * This function generates 4 random numbers, each number is different from the others.
     * @returns {*[]}
     */

    return (
        <Guess numbers={guess}
               setNumbers={setGuess}
               message = {message}
               setMessage = {setMessage}
               target = {props.target}
               setGameOver = {props.setGameOver}
               setScore = {props.setScore}
               setGuessesArr = {props.setGuessesArr}
               guessesArr = {props.guessesArr}
        />
    );
}
export default Game;