import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { CompareContext } from '../Contexts/CompareContext';
import { useContext } from 'react';
export default function ExpCharts({obj}) {
  const{team1,team2} =  useContext(CompareContext)  
  const {teamOne,teamTwo,Draws,TotalMatches} = obj
  return (
    <PieChart
    series={[
      {
        data: [
          { id: 0, value: TotalMatches, label: 'Total_Matches' },
          { id: 1, value: teamOne, label: team1 },
          { id: 2, value: teamTwo, label: team2 },
          { id: 3, value: Draws, label: 'Draws' },

        ],
      },
    ]}
    width={700}
    height={200}
  />
  )
}
