import { authorizedFetch } from '../querries/authorizedFetch'

//Query pro publikace
export const GroupsSelectQueryJSON = () => ({
   /**
   * Funkce pro vytvoření JSON objektu pro dotaz na publikace.
   *
   * Vrací:
   * - objekt: JSON objekt pro dotaz na publikace.
   */
    "query":
        `{
          publicationPage {
            id
            name
            lastchange
            publishedDate
            place
            reference
            publicationtype {
              id
              name
            }
            authors {
              id
              order
              lastchange
              share
              user {
                id
                name
                surname
                email
                
              }
            }
          }
        }`
})


export const GroupsSelectQuery = () =>
 /**
   * Funkce pro provádění dotazu na publikace.
   *
   * Vrací:
   * - Promise: Výsledek dotazu na publikace.
   */
    authorizedFetch('/gql', {
        body: JSON.stringify(GroupsSelectQueryJSON()),
    })