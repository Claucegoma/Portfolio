import { html, fixture, expect } from '@open-wc/testing';

import './components/popup-window.js'; 

describe('PopupWindow component', () => {
  it('renders without errors', async () => {
    const el = await fixture(html`<popup-window></popup-window>`);
    expect(el).to.not.be.undefined;
  });

  it('displays the correct title', async () => {
    const el = await fixture(html`<popup-window title="Test"></popup-window>`);
    const title = el.shadowRoot.querySelector('h2');
    expect(title.textContent).to.include('Test');
  });

  it('closes the window on button click', async () => {
    const el = await fixture(html`<popup-window></popup-window>`);
    const closeButton = el.shadowRoot.querySelector('.button');

    // Mocking remove method to check if the component is removed
    const removeSpy = sinon.spy(el, 'remove');

    closeButton.click();

    // Check if the component is removed
    expect(removeSpy.calledOnce).to.be.true;

    // Clean up
    removeSpy.restore();
  });

  // Añade más pruebas según sea necesario
});
