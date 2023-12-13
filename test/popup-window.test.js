import { html, fixture, expect } from '@open-wc/testing';

import './components/popup-window.js'; 

describe('PopupWindow component', () => {
  it('renders without errors', async () => {
    const el = await fixture(html`<popup-window></popup-window>`);
    expect(el).to.not.be.undefined;
  });

  it('displays the correct title', async () => {
    const el = await fixture(html`<popup-window title="Burger queen Api client"></popup-window>`);
    const title = el.shadowRoot.querySelector('h2');
    expect(title.textContent).to.include('Burger queen Api client');
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

/* 
import { html, fixture, expect } from '@open-wc/testing';
import './path/to/PopupWindow'; // Reemplaza con la ruta real

describe('PopupWindow', () => {
  it('se renderiza con valores predeterminados', async () => {
    const el = await fixture(html`<popup-window></popup-window>`);
    expect(el.title).to.equal('');
    expect(el.content).to.deep.equal({});
    // Agrega más expectativas según los valores predeterminados
  });

  it('se renderiza con el contenido proporcionado', async () => {
    const el = await fixture(html`
      <popup-window .title=${'Título de prueba'} .content=${{
        image: './ruta/a/imagen-de-prueba.png',
        link1: 'https://ejemplo.com',
        label1: 'Enlace de ejemplo',
        link2: 'https://ejemplo2.com',
        label2: 'Enlace de ejemplo 2',
        icons: ['./ruta/a/icono1.png', './ruta/a/icono2.png'],
      }}></popup-window>
    `);

    expect(el.title).to.equal('Título de prueba');
    expect(el.content).to.deep.equal({
      image: './ruta/a/imagen-de-prueba.png',
      link1: 'https://ejemplo.com',
      label1: 'Enlace de ejemplo',
      link2: 'https://ejemplo2.com',
      label2: 'Enlace de ejemplo 2',
      icons: ['./ruta/a/icono1.png', './ruta/a/icono2.png'],
    });
    // Agrega más expectativas según el contenido proporcionado
  });

  it('llama al método cerrarVentana cuando se hace clic en el botón', async () => {
    const el = await fixture(html`<popup-window></popup-window>`);
    const spy = jest.spyOn(el, 'cerrarVentana');
    el.shadowRoot.querySelector('.button').click();
    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockRestore();
  });

  it('cierra la ventana al hacer clic fuera del componente', async () => {
    const el = await fixture(html`<popup-window></popup-window>`);
    const spy = jest.spyOn(el, 'remove');
    
    // Simula un clic fuera del componente
    document.body.click();

    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockRestore();
  });
}); */
