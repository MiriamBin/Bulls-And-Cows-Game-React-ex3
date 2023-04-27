import {Table} from "react-bootstrap";

function HighScoreTable(scoreData){
    let tableRows = [];

    const  createRow = (scoreData) => { //TODO: maybe we dont need it, depends on how we will get the data
        tableRows.push(<tr key={tableRows.length}>
            <td>{scoreData.score}</td>
            <td>{scoreData.name}</td>
        </tr>);
    }

    return(
        <Table>
            <thead>
            <tr>
                <th>Username</th>
                <th>Score</th>
            </tr>
            </thead>
            <tbody>{tableRows}</tbody>
        </Table>
    );
}

export default HighScoreTable;