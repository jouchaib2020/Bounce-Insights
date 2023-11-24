import { mount } from '@cypress/react18'
import Map from '../components/Map'
import { data_mock } from '../utils/types'

describe('<Map />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<Map latlng={data_mock.latlng} name='test' />)
  })
})