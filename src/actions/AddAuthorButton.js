//import { UserPageQuery } from 'querries/UserPageQuery';
//import { loadData } from 'features/UserPageSlice';
//špatně, tady má být mutation, ne query

//id uživatel mám, teď ještě potřebuji získat id publikace, a následně budu moci provést mutaci
import { useDispatch } from 'react-redux';
import { useState } from 'react';


import { PublicationAddAuthorMutation } from 'querries/PublicationAddAuthorMutation';

export const AddAuthorButton= ({selectedUserId}) => {

  /*const dispatch = useDispatch()  
  const [dataLoaded, setDataLoaded] = useState(false)
  const [users, setUsers] = useState([]);*/
 
 const Logging = () => {
    console.log('Selected User ID: ', selectedUserId);
   // console.log('Id of the publication: ', publicationId);
 }
  
  return (
   
   <button className="btn bg-success text-white mt-4 align-left" onClick={Logging}>Přidat</button>
  
  )
}