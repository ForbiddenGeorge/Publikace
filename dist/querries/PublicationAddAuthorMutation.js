import { authorizedFetch } from './authorizedFetch';

//Mutace pro přidání nového autora k publikaci
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
export const PublicationAddAuthorMutation = props => authorizedFetch('/gql', {
  body: JSON.stringify(PublicationAddAuthorMutationJSON(props.userId, props.publicationId, props.AuthorNumber))
});