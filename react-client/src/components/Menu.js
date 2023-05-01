import {Button, Col, Container, Row} from "react-bootstrap";

/**
 * This component is the menu of the game. It holds the buttons of the menu. new game and game rules.
 * @returns {JSX.Element}
 * @constructor
 */
function Menu(props){

    /**
     * This function starts a new game.
     * @param event
     */
    const newGame = (event) => {
        event.preventDefault();
        props.setGameOver(false);
        props.setTarget(props.generateRandomNumbers());
        props.setGuessesArr([]);
    }

    /**
     * This function shows the game rules.
     * @param event
     */
    const showRules = (event) => {
        event.preventDefault();
        props.setShowRules(true);
    }

    return(
        <Container>
            <Row className="justify-content-center">
                <Col md="auto">
                    <Button style={{border: 'solid #5F5F83', borderWidth: '1px' ,color: '#5F5F83'}} variant="outline-secondary" onClick = {newGame}>New Game </Button>
                </Col>
                <Col md="auto">
                    <Button style={{border: 'solid #5F5F83', borderWidth: '1px' ,color: '#5F5F83'}} variant="outline-secondary" onClick = {showRules}>Game Rules </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Menu;