import { useState,useEffect } from 'react'
import Navigation from './Components/Navigation'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer' 
import { CompareContext } from './Contexts/CompareContext'
function App() {
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const[selectedYear,setSelectedYear] = useState('')
  return (
    <>
    <CompareContext.Provider value={{team1,setTeam1,team2,setTeam2,selectedYear,setSelectedYear}}>
    <div className="font-sans">
    <Navigation/>
    <Outlet/>
    <Footer/>
    </div>
    </CompareContext.Provider>
    </>
  )
}

export default App
