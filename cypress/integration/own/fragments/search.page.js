import BasePage from './base.page';
import SingleSelectDropdown from './components/single_select_dropdown.component';
import MultiSelectDropdown from './components/multi_select_dropdown.component';

class SearchPage extends BasePage {
    url = 'https://www.epam.com/careers/';

    get keywordInput() { return cy.get('#new_form_job_search_1445745853_copy-keyword') }
    get findButton() { return cy.get('button.recruiting-search__submit') }

    locationDropdown = new SingleSelectDropdown('.recruiting-search__column:nth-child(2)');
    skillsDropdown = new MultiSelectDropdown('.recruiting-search__column:nth-child(3)');
}

export default new SearchPage();
