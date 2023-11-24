import { mount } from '@cypress/react18'
import Skeleton from '../components/Skeleton'

describe('<Skeleton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<Skeleton />)
  })
})