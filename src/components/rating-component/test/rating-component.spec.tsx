import { newSpecPage } from '@stencil/core/testing';
import { RatingComponent } from '../rating-component';

describe('rating-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RatingComponent],
      html: `<rating-component></rating-component>`,
    });
    expect(page.root).toEqualHtml(`
      <rating-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rating-component>
    `);
  });
});
