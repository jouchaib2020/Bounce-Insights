import React from 'react'
import Badge from '../../src/components/Badge'

describe('<Badge />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Badge />)
  })
})