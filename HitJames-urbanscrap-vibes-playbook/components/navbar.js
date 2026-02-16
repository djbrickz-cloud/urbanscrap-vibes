class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    background-color: rgba(25, 20, 20, 0.8);
                    backdrop-filter: blur(10px);
                    position: sticky;
                    top: 0;
                    z-index: 50;
                }
                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .logo {
                    font-weight: 700;
                    font-size: 1.5rem;
                    color: white;
                    text-decoration: none;
                }
                .logo span {
                    color: #1DB954;
                }
                .nav-links {
                    display: flex;
                    gap: 1.5rem;
                }
                .nav-links a {
                    color: white;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.2s;
                }
                .nav-links a:hover {
                    color: #1DB954;
                }
                @media (max-width: 768px) {
                    nav {
                        padding: 1rem;
                    }
                    .nav-links {
                        display: none;
                    }
                }
            </style>
            <nav>
                <a href="/" class="logo">HIT<span>JAMES</span></a>
                <button class="md:hidden" id="mobile-menu-button">
                  <i data-feather="menu"></i>
                </button>
                <div class="nav-links hidden md:flex">
<a href="#">Home</a>
                    <a href="#">Music</a>
                    <a href="#">Gallery</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </nav>
        `;
    }
}
customElements.define('custom-navbar', CustomNavbar);