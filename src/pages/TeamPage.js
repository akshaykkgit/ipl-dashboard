import { React,useEffect,useState} from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSamllCard';
import { useParams } from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart';
import './TeamPage.scss';
import { Link } from 'react-router-dom';
export const TeamPage = () => {

    const [team,setTeam] =useState({matches: []});
    const {teamName} =useParams();
    useEffect(
        () =>{

            const fetchMatches = async () =>{
            const response =await fetch(`${process.env.REACT_APP_ROOT_URL}/team/${teamName}`);
            const data= await response.json();
            setTeam(data);
            
            };
            fetchMatches();
        },
        [teamName]
       
       
       
    );
    if(!team || !team.teamName) {
       return <h1>Team Not Found</h1>
    }
    

  return (
    <div className="TeamPage">
        <div className="team-name-section">
         <h1 className="team-name">{team.teamName}</h1>
        </div>
        <div className="win-loss-section">Win / Losses
        <PieChart
  data={[
    { title: 'Loss', value: team.totalMatches-team.totalWins, color: 'rgb(243, 47, 47)' },
    { title: 'Wins', value: team.totalWins, color: 'lightgreen' }
   
  ]}
/>;

        </div>
        <div className="match-details-section">
           <h1>Latest Matches </h1>
           <MatchDetailCard  teamName={team.teamName} match={team.matches[0]}/>
        </div>
        {
            team.matches.slice(1).map(match=> <MatchSmallCard teamName={team.teamName} match={match} />)
        }
        <div className="more-link">
          <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>more ></Link>
        </div> 
   
    </div>
  );
}