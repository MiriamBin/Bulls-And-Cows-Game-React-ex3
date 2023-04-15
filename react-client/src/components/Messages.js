import {Alert} from "react-bootstrap";

function Messages(message){
    return(
        <Alert key={'info'} variant={'info'} show={message.message !== ""}>
            <p>{message.message}</p>
        </Alert>
    )
}

export default Messages;