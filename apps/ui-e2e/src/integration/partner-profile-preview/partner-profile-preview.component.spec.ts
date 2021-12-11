describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=partnerprofilepreviewcomponent--primary'));
  it('should render the component', () => {
    cy.get('wa-partner-profile-preview').should('exist');
  });
});