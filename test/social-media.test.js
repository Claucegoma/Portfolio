import { html, fixture, expect } from '@open-wc/testing';

import './components/social-media.js'; 

describe('SocialMedia component', () => {
  it('renders without errors', async () => {
    const el = await fixture(html`<social-media></social-media>`);
    expect(el).to.not.be.undefined;
  });

  it('displays the correct title', async () => {
    const el = await fixture(html`<social-media></social-media>`);
    const title = el.shadowRoot.querySelector('h2');
    expect(title.textContent).to.include('Social media');
  });

  it('redirects to LinkedIn profile on button click', async () => {
    const el = await fixture(html`<social-media></social-media>`);
    const linkedinButton = el.shadowRoot.querySelector('.button-linkedin');
    linkedinButton.click();
    // Assert logic to check if the redirection occurred
  });

  // Add more tests for other buttons, events, and functionality

  it('toggles info container on info button click', async () => {
    const el = await fixture(html`<social-media></social-media>`);
    const infoButton = el.shadowRoot.querySelector('.info-button');
    const infoContainer = el.shadowRoot.querySelector('.info-container');
    
    // Info container should initially be hidden
    expect(infoContainer.classList.contains('show-info')).to.be.false;

    // Click the info button to show the container
    infoButton.click();
    expect(infoContainer.classList.contains('show-info')).to.be.true;

    // Click the info button again to hide the container
    infoButton.click();
    expect(infoContainer.classList.contains('show-info')).to.be.false;
  });

  // Add more tests as needed

});
