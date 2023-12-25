


describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://global.almosafer.com/en?gad_source=1&gclid=CjwKCAiAyp-sBhBSEiwAWWzTnop4k7SH0sDrITOYbo9LRYigvgK5gN_rAmjFMxfu1gX2lEuGMXzIKBoCdY8QAvD_BwE')

    cy.get('.cta__saudi').click()


  })
})