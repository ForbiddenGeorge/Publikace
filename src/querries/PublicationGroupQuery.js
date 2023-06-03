import { authorizedFetch } from '../querries/authorizedFetch'


export const GroupsSelectQueryJSON = () => ({
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


export const GroupsSelectQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(GroupsSelectQueryJSON()),
    })