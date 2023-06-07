import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadData } from 'features/PublicationTypeSlice';
import { PublicationTypeQuery } from 'querries/PublicationTypeQuery';

const PublicationTypeLoad = () => {
  const dispatch = useDispatch();
  const publicationTypes = useSelector((state) => state.publicationType);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PublicationTypeQuery();
        const data = await response.json();
        dispatch(loadData(data.data.publicationTypePage));
        console.log('Data fetched for PublicationType');
        console.log(data.data.publicationTypePage);
      } catch (error) {
        console.error('Error fetching publication types:', error);
      }
    };

    fetchData();
  }, [dispatch]);


  return null;
};

export default PublicationTypeLoad;