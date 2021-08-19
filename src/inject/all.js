import { setCurrentVideoId } from '../utils/set-current-video-id'
import { setStaticDataId } from '../utils/set-static-data-id'
import { interceptFetch } from '../utils/intercept-fetch'

(() => {

    interceptFetch ()

    setCurrentVideoId ()

    setStaticDataId ()

}) ()