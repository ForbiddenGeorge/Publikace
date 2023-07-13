import { authorizedFetch } from './authorizedFetch';

//Mutace pro uložení změny podílu na publikaci pro všechny autory
const ChangeAuthorOrderMutationJSON = (userId, userShare, userOrder, lastchange) => ({
  query: `
  mutation {
    authorUpdate(author:{
      id: "${userId}",
      lastchange: "${lastchange}",
      share: ${parseFloat(userShare)},
      order: ${parseInt(userOrder)},
    }
    ),{
      msg
      id
    }
  }
  `
});
export const ChangeAuthorOrderMutation = props => {
  authorizedFetch('/gql', {
    body: JSON.stringify(ChangeAuthorOrderMutationJSON(props.userId, props.userShare, props.userOrder, props.lastchange))
  });
};