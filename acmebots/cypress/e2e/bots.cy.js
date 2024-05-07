describe('Robots test', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/');
    cy.get('h1').should('have.text', '🚀 Acme Rockets');
  });
  it('Nav routing works correctly', () => {
    cy.visit('http://127.0.0.1:5500/');
    cy.get('.rockets').trigger('click');
    cy.get('.home').trigger('click');
    cy.get('.testimonials').trigger('click');
    cy.get('.contact').trigger('click');
  });
  it('Hero image works correctly', () => {
    cy.visit('http://127.0.0.1:5500/');
    cy.get('[data-test="rocketdab"]').trigger('mouseover');
  });
  it('Rockets image works correctly', () => {
    cy.visit('http://127.0.0.1:5500/');
    cy.get('[data-test="rocketman"]').trigger('mouseover');
    cy.get('[data-test="rocketride"]').trigger('mouseover');
    cy.get('[data-test="rocketlaunch"]').trigger('mouseover');
  });

  it('Form works correctly', () => {
    cy.visit('http://127.0.0.1:5500/');
    cy.get('form').within(($form) => {
      cy.get('input[name="subject"]').type('test subject');
      cy.get('textarea').type('test message for forms');
      cy.get('[data-cy="submit"]').click();
    });

    it('Footer nav routing works correctly', () => {
      cy.visit('http://127.0.0.1:5500/');
      cy.get('h2').should('have.text', 'Acme Rocket-Powered Products, Inc.');
      cy.get('href').should('have.text', 'mailto:amymrowell@gmail.com');
      cy.get('.contactus').should('have.text', 'Contact Us');
      cy.get('.contactus').trigger('click');
    });
  });
});
