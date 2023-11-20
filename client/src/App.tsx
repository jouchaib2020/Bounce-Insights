import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import SearchForm from './components/SearchForm'

function App() {
    const [display, setDisplay] = useState<boolean>(false)
  return (
    <div className='app'>
      <SearchForm display={display} setDisplay={setDisplay} />
      <Dashboard  display={display} setDisplay={setDisplay}/>
    </div>
  )
}

export default App
