describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=chatpreviewcomponent--primary'));
  it('should render the component', () => {
    cy.get('test-chat-preview').should('exist');
  });
});