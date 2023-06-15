import { authorizedFetch } from './authorizedFetch';

//Mutace pro uložení změny podílu na publikaci pro všechny autory
const ChangeAuthorOrderMutationJSON = (userId, userShare, order, lastchange) => ({
  query: `
  mutation {
    authorUpdate(author:{
      id: "${userId}",
      lastchange: "${lastchange}",
      share: ${parseFloat(userShare)},
      order: ${order},
    }
    ),{
      msg
      id
    }
  }
  `
});

export const ChangeAuthorOrderMutation = (props) => {
  authorizedFetch('/gql', {
    body: JSON.stringify(ChangeAuthorOrderMutationJSON(props.userId, props.userShare, props.order, props.lastchange))
  })}