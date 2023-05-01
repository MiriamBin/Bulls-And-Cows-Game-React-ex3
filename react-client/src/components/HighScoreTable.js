import {Table} from "react-bootstrap";

/**
 * This component is the table of the high scores.
 * @param scoreData - the data of the high scores
 * @returns {JSX.Element}
 * @constructor
 */
function HighScoreTable(scoreData){
    let tableRows = [];
    /**
     * This function creates a row in the table.
     * @param score - the score object that holds the name and score of each score
     * @param index - the index of the score
     */
    const createRow = (score, index) => {
        tableRows.push(
            <tr className="text-center" key={tableRows.length}>
                <td>{index + 1}</td>
                <td>{score.name}</td>
                <td>{score.score}</td>
            </tr >
        );
    }

    /** This function creates a row in the table for each score. */
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
