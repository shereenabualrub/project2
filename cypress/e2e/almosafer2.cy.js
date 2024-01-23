/// <reference types= "cypress" />

cy.on("uncaught:exception", (e) =>{
return false;
});

describe('test', () => {
  it('passes', () => {
    
    cy.visit('https://global.almosafer.com/en?gad_source=1&gclid=CjwKCAiAyp-sBhBSEiwAWWzTnop4k7SH0sDrITOYbo9LRYigvgK5gN_rAmjFMxfu1gX2lEuGMXzIKBoCdY8QAvD_BwE')

    cy.get('.cta__saudi').click()

    cy.visit('https://www.almosafer.com/ar?ncr=1')

   let websites = ["https://global.almosafer.com/en?gad_source=1&gclid=CjwKCAiAyp-sBhBSEiwAWWzTnop4k7SH0sDrITOYbo9LRYigvgK5gN_rAmjFMxfu1gX2lEuGMXzIKBoCdY8QAvD_BwE", "https://www.almosafer.com/ar?ncr=1"]
    let RandomIndex = Math.floor(Math.random()*websites.length)
    cy.visit(websites[RandomIndex])
    cy.get('#uncontrolled-tab-example-tab-hotels').click()
    if (RandomIndex==0) {
      cy.get('[data-testid="AutoCompleteInput"]').type("dubai")
      
    } else if(RandomIndex== 1) {
      
      cy.get('[data-testid="AutoCompleteInput"]').type("دبي")
    }
  })
})
