describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=chatcomponent--primary'));
  it('should render the component', () => {
    cy.get('wa-chat').should('exist');
  });
});