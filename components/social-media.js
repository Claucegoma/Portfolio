import { LitElement, html, css } from 'lit';

export class SocialMedia extends LitElement {
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
                .media-section {
                    display: grid;
                    gap: 20px;
                    text-align: center;
                    justify-content: center;
                    padding:40px;
                    }
                

                    @media (min-width: 450px) {
                    .media-section {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    }
                    @media (min-width: 700px) {
                    .media-section {
                        grid-template-columns: repeat(3, 1fr);
                    }
                    }

                    @media (min-width: 900px) {
                    .media-section {
                        grid-template-columns: repeat(4, 1fr);
                    }
                    }

                
                .button-linkedin {
                        display: flex;
                        background-color: #0A66C2;
                        color: #ffffff;
                        width:180px;
                        height:50px;
                        border-radius: 30px;
                        line-height: 1.25rem;
                        text-align: center;
                        text-align: center;
                        justify-content: center;
                        align-items: center;
                        gap: 0.75rem;
                        border: none;
                        cursor: pointer;
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                        transition: .6s ease;
                        }

                        .button-linkedin svg {
                        height: 30px;
                        }

                        .button-linkedin:hover {
                        background-image: linear-gradient(70deg, #1192dc,#03a9f4, #0A66C2, #a160e2,#79099be1);
                        background-size: 200% 200%;
                        animation: gradientChange 1.5s ease infinite;
                        transform: translateY(-15px);
                    }

                    @keyframes gradientChange {
                        0% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                        100% {
                            background-position: 0% 50%;
                        }
                    }   
                                            

                .button-github {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 10px 15px;
                        gap: 15px;
                        background-color: #181717;
                        outline: 3px #181717 solid;
                        outline-offset: -3px;
                        width:180px;
                        height:50px;
                        border-radius: 30px;    
                        cursor: pointer;
                        transition: 400ms;
                        }

                        .button-github .text {
                        color: white;
                        font-weight: 700;
                        font-size: 1em;
                        transition: 400ms;
                        }

                        .button-github svg path {
                        transition: 400ms;
                        }

                        .button-github:hover {
                        background-color: transparent;
                        }

                        .button-github:hover .text {
                        color: #181717;
                        }

                        .button-github:hover svg path {
                        fill: #181717;
                        }
                .botao {
                        width: 125px;
                        height: 45px;
                        width:180px;
                        border-radius: 30px;
                        height:50px;
                        border: none;                   
                        padding: 5px 10px;
                        background: rgb(47,93,197);
                        background: linear-gradient(160deg, rgba(47,93,197,1) 0%, rgba(46,86,194,1) 5%, rgba(47,93,197,1) 11%, rgba(59,190,230,1) 57%, rgba(0,212,255,1) 71%);
                        color: #fff;
                        line-height: 1;
                        cursor: pointer;
                        filter: drop-shadow(0 0 10px rgba(59, 190, 230, 0.568));
                        transition: .5s linear;
                        }

                        .botao .mysvg {
                        display: none;
                        }

                        .botao:hover {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        transition: .5s linear;
                        }

                        .botao:hover .texto {
                        display: none;
                        }

                        .botao:hover .mysvg {
                        display: inline;
                        }

                        .botao:hover::before {
                        content: '';
                        position: absolute;
                        top: -3px;
                        left: -3px;
                        width: 100%;
                        height: 100%;
                        border: 3.5px solid transparent;
                        border-top: 3.5px solid #fff;
                        border-right: 3.5px solid #fff;
                        border-radius: 50%;
                        animation: animateC 2s linear infinite;
                        }

                        @keyframes animateC {
                        0% {
                            transform: rotate(0deg);
                        }

                        100% {
                            transform: rotate(360deg);
                        }
                        }


                .button {
                        height: 50px;
                        width: 180px;
                        background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
                        border-radius: 25px;
                        animation: animate 1.5s linear infinite;
                        border: none;
                        cursor: pointer;
                        }

                        .button, .display, #msg {
                        transition: 0.3s;
                        }

                        .button:active .display {
                        background: rgba(255, 255, 255, 0.5);
                        }

                        .button:active .display #msg {
                        -webkit-text-fill-color: #1b1b1b;
                        }

                        .button:hover {
                        scale: 1.15;
                        animation: animate 0.7s linear infinite;
                        transform: translateY(-15px);
                        }

                        .button .display, .button span {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        }

                        .button .display {
                        z-index: 1;
                        background-color: #1b1b1b;
                        height: 42.5px;
                        width: 172.5px;
                        border-radius: 20px;
                        text-align: center;
                        }

                        .button .display #msg {
                        line-height: 42.5px;
                        
                        background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        }

                        @keyframes animate {
                        100% {
                            filter: hue-rotate(360deg);
                        }
                        }

                        .button span {
                        height: 100%;
                        width: 100%;
                        background: inherit;
                        border-radius: 25px;
                        }

                        .button span:first-child {
                        filter: blur(15px);
                        }

                        .button span:last-child {
                        filter: blur(15px);
                        transition: 0.3s;
                        }

                        .button:hover span:last-child {
                        width: 110%;
                        height: 120%;
                        }
                        .svgIcon path {
                        fill: white;
                        }
                        
        `
    ];

    render() {
        return html`
         <i><h2>Social media</h2></i>
         <div class="media-section">
         <button class="button-linkedin" @click="${() => this.redirectToLinkedIn()}"> 
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"></path></g></svg>
 LinkedIn 
  </button>

  <button class="button-github"  @click="${() => this.redirectToGithub()}">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" fill="white"></path>
  </svg>
  <p class="text">Github</p>
</button>

  <button class="botao" @click="${() => this.downloadCV()}">
  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mysvg"><g id="SVGRepo_bgCarrier" stroke-width="0">
    </g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
       <g id="Interface / Download"> 
       <path id="Vector" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" stroke="#f1f1f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
       </path>
    </g> </g>
  </svg>
  <span class="texto">Download my CV</span>
</button>


<button class="button">
  <div class="display">
    <div id="msg">  <svg class="svgIcon" viewBox="0 0 512 512" height="1.2em"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg>
    Send me an email</div>
  </div>
</button>
</div>
        `;
    }
    redirectToLinkedIn() {
        window.location.href = 'https://www.linkedin.com/in/ceciliagonzalezmariblanca777/';
      }
      redirectToGithub() {
        window.location.href = 'https://github.com/Claucegoma';
      }
      downloadCV() {
        const cvUrl = './cv.pdf';
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'cv.pdf';
        link.click();
      }
      
}
customElements.define('social-media', SocialMedia);
