import { useState } from 'react';
import './App.css';
import DarkModeButton from './components/DarkModeButton';
import Dashboard from './components/Dashboard';
import SearchForm from './components/SearchForm';

function App() {
    const [display, setDisplay] = useState<boolean>(false)
    const [darkMode, setDarkMode] = useState<boolean>(false)
  return (
    <div className={`app ${darkMode? `dark`:''}`}>
      <SearchForm display={display} setDisplay={setDisplay} />
      <Dashboard  display={display} />
      <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}

export default App
