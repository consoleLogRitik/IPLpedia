import {useState,useEffect,useContext} from 'react'
import { CompareContext } from '../Contexts/CompareContext'
import axios from 'axios';
import { Charts } from './Charts';
import ExpCharts from './ExpCharts';
import Loader from './Loader';

function ExpCompare() {
    const{team1,team2} = useContext(CompareContext)  
    const[details,setDetails] = useState(null);
    useEffect(()=>{
        axios
        .get('https://sagar-ipl-api.onrender.com/api/teamvteam?team1='+team1+'&'+'team2='+team2)
        .then((res)=>{setDetails(res.data)})
        
    },[])
    console.log(details);
    if (!details)
        return (
          <div className="w-full h-screen flex items-center justify-center">
            <Loader />
          </div>
        );
   return (
    <>
    <div className='flex flex-col w-full my-8 gap-4 items-center  '>
    <h1 className='text-3xl '>{team1} vs {team2}</h1>
    <h3 className='font-semibold'>Total Matches : {details.total_matches}</h3>
    <h3 className='font-semibold'>{team1} : {details[team1]}</h3>
    <h3 className='font-semibold'>{team2} : {details[team2]}</h3>
    <h3 className='font-semibold'>Draw : {details.draws}</h3>
    <ExpCharts obj={{teamOne:details[team1],teamTwo:details[team2],Draws:details.draws,TotalMatches : details.total_matches }}/>
    </div>
    </>
  )
}

export default ExpCompare