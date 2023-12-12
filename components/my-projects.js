import { LitElement, html, css } from 'lit';
import './popup-window';

export class MyProjects extends LitElement {
  static styles = [
    css`
      h2 {
        color: #d4af37;
        margin-top: 50px;
        font-size: 2.5rem;
        margin-left: 70px;
      }
      h2:hover {
        color: #ab8712;
      }
      .projects-section {
        display: grid;
        gap: 20px;
        text-align: center;
        justify-content: center;
        padding: 40px;
      }

      @media (min-width: 450px) {
        .projects-section {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (min-width: 700px) {
        .projects-section {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @media (min-width: 900px) {
        .projects-section {
          grid-template-columns: repeat(3, 1fr);
        }
      }
      button {
        text-decoration: none;
        position: relative;
        border: none;
        font-size: 1.2rem;
        font-family: inherit;
        color: #fff;
        width: 180px;
        height: 40px;
        line-height: 2em;
        text-align: center;
        background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
        background-size: 300%;
        border-radius: 30px;
        z-index: 1;
        cursor: pointer;
      }

      button:hover {
        animation: ani 8s linear infinite;
        border: none;
      }

      @keyframes ani {
        0% {
          background-position: 0%;
        }

        100% {
          background-position: 400%;
        }
      }

      button:before {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        z-index: -1;
        background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
        background-size: 400%;
        border-radius: 35px;
        transition: 1s;
      }

      button:hover::before {
        filter: blur(20px);
      }

      button:active {
        background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
      }
    `,
  ];

  mostrarVentanaEmergente(project) {
    let popupWindow;

    switch (project) {
      case 'Burger Queen':
        popupWindow = document.createElement('burger-queen-popup');
        break;
      case 'MDLinks':
        popupWindow = document.createElement('md-links-popup');
        break;
      case 'Social Network':
        popupWindow = document.createElement('social-network-popup');
        break;
      default:
        popupWindow = document.createElement('popup-window');
        break;
    }

    document.body.appendChild(popupWindow);
  }

  render() {
    return html`
      <i><h2>My projects</h2></i>
      <div class="projects-section">
        <button @click=${() => this.mostrarVentanaEmergente('Burger Queen')}>
          Burger Queen
        </button>
        <button @click=${() => this.mostrarVentanaEmergente('MDLinks')}>
          MD Links
        </button>
        <button @click=${() => this.mostrarVentanaEmergente('Social Network')}>
          Social Network
        </button>
      </div>
    `;
  }
}

customElements.define('my-projects', MyProjects);
