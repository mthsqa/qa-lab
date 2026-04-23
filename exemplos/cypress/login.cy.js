describe('login', () => {
  it('exibe erro com senha inválida', () => {
    cy.visit('/login')
    cy.get('[data-testid=email]').type('qa@example.com')
    cy.get('[data-testid=password]').type('errada')
