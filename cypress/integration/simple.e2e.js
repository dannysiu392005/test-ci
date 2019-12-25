/// <reference types="Cypress" />
describe('Home', () => {
  it('should render a logo', () => {
    cy.visit('/')
    cy.get('.App-logo').should('exist')
  })
})
