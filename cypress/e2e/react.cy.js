describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('[data-cy="heading"]').should('have.text','Github Integration')
  })
})