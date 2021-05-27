const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<style>
#header {
    height: 7rem;
}
#logo-container {
    height: 100%;
    display: inline-block;
}
#logo {
    height: 100%;
}
#nav-container {
    height: 100%;
    width: 100%;
}
.nav {
    font-variant: all-small-caps;
}
.nav a {
    font-weight: 700;
    color: inherit;
}
.nav a:hover {
    color: var(--dh-burnt-orange);
}
.nav-link.active {
    color: var(--dh-burnt-orange);
}
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 190px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
.dropdown:hover .dropdown-content {
    display: block;
}
.dropdown-spacer {
    height: 7px;
}

@media (max-width: 767.98px) {
    #header {
        height: 15rem;
        flex-wrap: wrap;
    }
    #logo-container {
        height: 7rem;
        width: 100%;
    }
    #logo {
        margin: auto !important;
        display: block;
    }
    #nav-container {
        height: auto;
    }
    #nav-items {
        justify-content: space-around !important;
    }
}
</style>

<header id="header" class="d-flex flex-row align-items-end">
    <div id="logo-container">
        <img src="./imgs/miscellaneous/full_logo.png" id="logo" class="ml-2">
    </div>
    <div id="nav-container" class="d-flex flex-column justify-content-end">
        <div class="text-right px-3 py-2">
            <a class="pl-2" href="mailto:SecaucusDollHospital@gmail.com?Subject=Repair%20Request"><i class="fas fa-envelope fa-lg"></i></a>
            <a class="pl-2" href="https://www.facebook.com/pages/Secaucus-Doll-And-Teddy-Bear-Hospital/257487747606123?__tn__=%2CdkC-R-R&eid=ARBl5njIP6R2Adp18KTWixblPIc5_9U5jmASVpfq3rBAbLG9Ag7rpWmp3sknrLwovUzDEAwTrA8jE2EU&hc_ref=ARR2xGyRhqXdq3gwug8teIJwxuznFldI3Y3rQLp3RjyvyYgR1jJObXZl7dRlvHc7gQA&fref=tag"><i class="fab fa-facebook fa-lg"></i></a>
            <a class="pl-2" href="https://www.instagram.com/secaucusdollhospital/"><i class="fab fa-instagram fa-lg"></i></a>
        </div>
        <ul id="nav-items" class="nav justify-content-end text-charcoal d-inline-flex">
            <li class="nav-item">
                <a class="nav-link" id="home" href="index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="about" href="about.html">About Us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="contact" href="contact.html">Contact Us</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link" id="gallery" href="#">Gallery</a>
                <ul class="dropdown-content list-group list-group-flush list-group-item-action">
                    <div class="dropdown-spacer bg-burnt-orange"></div>
                    <a href="before-and-after.html" class="list-group-item list-group-item-action list-group-item-light">Before And After</a>
                    <a href="hospital-tour.html" class="list-group-item list-group-item-action list-group-item-light">Hospital Tour</a>
                    <div class="dropdown-spacer bg-burnt-orange"></div>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="news" href="news.html">In the News</a>
            </li>
        </ul>
    </div>
</header>
`;

class DHHeader extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot  = this.attachShadow({ mode: 'open' });
        this._shadowRoot.innerHTML = CommonStyles;
        this._active = this.getAttribute("active");
    }

    connectedCallback() {
        this._shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
        const link = this._shadowRoot.querySelector(`#${this._active}`);
        if(link) {
            link.classList.add('active');
        }
    }
}

customElements.define('dh-header', DHHeader);