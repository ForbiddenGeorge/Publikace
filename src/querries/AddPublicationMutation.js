import { authorizedFetch } from './authorizedFetch';

//Query pro přidání nové publikace
const AddPublicationMutationJSON = (title, publicationType, location, reference) => ({
  /**
   * Funkce pro vytvoření JSON objektu pro mutaci pro přidání nové publikace.
   *
   * Parametry:
   * - title (str): Název publikace.
   * - publicationType (str): ID typu publikace.
   * - location (str): Umístění publikace.
   * - reference (str): Reference publikace.
   *
   * Vrací:
   * - objekt: JSON objekt pro mutaci pro přidání nové publikace.
   */
    query: `
    mutation {
      publicationInsert
      (publication:{
        name:"${title}", 
        publicationTypeId:"${publicationType}",
        place: "${location}",
        reference: "${reference}",
        publishedDate: "2023-06-08T06:23:16.301800"
      }),
      {
      id
      msg
      publication{
        id,
         name,
          place,
          lastchange
          publicationtype{
            id
            name
          }
          reference,
          publishedDate
          authors{
          id,
          user{
            name
          }
        }
        }}
    }
  `
});

export const AddPublicationMutation = (props) => 
/**
   * Funkce pro provádění mutace pro přidání nové publikace.
   *
   * Parametry:
   * - props: Objekt obsahující parametry pro mutaci (title, publicationType, location, reference).
   *
   * Vrací:
   * - Promise: Výsledek mutace pro přidání nové publikace.
   */
  authorizedFetch('/gql', {
    body: JSON.stringify(AddPublicationMutationJSON(props.title, props.publicationType, props.location, props.reference))
  })