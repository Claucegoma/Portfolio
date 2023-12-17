import { LitElement, html, css } from 'lit';

class RotatingCardsSection extends LitElement {
  static styles = css`
    h2 {
      color: #d4af37;
      margin-top: 50px;
      font-size: 2.5rem;
      margin-left: 70px;
    }
    h2:hover {
      color: #ab8712;
    }

    .card-section {
      display: grid;
      gap: 20px;
      text-align: center;
      justify-content: center;
    }

    @media (min-width: 550px) {
      .card-section {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 900px) {
      .card-section {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (min-width: 1100px) {
      .card-section {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .card {
      position: relative;
      width: 250px;
      height: 330px;
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
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      font-size: 1.5rem;
      border-radius: 20px;
      border: 7px solid transparent; 
      border-image: linear-gradient(115deg, #075a76, #ab8712, #a767e5, #00a9e1);
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

    .card-face-back {
      transform: rotateY(180deg);
    }
    ul {
      list-style-type: none;
      padding: 1px;
      margin: 1px;
    }

    li {
      margin-bottom: 6px; 
    }
    .image {
      height: 170px;
      width: 200px;
    }
  `;

  render() {
    return html`
      <i><h2>Skills</h2></i>
      <div class="card-section">
        <div class="card">
          <div class="card-inner">
            <div class="card-face">
              Tech skills
              <img class="image" src="/assets/tech-skills.png" alt="" />
            </div>
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
            <div class="card-face">
              Soft skills
              <img class="image" src="/assets/team-work.png" alt="" />
            </div>
            <div class="card-face-back">
              <ul>
                <li>Resilience</li>
                <li>Tenacity</li>
                <li>Creativity</li>
                <li>Perseverance</li>
                <li>Responsibility</li>
                <li>Punctuality</li>
                <li>Self-Learning</li>
                <li>Effective communication</li>
                <li>Ethic</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-face">
              Frameworks
              <img class="image" src="/assets/frameworks.png" alt="" />
            </div>
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
            <div class="card-face">
              Tools
              <img class="image" src="/assets/tools.png" alt="" />
            </div>
            <div class="card-face-back">
              <ul>
                <li>Git</li>
                <li>Github</li>
                <li>Firebase</li>
                <li>NPM/YARN</li>
                <li>Vite</li>
                <li>Trello</li>
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
