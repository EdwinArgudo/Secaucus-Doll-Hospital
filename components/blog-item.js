const blogItemTemplate = document.createElement('template');
blogItemTemplate.innerHTML = `
<style>
.partition {
    width: 10px;
    height: 100%;
}
.blog-content {
}
</style>

<div class="d-flex flex-row mb-4">
    <div class="d-inline-block mr-4">
        <div class="partition"></div>
    </div>
    <div class="blog-content">
        <h4 class="font-weight-bold pb-1">
            <slot name="title"></slot>
        </h4>
        <h6 class="font-italic text-secondary">
            <slot name="subtitle"></slot>
        </h6>
        <p>
            <slot name="body"></slot>
        </p>
    </div>
</div>
`;

class DHBlogItem extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot  = this.attachShadow({ mode: 'open' });
        this._shadowRoot.innerHTML = CommonStyles;
        this._type = this.getAttribute("type");
    }

    connectedCallback() {
        this._shadowRoot.appendChild(blogItemTemplate.content.cloneNode(true));
        const partition = this._shadowRoot.querySelector('.partition');
        partition.classList.add(this._type || 'bg-yellow');
    }
}

customElements.define('dh-blog-item', DHBlogItem);