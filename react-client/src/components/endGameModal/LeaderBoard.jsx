import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

//get leaderboard
const LeaderBoardWrapper = styled.div`
  background-color: rgb(245, 184, 79);
  width: 340px;
  height: 60%;
  font-size: 15px;
  border-radius: 10px;
  /* color: maroon; */
  text-align: center;
  box-sizing: border-box;
`;

const TableHeaders = styled.th`
  font-size: 18px;
  padding: 1em;
  text-align: center;
`;

const Title = styled.caption`
  font-size: 24px;
  padding: 20px 20px 0 20px;
  text-decoration: underline;
  text-align: center;
`;

const LeaderBoard = ({ scores }) => {
  debugger;
  return (
    <LeaderBoardWrapper>
      <table>
      <Title>Leaderboard:</Title>
      <thead>
        <tr>
          <TableHeaders>Player</TableHeaders>
          <TableHeaders>Score</TableHeaders>
        </tr>
      </thead>
        <tbody>
          {
            scores.map(userscore => (
              <tr>
                <td>{userscore.username}</td>
                <td>{userscore.score}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </LeaderBoardWrapper>
  )
}

export default LeaderBoard;