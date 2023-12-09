import { LitElement, html, css } from 'lit';

export class Mycuriosities extends LitElement {
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
                img{
                    height:200px;
                    width:auto;
                }
                
                .card {
                position: relative;
                width: 300px;
                height: 200px;
                margin: 10px;
                perspective: 1000px;
                display:flex;
                align-items: center;
                justify-content: center; 
                box-sizing: border-box;
                font-size:1.5rem;
                border-radius:20px;   
                border: 7px solid transparent; /* Grosor del borde animado */
                border-image: linear-gradient(115deg,#075a76, #ab8712, #a767e5, #00a9e1);
                border-image-slice: 1;
                animation: border-animation 5s linear infinite;
            }

            @keyframes border-animation {
            0% {
                border-image-source: linear-gradient(115deg, #075a76, #ab8712, #a767e5, #00a9e1);
            }
            25% {
                border-image-source: linear-gradient(115deg, #00a9e1,#D4AF37 , #075a76, #ab8712, #a767e5);
            }
            50% {
                border-image-source: linear-gradient(115deg, #a767e5, #00a9e1,#D4AF37 , #075a76, #ab8712);
            }
            75% {
                border-image-source: linear-gradient(115deg, #ab8712, #a767e5, #00a9e1,#D4AF37 , #075a76);
            }
            100% {
                border-image-source: linear-gradient(115deg, #075a76, #ab8712, #a767e5, #00a9e1,#D4AF37 );
            }
            }

            p{
                font-size:1.2rem;
            }
                   
                   `
    ];

    render() {
        return html`
         <i><h2>Curiosities</h2></i>
        
         <div class="card">
         <img src ="./assets/meow.png" alt ="">
         <p>As you can imagine, I am a true cat lover.
            <br>
            <br>
         Having cats makes your life happier and more fun.
         </p>
            
         </div>
         <div class="card">
            <h6>I love to understand different languages.</h6>
         <ul>
                <li>Spanish-native</li>
                <li>English-intermediate</li>
                <li>Italian-basic</li>
         </ul>
        
            
         </div>
        `;
    }

  
}
customElements.define('my-curiosities', Mycuriosities);
