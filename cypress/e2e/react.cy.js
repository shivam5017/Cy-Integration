

describe('template spec', () => {
  
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('/')
    
  })
  it('displays heading', () => {
    cy.get('[data-cy="heading"]').should('have.text','Github Integration')  
  })
  
  it('Display my name',()=>{
    cy.get('[data-cy="Name"]').should('have.text',"Shivam Malik")
  })

  it('Type Name',()=>{
    cy.get('[data-cy="Input"]').type('hello')
  })
})
