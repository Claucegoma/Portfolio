import { LitElement, html, css } from 'lit';

class RotatingCardsSection extends LitElement {
  static styles = css`
    h1 {
      color: #D4AF37;
      margin-top: 50px;
      font-size: 2.5rem;
      margin-left:70px;
    }

    .card-section {
      display: grid;
     /*  grid-template-columns: repeat(2, 1fr); */
      gap: 20px;
      text-align: center;
      justify-content: center;
    }
    @media (min-width: 300px) {
      .card-section {
        grid-template-columns: repeat(4, 1fr);
      }
    }

     @media (min-width: 600px) {
      .card-section {
        grid-template-columns: repeat(3, 1fr);
      }
    }

     @media (min-width: 900px) {
      .card-section {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .card {
      position: relative;
      width: 250px;
      height: 320px;
      margin: 10px;
      perspective: 1000px;
    }

    .card-inner {
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.5s;
    }

    .card:hover .card-inner {
      transform: rotateY(180deg);
    }

    .card-face,
    .card-face-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }

    .card-face-back {
      transform: rotateY(180deg);
    }
    ul {
    list-style-type: none;
    padding: 1px;
    margin: 1px;
  }

  li {
    margin-bottom: 7px; /* Opcional: Agrega espacio entre los elementos de la lista */
  }
  .image{
    height:150px;
    width:170px;
  }
  `;

  render() {
    return html`
      <i><h1>Skills</h1></i>
      <div class="card-section">
        <div class="card">
          <div class="card-inner">
            <div class="card-face">Tech skills</div>
            <div class="card-face-back">
            <ul>
              <li>JavaScript</li>
              <li>HTML 5</li>
              <li>CSS 3</li>
              <li>Node JS</li>
              <li>TypeScript</li>
              <li>Jest</li>
            </ul>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-face">Soft skills
            <img  class="image" src="./assets/team-work.png" alt="">
            </div>
            <div class="card-face-back">
            <ul>
                <li>Resilience</li>
                <li>Tenacity</li>
                <li>Creativity</li>
                <li>Perseverance</li>
                <li>Responsibility</li>
                <li>Punctuality</li>
                <li>Organization</li>
                <li>Team Work</li>
                <li>Agile Methodology</li>
                <li>Self-Learning</li>
                <li>Effective Communication</li>
                <li>Ethic</li>
                </ul>

            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-face">Frameworks</div>
            <div class="card-face-back">
            <ul>
              <li>Lit</li>
              <li>React JS</li>
              <li>React-Bootstrap</li>
              <li>Bootstrap</li>
            </ul>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-face">Tools</div>
            <div class="card-face-back">
            <ul>
              <li>Git</li>
              <li>Github</li>
              <li>Firebase</li>
              <li>NPM/YARN</li>
              <li>Trello</li>
              <li>Vite</li>
              <li>Figma</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('rotating-cards-section', RotatingCardsSection);
