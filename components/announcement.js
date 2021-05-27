const announcementTemplate = document.createElement('template');
announcementTemplate.innerHTML = `
<style>
#alert {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translate(0px, -50%);
}
</style>

<div id="annoucement" class="position-relative bg-primary clearfix text-light text-center font-weight-bold font-italic py-2 px-4">
    <i id="alert" class="fas fa-exclamation-circle"></i>
    <slot>Not Available</slot>
</div>
`;

class DHAnnouncement extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot  = this.attachShadow({ mode: 'open' });
        this._shadowRoot.innerHTML = CommonStyles;

    }

    connectedCallback() {
        this._shadowRoot.appendChild(announcementTemplate.content.cloneNode(true));
    }
}

customElements.define('dh-announcement', DHAnnouncement);