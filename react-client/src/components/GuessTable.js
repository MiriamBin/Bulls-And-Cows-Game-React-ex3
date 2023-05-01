import {Table} from "react-bootstrap";

/**
 * This component is the table of the guesses.
 * @param guess
 * @returns {JSX.Element}
 * @constructor
 */
function GuessTable(guess) {
   let tableRows = [];
    //const [tableRows, settableRows] = useState([]); // TODO:

    /**
     * This function creates a row in the table.
     * @param guess
     */
    const  createRow = (guess) => {
        let number = guess.guess.join(" ");
        tableRows.unshift(
            <tr className="text-center" key={tableRows.length}>
            <td>{number}</td>
            <td>{guess.bulls}</td>
            <td>{guess.cows}</td>
        </tr>);
    }
    guess.guessesArr.forEach(createRow);

    return (
        <Table striped bordered hover>
            <thead>
            <tr className="text-center" key={tableRows.length}>
                <th>Guess</th>
                <th>Bulls</th>
                <th>Cows</th>
            </tr>
            </thead>
            <tbody>{tableRows}</tbody>
        </Table>
    );
}
export default GuessTable;