import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Teamdetail from './assets/Teamdetail.jsx'
import Against from './assets/Against.jsx'
import Teams from './assets/Teams.jsx'
import Body from './assets/Body.jsx'
import Compare from './assets/Compare.jsx'


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
      element:<Compare/>
    }
  ]
    
  },
])



createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}/>
)
