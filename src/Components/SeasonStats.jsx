import ControllableStates from "./ControllableStates"
import {SEASON_YEARS} from "../const.js"
import { CompareContext } from "../Contexts/CompareContext.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function SeasonStats() {
  const navigate = useNavigate(); 
  const{selectedYear,setSelectedYear} = useContext(CompareContext)
  return (
    <div className="flex flex-col  items-center py-24 gap-10">
       {/* Heading */}
       <h1 className='text-4xl font-bold text-lime-800 mb-10'>
        Get Season Details
      </h1>
      <ControllableStates teams={SEASON_YEARS} label = "Select Season" value = {selectedYear} setValue={setSelectedYear} />
      <button
        className='mt-8 w-40 h-12 bg-lime-500 hover:bg-lime-600 text-white text-lg font-semibold rounded-md shadow-md transition duration-300 ease-in-out'
        onClick={()=>{
          navigate('/pointstable')
        }}
      >
        Fetch
      </button>
    </div>
    
  )
}

export default SeasonStats