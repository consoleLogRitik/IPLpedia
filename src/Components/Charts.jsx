import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

export function Charts({obj}) {
  const {win,fail,match} = obj
  return (
    <PieChart
    series={[
      {
        data: [
          { id: 0, value: match, label: 'Total_Matches' },
          { id: 1, value: win, label: 'Won' },
          { id: 2, value: fail, label: 'Lost' },
        ],
      },
    ]}
    width={400}
    height={200}
  />
  )
}
