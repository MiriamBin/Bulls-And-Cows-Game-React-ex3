import {Alert, Col, Form, Row} from "react-bootstrap";

function WinPage() {
    function handleResponse(response) {
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        //console.log(response);
        return response.json(); // Parse the JSON response
    }

    function handleJson(data) {
        // Handle the parsed JSON data received from the server

        //TODO: do something with the data
        console.log('Server Response:', data);



    }

    function handleError(error) {
        return <Alert className=" danger m-3 text-center"> {error.toString()}</Alert> //TODO: use this somewhere and maybe change the message
    }

    function handleFormSubmissionPost(event) {
        event.preventDefault();
        const name = event.target.elements.name.value.trim();
        let params = {
            score: 1, //TODO: change the score
            name: name
        };
        fetch("/java_react_war/api/highscores",{
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

  return (
    <>
        <Row>
            <Alert className="m-3 text-center">You Win!</Alert>
        </Row>
        <Form className="border p-3" onSubmit={handleFormSubmissionPost}>
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <Form.Control type="text" placeholder={"Enter your name"} name="name" />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="1">
                    <button type="submit" className="btn btn-primary m-3">Send</button>
                </Col>
            </Row>
        </Form>
    </>
  )
}

export default WinPage;