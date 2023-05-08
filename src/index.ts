/* Function */

import { throttle } from 'mazey';

/**
 * Hide header when TOC shows.
 * 
 * @param {Array} urlContainList string list
 * @return {Boolean} true or false
 */
export function hideHeaderInTOC({ urlContainList = [ 'urlContainListDefaultValue' ] } = {}): boolean {
  const isIncludeUrls = urlContainList.some(urlContainString => isIncludeInUrl({ urlContainString }));
  const isEzTocContainerDomExist = document.querySelector('#ez-toc-container');
  const isHideHeader = isIncludeUrls || isEzTocContainerDomExist;
  const SiteHeaderDom: any = document.querySelector('.site-header');
  // Handle Event
  function handleScroll () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const visibility = SiteHeaderDom.style.visibility;
    // console.log('scrollTop', scrollTop);
    // console.log('SiteHeaderDom.style.visibility', visibility);
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
      // console.log('Init when page loaded');
      handleScroll();
    }, 25);
    return true;
  }
  return false;
}

/**
 * Hide sidebar.
 * 
 * @param {Array} urlContainList string list
 * @return {Boolean} true or false
 */
export function hideSidebar({ urlContainList = [ 'hide_sidebar' ] } = {}): boolean {
  const isHideSidebar = urlContainList.some(urlContainString => isIncludeInUrl({ urlContainString }));
  const secondaryDom: any = document.querySelector('#secondary');
  const primaryDom: any = document.querySelector('#primary');
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
 * @param {String} urlContainString content
 * @return {Boolean} true or false
 */
 export function isIncludeInUrl({ urlContainString = '' } = {}): boolean {
  const Url = location.href;
  return Url.includes(urlContainString);
}

// Use jQuery, If window.jQuery or window.$ doesn't exist, return false.
// When a <img> element src has the parameter `width` or `height`, the image should be set style/css width or height.
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
 * @return {Boolean} true or false
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
