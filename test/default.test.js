/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import { setImgLazyLoadingWhenDomReady, hideHeaderInTOC, hideSidebar, isIncludeInUrl, setImgWidthHeight } from '../src/index.ts';

describe('setImgLazyLoadingWhenDomReady', () => {
  test('should set loading attribute to lazy for all images within the specified element', () => {
    document.body.innerHTML = `
      <div class="site-content">
        <img src="image1.jpg">
        <img src="image2.jpg">
      </div>
    `;
    setImgLazyLoadingWhenDomReady('.site-content');
    const images = document.querySelectorAll('.site-content img');
    images.forEach(image => {
      expect(image.getAttribute('loading')).toBe('lazy');
    });
  });
});

describe('hideSidebar', () => {
  test('should not hide the sidebar when the URL does not contain "hide_sidebar"', () => {
    document.body.innerHTML = `
      <div id="primary"></div>
      <div id="secondary"></div>
    `;
    hideSidebar();
    const primary = document.querySelector('#primary');
    const secondary = document.querySelector('#secondary');
    expect(primary.style.width).not.toBe('100%');
    expect(secondary.style.display).not.toBe('none');
  });
});

describe('isIncludeInUrl', () => {
  test('should return false when the URL does not contain the specified string', () => {
    const result = isIncludeInUrl({ urlContainString: 'notfound' });
    expect(result).toBe(false);
  });
});

describe('setImgWidthHeight', () => {
  test('should not set the width and height of an image when jQuery is not available', () => {
    window.jQuery = undefined;
    document.body.innerHTML = `
      <img src="image.jpg?width=400px&height=200px">
    `;
    const result = setImgWidthHeight();
    expect(result).toBe(false);
  });
});
