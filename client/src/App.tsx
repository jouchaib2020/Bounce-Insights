import { useState } from 'react';
import './App.css';
import DarkModeButton from './components/DarkModeButton';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
import SearchForm from './components/SearchForm';
import { CountryData } from './utils/types';

function App() {

    const [loading, setLoading] = useState<boolean>(false)
    const [darkMode, setDarkMode] = useState<boolean>(false)
    const [countryData, setCountryData] = useState<CountryData|undefined>(undefined)
    const [error, setError] = useState<boolean|undefined>(undefined)


    
  return (
    <div className={`app ${darkMode? `dark`:''} `}>
      <SearchForm loading={loading} setLoading={setLoading} setCountryData={setCountryData} setError={setError}/>
      {error && <Error />}
      {countryData && <Dashboard  loading={loading} countryData={countryData}/>}
      <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode}  />
    </div>
  )
}

export default App
