import React, { Component } from "react";
import { data } from "./data";
//import ScoresBoard from "./ScoresBoard";

class Board extends Component {
  constructor() {
    super();
    this.state = {
      teams: data
    };
  }
  render() {
    const { teams } = this.state;
    const voteData = teams.map((team) => team.votes);

    voteData.sort((a, b) => a - b).reverse();
    const numberOne = teams.find((team) => voteData[0] === team.votes);
    const numberTwo = teams.find((team) => voteData[1] === team.votes);
    const numberThree = teams.find((team) => voteData[2] === team.votes);

    //voteData.sort().reverse();
    //const { id, img, nameClup, votes } = voteData;
    //var highest = Math.max.apply(voteData);
    //console.log(highest);

    return (
      <div>
        <caption>LEADERBOARD</caption>
        <table>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col"></th>
              <th scope="col">Clup Name</th>
              <th scope="col">Votes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <img
                  src={numberOne.img}
                  alt={numberOne.nameClub}
                  className="imgmini"
                />
              </td>
              <td>{numberOne.nameClub}</td>
              <td> {voteData[0]}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <img
                  src={numberTwo.img}
                  alt={numberTwo.nameClub}
                  className="imgmini"
                />
              </td>
              <td>{numberTwo.nameClub}</td>
              <td> {voteData[1]}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <img
                  src={numberThree.img}
                  alt={numberThree.nameClub}
                  className="imgmini"
                />
              </td>
              <td>{numberThree.nameClub}</td>
              <td> {voteData[2]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Board;

/*

{voteData[0]} {voteData[1]} {voteData[2]}
        {numberOne.id}
 <table>
          <caption>LEADERBOARD</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col"></th>
              <th scope="col">Clup Name</th>
              <th scope="col">Votes</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => {
              return (
                <tr key={team.id}>
                  <td>1</td>
                  <td>
                    <img
                      src={team.img}
                      alt={team.nameClub}
                      style={styles.imgmini}
                    />
                  </td>

                  <td>{team.nameClub}</td>
                  <td> {voteData[0]}</td>
                </tr>
              );
            })}
            <tr>
              <td>
                <img src="" alt="" />
              </td>
              <td>1</td>
              <td>"clupname"</td>
              <td>"votes"</td>
            </tr>
            <tr>
              <td>
                <img src="" alt="" />
              </td>
              <td>1</td>
              <td>"clupname"</td>
              <td>"votes"</td>
            </tr>
          </tbody>
        </table>




{
    const { teams } = this.state;

    return (
      <div>
        {teams.map((team) => {
          var newArr = [];
          newArr.push(team);
          console.log(team.id.nameClub);
          return (
            <div key={team.id}>
              <h5>{team.nameClub}</h5>
            </div>
          );
        }, 0)}
      </div>
    );
  }


    for (let i = 0; i < teams.length; i++) {
      var newArr = [];
      var dataVote = teams[i]["votes"];
      newArr.push(dataVote);
      console.log(newArr[0]);
    }

 <h5>{team[index].votes}</h5>
              <h3>{team.nameClub}</h3>


              <div>
                {teams.find((obj) => {
                  if (obj.id === 1) {
                    var dataOne = obj.votes;
                    console.log(obj.votes);
                  } else if (obj.id === 2) {
                    var dataTwo = obj.votes;
                    console.log(obj.votes);
                  } else if (obj.id === 3) {
                    var dataThree = obj.votes;
                    console.log(obj.votes);
                  }
                })}
              </div>
              */
