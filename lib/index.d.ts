/**
 * Sets a copy button for all <p> tags within the specified element.
 * The copy button allows users to copy the text content of the <p> tag.
 *
 * @returns {boolean} True if the copy buttons were successfully set, false otherwise.
 */
export declare function setCopyBtnForAllTagP(): boolean;
/**
 * Set the 'loading' attribute of all images within a specified element to 'lazy', enabling lazy loading.
 * The function only runs once after the page has loaded.
 *
 * ```javascript
 * setImgLazyLoadingWhenDomReady('.site-content');
 * ```
 *
 * @param selector - CSS selector for the element that contains the images. Default is '.site-content'.
 * @returns {boolean} - Returns `true` if the function was able to set the images' lazy loading and it hasn't been run before, `false` otherwise.
 */
export declare function setImgLazyLoadingWhenDomReady(selector?: string): boolean;
/**
 * Hide the header when it meets one of these two conditions:
 *
 * - Use WordPress Plugin [Easy Table of Contents](https://wordpress.org/plugins/easy-table-of-contents/) and open it in this page.
 * - The page's URL is matched with one of the `urlContainList`.
 *
 * Example: <https://example.com/home?hide_header_in_toc>
 *
 * ```javascript
 * hideHeaderInTOC({
 *   urlContainList: ['hide_header_in_toc', 'no_header_in_toc'],
 *   headerSelector: '.site-header'
 * });
 * ```
 *
 * @param options - Configuration options for hiding the header.
 * @param options.urlContainList - List of strings. If the current URL contains any of these strings, the header will be hidden. Default is ['hide_header_in_toc'].
 * @param options.headerSelector - CSS selector for the header. Default is '.site-header'.
 * @returns {boolean} - Returns `true` if the header was successfully hidden, `false` otherwise.
 */
export declare function hideHeaderInTOC(options?: {}): boolean;
/**
 * Hide the sidebar on the webpage.
 *
 * Example: <https://example.com/home?hide_sidebar>
 *
 * ```javascript
 * hideSidebar({
 *   urlContainList: ['hide_sidebar', 'no_sidebar'],
 *   primarySelector: '#main-content',
 *   secondarySelector: '#sidebar'
 * });
 * ```
 *
 * @param options - Configuration options for hiding the sidebar.
 * @param options.urlContainList - List of strings. If the current URL contains any of these strings, the sidebar will be hidden. Default is ['hide_sidebar'].
 * @param options.primarySelector - CSS selector for the primary content area. Default is '#primary'.
 * @param options.secondarySelector - CSS selector for the sidebar. Default is '#secondary'.
 * @returns {boolean} - Returns `true` if the sidebar was successfully hidden, `false` otherwise.
 */
export declare function hideSidebar(options?: {}): boolean;
/**
 * Check if the current URL includes a specified string.
 *
 * Example: <https://example.com/home?example>
 *
 * ```javascript
 * isIncludeInUrl({
 *   urlContainString: 'example'
 * });
 * ```
 *
 * @param options.urlContainString - The string to check for in the URL. Default is an empty string.
 * @returns {boolean} - Returns `true` if the URL contains the specified string, `false` otherwise.
 */
export declare function isIncludeInUrl(options?: {}): boolean;
/**
 * Set the width and height of an image based on the parameters specified in the image's URL.
 *
 * Use jQuery to select all `img` elements on the page and then checks each image's `src` attribute for `width` and `height` parameters. If these parameters are found, the function sets the image's width and height accordingly.
 *
 * The width and height parameters in the URL should be in the format `width=<value><unit>` and `height=<value><unit>`, where `<value>` is a number and `<unit>` is a CSS unit like `px`, `rem`, or `vw`.
 *
 * Example 1:
 * For an image with the URL `<img src="https://example.com/image.png?width=400px&height=200px" alt="file" />`, the function will execute `window.jQuery('img').width('400px')` and `window.jQuery('img').height('200px')`.
 *
 * Example 2:
 * For an image with the URL `<img src="https://example.com/image.png?width=400rem&height=20vw" alt="file" />`, the function will execute `window.jQuery('img').width('400rem')` and `window.jQuery('img').height('20vw')`.
 *
 * @returns {boolean} - Returns `true` if jQuery is available and the function was able to run, `false` otherwise.
 */
export declare function setImgWidthHeight(): boolean;
//# sourceMappingURL=index.d.ts.map