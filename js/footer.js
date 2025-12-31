class AppFooter extends HTMLElement {
    connectedCallback() {
        // Auto-update year
        const currentYear = new Date().getFullYear();

        this.innerHTML = `
            <footer>
                <div class="footer-content">
                    <div class="social-links">
                        <a href="https://github.com/archuthanm" target="_blank">GitHub</a>
                        <a href="https://www.linkedin.com/in/archuthan-mohanathasan-63187424b/" target="_blank">LinkedIn</a>
                    </div>
                    <p class="copyright">&copy; ${currentYear} Archuthan Mohanathasan.</p>
                </div>
                <div class="copyright">
                    &copy; 2025 Archuthan Mohanathasan.
                    <br>
                    
                    <span style="font-size: 0.6rem; opacity: 0.4;">
                        <a href="https://www.flaticon.com/free-icons/growth" title="growth icons" style="color: inherit; text-decoration: none;">
                            Icon by Freepik (Flaticon)
                        </a>
                    </span>
                </div>
            </footer>
        `;
    }
}

customElements.define('app-footer', AppFooter);