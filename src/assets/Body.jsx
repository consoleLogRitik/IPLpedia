import background from './lbg.jpeg';
import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Body() {
  const navigate = useNavigate();
  const [teams, setTeams] = useState(null);
  const [typeValue, setTypevalue] = useState('');
  const [searchedTeam, setSearchedTeam] = useState({ name: '', img_id: '' });

  useEffect(() => {
    axios.get("https://sagar-ipl-api.onrender.com/api/teams").then((res) => {
      setTeams(res?.data?.teams);
    });
  }, []);

  return (
    <>
      <div className='relative w-full h-screen flex flex-col items-center bg-cover bg-center' style={{ backgroundImage: `url(${background})` }}>
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50' />

        {/* Title */}
        <div className='relative z-10 text-center px-4'>
          <h1 className="text-6xl md:text-8xl text-lime-500 font-bold my-4">IPLpedia</h1>
          <p className="text-xl md:text-2xl text-lime-300 font-semibold max-w-xl mx-auto">
            Discover in-depth team stats, records, and performance insights for every IPL franchise!
          </p>
        </div>

        {/* Search */}
        <div className='relative z-10 flex flex-col items-center gap-4 mt-12 md:mt-20 w-full px-4'>
          <input
            type='text'
            className='w-full md:w-1/3 h-12 text-xl text-center rounded-md border-2 border-lime-500 bg-white shadow-lg focus:outline-none focus:border-lime-400 transition duration-300'
            placeholder='Search team'
            value={typeValue}
            onChange={(e) => setTypevalue(e.target.value)}
          />
          <button
            className='w-32 h-12 bg-lime-500 hover:bg-lime-600 text-white text-lg font-semibold rounded-md shadow-md transition duration-300 ease-in-out'
            onClick={() => {
              const team = teams?.find(itr => itr.name.toLowerCase() === typeValue.toLowerCase());
              if (team) {
                navigate('/teamdetails', { state: { imgCode: team.team_id, teamName: team.name } });
              }
              else if(typeValue===''){
                alert("Enter a Team Name")
              }
              else{
                alert("Enter a valid Team Name")
              }
            }}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default Body;
