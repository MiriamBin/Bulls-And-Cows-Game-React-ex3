import {Alert} from "react-bootstrap";

/**
 * This component is the messages of the game.
 * @param message
 * @returns {JSX.Element}
 * @constructor
 */
function Messages(message){

    return(
        <Alert className="m-3 text-center" key={message.type} variant={message.type} show={message.message !== ""}>
            {message.message}
        </Alert>
    )
}

export default Messages;