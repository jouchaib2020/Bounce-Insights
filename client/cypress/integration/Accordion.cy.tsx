import React from 'react'
import Accordion from '../../src/components/Accordion'

describe('<Accordion />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Accordion />)
  })
})