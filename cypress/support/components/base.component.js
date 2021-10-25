export default class BaseComponent {

    get base() { return cy.get(this.selector) }
    constructor(selector) {
        this.selector = selector
    }

}
