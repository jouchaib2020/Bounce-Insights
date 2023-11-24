import { mount } from '@cypress/react18'
import AccordionItem from '../components/AccordionItem'
import { General, data_mock } from '../utils/types'

describe('<AccordionItem />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<AccordionItem data={data_mock.general as General} type={0} title='Test'/>)
  })
})