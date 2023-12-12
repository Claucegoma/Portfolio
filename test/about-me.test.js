import { html, fixture, expect } from '@open-wc/testing';

import'./components/about-me.js'; 

describe('AboutMe component', () => {
  it('renders without errors', async () => {
    const el = await fixture(html`<about-me></about-me>`);
    expect(el).to.not.be.undefined;
  });

  it('contains the correct text content', async () => {
    const el = await fixture(html`<about-me></about-me>`);
    const textContent = el.shadowRoot.querySelector('.content p').textContent;
    expect(textContent).to.include('Cecilia González Mariblanca');
  });
});
