import {Alert} from "react-bootstrap";

function Messages(message){
    return(
        <Alert className="m-3 text-center" key={message.type} variant={message.type} show={message.message !== ""}>
            {message.message}
        </Alert>
    )
}
export default Messages;
