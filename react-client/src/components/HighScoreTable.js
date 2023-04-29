import {Table} from "react-bootstrap";

function HighScoreTable(scoreData){
    let tableRows = [];

    const createRow = (score, index) => {
        tableRows.push(
            <tr className="text-center" key={tableRows.length}>
                <td>{index + 1}</td>
                <td>{score.name}</td>
                <td>{score.score}</td>
            </tr >
        );
    }
    scoreData.scores.forEach(createRow);

    return(
        <Table striped bordered hover>
            <thead>
            <tr className="text-center">
                <th>Place</th>
                <th>Username</th>
                <th>Score</th>
            </tr>
            </thead>
            <tbody>{tableRows}</tbody>
        </Table>
    );
}

export default HighScoreTable;
