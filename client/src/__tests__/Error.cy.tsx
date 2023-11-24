import { mount } from '@cypress/react18'
import Error from '../components/Error'

describe('<Error />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<Error />)
  })
})