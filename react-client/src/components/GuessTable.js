import {Table} from "react-bootstrap";

/**
 * This component is the table of the guesses.
 * @param guess - the guess object that holds the guesses array of the bulls and cows of each guess
 * @returns {JSX.Element} - the table of the guesses
 */
function GuessTable(guess) {
   let tableRows = [];
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
    /**
     * This function creates a row in the table for each guess.
     */
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