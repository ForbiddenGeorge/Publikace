import { authorizedFetch } from './authorizedFetch';

//Mutace pro změnu informací o publikaci
const PublicationUpdateMutationJSON = (pubId, pubName, pubLastChange, pubTypeId, pubReference, pubPlace) => ({
  /**
   * Funkce pro vytvoření JSON objektu pro mutaci pro změnu informací o publikaci.
   *
   * Parametry:
   * - pubId (str): ID publikace.
   * - pubName (str): Název publikace.
   * - pubLastChange (str): Poslední změna publikace.
   * - pubTypeId (str): ID typu publikace.
   * - pubReference (str): Reference publikace.
   * - pubPlace (str): Umístění publikace.
   *
   * Vrací:
   * - objekt: JSON objekt pro mutaci pro změnu informací o publikaci.
   */
    query: `
    mutation {
        publicationUpdate(publication: {
        id: "${pubId}",
        name: "${pubName}",
        lastchange: "${pubLastChange}",
        publicationTypeId: "${pubTypeId}",
        reference: "${pubReference}",
        place: "${pubPlace}"
         }){
            id
            msg
            publication {
                id
                lastchange
    }
  }
}
`
});

export const PublicationUpdateMutation = (props) => 
/**
   * Funkce pro provádění mutace pro změnu informací o publikaci.
   *
   * Parametry:
   * - props: Objekt obsahující parametry pro mutaci (pubId, pubName, pubLastChange, pubTypeId, pubReference, pubPlace).
   *
   * Vrací:
   * - Promise: Výsledek mutace pro změnu informací o publikaci.
   */
  authorizedFetch('/gql', {
    body: JSON.stringify(PublicationUpdateMutationJSON(props.pubId, props.pubName, props.pubLastChange, props.pubTypeId, props.pubReference, props.pubPlace))
  })