import {Button, Col, Container, Row} from "react-bootstrap";

function Menu(){

    const newGame = (event) => {
        event.preventDefault();
        console.log("new game");
    }

    const showRules = (event) => {
        event.preventDefault();
        console.log("show Rules");
    }

    return(
        <Container>
            <Row className="justify-content-center">
                <Col md="auto">
                    <Button variant="outline-primary" onClick = {newGame}>New Game </Button>
                </Col>
                <Col md="auto">
                    <Button variant="outline-primary" onClick = {showRules}>Game Rules </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Menu;