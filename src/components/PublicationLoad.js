import { GroupsSelectQuery } from '../querries/PublicationGroupQuery';
import { useDispatch, useSelector } from 'react-redux';
import { loadData } from 'features/PublicationSlice';
import { useEffect/*, useState*/ } from 'react';
import PublicationCard from './PublicationCard';

//Tady dělám fetch publikací z databáze a pro každou publikaci volám komponentu PublicationCard
 const PublicationLoad = () => {
  const publications = useSelector((state) => state.publications);
  const dispatch = useDispatch();

  useEffect(() => {
    //samotné fetchování dat
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
        //console.log(data.data.publicationPage);
       // setDataLoaded(true);
      } catch (error) {
        console.error('Error fetching group names:', error);
      }
    };

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