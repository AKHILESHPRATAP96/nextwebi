import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import LandingPage from './Pages/view/LandingPage'
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CssBaseline/>
     <LandingPage/>
    </>
  )
}

export default App
