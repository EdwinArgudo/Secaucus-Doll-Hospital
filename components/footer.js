const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<style>
#ears-container {

}
.ear {
    height: 80px;
    width: 100px;
    border-radius: 100%;
    margin: 0 10px;
}
#left-ear {
    transform: translate(0, 45px) rotate(-30deg);
}
#right-ear {
    transform: translate(0, 45px) rotate(30deg);
}
.ear-accent {
    height: 60px;
    width: 80px;
    border-radius: 100%;
    margin: 10px auto 0 auto;
}
a {
    color: var(--blue);
    text-decoration: none;
}
a:hover {
    color: var(--blue);
    text-decoration: none;
}
footer {
    z-index: 100;
}
#copyright {
    display: inline-block;
    width: 160px;
    height: 80px;
    border-radius: 80px 80px 0 0;
    overflow-y: hidden;
}
#mouth {
    background-color: beige;
    display: inline-block;
    width: 70px;
    height: 60px;
    border-radius: 100%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 30px);
}
.dot {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: var(--dh-charcoal);
    border-radius: 100%;

    position: absolute;
    bottom: 0;
    left: 50%;
}
#nose {
    transform: translate(-50%, 0);
}
#left-eye {
    transform: translate(-50%, -30px) translate(-30px, 0px);
}
#right-eye {
    transform: translate(-50%, -30px) translate(30px, 0px);
}
#copyright-msg {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -10px) translate(150px, 0);
}
</style>

<div id="ears-container" class="d-flex flex-row justify-content-center align-items-center position-relative">
    <div id="left-ear" class="ear d-inline-block bg-orange position-relative">
        <div class="ear-accent bg-yellow d-flex flex-column justify-content-start">
        </div>
    </div>
    <div id="right-ear" class="ear d-inline-block bg-orange position-relative">
        <div class="ear-accent bg-yellow"></div>
    </div>
</div>
<footer class="position-relative">
    <div id="copyright" class="bg-orange d-flex flex-column justify-content-center m-auto position-relative">
        <div id="mouth"></div>
        <div id="nose" class="dot"></div>
        <div id="left-eye" class="dot"></div>
        <div id="right-eye" class="dot"></div>
    </div>
    <span id="copyright-msg" class="text-charcoal">© 2010</span>
</footer>
`;

class DHFooter extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot  = this.attachShadow({ mode: 'open' });
        this._shadowRoot.innerHTML = CommonStyles;

    }

    connectedCallback() {
        this._shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
    }
}

customElements.define('dh-footer', DHFooter);
