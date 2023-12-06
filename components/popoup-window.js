import { LitElement, html, css } from 'lit';

class PopupWindow extends LitElement {
  static styles = css`
                    :host {
                      position: fixed;
                      top: 50%;
                      left: 50%;
                      height:400px;
                      width:450px;
                      transform: translate(-50%, -50%);
                      background:  rgba(13, 173, 242, 0.2); 
                      border-radius: 20px;
                      padding: 7px;
                      box-sizing: border-box;
                        }

                    .button {
                      position: relative;
                      width: 30px;
                      height: 30px;
                      border: none;
                      background: none;
                      cursor:pointer;
                      border-radius:20px;
                      color:white;
                    }

                    .button:hover {
                      background-color:rgba(196, 142, 251, 0.5);
                    }

                    .button:active {
                      background-color: #c48efb;
                    }
                    .links-container {
                      margin-top: 20px;
                      display:grid;
                      gap: 20px;
                     
                      
                    }

                    .link {
                      color: white;
                      text-decoration: none;
                      display: block;
                      margin-bottom: 10px;
                    }
                    img{
                      height:200px;
                      width:350px;
                      border-radius:5px;
                    }
                    .bcolor1 {
                      position: relative;
                      background: linear-gradient(90deg, #03a9f4, #f441a5, #03a9f4);
                      border: none;   
                      background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
                      background-size: 300%;
                      border-radius: 30px;
                      z-index: 1;
                      width: 7em;
                      height: 2.5em;
                     
                    }
                    .bcolor1:before {
                        content: '';
                        position: absolute;
                        top: -5px;
                        left: -5px;
                        right: -5px;
                        bottom: -5px;
                        z-index: -1;
                        background: linear-gradient(90deg,#03a9f4,#f441a5,#03a9f4);
                        background-size: 400%;
                        border-radius: 35px;
                        transition: 1s;
                        }
                    .bcolor1:hover::before {
                        filter: blur(20px);
                        }

  `;

  cerrarVentana() {
    this.remove();
  }

  render() {
    return html`
        <div>
        <button class="button" @click=${this.cerrarVentana}>X</button>
        <img src = "./assets/bqac.png" alt ="">
        <div class="links-container">
        <button class="bcolor1"> 
          <a class="link" href="https://github.com/Claucegoma/DEV009-burger-queen-api-client/compare/main...AKMoralesRamos:DEV009-burger-queen-api-client:main" target="_blank">
            GitHub repository
          </a></button> 
          <button class="bcolor1">
            <a class="link" href="https://dev-009-burger-queen-api-client-indol.vercel.app/" target="_blank">
             App Link
          </a></button> 
        </div>
      </div>
    `;
  }
}

customElements.define('popup-window', PopupWindow);

