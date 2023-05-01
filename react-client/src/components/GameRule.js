import Modal from 'react-bootstrap/Modal';

/**
 * This component is the game rules modal.
 * @param props - the props of the component
 * @returns {JSX.Element} - the game rules modal
 * @constructor - the game rules modal
 */
function GameRule(props) {
    return (
        <Modal
            {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h4>Rule Game</h4>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>Description</h6>
                <p>
                    Bulls and Cows is a logic game to guess numbers. The numbers have to be with four digits and
                    the digits must be all different. The game is played by two players and they take turns to try to
                    guess their opponent's number. The answering player responds with the number of matching digits.
                    If they are in their right positions, they are "bulls"; if in different positions, they are "cows".
                </p>
                <h6>Example:</h6>
                <p>
                    If the player's number is 7059
                    And the opponent asks how many matches are there in 7890
                    The answer is 1 "bull" and 2 "cows".
                </p>
            </Modal.Body>
        </Modal>
    );
}

export default GameRule;