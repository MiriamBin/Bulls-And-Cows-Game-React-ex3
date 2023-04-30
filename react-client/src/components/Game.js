import React, { useEffect, useState } from "react";
import Guess from "./Guess";

function Game({ setScore, setGameOver, setNewGame, newGame }) {
    const [message, setMessage] = useState("");
    const [guess, setGuess] = useState(["", "", "", ""]);
    const [lastGuessesArr, setLastGuessesArr] = useState([]);
    const [target, setTarget] = useState(generateRandomNumbers());

    useEffect(() => {
        if (newGame) {
            setGuess(["", "", "", ""]);
            setLastGuessesArr([]);
            setTarget(generateRandomNumbers());
            console.log(target)
            setNewGame(false);
            setGameOver(false);
            setScore(0);
        }
    }, [newGame, setNewGame, setGameOver, setScore, target, setTarget ]);

    //console.log(target) //TODO: change place.
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

    return (
        <>
            <Guess
                guess={guess}
                setGuess={setGuess}
                message={message}
                setMessage={setMessage}
                lastGuessesArr={lastGuessesArr}
                setLastGuessesArr={setLastGuessesArr}
                target={target}
                setGameOver={setGameOver}
                setScore={setScore}
            />
        </>
    );
}

export default Game;
