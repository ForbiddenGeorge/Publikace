import { authorizedFetch } from './authorizedFetch';

const AddPublicationMutationJSON = (title, publicationType, location, reference) => ({
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
      publication{id}}
    }
  `
});

export const AddPublicationMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(AddPublicationMutationJSON(props.title, props.publicationType, props.location, props.reference))
  })