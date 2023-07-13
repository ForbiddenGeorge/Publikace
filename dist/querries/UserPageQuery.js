import { authorizedFetch } from '../querries/authorizedFetch';

//Query pro seznam uživatelů
export const UserpageQueryJSON = () => ({
  "query": `{
            userPage{
                id
                name
                surname
                email
                authorPublications {
                  id
                }
              }
        }`
});
export const UserPageQuery = () => authorizedFetch('/gql', {
  body: JSON.stringify(UserpageQueryJSON())
});