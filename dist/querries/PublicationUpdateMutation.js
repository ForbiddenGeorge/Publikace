import { authorizedFetch } from './authorizedFetch';

//Mutace pro změnu informací o publikaci
const PublicationUpdateMutationJSON = (pubId, pubName, pubLastChange, pubTypeId, pubReference, pubPlace) => ({
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
export const PublicationUpdateMutation = props => authorizedFetch('/gql', {
  body: JSON.stringify(PublicationUpdateMutationJSON(props.pubId, props.pubName, props.pubLastChange, props.pubTypeId, props.pubReference, props.pubPlace))
});