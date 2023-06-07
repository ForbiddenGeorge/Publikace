import { authorizedFetch } from './authorizedFetch';

const AddPublicationMutationJSON = (title, publicationType, location, reference) => ({
    query: `
    mutation{
        publicationInsert{
          publication{
            name: "${title}",
            id ,
            publicationtype: "${publicationType}",
            place: "${location}",
            publishedDate ,
            reference: "${reference}",
            valid ,
            
          }{
          msg
          id
            }  
        }
      }
  `
});

export const AddPublicationMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(AddPublicationMutationJSON(props.title, props.publicationType, props.location, props.reference))
  })