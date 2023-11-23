import React from 'react'
import Map from '../../src/components/Map'

describe('<Map />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Map />)
  })
})