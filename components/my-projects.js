import { LitElement, html, css } from 'lit';

export class MyProjects extends LitElement {
    static styles = [
        css`
             h2 {
                    color: #D4AF37;
                    margin-top: 50px;
                    font-size: 2.5rem;
                    margin-left:70px;
                }
                h2:hover {
                    color: #ab8712;
                  
                  
                }
                button {
                        text-decoration: none;
                        position: relative;
                        border: none;
                        font-size: 14px;
                        font-family: inherit;
                        color: #fff;
                        width: 9em;
                        height: 3em;
                        line-height: 2em;
                        text-align: center;
                        background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
                        background-size: 300%;
                        border-radius: 30px;
                        z-index: 1;
                        cursor:pointer;
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
  background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
  background-size: 400%;
  border-radius: 35px;
  transition: 1s;
}

button:hover::before {
  filter: blur(20px);
}

button:active {
  background: linear-gradient(32deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
}
        `
    ];

    render() {
        return html`
        <i><h2>My projects</h2></i>
        <button>Burger Queen</button>
        <button>MDLinks</button>
        <button>Social Network</button>
        `;
    }
}
customElements.define('my-projects', MyProjects);
