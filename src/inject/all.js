import { defineId } from '../utils/define-id'
import { defineInitialDataScript } from '../utils/define-initial-data-script'
import { rewriteFetch } from '../rewrite-fetch'

(() => {

    rewriteFetch ()

    defineId ()

    defineInitialDataScript ()

}) ()