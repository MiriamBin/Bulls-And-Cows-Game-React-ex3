import {Alert, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";
import Messages from "./Messages";
import HighScoreTable from "./HighScoreTable";

function WinPage({score}) {

    const [errorMessage, setErrorMessage] = useState("");
    const [scores, setScores] = useState([]);
    const [showHighScores, setShowHighScores] = useState(false);

    function handleResponse(response) {
        if (!response.ok) {
            setErrorMessage("MOO! Something went wrong. Please try again later.");
            throw new Error("HTTP error, status = " + response.status);
        }
        //console.log(response);
        return response.json(); // Parse the JSON response
    }

    function handleJson(data) {
        // Handle the parsed JSON data received from the server
        setScores(data);
        setShowHighScores(true);
        //TODO: do something with the data
        console.log('Server Response:', data);
    }

    function handleError(error) {
        return <Alert className=" danger m-3 text-center"> {error.toString()}</Alert> //TODO: use this somewhere and maybe change the message
    }

    function validateName(userName){
        const regex = /^[A-Z a-z]+$/; // regex to match only letters (upper or lower case)
        if(!regex.test(userName)){
            setErrorMessage("Name must contain only letters");
            console.log("error");
            return false;
        }
        return true;
    }

    function handleFormSubmissionPost(event) {
        setErrorMessage("");
        event.preventDefault();
        const name = event.target.elements.name.value.trim();

        if (validateName(name)) {
            let params = {
                score: score, //TODO: change the score
                name: name
            };
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