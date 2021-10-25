describe('amazon calculator',() => {
    it('should open amazon calculator', () => {
        cy.visit('https://www.epam.com/');
        cy.get('.hamburger-menu__button').click();
        cy.get('.hamburger-menu__list > :nth-child(6)').click()        ;
        cy.get('.item--expanded > .hamburger-menu__sub-list > :nth-child(1) > .hamburger-menu__link').click();
        cy.get('#new_form_job_search_1445745853_copy-keyword').type('JS Automation')
    });
})
