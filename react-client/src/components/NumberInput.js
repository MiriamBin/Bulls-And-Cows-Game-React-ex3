import React from "react";
import {Form} from "react-bootstrap";

function NumberInput(input) {
    const handleChange = (index, e) => {
        const newNumbers = [...input.numbers];
        newNumbers[index] = e.target.value;
        input.setNumbers(newNumbers);
    };

    return (
            <Form.Select
                value={input[0]}
                onChange={(e) => handleChange(input.index, e)}
                className="form-control"
                style={{border: 'solid #BDD452'}}>
                <option value="">Guess...</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </Form.Select>
    );
}

export default NumberInput;

// import React from "react";
// import {Form} from "react-bootstrap";

// function NumberInput({numbers, setNumbers}) {
//
//     const handleChange = (event, index) => {
//         const newNumbers = [...numbers];
//         newNumbers[index] = event.target.value;
//         setNumbers(newNumbers);
//     }
//
//     return (
//         <Form.Group controlId="formGroupNumber">
//             <Form.Label>Enter 4 unique digits:</Form.Label>
//             <div style={{display: 'flex'}}>
//                 <Form.Control type="number" min={0} max={9} value={numbers[0]} onChange={(event) => handleChange(event, 0)} style={{marginRight: '5px'}}/>
//                 <Form.Control type="number" min={0} max={9} value={numbers[1]} onChange={(event) => handleChange(event, 1)} style={{marginRight: '5px'}}/>
//                 <Form.Control type="number" min={0} max={9} value={numbers[2]} onChange={(event) => handleChange(event, 2)} style={{marginRight: '5px'}}/>
//                 <Form.Control type="number" min={0} max={9} value={numbers[3]} onChange={(event) => handleChange(event, 3)} style={{marginRight: '5px'}}/>
//             </div>
//         </Form.Group>
//     );
// }
//
// export default NumberInput;