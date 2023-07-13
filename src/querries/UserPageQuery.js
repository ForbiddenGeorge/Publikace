import { authorizedFetch } from '../querries/authorizedFetch'

//Query pro seznam uživatelů
export const UserpageQueryJSON = () => ({
    /**
   * Funkce pro vytvoření JSON objektu pro dotaz na seznam uživatelů.
   *
   * Vrací:
   * - objekt: JSON objekt pro dotaz na seznam uživatelů.
   */
    "query":
        `{
            userPage{
                id
                name
                surname
                email
                authorPublications {
                  id
                }
              }
        }`
})


export const UserPageQuery = () =>
/**
   * Funkce pro provádění dotazu na seznam uživatelů.
   *
   * Vrací:
   * - Promise: Výsledek dotazu na seznam uživatelů.
   */
    authorizedFetch('/gql', {
        body: JSON.stringify(UserpageQueryJSON()),
    })