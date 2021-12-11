describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=allchatsearchcomponent--primary'));
  it('should render the component', () => {
    cy.get('wa-all-chat-search').should('exist');
  });
});