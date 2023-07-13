import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadData } from 'features/PublicationTypeSlice';
import { PublicationTypeQuery } from 'querries/PublicationTypeQuery';
import AddPublication from 'actions/AddPublicationButton';

//Funkce pro fetchování druhů publikací
const PublicationTypeLoad = () => {
  /**
 * Komponenta pro načítání druhů publikací.
 * 
 */
  const dispatch = useDispatch();
  const publicationTypes = useSelector((state) => state.publicationType);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PublicationTypeQuery();
        const data = await response.json();
        dispatch(loadData(data.data.publicationTypePage));
        console.log("Publication types fetched"); 
      } catch (error) {
        console.error('Error fetching publication types:', error);
      }
    };

    fetchData();
    
  },[dispatch, publicationTypes]);

  return (<AddPublication/>)
};

export default PublicationTypeLoad;