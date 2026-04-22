describe('login', () => {
  it('exibe erro com senha inválida', () => {
    cy.visit('/login')
