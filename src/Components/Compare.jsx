import React, { useEffect, useState, useContext } from 'react';
import ComboBox from './ControllableStates';
import { API_URL } from '../const';
import axios from 'axios';
import { CompareContext } from '../Contexts/CompareContext';
import { useNavigate } from 'react-router-dom';

function Compare() {
  const navigate = useNavigate();
  const [teamsObj, setTeamsObj] = useState([]);
  const [teamArr, setTeamArr] = useState([]);
  const { team1, setTeam1, team2, setTeam2 } = useContext(CompareContext);

  useEffect(() => {
    axios.get(API_URL + "teams").then((res) => {
      setTeamsObj(res.data.teams);
    });
  }, []);

  useEffect(() => {
    setTeamArr(teamsObj.map((team) => team.name));
  }, [teamsObj]);

  return (
    <div className='w-full h-screen flex flex-col items-center pt-24 gap-4 bg-slate-100'>
      {/* Heading */}
      <h1 className='text-4xl font-bold text-lime-800 mb-10'>
        Compare Teams
      </h1>
      
      {/* Combo Boxes and Button */}
      <div className='flex justify-center items-center gap-10'>
        <ComboBox teams={teamArr} label="Select Team 1" value={team1} setValue={setTeam1} />
        <ComboBox teams={teamArr} label="Select Team 2" value={team2} setValue={setTeam2} />
      </div>

      {/* Compare Button */}
      <button
        className='mt-8 w-40 h-12 bg-lime-500 hover:bg-lime-600 text-white text-lg font-semibold rounded-md shadow-md transition duration-300 ease-in-out'
        onClick={() => {
          (team1 === team2) ? alert("Both fields cannot have the same teams") : navigate('/ExpCompare');
        }}
      >
        Compare
      </button>
    </div>
  );
}

export default Compare;
