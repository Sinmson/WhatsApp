describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=userprofilepreviewcomponent--primary'));
  it('should render the component', () => {
    cy.get('wa-user-profile-preview').should('exist');
  });
});