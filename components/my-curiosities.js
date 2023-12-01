import { LitElement, html, css } from 'lit';

export class Mycuriosities extends LitElement {
    static styles = [
        css`
            h1 {
                    color: #D4AF37;
                    margin-top: 50px;
                    font-size: 2.5rem;
                    margin-left:70px;
                }
        `
    ];

    render() {
        return html`
         <i><h1>Curiosities</h1></i>
        `;
    }

  
}
customElements.define('my-curiosities', Mycuriosities);
