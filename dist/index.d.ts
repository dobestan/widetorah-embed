/**
 * widetorah-embed — TypeScript declarations
 *
 * The embed script is self-executing. Simply import it to activate widgets.
 * All configuration is provided via data-* attributes on DOM elements.
 */

export {};

declare global {
  interface HTMLElement {
    /** Widget type attribute for WideTorah */
    dataset: DOMStringMap & {
      'widetorah'?: 'verse' | 'chapter' | 'person' | 'compare' | 'votd' | 'search';
      ref?: string;
      slug?: string;
      a?: string;
      b?: string;
      theme?: 'light' | 'dark' | 'sepia';
      size?: 'default' | 'compact';
      translation?: string;
      showOriginal?: 'true' | 'false';
      placeholder?: string;
      lang?: string;
    };
  }
}
