class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    padding: 2rem 0;
                    margin-top: 4rem;
                }
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1.5rem;
                }
                .social-links {
                    display: flex;
                    gap: 1.5rem;
                }
                .social-links a {
                    color: white;
                    transition: color 0.2s;
                }
                .social-links a:hover {
                    color: #1DB954;
                }
                .copyright {
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 0.875rem;
                    text-align: center;
                }
            </style>
            <div class="footer-content">
                <div class="social-links">
                    <a href="#"><i data-feather="instagram"></i></a>
                    <a href="#"><i data-feather="twitter"></i></a>
                    <a href="#"><i data-feather="youtube"></i></a>
                    <a href="#"><i data-feather="facebook"></i></a>
                    <a href="#"><i data-feather="spotify"></i></a>
                </div>
                <div class="copyright">
                    &copy; ${new Date().getFullYear()} HitJames. All rights reserved.
</div>
            </div>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);