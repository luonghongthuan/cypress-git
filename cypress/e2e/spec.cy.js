describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.visit('google.com')
    cy.visit('hahahaha.com')
  })
})