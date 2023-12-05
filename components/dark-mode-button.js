import { LitElement, html, css } from 'lit';

class DarkModeButton extends LitElement {
  static styles = css`
    button {
      background-color: #104e62;
      color: #fff;
      padding: 8px 16px;
      cursor: pointer;
      border-radius: 50px;
      display: flex;
      margin-left: 850px;
      border: 0;
      margin-top: 20px;
    }
    button:hover {
  transform: translateY(-3px);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
}

  `;

  static properties = {
    darkMode: { type: Boolean },
  };

  constructor() {
    super();
    this.darkMode = false;
  }

  render() {
    return html`<button @click=${this.toggleDarkMode}>${this.darkMode ? '🌛' : '🌞'}</button>`;
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-mode', this.darkMode);
    this.requestUpdate();
  }
}

customElements.define('dark-mode-button', DarkModeButton);

