import { newE2EPage } from '@stencil/core/testing';

describe('rating-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rating-component></rating-component>');

    const element = await page.find('rating-component');
    expect(element).toHaveClass('hydrated');
  });
});
