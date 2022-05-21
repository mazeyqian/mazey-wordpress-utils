/* Function */

import { throttle } from 'mazey';

/**
 * @method hideHeaderInTOC
 * @description Hide header when TOC shows.
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
 * @method hideSidebar
 * @description Hide sidebar.
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
 * @method isIncludeInUrl
 * @description Determine the result of including the string.
 * @param {String} urlContainString content
 * @return {Boolean} true or false
 */
 export function isIncludeInUrl({ urlContainString = '' } = {}): boolean {
  const Url = location.href;
  return Url.includes(urlContainString);
}
