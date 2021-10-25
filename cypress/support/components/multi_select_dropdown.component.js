import BaseComponent from './base.component';

export default class MultiSelectDropdown extends BaseComponent {

    get input() { return this.base.get('div[role=combobox]') }
    findOption(text) { return this.base.get('li[role=treeitem]').contains(text) }

    select(...options) {
        this.input.click();
        for (const option of options) {
            this.findOption(option).click()
        }
    }

}
