import { authorizedFetch } from './authorizedFetch';

const PublicationAddAuthorMutationJSON = (userId, publicationId) => ({
    query: `
    mutation {
      authorInsert(author:{
        userId: "${userId}",
        publicationId: "${publicationId}",
      }
      ),{
        msg
        id
      }
    }
  `
});

export const PublicationAddAuthorMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(PublicationAddAuthorMutationJSON(props.userId, props.publicationId))
  })