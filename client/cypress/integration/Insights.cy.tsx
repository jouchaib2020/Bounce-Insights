import React from 'react'
import Insights from '../../src/components/Insights'

describe('<Insights />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Insights />)
  })
})