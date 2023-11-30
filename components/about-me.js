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
                    /* text-shadow: 2px 2px 8px rgba(255, 255, 255, 1); */
                  
                }

                img {
                    width: 50%;
                    height: auto;
                    margin: 0 auto;
                    border-radius:15px;
                }

                .content {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 20px;
                    text-align: center;
                }

                p {
                    font-size: 1.5rem;
                }

                @media screen and (min-width: 1400px) {
                    :host {
                        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    }

                    .container {
                        grid-column: span 1;
                    }
                }


        `
    ];

    render() {
        return html`
       <div class="container"><i><h1>Cecilia González Mariblanca</h1></i></div>
       <div class ="content">
        <p>Over the years, i have learned to reinvent myself in different ways,surpassing my own limits, thus
            embracing fear as a preamble to success.<br>
            Thanks to technology, i have found the opportunity to have constant
            professional growth. 
            Perseverance lives with me day by day. When something
            motivates and excites me, I put my mind and heart into it, and that has
            always been my formula for success.
        </p>
        <img src= "./assets/yo-removebg-preview.png" alt ="" />
        </div>

       
        `;
    }
}
customElements.define('about-me', AboutMe);
