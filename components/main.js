const mainTemplate = document.createElement('template');
mainTemplate.innerHTML = `
<style>
@media (max-width: 767.98px) {
    #main {
        padding-top: 0 !important;
    }
}
</style>

<main id="main" class="container mt-4 pt-4">
    <slot></slot>
</main>
`;

class DHMain extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot  = this.attachShadow({ mode: 'open' });
        this._shadowRoot.innerHTML = CommonStyles;
    }

    connectedCallback() {
        this._shadowRoot.appendChild(mainTemplate.content.cloneNode(true));
    }
}

customElements.define('dh-main', DHMain);