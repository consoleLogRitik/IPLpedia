import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Charts } from './Charts'
import Loader from './Loader';
function Against() {
    const[on,seton]=useState(true);
    const location = useLocation()
    const{name,details,mainTeam} = location.state
    
    if(on){
        return (<>
        <div className="size-3xl w-full flex h-screen items-center justify-center "><Loader/></div>
        {seton(false)}
        </>
        )
    }

  return (
    <>
    <div className='flex flex-col w-full my-8 gap-4 items-center '>
    <h1 className='text-3xl '>{mainTeam} vs {name}</h1>
    <h3 className='font-semibold'>Total Matches : {details.matchesplayed}</h3>
    <h3 className='font-semibold'>Won : {details.won}</h3>
    <h3 className='font-semibold'>Lost : {details.loss}</h3>
    <Charts obj={{win:details.won,fail:details.loss,match:details.matchesplayed}}/>
    </div>
    </>
  )
}

export default Against