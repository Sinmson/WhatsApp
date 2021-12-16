describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=settingspanelcomponent--primary'));
  it('should render the component', () => {
    cy.get('wa-settings-panel').should('exist');
  });
});