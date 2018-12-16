describe("Cypress e2e testing", () => {
    it('should test app', () => {
        cy.visit('http://localhost:4000/');

        cy.title().should('include', "ReactJS App");
    });

    it('elements should has some values', () => {
        cy.get('label').should('have.text','SEARCH BY');

        cy.get('#title-btn').should('contain', 'TITLE');
        cy.contains('TITLE').click(); 

        cy.get('#genre-btn').should('contain', 'GENRE');
        cy.contains('GENRE').click();

        cy.get('.results').should('have.text', '10 movies found');    
    });    
});