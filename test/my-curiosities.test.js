import { html, fixture, expect } from '@open-wc/testing';

import './components/my-curiosities.js'; 

describe('MyCuriosities component', () => {
  it('renders without errors', async () => {
    const el = await fixture(html`<my-curiosities></my-curiosities>`);
    expect(el).to.not.be.undefined;
  });

  it('contains the correct title', async () => {
    const el = await fixture(html`<my-curiosities></my-curiosities>`);
    const title = el.shadowRoot.querySelector('h2');
    expect(title.textContent).to.include('Curiosities');
  });

  it('displays cards with correct content', async () => {
    const el = await fixture(html`<my-curiosities></my-curiosities>`);
    const cards = el.shadowRoot.querySelectorAll('.card');

    cards.forEach((card, index) => {
      const cardContent = card.textContent.toLowerCase();
      switch (index) {
        case 0:
          expect(cardContent).to.include('cat lover');
          break;
        case 1:
          expect(cardContent).to.include('different languages');
          expect(cardContent).to.include('spanish-native');
          expect(cardContent).to.include('english-intermediate');
          expect(cardContent).to.include('italian-basic');
          break;
        case 2:
          expect(cardContent).to.include('courses and certifications');
          expect(cardContent).to.include('front-end developer-laboratoria');
          expect(cardContent).to.include('scrum foundation-certiprof');
          expect(cardContent).to.include('lit element-net4skills');
          break;
        case 3:
          expect(cardContent).to.include('love to dance');
          expect(cardContent).to.include('flamenco');
          expect(cardContent).to.include('tango');
          expect(cardContent).to.include('bachata');
          expect(cardContent).to.include('salsa');
          expect(cardContent).to.include('arabic dance');
          break;
        default:
          break;
      }
    });
  });
});
