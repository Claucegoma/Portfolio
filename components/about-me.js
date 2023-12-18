import { LitElement, html, css } from 'lit';


export class AboutMe extends LitElement {
    static styles = [
        css`
           :host {
                 display: grid;
                 gap: 20px;
                 padding: 10px;
                 justify-content: center;
                 box-sizing: border-box;
                }

                .container {
                    grid-column: span 1;
                    text-align: center;
                }

                h1 {
                    color: #D4AF37;
                    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.1);
                    transition: color 0.3s;
                    font-size: 3.5rem;
                }

                h1:hover {
                    color: #ab8712;
                  
                  
                }

                img {
                    width: 40%;
                    height: auto;
                    margin: auto;
                    border-radius:15px;
                }

                .content {
                    display: grid;
                    gap: 20px;
                    text-align: center;
                    justify-content: center;
                }

                p {
                    font-size: 1.4rem;
                
                }
                @media (max-width: 320px) {
                    h1 {
                    font-size: 2.5rem;
                }
                    p {
                    font-size: 1.2rem;
                
                }
                }
                @media screen and (min-width: 300px) {
                 .content {
                    grid-template-columns: repeat(1, 1fr); 
                        }
                }

                @media screen and (min-width: 700px) {
                 .content {
                    grid-template-columns: repeat(2, 1fr); 
                        }
                }            

        `
    ];

    render() {
        return html`
       <div class="container"><i><h1>Cecilia González Mariblanca</h1></i></div>
       <div class ="content">
        <p>Over the years, i have learned to reinvent myself in different ways, surpassing my own limits, thus
            embracing fear as a preamble to success.<br>
            Thanks to technology, i have found the opportunity to have constant
            professional growth, and to be a lifelong learner in a world where everything evolves very quickly.
            <br>

            Perseverance lives with me day by day. When something
            motivates and excites me, i put my mind and heart into it, and that has
            always been my formula for success.
        </p>
        <img src= "/assets/yo-removebg-preview.png" alt ="" />
        
        </div>

       
        `;
    }
}
customElements.define('about-me', AboutMe);
