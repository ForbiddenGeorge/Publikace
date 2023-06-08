import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadData } from 'features/PublicationTypeSlice';
import { PublicationTypeQuery } from 'querries/PublicationTypeQuery';
import AddPublication from 'actions/AddPublicationButton';
const PublicationTypeLoad = () => {
  const dispatch = useDispatch();
  // do publicationTypes nejdou žádná data
  const publicationTypes = useSelector((state) => state.publicationType);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PublicationTypeQuery();
        const data = await response.json();
        //console.log("všechna data: ", data);
        dispatch(loadData(data.data.publicationTypePage));
        //console.log('Data fetched for PublicationType');
        //console.log(data.data.publicationTypePage);
      } catch (error) {
        console.error('Error fetching publication types:', error);
      }
    };

    fetchData();
    
  },[dispatch, publicationTypes]);

  return (<AddPublication/>)
};

export default PublicationTypeLoad;