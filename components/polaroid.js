const polaroidTemplate = document.createElement('template');
polaroidTemplate.innerHTML = `
<style>
#photo-container {
    margin: auto;
    width: 280px;
    padding: 15px;
    box-shadow: 0 0.2rem 1.2rem rgba(0,0,0,0.2);
}
#photo {
    width: 250px;
    margin: 15px;
}
#photo-caption {
    padding: 15px 0 0 0;
    line-height: 25px;
    font-size: 25px;
    text-align: center;
    font-family: 'Itim', cursive;
}
#photo-container:hover {
    transform: scale(1.2, 1.2) rotate(0deg) !important;
    transition: all 0.35s;
}
@media (max-width: 767.98px) {
    #photo-container {
        transform: rotate(0deg) !important;
    }
}
</style>

<div id="photo-container" class="my-4">
    <img id="photo" class="d-block m-auto"/>
    <div id="photo-caption">
        <slot></slot>
    </div>
</div>
`;

class DHPolaroid extends HTMLElement {
    styleMap = {
        1: 'linear-gradient(45deg, #de6262, #ffb88c)', // A Lost Memory
        2: 'linear-gradient(45deg, #e1eec3, #f05053)', // Velvet Sun
        3: 'linear-gradient(45deg, #ff9966, #ff5e62)', // Orange Coral
        4: 'linear-gradient(45deg, #ffd89b, #19547b)', // Jupiter
        5: 'linear-gradient(45deg, #c2e59c, #64b3f4)', // Green and Blue
        6: 'linear-gradient(45deg, #2193b0, #6dd5ed)', // Cool Blues
    };

    constructor() {
        super();
        this._shadowRoot  = this.attachShadow({ mode: 'open' });
        this._shadowRoot.innerHTML = CommonStyles;
        this._src = this.getAttribute("src");
        this._rotate = this.getAttribute("rotate") || '0';
        const styleId = this.getAttribute("styleId") || '1';
        this._styleId = parseInt(styleId, 10);
    }

    connectedCallback() {
        this._shadowRoot.appendChild(polaroidTemplate.content.cloneNode(true));
        const photoContainer = this._shadowRoot.querySelector('#photo-container');
        photoContainer.style.transform = `rotate(${this._rotate}deg)`;
        photoContainer.style.background = this.styleMap[this._styleId];
        const photo = this._shadowRoot.querySelector('#photo');
        photo.setAttribute('src', this._src);
    }
}

customElements.define('dh-polaroid', DHPolaroid); 