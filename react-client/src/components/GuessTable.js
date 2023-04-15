import {Table} from "react-bootstrap";

function GuessTable(guesses) {
    let rows = [];

    const  createRow = (guess) => {
        // const number = guess.allGuesses.join(" ");
        return (
            <tr key = {guesses.allGuesses.length}>
                <td>{""}</td>
                <td>{guess.cows}</td>
                <td>{guess.bulls}</td>
            </tr>
        );
    }

    guesses.allGuesses.forEach((guess) => {
        console.log("forEach GuessTable ")
        rows.push(createRow(guess));
    });

    console.log("guesses in GuessTable", guesses.allGuesses);

    return (
        <Table>
            <thead>
            <tr>
                <th>Guess</th>
                <th>Bulls</th>
                <th>Cows</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    );
}
export default GuessTable;