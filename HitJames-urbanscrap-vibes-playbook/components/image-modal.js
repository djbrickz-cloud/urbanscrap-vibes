class ImageModal extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.9);
          z-index: 1000;
          display: none;
          align-items: center;
          justify-content: center;
        }
        .modal-content {
          max-width: 90vw;
          max-height: 90vh;
        }
        .close-btn {
          position: absolute;
          top: 2rem;
          right: 2rem;
          color: white;
          font-size: 2rem;
          cursor: pointer;
        }
      </style>
      <span class="close-btn">&times;</span>
      <img class="modal-content" src="" alt="Enlarged view">
    `;

    this.shadowRoot.querySelector('.close-btn').addEventListener('click', () => {
      this.style.display = 'none';
    });
  }

  showImage(src) {
    this.style.display = 'flex';
    this.shadowRoot.querySelector('img').src = src;
  }
}
customElements.define('image-modal', ImageModal);