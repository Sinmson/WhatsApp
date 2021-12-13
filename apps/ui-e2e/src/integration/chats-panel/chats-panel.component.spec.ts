describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=chatspanelcomponent--primary'));
  it('should render the component', () => {
    cy.get('wa-chats-panel').should('exist');
  });
});