const sectionContentTemplate = document.createElement('template');
sectionContentTemplate.innerHTML = `
<style>

</style>

<div class="my-4">
    <slot></slot>
</div>
`;

class DHSectionContent extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot  = this.attachShadow({ mode: 'open' });
        this._shadowRoot.innerHTML = CommonStyles;
    }

    connectedCallback() {
        this._shadowRoot.appendChild(sectionContentTemplate.content.cloneNode(true));
    }
}

customElements.define('dh-section-content', DHSectionContent); 