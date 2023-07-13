import { authorizedFetch } from './authorizedFetch';

//Mutace pro uložení změny podílu na publikaci pro všechny autory
const EditCardNavBarChangeContributionMutationJSON = (userId, userShare, lastchange, order) => ({
    /**
   * Funkce pro vytvoření JSON objektu pro mutaci pro změnu podílu autora na publikaci.
   *
   * Parametry:
   * - userId (str): ID autora.
   * - userShare (float): Podíl autora na publikaci.
   * - lastchange (str): Poslední změna autora.
   * - order (int): Pořadí autora v publikaci.
   *
   * Vrací:
   * - objekt: JSON objekt pro mutaci pro změnu podílu autora na publikaci.
   */
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
    /**
   * Funkce pro provádění mutace pro změnu podílu autora na publikaci.
   *
   * Parametry:
   * - props: Objekt obsahující parametry pro mutaci (userId, userShare, lastchange, order).
   */
  authorizedFetch('/gql', {
    body: JSON.stringify(EditCardNavBarChangeContributionMutationJSON(props.userId, props.userShare, props.lastchange, props.order))
  })}