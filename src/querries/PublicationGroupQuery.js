import { authorizedFetch } from '../querries/authorizedFetch'

//Query pro publikace
export const GroupsSelectQueryJSON = () => ({
    "query":
        `{
          publicationPage {
            id
            name
            lastchange
            publishedDate
            place
            reference
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