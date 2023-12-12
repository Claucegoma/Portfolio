import { html, fixture, expect, oneEvent } from '@open-wc/testing';
import './components/dark-mode-button.js'; 

describe('DarkModeButton component', () => {
  it('renders without errors', async () => {
    const el = await fixture(html`<dark-mode-button></dark-mode-button>`);
    expect(el).to.not.be.undefined;
  });

  it('toggles dark mode on button click', async () => {
    const el = await fixture(html`<dark-mode-button></dark-mode-button>`);
    const button = el.shadowRoot.querySelector('button');

    button.click();
    expect(el.darkMode).to.be.true;

    button.click();
    expect(el.darkMode).to.be.false;
  });

  it('dispatches a custom event on dark mode toggle', async () => {
    const el = await fixture(html`<dark-mode-button></dark-mode-button>`);
    const button = el.shadowRoot.querySelector('button');

    setTimeout(() => button.click(), 0);

    const { detail } = await oneEvent(el, 'dark-mode-toggled');
    expect(detail).to.have.property('darkMode', true);
  });
});
