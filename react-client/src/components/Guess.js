import {Button, Col, Container, Form, Row} from "react-bootstrap";
import NumberInput from "./NumberInput";
import Messages from "./Messages";

/**
 * This component holds the guess form and messages to the user.
 * @param props
 * @returns {JSX.Element} - the guess form and the table of guesses
 * @constructor
 */
function Guess(props){
    const NUM_OF_DIGITS = 4; // the number of digits in the guess
    /**
     * This function handles the submit of the guess form.
     * @param e - the event
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
     * @returns {boolean} - true if the user entered 4 different digits, false otherwise
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
     * @returns {boolean} - true if the user entered 4 digits, false otherwise
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
     * @param targetArr - the target array
     * @param guessArr - the user's current guess array
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
        if (bulls === NUM_OF_DIGITS) {
            props.setGameOver(true);
            props.setScore(props.guessesArr.length + 1);
            return
        }

        props.setMessage(`Your guess: ${bulls} bulls and ${cows} cows`);
        props.setGuessesArr( [...props.guessesArr, {guess: props.numbers, bulls: bulls, cows: cows}]);
    }

    return (
        <Form onSubmit={handleSubmit}>
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
            </Container>
        </Form>
    );
}

export default Guess;