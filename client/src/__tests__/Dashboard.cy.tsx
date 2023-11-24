import { mount } from '@cypress/react18'
import Dashboard from '../components/Dashboard'
import { data_mock } from '../utils/types'

describe('<Dashboard />', () => {
  it('renders', () => {
    mount(<Dashboard countryData={data_mock} loading={false}/>)
  })
})