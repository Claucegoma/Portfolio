import { LitElement, html, css } from 'lit';

class DarkModeButton extends LitElement {
  static styles = css`
    button {
      background-color: #104e62;
      color: #fff;
      padding: 8px 16px;
      cursor: pointer;
      border-radius: 70px;
      border: 0;
      align-self: center;
    }

    button:hover {
      transform: translateY(-3px);
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
    }
    @media screen and (min-width: 320px) {
      button {
        margin: 2px;
      }
    }

    @media screen and (min-width: 400px) {
      button {
        margin-left: 100px;
        margin: 20px;
      }
    }
    
    @media screen and (min-width: 500px) {
      button {
        margin-left: 120px;
     
      }
    }

    @media screen and (min-width: 659px) {
      button {
        margin-left: 200px;
      }
    }

    @media screen and (min-width: 790px) {
      button {
        margin-left: 300px;
      }
    }

    @media screen and (min-width: 850px) {
      button {
        margin-left: 400px;
      }
    }
    @media screen and (min-width: 1000px) {
      button {
        margin-left: 500px;
      }
    }
    @media screen and (min-width: 1100px) {
      button {
        margin-left: 800px;
      }
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
    return html`<button @click=${this.toggleDarkMode}>
      ${this.darkMode ? '🌛' : '🌞'}
    </button>`;
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-mode', this.darkMode);
    this.requestUpdate();
  }
}

customElements.define('dark-mode-button', DarkModeButton);
