import { detectPage } from './detect-page'
import { setState } from './set-state'

/**
 *
 */
export async function setCurrentPage () {

    const [currentPage] = detectPage ()

    await setState ('currentPage', currentPage)

}