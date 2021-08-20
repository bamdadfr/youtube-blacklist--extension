/**
 * @param {object} objectA first object
 * @param {object} objectB second object
 * @returns {boolean} objects are the same?
 */
export function compareObjects (objectA, objectB) {

    if (typeof objectA !== 'object') throw new Error ('objectA is not an object')

    if (typeof objectB !== 'object') throw new Error ('objectB is not an object')

    const aKeys = Object.getOwnPropertyNames (objectA)
    const bKeys = Object.getOwnPropertyNames (objectB)

    if (aKeys.length !== bKeys.length) return false

    for (let i = 0; i < aKeys.length; i++) {

        const key = aKeys[i]

        if (objectA[key] !== objectB[key]) return false
    
    }

    return true

}