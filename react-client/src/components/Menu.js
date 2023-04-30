import {Button, Col, Container, Row} from "react-bootstrap";

function Menu({ handleNewGame }) {
    const showRules = () => {
        console.log("show Rules");
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md="auto">
                    <Button style={{border: 'solid #5F5F83', borderWidth: '1px' ,color: '#5F5F83'}} variant="outline-secondary" onClick = {handleNewGame}>New Game </Button>
                </Col>
                <Col md="auto">
                    <Button style={{border: 'solid #5F5F83', borderWidth: '1px' ,color: '#5F5F83'}} variant="outline-secondary" onClick = {showRules}>Game Rules </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Menu;