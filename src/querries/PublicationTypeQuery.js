import { authorizedFetch } from '../querries/authorizedFetch'

export const PublicationTypeQueryJSON = () => ({
    "query":
        `{
          publicationPage {
            id
            name
            lastchange
            publishedDate
            publicationtype {
              id
              name
            }
            authors {
              id
              order
              lastchange
              share
              user {
                id
                name
                surname
                email
              }
            }
          }
        }`
})


export const PublicationTypeQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(PublicationTypeQueryJSON()),
    })