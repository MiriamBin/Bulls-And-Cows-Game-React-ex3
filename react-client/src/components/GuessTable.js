import {Table} from "react-bootstrap";

function GuessTable(guess) {
   let tableRows = [];
    //const [tableRows, settableRows] = useState([]); // TODO:

    const  createRow = (guess) => {
        let number = guess.guess.join(" ");
        tableRows.unshift(<tr key={tableRows.length}>
            <td>{number}</td>
            <td>{guess.bulls}</td>
            <td>{guess.cows}</td>
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