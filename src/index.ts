/* Function */

import { getQueryParam } from 'mazey';

/**
 * @method hideHeaderInTOC
 * @description Hide header when TOC shows.
 * @return {Boolean} true or false
 */
export function hideHeaderInTOC(): boolean {
  const EzTocContainerDom = document.querySelector('#ez-toc-container');
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
  if (EzTocContainerDom && SiteHeaderDom) {
    // Listen
    window.addEventListener('scroll', handleScroll);
    // Init when page loaded
    setTimeout(() => {
      // console.log('Init when page loaded');
      handleScroll();
    }, 25);
  }
  return true;
}

/**
 * @method hideSidebar
 * @description Hide sidebar.
 * @return {Boolean} true or false
 */
export function hideSidebar(): boolean {
  const hideSidebarParam = getQueryParam('hide_sidebar');
  const secondaryDom: any = document.querySelector('#secondary');
  const primaryDom: any = document.querySelector('#primary');
  if (hideSidebarParam && secondaryDom && primaryDom) {
    secondaryDom.style.display = 'none';
    primaryDom.style.width = '100%';
  }
  return true;
}
