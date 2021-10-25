import BaseComponent from './base.component';

export default class SingleSelectDropdown extends BaseComponent {

    get input() { return this.base.get('.select2-container--default.form-component__field') }
    findOption(text) { return this.base.get('ul li').contains(text) }

    select(...options) {
        this.input.click();
        for (const option of options) {
            this.findOption(option).click()
        }
    }

}
