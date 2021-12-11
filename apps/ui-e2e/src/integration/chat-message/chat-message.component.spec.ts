describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=chatmessagecomponent--primary'));
  it('should render the component', () => {
    cy.get('wa-chat-message').should('exist');
  });
});