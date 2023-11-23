import React from 'react'
import AccordionItem from '../../src/components/AccordionItem'

describe('<AccordionItem />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AccordionItem />)
  })
})