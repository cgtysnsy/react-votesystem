import { useState } from "react";
import { data } from "./data";
import Board from "./Board";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

export default function ScoresBoard() {
  const [teamsData, setTeamsData] = useState(data);

  const plusHandler = (index) => {
    const copyData = [...teamsData];
    copyData[index].votes = copyData[index].votes + 1;

    setTeamsData(copyData);
  };

  return (
    <div className="cards-container">
      <div className="cards">
        {teamsData.map((team, index) => {
          return (
            <Card
              className="strap-card"
              outline
              style={{
                width: "18rem"
              }}
              key={index}
            >
              <img alt="Sample" src={team.img} className="teamimg" />
              <CardBody>
                <CardTitle tag="h5">{team.nameClub}</CardTitle>
                <Button onClick={() => plusHandler(index)}>Vote</Button>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Vote Count : {team.votes}
                </CardSubtitle>
              </CardBody>
            </Card>
          );
        })}
      </div>
      <Board />
    </div>
  );
}
