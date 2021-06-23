import { React,useEffect,useState} from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSamllCard';
import { useParams } from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart';
import './HomePage.scss';
import { TeamTitle } from './TeamTitle';
import { Link } from 'react-router-dom';
export const HomePage = () => {

    const [teams,setTeams] =useState([]);
    const {teamName} =useParams();
    useEffect(
        () =>{

            const fetchAllTeam = async () =>{
            const response =await fetch(`${process.env.REACT_APP_ROOT_URL}/team`);
            const data= await response.json();
            setTeams(data);
           
            };
            fetchAllTeam();
        },
        [teamName]
       
       
       
    );
  
    

  return (
    <div className="HomePage">
        <div className="app-name">
            <center><h1 className="app-name">Akshay's IPL DASHBOARD </h1></center>

        </div>
        <div className="team-grid">
            {
               teams.map(team => <TeamTitle key={team.id} teamName={team.teamName}/>) 
            }

        </div>
 
   
    </div>
  );
}