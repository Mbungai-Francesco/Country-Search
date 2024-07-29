import { RouterProvider } from 'react-router-dom';
import { useState } from 'react'
import { classer } from './utility/classer'
import router from './main'
import './index.css'
import './App.css'

// const Details = lazy(() => import("./components/details/Details"));
// const Home = lazy(() => import('./components/home/Home'));

function App() {
  const [count, setCount] = useState(0) 

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap" rel="stylesheet"></link>
      <header className={classer('flex font-nunito justify-between p-4 px-10 text-xl bg-myBlue-dark text-white')}>
        <h1 className={classer('font-bold ')}>Where in the world?</h1>
        <div className={classer('switchers flex justify-between text-sm items-center')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          <p className={classer('ml-2')}>Dark Mode</p>
        </div>
      </header>
      <div className={classer('bg-myBlue-very_dark1 min-h-screen px-20 py-10 relative z-0')}>   
        <RouterProvider router={router}/>
      </div>
    </> 
  )
}

export default App
