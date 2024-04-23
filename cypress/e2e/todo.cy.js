describe('Navigation Test', () => {
  const baseUrl = 'https://list.am'; 
  const visitAdsOnPage = () => {
    cy.get('div.dl > a[href^="/en/item/"]').each(($ad, index) => {
      cy.wrap($ad).invoke('attr', 'href').then((href) => {
        cy.visit(`${baseUrl}${href}`, { failOnStatusCode: false });
        cy.get('.email > a').click();
        cy.get('.ui-button-icon').click()
        cy.go('back'); 
      });
    });
  };

  beforeEach('should navigate to the real estate page', () => {
    cy.visit('https://list.am/en');
    cy.get('[href="/en/"] > img').click();
    cy.contains('Real Estate').click();
    cy.url().should('include', 'en/category/54');
    cy.get('.filterbtn > div')
    cy.get('#idprice1').type('100000')
    cy.get('#idprice2').type('250000')
    cy.get('.ph').click()
    cy.get('.filterbtn > div')
    cy.get('div[data-name="֏ (AMD)"]').should('be.visible').click(); 
    cy.get('.dlf > :nth-child(2)').click()   
  });



  it('visits all ads on the first page', () => {
    cy.get('.dlf > :nth-child(1)').click()
    visitAdsOnPage();

  });

  it('visits all ads on the second page', () => {
    visitAdsOnPage();

  });
});
