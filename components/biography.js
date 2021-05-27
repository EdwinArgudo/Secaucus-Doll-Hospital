const biographyTemplate = document.createElement('template');
biographyTemplate.innerHTML = `
<style>
#photo-container {
    height: 300px;
    width: 100%;
    flex-wrap: nowrap;
}
#photo {
    height: 100%;
}
#caption {
    overflow-y: scroll;
}
@media (max-width: 767.98px) {
    #photo-container {
        height: auto;
        flex-wrap: wrap;
    }
    #photo {
        height: auto;
        width: 100%;
    }
}
</style>

<div id="photo-container" class="my-4 d-flex justify-content-start text-light flex-row">
    <img id="photo">
    <p id="caption" class="p-4">
        <slot></slot>
    </p>
</div>
`;

class DHBiography extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot  = this.attachShadow({ mode: 'open' });
        this._shadowRoot.innerHTML = CommonStyles;
        this._src = this.getAttribute("src");
        const direction = this.getAttribute("direction") || 'left';
        this._direction = direction === 'left' ? 'flex-row' : 'flex-row-reverse'
        this._background = this.getAttribute("background") || 'bg-yellow';
    }

    connectedCallback() {
        this._shadowRoot.appendChild(biographyTemplate.content.cloneNode(true));
        
        const photoContainer = this._shadowRoot.querySelector('#photo-container');
        photoContainer.classList.add(this._background);
        photoContainer.classList.add(this._direction);

        const photo = this._shadowRoot.querySelector('#photo');
        photo.setAttribute('src', this._src);
        photo.style.float = this._direction;
    }
}

customElements.define('dh-biography', DHBiography);