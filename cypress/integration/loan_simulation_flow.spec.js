/// <reference types="cypress" />

context('LoanSimulation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // https://on.cypress.io/interacting-with-elements

  it('Should perform over 1.000.000 simulation failure', () => {
    // https://on.cypress.io/type
    cy.get('input[name="amount"]')
      .type(1000001).should('have.value', '1000001')

    cy.get('input[name="months"]')
      .type(20).should('have.value', '20')

    cy.get('.button_flex')
      .click()

    cy.get('.button_flex').should('have.text', 'Simulate')
    
    cy.wait(100)

    cy.get('.loan_simulator_error').should('have.text', 'We are not doing loans of more then € 1.000.000 at this moment.')
  })

  it('Should perform over 36 months simulation failure', () => {
    // https://on.cypress.io/type
    cy.get('input[name="amount"]')
      .type(100000).should('have.value', '100000')

    cy.get('input[name="months"]')
      .type(37).should('have.value', '37')

    cy.get('.button_flex')
      .click()

    cy.get('.button_flex').should('have.text', 'Simulate')
    
    cy.wait(100)

    cy.get('.loan_simulator_error').should('have.text', 'Loan can not be created for more then 36 months (3 years).')
  })

  it('Should perform success loan simulation', () => {
    // https://on.cypress.io/type
    cy.get('input[name="amount"]')
      .type(100000).should('have.value', '100000')

    cy.get('input[name="months"]')
      .type(20).should('have.value', '20')

    cy.get('.button_flex')
      .click()

    cy.get('.button_flex').should('have.text', 'Simulate')
    
    cy.wait(2000)

    cy.get('.loan_simulator_result_value p').should('have.text', 'Per month:€5150.00')
    cy.get('.loan_simulator_result_group p').should('have.text', 'Total Amount:€100000.00Months:20')
    cy.get('.loan_simulator_result button').should('have.text', 'Apply')
  })
})
