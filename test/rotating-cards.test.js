import { html, fixture, expect } from '@open-wc/testing';

import './components/rotating-cards.js';

describe('RotatingCardsSection component', () => {
  it('renders without errors', async () => {
    const el = await fixture(html`<rotating-cards-section></rotating-cards-section>`);
    expect(el).to.not.be.undefined;
  });

  it('displays the correct title', async () => {
    const el = await fixture(html`<rotating-cards-section></rotating-cards-section>`);
    const title = el.shadowRoot.querySelector('h2');
    expect(title.textContent).to.include('Skills');
  });

  it('has the correct number of cards', async () => {
    const el = await fixture(html`<rotating-cards-section></rotating-cards-section>`);
    const cards = el.shadowRoot.querySelectorAll('.card');
    expect(cards.length).to.equal(4); // Adjust this number based on your actual card count
  });

  // Add more tests as needed

  it('contains specific skills in the first card', async () => {
    const el = await fixture(html`<rotating-cards-section></rotating-cards-section>`);
    const techSkillsCard = el.shadowRoot.querySelector('.card:nth-child(1)');

    // Replace these with actual skills present in your component
    expect(techSkillsCard.textContent).to.include('JavaScript');
    expect(techSkillsCard.textContent).to.include('HTML 5');
    expect(techSkillsCard.textContent).to.include('CSS 3');
    expect(techSkillsCard.textContent).to.include('Node JS');
    expect(techSkillsCard.textContent).to.include('TypeScript');
    expect(techSkillsCard.textContent).to.include('Jest');
  });

  // Add more tests for other cards and specific content

});
