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
        `
    ];

    render() {
        return html`
         <i><h2>Curiosities</h2></i>
        `;
    }

  
}
customElements.define('my-curiosities', Mycuriosities);
