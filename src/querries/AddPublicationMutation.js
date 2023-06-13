import { authorizedFetch } from './authorizedFetch';

//Query pro přidání nové publikace
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
  authorizedFetch('/gql', {
    body: JSON.stringify(AddPublicationMutationJSON(props.title, props.publicationType, props.location, props.reference))
  })