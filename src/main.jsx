import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Teamdetail from './Components/Teamdetail.jsx'
import Against from './Components/Against.jsx'
import Teams from './Components/Teams.jsx'
import Body from './Components/Body.jsx'
import Compare from './Components/Compare.jsx'
import ExpCompare from './Components/ExpCompare.jsx'
import SeasonStats from './Components/SeasonStats.jsx'
import PointsTable from './Components/PointsTable.jsx'

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[{
      path:'/teamdetails',
      element:<Teamdetail/>,
    },
    {
      path:'/teams',
      element:<Teams/>
    },
    {
      path:'/against',
      element:<Against/>
    },
    {
      path:'/',
      element:<Body/>
    },
    {
      path:'/compare',
      element:<Compare/>
    },
    {
      path:'/season-stats',
      element:<SeasonStats/>
    },
    {
      path:'/ExpCompare',
      element:<ExpCompare/>
    },
    {
      path:'/pointstable',
      element:<PointsTable/>
    }
  ]
    
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}/>
)
