import { getQueryParam } from 'mazey';

/* Function */
/**
 * @method hideHeaderInTOC
 * @description Hide header when TOC shows.
 * @return {Boolean} true or false
 */

function hideHeaderInTOC() {
  var EzTocContainerDom = document.querySelector('#ez-toc-container');
  var SiteHeaderDom = document.querySelector('.site-header'); // Handle Event

  function handleScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var visibility = SiteHeaderDom.style.visibility; // console.log('scrollTop', scrollTop);
    // console.log('SiteHeaderDom.style.visibility', visibility);

    if (scrollTop > 100) {
      if (visibility !== 'hidden') SiteHeaderDom.style.visibility = 'hidden';
    } else {
      if (visibility !== 'visible') SiteHeaderDom.style.visibility = 'visible';
    }
  }

  if (EzTocContainerDom && SiteHeaderDom) {
    // Listen
    window.addEventListener('scroll', handleScroll); // Init when page loaded

    setTimeout(function () {
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

function hideSidebar() {
  var hideSidebarParam = getQueryParam('hide_sidebar');
  var secondaryDom = document.querySelector('#secondary');
  var primaryDom = document.querySelector('#primary');

  if (hideSidebarParam && secondaryDom && primaryDom) {
    secondaryDom.style.display = 'none';
    primaryDom.style.width = '100%';
  }

  return true;
}

export { hideHeaderInTOC, hideSidebar };
