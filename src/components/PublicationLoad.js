import { GroupsSelectQuery } from '../querries/PublicationGroupQuery';
import { useDispatch, useSelector } from 'react-redux';
import { loadData } from 'features/PublicationSlice';
import { useEffect/*, useState*/ } from 'react';
import PublicationCard from './PublicationCard';
import { loadUsersData } from 'features/UserPageSlice';
import { UserPageQuery } from 'querries/UserPageQuery';

//Tady dělám fetch publikací a userů z databáze a pro každou publikaci volám komponentu PublicationCard
 const PublicationLoad = () => {
  const publications = useSelector((state) => state.publications);
  const dispatch = useDispatch();

  useEffect(() => {
    //fetch pro publikace
    const fetchData = async () => {
      try {
        const response = await GroupsSelectQuery();
        const data = await response.json();
        console.log('Response:', data);
        //Ty data jsou prázdná, warum??
        if(data && data.data ){
          dispatch(loadData(data.data.publicationPage));
          console.log('Data fetched');
        }else{
          console.log('Error fetching something');
        };
      } catch (error) {
        console.error('Error fetching group names:', error);
      }
    };
    //fetch pro usery
    const fetchUsersData = async () => {
      try {
        const response = await UserPageQuery();
        const data = await response.json();
       // const fetchedUsers = data.data.userPage;
        dispatch(loadUsersData(data.data.userPage));
        console.log('Users fetched');
        console.log(data.data.userPage);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsersData();
    fetchData();
  }, [dispatch])
  ;
  //Pro každou z publikací udělám novou kartu
  return (
    publications.map((pub) => (
      <PublicationCard key={pub.id} publication={pub}/>
  )))
}

export default PublicationLoad;