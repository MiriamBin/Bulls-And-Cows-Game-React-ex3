import {Button, Col, Container, Row} from "react-bootstrap";
import NumberInput from "./NumberInput";
import Messages from "./Messages";
import GuessTable from "./GuessTable";

function Guess(prop){

    //const [lastsGuessesArr, setLastsGuessesArr] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!checkInput() || !checkUniqueNumbers()) {
            return;
        }
        countBullsCows(prop.target, prop.guess);
    }

    const checkUniqueNumbers = () => {
        if (prop.guess.length !== new Set(prop.guess).size) {
            prop.setMessage("Please enter 4 different digits");
            return false;
        }
        return true;
    }

    const checkInput = () => {
        if (prop.guess.some(num => num === "")) {
            prop.setMessage("Please enter 4 numbers");
            return false;
        }
        prop.setMessage("");
        return true;
    }

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

        if (bulls === 4) {  // if all 4 numbers are correct
            prop.setGameOver(true);
            prop.setScore(prop.lastGuessesArr.length + 1);
            return
        }

        prop.setMessage(`Your guess: ${bulls} bulls and ${cows} cows`);
        prop.setLastGuessesArr( [...prop.lastGuessesArr, {guess: prop.guess, bulls: bulls, cows: cows}]);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Container>
                <Row className="m-3">
                    <Col>
                        <NumberInput numbers={prop.guess} setNumbers={prop.setGuess} index = {0}/>
                    </Col>
                    <Col>
                        <NumberInput numbers={prop.guess} setNumbers={prop.setGuess} index = {1}/>
                    </Col>
                    <Col>
                        <NumberInput numbers={prop.guess} setNumbers={prop.setGuess} index = {2}/>
                    </Col>
                    <Col>
                        <NumberInput numbers={prop.guess} setNumbers={prop.setGuess} index = {3}/>
                    </Col>
                </Row>
                <Row className="justify-content-center m-3">
                    <Col className="text-center">
                        <Button style={{border: 'solid #7DB2FF', borderWidth: '1px' ,color: '#7DB2FF'}} variant="outline-primary" type="submit">MOO! </Button>
                    </Col>
                </Row>
                <Messages message = {prop.message}/>
                <GuessTable guessesArr = {prop.lastGuessesArr}/>
            </Container>
        </form>
    );
}
export default Guess;