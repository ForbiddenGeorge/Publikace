import { authorizedFetch } from './authorizedFetch';

//Mutace pro uložení změny podílu na publikaci pro všechny autory
const ChangeAuthorOrderMutationJSON = (userId, userShare, userOrder, lastchange) => ({
   /**
   * Funkce pro vytvoření JSON objektu pro mutaci pro změnu pořadí autora v publikaci.
   *
   * Parametry:
   * - userId (str): ID autora.
   * - userShare (float): Podíl autora na publikaci.
   * - userOrder (int): Pořadí autora v publikaci.
   * - lastchange (str): Poslední změna autora.
   *
   * Vrací:
   * - objekt: JSON objekt pro mutaci pro změnu pořadí autora v publikaci.
   */
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

export const ChangeAuthorOrderMutation = (props) => {
   /**
   * Funkce pro provádění mutace pro změnu pořadí autora v publikaci.
   *
   * Parametry:
   * - props: Objekt obsahující parametry pro mutaci (userId, userShare, userOrder, lastchange).
   */
  authorizedFetch('/gql', {
    body: JSON.stringify(ChangeAuthorOrderMutationJSON(props.userId, props.userShare, props.userOrder, props.lastchange))
  })}