/* Function */

import { throttle } from 'mazey';

/**
 * Hide header when TOC shows.
 * 
 * @param {array} options.urlContainList string list
 * @param {string} options.headerSelector string
 * @return {boolean} true or false
 */
export function hideHeaderInTOC(options = {}): boolean {
// export function hideHeaderInTOC({ urlContainList = [ 'urlContainListDefaultValue' ] } = {}): boolean {
  const { urlContainList = [], headerSelector } = Object.assign({
    urlContainList: [ 'hide_header_in_toc' ],
    headerSelector: '.site-header',
  }, options);
  let isIncludeUrls = false;
  if (urlContainList.length === 0) {
    isIncludeUrls = true;
  } else {
    isIncludeUrls = urlContainList.some(urlContainString => isIncludeInUrl({ urlContainString }));
  }
  const isEzTocContainerDomExist = document.querySelector('#ez-toc-container');
  const isHideHeader = isIncludeUrls || isEzTocContainerDomExist;
  const SiteHeaderDom = document.querySelector(headerSelector);
  if (!SiteHeaderDom) return false;
  // Handle Event
  function handleScroll () {
    if (!SiteHeaderDom) return;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const visibility = SiteHeaderDom.style.visibility;
    if (scrollTop > 100) {
      if (visibility !== 'hidden') SiteHeaderDom.style.visibility = 'hidden';
    } else {
      if (visibility !== 'visible') SiteHeaderDom.style.visibility = 'visible';
    }
  }
  if (isHideHeader && SiteHeaderDom) {
    // Listen
    window.addEventListener('scroll', throttle(handleScroll, 50, { leading: true }));
    // Init when page loaded
    setTimeout(() => {
      handleScroll();
    }, 25);
    return true;
  }
  return false;
}

/**
 * Hide sidebar.
 * 
 * @param {array} options.urlContainList string list
 * @param {string} options.primarySelector string
 * @param {string} options.secondarySelector string
 * @return {boolean} true or false
 */
export function hideSidebar(options = {}): boolean {
// export function hideSidebar({ urlContainList = [ 'hide_sidebar' ] } = {}): boolean {
  const { urlContainList = [], primarySelector, secondarySelector } = Object.assign({
    urlContainList: [ 'hide_sidebar' ],
    primarySelector: '#primary',
    secondarySelector: '#secondary',
  }, options);
  const isHideSidebar = urlContainList.some(urlContainString => isIncludeInUrl({ urlContainString }));
  const secondaryDom = document.querySelector(secondarySelector);
  if (!secondaryDom) return false;
  const primaryDom = document.querySelector(primarySelector);
  if (!primaryDom) return false;
  if (isHideSidebar && secondaryDom && primaryDom) {
    secondaryDom.style.display = 'none';
    primaryDom.style.width = '100%';
    return true;
  }
  return false;
}

/**
 * Determine the result of including the string.
 * 
 * @param {string} options.urlContainString content
 * @return {boolean} true or false
 */
export function isIncludeInUrl(options = {}): boolean {
// export function isIncludeInUrl({ urlContainString = '' } = {}): boolean {
  const { urlContainString = '' } = Object.assign({
    urlContainString: '',
  }, options);
  const Url = location.href;
  return Url.includes(urlContainString);
}

/**
 * Set img width and height.
 * 
 * Example 1: <img src="https://blog.mazey.net/wp-content/uploads/2023/04/6448ecfac7bb4.png?width=400px&height=200&others=233" alt="file" />
 * window.jQuery('xxxx').width('400px')
 * window.jQuery('xxxx').height('200px')
 * 
 * Example 2: <img src="https://blog.mazey.net/wp-content/uploads/2023/04/6448ecfac7bb4.png?width=400rem&height=20vw&others=233" alt="file" />
 * window.jQuery('xxxx').width('400rem')
 * window.jQuery('xxxx').height('200vw')
 * 
 * @return {boolean} true or false
 */
export function setImgWidthHeight(): boolean {
  const $ = window.jQuery || window.$;
  if ($) {
    $('img').each(function () {
      const $this = $(this);
      if (!$this) return;
      const src = $this.attr('src');
      if (!src) return;
      const width = src.match(/width=([0-9]+[a-z%]+)/);
      const height = src.match(/height=([0-9]+[a-z%]+)/);
      if (width && width[1]) $this.width(width[1]);
      if (height && height[1]) $this.height(height[1]);
    });
    return true;
  }
  return false;
}
