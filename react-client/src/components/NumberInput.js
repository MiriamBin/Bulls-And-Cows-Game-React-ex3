import { Form } from 'react-bootstrap';

/**
 * This component is the number input of the game.
 * @param input
 * @returns {JSX.Element}
 * @constructor
 */
function NumberInput(input) {
    /**
     * This function handles the change of the input. It updates the numbers array.
     * @param index
     * @param e
     */
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
                style={{border: 'solid #BDD452', borderWidth: '1px'}}>
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
