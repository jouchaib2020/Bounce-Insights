import { useEffect, useState } from 'react';
import './App.css';
import { getCountries } from './api/api';
import DarkModeButton from './components/DarkModeButton';
import Dashboard from './components/Dashboard';
import SearchForm from './components/SearchForm';
import { CountryData } from './utils/types';

function App() {

    const [loading, setLoading] = useState<boolean>(false)
    const [darkMode, setDarkMode] = useState<boolean>(false)
    const [search, setSearch] = useState<string>('')

    const [countryData, setCountryData] = useState<CountryData | undefined>(undefined)

    useEffect(() => {
      const getData = async (query: string) => {
        try {
          const data = await getCountries(query)
          setCountryData(data)
        }catch (err) {
          console.log(err)
      }
    }
    getData(search);
  }, [search])
  return (
    <div className={`app ${darkMode? `dark`:''}`}>
      <SearchForm display={loading} setDisplay={setLoading} setSearch={setSearch} />
      {countryData && <Dashboard  display={loading} data={countryData} />}
      <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode}  />
    </div>
  )
}

export default App
