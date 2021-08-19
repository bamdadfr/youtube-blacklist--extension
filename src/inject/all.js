import { setCurrentVideoId } from '../utils/set-current-video-id'
import { setStaticDataId } from '../utils/set-static-data-id'
import { rewriteFetch } from '../utils/rewrite-fetch'

(() => {

    rewriteFetch ()

    setCurrentVideoId ()

    setStaticDataId ()

}) ()