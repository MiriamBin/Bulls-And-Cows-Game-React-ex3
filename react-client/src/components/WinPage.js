import {Alert, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";
import Messages from "./Messages";
import HighScoreTable from "./HighScoreTable";

/**
 * This component is responsible for the win page
 * @param score - the score of the user
 * @returns {JSX.Element} - the win page
 * @constructor
 */
function WinPage({score}) {
    const [errorMessage, setErrorMessage] = useState("");
    const [scores, setScores] = useState([]);
    const [showHighScores, setShowHighScores] = useState(false);

    /**
     * This function handles the response from the server
     * @param response - the response from the server
     * @returns {*} - the parsed JSON data received from the server
     */
    function handleResponse(response) {
        if (!response.ok) {
            throw new Error(" MOO! Something went wrong. Please try again later.");
        }
        return response.json(); // Parse the JSON response
    }

    /**
     * This function handles the parsed JSON data received from the server
     * @param data - the parsed JSON data received from the server
     */
    function handleJson(data) {
        // Handle the parsed JSON data received from the server
        setScores(data);
        setShowHighScores(true);
    }

    /**
     * This function handles the error message
     * @param error - the error message
     */
    function handleError(error) {
        setErrorMessage(error.toString()); //TODO: use this somewhere and maybe change the message
    }

    /**
     * This function checks if the user's name is valid (only letters).
     * @param userName
     * @returns {boolean}
     */
    function validateName(userName){
        const regex = /^[A-Z a-z]+$/; // regex to match only letters (upper or lower case)
        if(!regex.test(userName)){
            setErrorMessage("Name must contain only letters");
            return false;
        }
        return true;
    }

    /**
     * This function handles the submission of the form using POST method to the server and sends the user's name and score.
     * @param event - the event of the form submission
     */
    function handleFormSubmissionPost(event) {
        setErrorMessage("");
        event.preventDefault();
        const name = event.target.elements.name.value.trim();

        if (validateName(name)) {
            let params = {
                score: score,
                name: name
            };
            // Send the request with fetch() method
            fetch("/java_react_war/api/highscores", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'datatype': 'json'
                },
                body: new URLSearchParams(params).toString()
            })
                .then(handleResponse)
                .then(handleJson)
                .catch(handleError);
        }
    }

    return (
    <>
        <Row>
            <Alert className="m-3 text-center">You Win! your score is {score}</Alert>
        </Row>

        <Row className="justify-content-md-center">
            <Col xs lg="10">
                {showHighScores ? <HighScoreTable scores={scores}/> :
                    <Form className="border p-3" onSubmit={handleFormSubmissionPost}>
                    <Row className="justify-content-md-center">
                        <Col xs lg="6">
                            <Form.Control type="text" placeholder={"Enter your name"} name="name" />
                        </Col>
                    </Row>
                    <Col className="row-justify-content-md-center row-cols-xs-lg-6">
                        <Messages message={errorMessage} type={"danger"}/>
                    </Col>
                    <Row className="justify-content-md-center">
                        <Col xs lg="1">
                            <button type="submit" className="btn btn-primary m-3">Send</button>
                        </Col>
                    </Row>
                </Form>}
            </Col>

        </Row>
    </>
  )
}

export default WinPage;