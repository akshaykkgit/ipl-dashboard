import { React,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MatchSmallCard.scss';

export const MatchSmallCard =({teamName,match}) => {

if(!match) return null;
const otherTeam=match.team1 === teamName ? match.team2 : match.team1; 
const otherTeamRoute =`/teams/${otherTeam}`;
const isMatchWon =teamName === match.winner;
  return (
    <div className={isMatchWon ? 'MatchSmallCard win-card' : 'MatchSmallCard loss-card'}>

        <h4>VS<Link to={otherTeamRoute} className= "smaillcard-link"> {otherTeam}</Link></h4>
        <h3>Winner is {match.winner}</h3>
        
   
    </div>
  );
}