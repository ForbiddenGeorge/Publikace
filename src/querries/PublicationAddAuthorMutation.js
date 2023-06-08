import { authorizedFetch } from './authorizedFetch';

const PublicationAddAuthorMutationJSON = (userId, publicationId, AuthorNumber) => ({
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
      }
    }
  `
});

export const PublicationAddAuthorMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(PublicationAddAuthorMutationJSON(props.userId, props.publicationId, props.AuthorNumber))
  })