/// <reference types="cypress" />

context('LoanSimulation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // https://on.cypress.io/interacting-with-elements

  it('Should perform over 100.000 simulation failure', () => {
    // https://on.cypress.io/type
    cy.get('input[name="amount"]')
      .type(100001).should('have.value', '100001')

    cy.get('input[name="duration"]')
      .type(5).should('have.value', '5')

    cy.get('.button_flex')
      .click()

    cy.get('.button_flex').should('have.text', 'Simulate')
    
    cy.wait(100)

    cy.get('.loan_simulator_error').should('have.text', 'We are not doing loans of more then € 100.000 at this moment.')
  })

  it('Should perform over 5 years simulation failure', () => {
    // https://on.cypress.io/type
    cy.get('input[name="amount"]')
      .type(100000).should('have.value', '100000')

    cy.get('input[name="duration"]')
      .type(6).should('have.value', '6')

    cy.get('.button_flex')
      .click()

    cy.get('.button_flex').should('have.text', 'Simulate')
    
    cy.wait(100)

    cy.get('.loan_simulator_error').should('have.text', 'Loan can not be created for more then 5 years.')
  })

  it('Should perform success loan simulation', () => {
    // https://on.cypress.io/type
    cy.get('input[name="amount"]')
      .type(100000).should('have.value', '100000')

    cy.get('input[name="duration"]')
      .type(5).should('have.value', '5')

    cy.get('.button_flex')
      .click()

    cy.get('.button_flex').should('have.text', 'Simulate')
    
    cy.wait(2000)

    cy.get('.loan_simulator_result_value p').should('have.text', 'Per month:€1716.67')
    cy.get('.loan_simulator_result_group p').should('have.text', 'Total Amount:€100000.00Years:5')
    cy.get('.loan_simulator_result button').should('have.text', 'Apply')
  })
})
