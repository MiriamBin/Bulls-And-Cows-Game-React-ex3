import {Table} from "react-bootstrap";
import {useState} from "react";
import {forEach} from "react-bootstrap/ElementChildren";

function GuessTable(guess) {
   let tableRows = [];
    //const [tableRows, settableRows] = useState([]);

    const  createRow = (guess) => {
        let number = guess.guess.join(" ");
        tableRows.push(<tr key={tableRows.length}>
            <td>{number}</td>
            <td>{guess.cows}</td>
            <td>{guess.bulls}</td>
        </tr>);
    }

    guess.guessesArr.forEach(createRow);

    return (
        <Table>
            <thead>
            <tr>
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