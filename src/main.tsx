import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Home from './components/home/Home.tsx'
import Details from './components/details/Details.tsx'
import { NotFoundPage } from './NotFoundPage.tsx'

const router = createBrowserRouter([
  {
    index: true, 
    element: <Home />,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/:countryId',
    element: <Details />,
    errorElement: <NotFoundPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

export default router