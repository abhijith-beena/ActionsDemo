describe('First Spec', () => {
  it('verify the first test', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
  })

  it('verify the first test', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
  })
})