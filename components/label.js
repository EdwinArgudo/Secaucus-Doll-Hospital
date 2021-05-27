const labelTemplate = document.createElement('template');
labelTemplate.innerHTML = `
<style>

</style>

<div id="label" class="py-2 text-left mr-4">
    <h4>
        <slot name="title"></slot>
    </h4>
    <h6>
        <slot name="body"></slot>
    </h6>
</div>
`;

class DHLabel extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot  = this.attachShadow({ mode: 'open' });
        this._shadowRoot.innerHTML = CommonStyles;

    }

    connectedCallback() {
        this._shadowRoot.appendChild(labelTemplate.content.cloneNode(true));
    }
}

customElements.define('dh-label', DHLabel);