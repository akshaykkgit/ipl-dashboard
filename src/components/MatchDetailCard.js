import { React,useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./MatchDetailCard.scss";
export const MatchDetailCard = ({teamName,match}) => {
if(!match) return null;
const otherTeam=match.team1 === teamName ? match.team2 : match.team1;
const otherTeamRoute =`/teams/${teamName}`;
const isMatchWon =teamName === match.winner;
  return (
    
    <div className={isMatchWon ? 'MatchDetailCard win-card' : 'MatchDetailCard loss-card'}>
       <div>
        <h3>Match Details</h3>
        <span className="vs">VS</span> 
        <h4 className="link-to"><Link to={otherTeamRoute} >{otherTeam}</Link></h4>
        <h3 className="match-date">{match.date}</h3>
      </div>

        <div className="additional-detail">
          <h3>First Innnigs</h3>
           <p>{match.team1}</p>
           <h3>Second Innnigs</h3>
           <p>{match.team2}</p>
        </div>

    </div>    


   
   
  );
}