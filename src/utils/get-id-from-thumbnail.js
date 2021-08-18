/**
 * @param {HTMLDivElement} thumbnail youtube video thumbnail (compactVideoRenderer)
 * @returns {string} video id
 */
export function getIdFromThumbnail (thumbnail) {

    const href = thumbnail.getElementsByTagName ('a')[0].href
    const regex = /v=.*?(?=&|$)/

    return regex
        .exec (href)[0]
        .replace ('v=', '')

}