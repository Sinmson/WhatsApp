describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=contextmenucomponent--primary'));
  it('should render the component', () => {
    cy.get('wa-context-menu').should('exist');
  });
});