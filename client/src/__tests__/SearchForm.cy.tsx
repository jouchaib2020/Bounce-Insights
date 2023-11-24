/* eslint-disable @typescript-eslint/no-unused-vars */
import { mount } from '@cypress/react18'
import { useState } from 'react'
import SearchForm from '../components/SearchForm'
import { CountryData, data_mock } from '../utils/types'

describe('<SearchForm />', () => {
  it('renders', () => {
    const [_loading, setLoading] = useState(false)
    const [_error, setError] = useState<boolean|undefined>(false)
    const [_countryData, setCountryData] = useState<CountryData|undefined>(data_mock)
    // see: https://on.cypress.io/mounting-react
    mount(<SearchForm loading={false} setLoading={setLoading} setError={setError} setCountryData={setCountryData} />)
  })
})