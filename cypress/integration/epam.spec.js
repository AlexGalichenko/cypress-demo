import homePage from '../support/fragments/home.page';
import searchPage from '../support/fragments/search.page';

describe('amazon calculator',() => {
    it('should open epam page', () => {
        homePage.open();
        homePage.openMenu({
            menu: 'Careers',
            submenu: 'Search Jobs'
        });
        searchPage.keywordInput.type('Test Automation');
        searchPage.locationDropdown.select('Belarus', 'Minsk');
        searchPage.skillsDropdown.select('Software Test Engineering');
        searchPage.findButton.click();
        searchPage.resultsTitle
            .invoke('text')
            .should('match', /WE FOUND \d{2} JOB OPENINGS RELATED TO "TEST AUTOMATION"/i);
    });
})
