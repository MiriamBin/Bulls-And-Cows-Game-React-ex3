import {Button, Col, Container, Row} from "react-bootstrap";
import NumberInput from "./NumberInput";
import Messages from "./Messages";
import GuessTable from "./GuessTable";

/**
 * This component holds the guess form and the table of guesses.
 * @param props
 * @returns {JSX.Element} - the guess form and the table of guesses
 * @constructor
 */
function Guess(props){

    /**
     * This function handles the submit of the guess form.
     * @param e
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!checkInput() || !checkUniqueNumbers()) {
            return;
        }
        countBullsCows(props.target, props.numbers);
    }

    /**
     * This function checks if the user entered 4 different digits.
     * @returns {boolean}
     */
    const checkUniqueNumbers = () => {
        if (props.numbers.length !== new Set(props.numbers).size) {
            props.setMessage("Please enter 4 different digits");
            return false;
        }
        return true;
    }

    /**
     * This function checks if the user entered 4 digits.
     * @returns {boolean}
     */
    const checkInput = () => {
        if (props.numbers.some(num => num === "")) {
            props.setMessage("Please enter 4 numbers");
            return false;
        }
        else{
            props.setMessage("");
            return true;
        }
    }

    /**
     * This function counts the number of bulls and cows in the user's guess.
     * @param targetArr
     * @param guessArr
     */
    const countBullsCows = (targetArr, guessArr) => {
        let bulls = 0;
        let cows = 0;

        for (let i = 0; i < targetArr.length; i++) {
            if (targetArr[i] === guessArr[i]) {
                bulls++;
            } else if (targetArr.includes(guessArr[i])) {
                cows++;
            }
        }
        if (bulls === 4) {
            props.setGameOver(true);
            props.setScore(props.guessesArr.length + 1);
            return
        }

        props.setMessage(`Your guess: ${bulls} bulls and ${cows} cows`);
        props.setGuessesArr( [...props.guessesArr, {guess: props.numbers, bulls: bulls, cows: cows}]);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Container>
                <Row className="m-3">
                    <Col>
                        <NumberInput numbers={props.numbers} setNumbers={props.setNumbers} index = {0}/>
                    </Col>
                    <Col>
                        <NumberInput numbers={props.numbers} setNumbers={props.setNumbers} index = {1}/>
                    </Col>
                    <Col>
                        <NumberInput numbers={props.numbers} setNumbers={props.setNumbers} index = {2}/>
                    </Col>
                    <Col>
                        <NumberInput numbers={props.numbers} setNumbers={props.setNumbers} index = {3}/>
                    </Col>
                </Row>
                <Row className="justify-content-center m-3">
                    <Col className="text-center">
                        <Button style={{border: 'solid #7DB2FF', borderWidth: '1px' ,color: '#7DB2FF'}} variant="outline-primary" type="submit">MOO! </Button>
                    </Col>
                </Row>
                <Messages message = {props.message} />
                <GuessTable guessesArr = {props.guessesArr}/>
            </Container>
        </form>
    );

}

export default Guess;