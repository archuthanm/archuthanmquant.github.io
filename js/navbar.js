class AppNavbar extends HTMLElement {
    connectedCallback() {
        // 1. Get attributes
        const prefix = this.getAttribute('prefix') || '';
        // Check if this is a project page (wants the "Back" button)
        const isProject = this.hasAttribute('is-project');

        // 2. Decide which links to show
        let navLinksHTML;

        if (isProject) {
            // MODE A: Project Page (Show Back Button only)
            navLinksHTML = `
                <li><a href="${prefix}index.html#projects">Back to Projects</a></li>
            `;
        } else {
            // MODE B: Standard Menu (Show Full Nav)
            navLinksHTML = `
                <li><a href="${prefix}index.html#about">01. About</a></li>
                <li><a href="${prefix}index.html#projects">02. Models & Code</a></li>
                <li><a href="${prefix}index.html#contact">03. Contact</a></li>
            `;
        }

        // 3. Render the Navbar
        this.innerHTML = `
            <nav class="navbar">
                <div class="logo">
                    <span class="cursor">></span> 
                    <a href="${prefix}index.html">AM</a>
                </div>
                <ul class="nav-links">
                    ${navLinksHTML}
                </ul>
            </nav>
        `;
    }
}

customElements.define('app-navbar', AppNavbar);