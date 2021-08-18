// import { getBrowser } from './utils/get-browser'
//
// const browser = getBrowser ()
//
// const targets = [
//     'https://www.youtube.com/youtubei/v1/next*',
//     'https://www.youtube.com/youtubei/v1/browse*',
// ]
//
// /**
//  * @param requestDetails
//  */
// function logURL (requestDetails) {
//
//     const { url } = requestDetails
//
//     if (!url.includes ('youtube.com')) return
//
//     if (url.includes ('/v1/next')) {
//
//         console.log ('next')
//
//         return
//
//     }
//
//     if (url.includes ('/v1/browse')) {
//
//         console.log ('browse')
//
//     }
//
// }
//
// browser.webRequest.onBeforeRequest.addListener (
//     logURL,
//     { 'urls': targets },
// )