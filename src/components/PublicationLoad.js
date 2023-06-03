import  {GroupsSelectQuery}  from '../querries/PublicationGroupQuery'; 
import { useDispatch } from 'react-redux';
import { loadData } from 'features/PublicationSlice';
import { useEffect, useState } from 'react';
import PublicationCard from './PublicationCard';


export const PublicationLoad= () => {
  const dispatch = useDispatch()  
  const [dataLoaded, setDataLoaded] = useState(false)
  const [publications, setPublications] = useState([]);
  
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await GroupsSelectQuery();
        const data = await response.json();
        dispatch(loadData(data.data.publicationPage));
        console.log(data.data.publicationPage)
        setDataLoaded(true);
        setPublications(data.data.publicationPage);
      } catch (error) {
        console.error('Error fetching group names:', error);
      }
    };
 
    fetchData();

  },[dispatch]);

  return (
    <PublicationCard publications={publications} />
  )

}
