import React from 'react'
import DarkModeButton from '../../src/components/DarkModeButton'

describe('<DarkModeButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DarkModeButton />)
  })
})