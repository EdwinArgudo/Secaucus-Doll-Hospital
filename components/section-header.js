const sectionHeaderTemplate = document.createElement('template');
sectionHeaderTemplate.innerHTML = `
<style>
@media (max-width: 767.98px) {
    #heading {
        margin-top: 0 !important;
    }
}
</style>

<div id="heading" class="my-4">
    <h2><slot></slot></h2>
</div>
`;

class DHSectionHeader extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot  = this.attachShadow({ mode: 'open' });
        this._shadowRoot.innerHTML = CommonStyles;
    }

    connectedCallback() {
        this._shadowRoot.appendChild(sectionHeaderTemplate.content.cloneNode(true));
    }
}

customElements.define('dh-section-header', DHSectionHeader);