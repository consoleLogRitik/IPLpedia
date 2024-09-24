import React, { useContext, useEffect, useState } from 'react';
import { CompareContext } from '../Contexts/CompareContext';
import axios from 'axios';
import Loader from './Loader';

function PointsTable() {
  const { selectedYear } = useContext(CompareContext);
  const [teams, setTeams] = useState(null);

  useEffect(() => {
    axios
      .get('https://sagar-ipl-api.onrender.com/api/season?year=' + selectedYear)
      .then((res) => {
        setTeams(res?.data);
      });
  }, [selectedYear]);
  if (!teams)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loader />
      </div>
    );

  return (
    <>
      <h1 className='text-4xl flex w-full justify-center mt-8 font-bold text-lime-800'>
        Final Points Table for Season {selectedYear}
      </h1>
      <div className='flex justify-center m-8'>
        <div className='overflow-x-auto w-full max-w-6xl'>
          <table className='w-full border-lime-400 border-2 rounded-xl shadow-xl'>
            <thead className='bg-lime-600 text-white'>
              <tr className='border-lime-400 border-2'>
                <th className='px-4 py-2'>Team</th>
                <th className='px-4 py-2'>Matches Played</th>
                <th className='px-4 py-2'>Won</th>
                <th className='px-4 py-2'>No Result</th>
                <th className='px-4 py-2'>Points</th>
                <th className='px-4 py-2'>Season Position</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr
                  key={index}
                  className={`bg-white border-2  hover:bg-lime-100 transition-all ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} `}
                >
                  <td className='px-4 py-4 text-center'>{team.TeamName}</td>
                  <td className='px-4 py-4 text-center'>{team.MatchesPlayed}</td>
                  <td className='px-4 py-4 text-center'>{team.MatchesWon}</td>
                  <td className='px-4 py-4 text-center'>{team.NoResult}</td>
                  <td className='px-4 py-4 text-center'>{team.Points}</td>
                  <td className='px-4 py-4 text-center'>{team.SeasonPosition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default PointsTable;
