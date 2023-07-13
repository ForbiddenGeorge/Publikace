//authorized fetch
const globalFetchParams = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    redirect: 'follow', // manual, *follow, error
}
/**
 * Funkce pro autorizovaný fetch, která vytváří vrstvu pro komunikaci se serverem.
 *
 * Parametry:
 * - path (str): Cesta k API.
 * - params (objekt): Parametry fetch požadavku.
 *
 * Vrací:
 * - Promise: Výsledek fetch požadavku.
 */

/**
 * Zapouzdrujici funkce pro fetch, vytvari mezi vrstvu pro komunikace ze serverem
 * @param {*} path 
 * @param {*} params 
 * @returns 
 */
export const authorizedFetch = (path, params) => {
    const newParams = {...globalFetchParams, ...params} // allow owerwrite default parameters (globalFetchParams)
    const overridenPath = '/api/gql'
    return (
        fetch(overridenPath, newParams) //params.header should be extended with Authorization TOKEN
    )
}