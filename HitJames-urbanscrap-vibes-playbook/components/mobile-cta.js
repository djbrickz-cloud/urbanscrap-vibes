class MobileCTA extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(25, 20, 20, 0.95);
          padding: 1rem;
          display: flex;
          gap: 1rem;
          z-index: 1000;
          border-top: 1px solid rgba(29, 185, 84, 0.3);
        }
        button {
          flex: 1;
          padding: 1rem;
          border-radius: 8px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        .play-btn {
          background: #1DB954;
          color: white;
        }
        .save-btn {
          background: black;
          color: white;
          border: 1px solid #1DB954;
        }
        @media (min-width: 768px) {
          :host {
            display: none;
          }
        }
      </style>
      <button class="play-btn">
        <i data-feather="play"></i> PLAY
      </button>
      <button class="save-btn">
        <i data-feather="heart"></i> SAVE
      </button>
    `;
  }
}
customElements.define('mobile-cta', MobileCTA);