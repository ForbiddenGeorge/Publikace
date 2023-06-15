// import { authorizedFetch } from './authorizedFetch';

// //Mutace pro změnu informací o publikaci
// const PublicationUpdateMutationJSON = (publicationId, publicationName) => ({
//   query: `
//     mutation {
//       publicationUpdate(publication: {
//         id: "${publicationId}",
//         name: "${publicationName}",
//       }){ 
//         id
//         msg
//         publication {
//           id
//           name
//         }
//       }
// }
//   `
// });

// export const PublicationUpdateMutation = (props) => authorizedFetch('/gql', {body: JSON.stringify(PublicationUpdateMutationJSON(props.publicationId, props.publicationName))})

import { authorizedFetch } from './authorizedFetch';

const PublicationUpdateMutationJSON = (publicationId, publicationName) => ({
  query: `
    mutation {
      publicationUpdate(publication: {
        id: "${publicationId}",
        lastchange: "2023-05-03T19:23:42.703096"
        name: "${publicationName}"
      }){ 
        id
        msg
        publication {
          id
          name
          lastchange
        }
      }
    }
  `
});

export const PublicationUpdateMutation = ({ publicationId, publicationName }) => authorizedFetch('/gql', {body: JSON.stringify(PublicationUpdateMutationJSON(publicationId, publicationName))});
