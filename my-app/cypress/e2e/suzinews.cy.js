describe('Suzi News Website Works!', () => {
    beforeEach(() => {
            cy.visit('http://localhost:3000/')
        })
    it('displays heading and logo', () => {
        cy.get('h1').should('have.text', 'Suzi\'s News Website')
        cy.get('[alt="logo"]')
        .should('be.visible')
        .and(($img) => {
          // "naturalWidth" and "naturalHeight" are set when the image loads
          expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
    })
    it('displays trending articles on load', () => {
        cy.get('.card').should('have.length', 9)
        cy.get('.card').contains('READ MORE')
        cy.get('[alt="News Item image"]')
        .should('be.visible')
        .and(($img) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
        cy.get('h3').should('have.text', 'Trending Articles:')
    })
    it('can search and find articles', () => {
        const searchTerm = 'Manchester City'
        cy.get('.search-input').type(searchTerm)
        cy.get('.search-button').click()
        cy.get('.card').should('have.length', 9)
        cy.get('.card').contains('READ MORE')
        cy.get('[alt="News Item image"]')
        .should('be.visible')
        .and(($img) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
        cy.get('h3').should('have.text', `Results related to ${searchTerm}:`)
    })
})