import { authorizedFetch } from '../querries/authorizedFetch'

//Query pro typy publikací
export const PublicationTypeQueryJSON = () => ({
    /**
   * Funkce pro vytvoření JSON objektu pro dotaz na typy publikací.
   *
   * Vrací:
   * - objekt: JSON objekt pro dotaz na typy publikací.
   */
    "query":
        `{
                publicationTypePage{
                  id,
                  name,
                }
        }`
})


export const PublicationTypeQuery = () =>
/**
   * Funkce pro provádění dotazu na typy publikací.
   *
   * Vrací:
   * - Promise: Výsledek dotazu na typy publikací.
   */
    authorizedFetch('/gql', {
        body: JSON.stringify(PublicationTypeQueryJSON()),
    })