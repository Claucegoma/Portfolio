import { html, fixture, expect } from '@open-wc/testing';

import './components/my-projects.js'; 

describe('MyProjects component', () => {
  it('renders without errors', async () => {
    const el = await fixture(html`<my-projects></my-projects>`);
    expect(el).to.not.be.undefined;
  });

  it('displays the correct title', async () => {
    const el = await fixture(html`<my-projects></my-projects>`);
    const title = el.shadowRoot.querySelector('h2');
    expect(title.textContent).to.include('My projects');
  });

  it('displays buttons for each project', async () => {
    const el = await fixture(html`<my-projects></my-projects>`);
    const buttons = el.shadowRoot.querySelectorAll('button');

    expect(buttons.length).to.equal(3);

    buttons.forEach((button) => {
      expect(button.textContent.trim()).to.be.oneOf(['Burger Queen', 'MD Links', 'Social Network']);
    });
  });

  it('opens the correct popup window on button click', async () => {
    const el = await fixture(html`<my-projects></my-projects>`);
    const buttons = el.shadowRoot.querySelectorAll('button');

    // Mocking document.body.appendChild to check if the correct popup window is created
    const appendChildSpy = sinon.spy(document.body, 'appendChild');

    buttons[0].click(); // Click on the first button

    // Check if the correct popup window is created
    expect(appendChildSpy.calledOnce).to.be.true;
    expect(appendChildSpy.calledWithMatch(sinon.match.instanceOf(BurgerQueenPopup))).to.be.true;

    // Clean up
    appendChildSpy.restore();
  });
});
