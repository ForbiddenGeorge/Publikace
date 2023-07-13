import { authorizedFetch } from './authorizedFetch';

//Mutace pro přidání nového autora k publikaci
const PublicationAddAuthorMutationJSON = (userId, publicationId, AuthorNumber) => ({
   /**
   * Funkce pro vytvoření JSON objektu pro mutaci pro přidání nového autora k publikaci.
   *
   * Parametry:
   * - userId (str): ID uživatele.
   * - publicationId (str): ID publikace.
   * - AuthorNumber (int): Pořadí autora v publikaci.
   *
   * Vrací:
   * - objekt: JSON objekt pro mutaci pro přidání nového autora k publikaci.
   */
  query: `
    mutation {
      authorInsert(author:{
        userId: "${userId}",
        publicationId: "${publicationId}",
        order: ${AuthorNumber},
        share: 0.0
      }) {
        msg
        id
        author {
          id
          order
          share 
          lastchange
          user{
            id
            name
            surname
            email
          }
        }
      }
    }
  `
});

export const PublicationAddAuthorMutation = (props) => 
 /**
   * Funkce pro provádění mutace pro přidání nového autora k publikaci.
   *
   * Parametry:
   * - props: Objekt obsahující parametry pro mutaci (userId, publicationId, AuthorNumber).
   *
   * Vrací:
   * - Promise: Výsledek mutace pro přidání nového autora k publikaci.
   */
  authorizedFetch('/gql', {
    body: JSON.stringify(PublicationAddAuthorMutationJSON(props.userId, props.publicationId, props.AuthorNumber))
  })