import {Alert} from "react-bootstrap";

function Messages(message){
    return(
        <Alert className="m-3 text-center" key={'info'} variant={'info'} show={message.message !== ""}>
            {message.message}
        </Alert>
    )
}

export default Messages;