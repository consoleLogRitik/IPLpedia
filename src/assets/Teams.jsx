
import {useState,useEffect} from 'react'
import axios from 'axios'
import React from 'react'
import { TEAM_IMG_URL } from '../const';
import { Link } from 'react-router-dom';
import { API_URL } from '../const';
import Loader from './Loader';


function Cards ({name,img_id}) {
  return (
    <>
    <div className='w-48 h-44 rounded-md hover:scale-90 transition-transform duration-700 bg-slate-100 p-2 gap-2 flex flex-col items-center'>
    <img className='w-36 h-28 rounded-lg' src={TEAM_IMG_URL+img_id}/>
    <div className=' text-sm'>{name}</div>
    </div>
    </>
  )
}

function Body() {
const teamsUrl = API_URL+'teams'
console.log(teamsUrl);


const[teams,setTeams] = useState([]);
 useEffect(()=>{
  axios.get(teamsUrl).then((res)=>{
    setTeams(res.data.teams)

  })
 },[])

 if (!teams.length) return(<div className="size-3xl w-full flex h-screen items-center justify-center "><Loader/></div>)
  return (
    <>
        <div id='team-card-container' className='my-8 flex flex-wrap gap-8 justify-center items-center'>
          {
          teams.map((itr,i)=>{
          return <Link to="/teamdetails" state = {{imgCode : itr.team_id,teamName:itr.name}} ><Cards key={i} name = {itr.name} img_id ={itr.team_id}/></Link>
        })
    } 
          
        </div>
    </>
  )
}

export default  Body