import { LitElement, html, css } from 'lit';

export class Mycuriosities extends LitElement {
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
      img {
        height: 200px;
        width: auto;
      }

      .card {
        position: relative;
        width: 300px;
        height: 200px;
        margin: 10px;
        perspective: 1000px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        font-size: 1.5rem;
        border-radius: 20px;
        border: 7px solid transparent;
        border-image: linear-gradient(
          115deg,
          #075a76,
          #ab8712,
          #a767e5,
          #00a9e1
        );
        border-image-slice: 1;
        animation: border-animation 5s linear infinite;
      }

      @keyframes border-animation {
        0% {
          border-image-source: linear-gradient(
            115deg,
            #075a76,
            #ab8712,
            #a767e5,
            #00a9e1
          );
        }
        25% {
          border-image-source: linear-gradient(
            115deg,
            #00a9e1,
            #d4af37,
            #075a76,
            #ab8712,
            #a767e5
          );
        }
        50% {
          border-image-source: linear-gradient(
            115deg,
            #a767e5,
            #00a9e1,
            #d4af37,
            #075a76,
            #ab8712
          );
        }
        75% {
          border-image-source: linear-gradient(
            115deg,
            #ab8712,
            #a767e5,
            #00a9e1,
            #d4af37,
            #075a76
          );
        }
        100% {
          border-image-source: linear-gradient(
            115deg,
            #075a76,
            #ab8712,
            #a767e5,
            #00a9e1,
            #d4af37
          );
        }
      }

      p {
        font-size: 1.2rem;
      }
      li {
        font-size: 1.2rem;
      }

      .icon {
        height: 20px;
        width: 20px;
      }
      .certi {
        height: 50px;
        width: 80px;
      }

      .card-section {
        display: grid;
        gap: 20px;
        text-align: center;
        justify-content: center;
      }

      .ali-certi {
        flex-direction: column;
        flex-wrap: wrap;
      }

      @media (min-width: 660px) {
        .card-section {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (min-width: 1000px) {
        .card-section {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @media (min-width: 1100px) {
        .card-section {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    `,
  ];

  render() {
    return html`
      <i><h2>Curiosities</h2></i>
      <div class="card-section">
        <div class="card">
          <img src="/public/assets/meow.png" alt="" />
          <p>
            As you can imagine, I am a true cat lover.
            <br />
            <br />
            Having cats makes your life happier and more fun.
          </p>
        </div>

        <div class="card">
          <p>
            I love to understand different languages.
            <br />
            <br />
            By now i could use at least three.
          </p>
          <ul>
            <img class="icon" src="/public/assets/icon-spain.png" alt="" />
            <li>Spanish-native</li>
            <img class="icon" src="/public/assets/icon-uk.png" alt="" />
            <li>English-intermediate</li>
            <img class="icon" src="/public/assets/icon-italy.png" alt="" />
            <li>Italian-basic</li>
          </ul>
        </div>

        <div class="card">
          <div class="ali-certi">
            <p>Courses and certifications</p>
            <img class="certi" src="/public/assets/labo.png" alt="" />
            <img class="certi" src="/public/assets/certiprof.png" alt="" />
          </div>
          <ul>
            <li>Front-End developer-Laboratoria</li>
            <li>Scrum Foundation-CertiProf</li>
            <li>Lit Element-Net4Skills</li>
          </ul>
        </div>
        <div class="card">
          <p>
            I also love to dance; <br />I see dance as speaking a different
            languages too <br />
            💃🎵
          </p>
          <ul>
            <li>Flamenco</li>
            <li>Tango</li>
            <li>Bachata</li>
            <li>Salsa</li>
            <li>Arabic dance</li>
            <li>etc.</li>
          </ul>
        </div>
      </div>
    `;
  }
}
customElements.define('my-curiosities', Mycuriosities);
