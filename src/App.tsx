import { RouterProvider } from 'react-router-dom';
import { useState } from 'react'
import { classer } from './utility/classer'
import router from './main'
import './index.css'
import './App.css'

// const Details = lazy(() => import("./components/details/Details"));
// const Home = lazy(() => import('./components/home/Home'));

function App() {
  const [theme, setTheme] = useState(!window.matchMedia('(prefers-color-scheme: light)').matches);
  const sun = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
  const moon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>

  // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //   setSvg(<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>)
  // } else {
  //   setSvg()
  // }
  

  const modeSwitch = () => {
    // console.log(theme); 
    // console.log(localStorage);
    // console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
    setTheme(theme ? false : true)
    if(theme) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  console.log('onload');
  
  }

  return (
    <>
      <link onLoad={modeSwitch} href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap" rel="stylesheet"></link>
      <header className={classer('flex font-nunito justify-between p-4 px-10 text-xl bg-white text-myBlue-very_dark2 dark:bg-myBlue-dark dark:text-white shadow-sm shadow-myBlue-dark')}>
        <h1 className={classer('font-bold ')}>Where in the world?</h1>
        <div className={classer('switchers flex justify-between text-sm items-center hover:cursor-pointer')}
          onClick={modeSwitch}>
          {theme ? sun : moon}
          <p className={classer('ml-2')}>{theme?'Light':'Dark'} Mode</p>
        </div>
      </header>
      <div className={classer('bg-myGrey-light_gray dark:bg-myBlue-very_dark1 min-h-screen py-10 relative z-0 px-10 lg:px-20')}>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
