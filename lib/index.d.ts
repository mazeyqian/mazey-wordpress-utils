/**
 * Hide header when TOC shows.
 *
 * @param {Array} urlContainList string list
 * @return {Boolean} true or false
 */
export declare function hideHeaderInTOC({ urlContainList }?: {
    urlContainList?: string[] | undefined;
}): boolean;
/**
 * Hide sidebar.
 *
 * @param {Array} urlContainList string list
 * @return {Boolean} true or false
 */
export declare function hideSidebar({ urlContainList }?: {
    urlContainList?: string[] | undefined;
}): boolean;
/**
 * Determine the result of including the string.
 *
 * @param {String} urlContainString content
 * @return {Boolean} true or false
 */
export declare function isIncludeInUrl({ urlContainString }?: {
    urlContainString?: string | undefined;
}): boolean;
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
export declare function setImgWidthHeight(): boolean;
//# sourceMappingURL=index.d.ts.map