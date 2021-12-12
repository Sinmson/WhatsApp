describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=chatpanelcomponent--primary'));
  it('should render the component', () => {
    cy.get('wa-chat-panel').should('exist');
  });
});