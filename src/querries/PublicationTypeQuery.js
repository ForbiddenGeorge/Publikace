import { authorizedFetch } from '../querries/authorizedFetch'

export const PublicationTypeQueryJSON = () => ({
    "query":
        `{
                publicationTypePage{
                  id,
                  name,
                }
        }`
})


export const PublicationTypeQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(PublicationTypeQueryJSON()),
    })