import { authorizedFetch } from './authorizedFetch';

const PublicationUpdateMutationJSON = () => ({
    query: `
    mutation {
        publicationUpdate(publication: {
        id: "cb3c3978-e716-46ac-9a3b-bb8f9d806a46",
        name: "IT Technologie 2",
        lastchange: "2023-05-03T19:23:42.703096",
        publishedDate: "2022-04-24",
         }){
            id
            msg
            publication {
                id
                lastchange
    }
  }
}
  `
});

export const PublicationUpdateMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(PublicationUpdateMutationJSON())
  })