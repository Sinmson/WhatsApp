describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=messagebarcomponent--primary'));
  it('should render the component', () => {
    cy.get('wa-message-bar').should('exist');
  });
});