import { LitElement, html, css } from 'lit';

class PopupWindow extends LitElement {
  static sharedStyles = css`
    :host {
      display: grid;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(
        160deg,
        rgba(47, 93, 197, 0.9) 0%,
        rgba(0, 0, 0, 0.9)
      );
      border-radius: 20px;
      padding: 15px;
      box-sizing: border-box;
      z-index: 1;
      place-items: center;
      height: 600px;
      width: 700px;
    }
    h2 {
      color: white;
      font-size: 1.7em;
    }

    .button {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 30px;
      height: 30px;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: 20px;
      color: white;
    }

    .button:hover {
      background-color: rgba(3, 169, 244, 0.9);
    }

    .button:active {
      background-color: #065174;
    }

    .content {
      display: grid;
      grid-template-rows: auto 1fr auto;
      gap: 30px;
      align-items: center;
      justify-items: center;
    }

    img {
      height: 300px;
      width: 550px;
      border-radius: 5px;
    }

    .links-container {
      display: flex;
      gap: 120px;
    }

    .bcolor1 {
      background: linear-gradient(90deg, #03a9f4, #f441a5, #03a9f4);
      border: none;
      background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
      background-size: 300%;
      border-radius: 30px;
      z-index: 1;
      width: 9.7em;
      height: 2.7em;
      font-size: 1.2rem;
      position: relative;
      cursor: pointer;
    }

    .bcolor1:before {
      content: '';
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      z-index: -1;
      background: linear-gradient(90deg, #03a9f4, #f441a5, #03a9f4);
      background-size: 400%;
      border-radius: 35px;
      transition: 1s;
    }

    .bcolor1:hover::before {
      filter: blur(20px);
    }
    .link {
      color: white;
      text-decoration: none;
    }
    .logo {
      width: 50px;
      height: 50px;
      display: flex;
    }
    .icons-logo {
      display: flex;
    }
    @media screen and (max-width: 700px) {
      :host {
        width: 500px;
        height: 550px;
      }
      img {
        height: 200px;
        width: 90%;
      }
      .bcolor1 {
        width: 9em;
        height: 2em;
        font-size: 1rem;
      }
    }
    @media screen and (max-width: 510px) {
      :host {
        width: 390px;
        height: 500px;
      }
      img {
        height: 150px;
        width: 80%;
      }
      .links-container {
        gap: 50px;
      }
      .logo {
        width: 40px;
        height: 40px;
      }
    }
    @media screen and (max-width: 400px) {
      :host {
        width: 290px;
        height: 400px;
      }
      img {
        height: 110px;
        width: 80%;
      }
      .links-container {
        flex-wrap: wrap;
      }
      .logo {
        width: 30px;
        height: 30px;
      }
      .bcolor1 {
        width: 5.5em;
        height: 2em;
      }
    }
  `;

  static styles = [PopupWindow.sharedStyles];

  static properties = {
    content: { type: Object },
    title: { type: String },
  };

  cerrarVentana() {
    this.remove();
  }

  connectedCallback() {
    super.connectedCallback();
    document.body.addEventListener(
      'click',
      this.cerrarVentanaSiEsExterior,
      true
    );
  }

  cerrarVentanaSiEsExterior = (event) => {
    if (!this.shadowRoot.contains(event.target)) {
      this.remove();
    }
  };

  disconnectedCallback() {
    super.disconnectedCallback();
    document.body.removeEventListener('click', this.cerrarVentanaSiEsExterior);
  }

  render() {
    return html`
      <div class="content">
        <button class="button" @click=${this.cerrarVentana}>X</button>
        <i><h2>${this.title}</h2></i>
        <img src="${this.content.image}" alt="" />
        <div class="links-container">
          <button class="bcolor1">
            <a class="link" href="${this.content.link1}" target="_blank">
              ${this.content.label1}
            </a>
          </button>
          <button class="bcolor1">
            <a class="link" href="${this.content.link2}" target="_blank">
              ${this.content.label2}
            </a>
          </button>
        </div>
        <div class="icons-logo">
          ${this.content.icons.map(
            (icon) => html`<img class="logo" src="${icon}" alt="" />`
          )}
        </div>
      </div>
    `;
  }
}

customElements.define('popup-window', PopupWindow);

class BurgerQueenPopup extends PopupWindow {
  static styles = [...PopupWindow.styles, css``];

  constructor() {
    super();
    this.title = 'Burger queen Api client';
    this.content = {
      image: 'public/assets/bqac.png',
      link1:
        'https://github.com/Claucegoma/DEV009-burger-queen-api-client/compare/main...AKMoralesRamos:DEV009-burger-queen-api-client:main',
      label1: 'GitHub repository',
      link2: 'https://dev-009-burger-queen-api-client-indol.vercel.app/',
      label2: 'App Link',
      icons: [
        'public/assets/icon-react-native.png',
        'public/assets/icons-bootstrap.png',
        'public/assets/icon-javascript.png',
        'public/assets/icons8-html-48.png',
        'public/assets/icons8-css-48.png',
        'public/assets/icon-vite.png',
        'public/assets/icons-node-js.png',
        'public/assets/icons-jest.png',
      ],
    };
  }
}
customElements.define('burger-queen-popup', BurgerQueenPopup);

class MdlinksPopup extends PopupWindow {
  static styles = [...PopupWindow.styles, css``];

  constructor() {
    super();
    this.title = 'Markdown links library';
    this.content = {
      image: 'public/assets/mdlinks.png',
      link1: 'https://github.com/Claucegoma/DEV008-md-links',
      label1: 'GitHub repository',
      link2: 'https://www.npmjs.com/package/cecy-md-links?activeTab=readme',
      label2: 'App Link',
      icons: [
        'public/assets/icon-javascript.png',
        'public/assets/icons-node-js.png',
        'public/assets/axios.png',
        'public/assets/icons-jest.png',
        'public/assets/yargs.png'
      ],
    };
  }
}

customElements.define('md-links-popup', MdlinksPopup);

class SocialNetworkPopup extends PopupWindow {
  static styles = [...PopupWindow.styles, css``];

  constructor() {
    super();
    this.title = 'Social network / CatsSociety';
    this.content = {
      image: 'public/assets/catsSociety.png',
      link1: 'https://github.com/Claucegoma/DEV008-social-network',
      label1: 'GitHub repository',
      link2: 'https://dev-008-social-network-nqirb9y8e-claucegoma.vercel.app/',
      label2: 'App Link',
      icons: [
        'public/assets/icon-javascript.png',
        'public/assets/icons8-html-48.png',
        'public/assets/icons8-css-48.png',
        'public/assets/icon-vite.png',
        'public/assets/icons-node-js.png',
        'public/assets/icons-jest.png',
        'public/assets/icons8-firebase-48.png',
        'public/assets/icon-babel.png',
      ],
    };
  }
}

customElements.define('social-network-popup', SocialNetworkPopup);
