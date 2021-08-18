import { getData } from './utils/get-data'

(() => {

    const sidebar = document.querySelectorAll ('#items')[1]

    sidebar.addEventListener ('DOMNodeInserted', (e) => {

        console.log (e)

        getData ('watch')

    })

    getData ('watch')

}) ()
