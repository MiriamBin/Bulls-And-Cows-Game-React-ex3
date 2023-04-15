import {Button, Col, Container, Row} from "react-bootstrap";
import React from "react";
import NumberInput from "./NumberInput";
import {forEach} from "react-bootstrap/ElementChildren";

function Guess(guess){
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!checkInput() || !checkUniqueNumbers()) {
            return;
        }
        countBullsCows(guess.target, guess.numbers);
    }

    const checkUniqueNumbers = () => {
        if (guess.numbers.length !== new Set(guess.numbers).size) {
            guess.setMessage("Please enter 4 different digits");
            return false;
        }
        return true;
    }

    const checkInput = () => {
        let numbers = guess.numbers;
        if (numbers.some(num => num === "")) {
            guess.setMessage("Please enter 4 numbers");
            return false;
        }
        else{
            guess.setMessage("");
            return true;
        }
    }

    const countBullsCows = (targetArr, guessArr) => {
        let bulls = 0;
        let cows = 0;
        for (let i = 0; i < targetArr.length; i++) {
            if (targetArr[i] === guessArr[i]) {
                guess.setBulls(bulls++);
            } else if (targetArr.includes(guessArr[i])) {
                guess.setCows(cows++);
            }
        }
        guess.setMessage(`Your guess: ${bulls} bulls and ${cows} cows`);
        guess.allGuesses.push({guess: guess.numbers, bulls: bulls, cows: cows});
    }


    return (
        <form onSubmit={handleSubmit}>
            <Container>
                <Row>
                    <Col>
                        <NumberInput numbers={guess.numbers} setNumbers={guess.setNumbers} index = {0}/>
                    </Col>
                    <Col>
                        <NumberInput numbers={guess.numbers} setNumbers={guess.setNumbers} index = {1}/>
                    </Col>
                    <Col>
                        <NumberInput numbers={guess.numbers} setNumbers={guess.setNumbers} index = {2}/>
                    </Col>
                    <Col>
                        <NumberInput numbers={guess.numbers} setNumbers={guess.setNumbers} index = {3}/>
                    </Col>
                </Row>
                <br/>
                <Row className="justify-content-center">
                    <Col>
                        <Button type="submit">GO!</Button>
                    </Col>
                </Row>
            </Container>
        </form>
    );

}

export default Guess;