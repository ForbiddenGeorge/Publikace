import { authorizedFetch } from './authorizedFetch';

//Mutace pro uložení změny podílu na publikaci pro všechny autory
const EditCardNavBarChangeContributionMutationJSON = (userId, userShare, lastchange, order) => ({
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

export const EditCardNavBarChangeContributionMutation = (props) => {
  authorizedFetch('/gql', {
    body: JSON.stringify(EditCardNavBarChangeContributionMutationJSON(props.userId, props.userShare, props.lastchange, props.order))
  })}