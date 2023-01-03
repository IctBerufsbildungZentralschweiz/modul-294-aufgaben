// https://docs.cypress.io/api/introduction/api.html

describe('B1', () => {
  it('In den Tweet-Beispieldaten wird Franzi Musterfrau als Autorin angezeigt', () => {
    cy.visit('/')
    cy.contains('.tweet__author', 'Franzi Musterfrau')
  })
})
