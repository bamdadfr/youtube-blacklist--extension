/**
 * @returns {HTMLCollection} collection of thumbnails (youtube videoCompactRenderer)
 */
export function getThumbnails () {

    return document.getElementsByTagName ('ytd-compact-video-renderer')

}