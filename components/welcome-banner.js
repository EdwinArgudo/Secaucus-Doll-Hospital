const welcomeBannerTemplate = document.createElement('template');
welcomeBannerTemplate.innerHTML = `
<style>
:host {
    min-height: 80px;
}
#bear-img {
    height: 50px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-100%, -50%);
}
#ny-dh {
    font-weight: 700;
}
@media (max-width: 767.98px) {
    :host {
        min-height: auto;
    }
    #bear-img {
        display: none;
    }
}
</style>

<div class="bg-navy my-3">
    <div class="container text-light position-relative d-flex flex-column justify-content-center py-3">
        <img id="bear-img" src="./imgs/miscellaneous/teddy-bear.svg">
        <span>
            Planning a visit? Head over to our 
            <a href="contact.html">Contact Page</a>
            to find our info. With over 20 years of experience working for the 
            <span id="ny-dh" class="text-orange">New York Doll Hospital</span>, 
            the staff of the Secaucus Doll and Teddy Hospital will treat your patient with the utmost care.
        </span>
    </div>
</div>
`;

class DHWelcomeBanner extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot  = this.attachShadow({ mode: 'open' });
        this._shadowRoot.innerHTML = CommonStyles;
    }

    connectedCallback() {
        this._shadowRoot.appendChild(welcomeBannerTemplate.content.cloneNode(true));
    }
}

customElements.define('dh-welcome-banner', DHWelcomeBanner);